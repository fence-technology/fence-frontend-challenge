import { Chart as ChartJS, ChartType, Plugin } from 'chart.js/auto'

type BackgroundOptions = {
  leftColor: string
  rightColor: string
  dividePoint: number | string
  drawDashedLine?: boolean
  extraSpace?: number
  texts?: {
    left?: string
    right?: string
    options?: {
      font?: string
      color?: string
      height?: number
    }
  }
  horizontalLine?: {
    color?: string
    width?: number
  }
}

type BackgroundCallback = (chart: ChartJS) => BackgroundOptions

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    customBackgroundColor?: {
      display?: boolean
      options?: BackgroundOptions | BackgroundCallback
    }
  }
}

const customBackgroundColor: Plugin<ChartType> = {
  id: 'customBackgroundColor',
  beforeDraw: (chart, args, pluginOptions) => {
    const customOptions = pluginOptions
    if (!customOptions || !customOptions.display) return

    const {
      ctx,
      chartArea: { left, top, right, bottom },
      scales: { x }
    } = chart

    let options: BackgroundOptions
    if (typeof customOptions.options === 'function') {
      options = customOptions.options(chart)
    } else {
      options = customOptions.options as BackgroundOptions
    }
    if (!options) return

    let dividePixel
    if (typeof options.dividePoint === 'number') {
      const dataPoints = x.ticks.length
      const barWidth = (right - left) / dataPoints
      dividePixel = left + (options.dividePoint + 0.5) * barWidth
    } else if (typeof options.dividePoint === 'string') {
      const percentage = parseFloat(options.dividePoint) / 100
      dividePixel = left + (right - left) * percentage
    } else {
      dividePixel = left + (right - left) / 2
    }

    ctx.save()

    ctx.fillStyle = options.leftColor ?? 'rgba(0,0,0,0.1)'
    ctx.fillRect(left, top, dividePixel - left, bottom - top)
    ctx.fillStyle = options.rightColor ?? 'rgba(0,0,0,0.05)'
    ctx.fillRect(dividePixel, top, right - dividePixel, bottom - top)

    const extraSpace = options.extraSpace || 0
    const extendedBottom = bottom

    if (options.drawDashedLine) {
      ctx.strokeStyle = '#D0D0D0'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.moveTo(dividePixel, top)
      ctx.lineTo(dividePixel, extendedBottom + extraSpace)
      ctx.stroke()
    }

    if (options.texts) {
      const textOptions = options.texts.options || {}
      ctx.font = textOptions.font || '14px Arial'
      ctx.fillStyle = textOptions.color || 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      const textY =
        textOptions.height !== undefined
          ? extendedBottom + textOptions.height
          : extendedBottom + 10

      if (options.horizontalLine) {
        ctx.beginPath()
        ctx.moveTo(left, textY)
        ctx.lineTo(right, textY)
        ctx.strokeStyle = options.horizontalLine.color || 'black'
        ctx.lineWidth = options.horizontalLine.width || 1
        ctx.setLineDash([])
        ctx.stroke()

        // draw division center line
        ctx.beginPath()
        ctx.moveTo(dividePixel, textY + 10)
        ctx.lineTo(dividePixel, textY - 10)
        ctx.strokeStyle = options.horizontalLine?.color || 'black'
        ctx.lineWidth = options.horizontalLine?.width || 1
        ctx.setLineDash([])
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(left, textY + 10)
        ctx.lineTo(left, textY - 10)
        ctx.strokeStyle = options.horizontalLine?.color || 'black'
        ctx.lineWidth = options.horizontalLine?.width || 1
        ctx.setLineDash([])
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(right, textY + 10)
        ctx.lineTo(right, textY - 10)
        ctx.strokeStyle = options.horizontalLine?.color || 'black'
        ctx.lineWidth = options.horizontalLine?.width || 1
        ctx.setLineDash([])
        ctx.stroke()
      }

      if (options.texts.left) {
        const leftTextX = left + (dividePixel - left) / 2
        ctx.fillText(options.texts.left, leftTextX, textY + 5)
      }
      if (options.texts.right) {
        const rightTextX = dividePixel + (right - dividePixel) / 2
        ctx.fillText(options.texts.right, rightTextX, textY + 5)
      }
    }

    ctx.restore()
  }
}

ChartJS.register(customBackgroundColor)
export default customBackgroundColor
