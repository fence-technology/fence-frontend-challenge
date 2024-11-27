import { Chart as ChartJS, ChartType, Plugin } from 'chart.js/auto'

type DonutChartPluginOptions = {
  centerText?: string | string[]
  centerTextFont?: string
  centerTextColor?: string
  centerTextWeight?: string | number
  lineHeight?: number
  fontFamily?: string
}

type DonutChartFormatterCallback = (chart: ChartJS) => DonutChartPluginOptions

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    donutCenterTextPlugin?:
      | DonutChartPluginOptions
      | DonutChartFormatterCallback
  }
}

const donutCenterTextPlugin: Plugin<'doughnut'> = {
  id: 'donutCenterTextPlugin',
  afterDraw(chart, args, pluginOptions) {
    if (!pluginOptions || !pluginOptions.centerText) return

    const ctx = chart.ctx
    const centerX = chart.chartArea.left + chart.chartArea.width / 2
    const centerY = chart.chartArea.top + chart.chartArea.height / 2

    ctx.save()

    let fontFamily = 'inherit'
    if (pluginOptions.fontFamily) {
      if (pluginOptions.fontFamily.startsWith('var(')) {
        const tempDiv = document.createElement('div')
        tempDiv.style.fontFamily = pluginOptions.fontFamily
        document.body.appendChild(tempDiv)
        fontFamily = getComputedStyle(tempDiv).fontFamily
        document.body.removeChild(tempDiv)
      } else {
        fontFamily = pluginOptions.fontFamily
      }
    }

    const fontParts = (pluginOptions.centerTextFont || '16px').split(' ')
    const fontSize =
      fontParts.find((part: any) => part.includes('px')) || '16px'
    const fontWeight = pluginOptions.centerTextWeight || 'normal'

    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`

    ctx.fillStyle = pluginOptions.centerTextColor || '#000'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const lineHeight = pluginOptions.lineHeight || 1.2
    const lines = Array.isArray(pluginOptions.centerText)
      ? pluginOptions.centerText
      : [pluginOptions.centerText]

    const fontSizeNumber = parseInt(fontSize)
    const totalHeight = (lines.length - 1) * lineHeight * fontSizeNumber
    let y = centerY - totalHeight / 2

    lines.forEach((line) => {
      ctx.fillText(line, centerX, y)
      y += lineHeight * fontSizeNumber
    })

    ctx.restore()
  }
}

ChartJS.register(donutCenterTextPlugin)

export default donutCenterTextPlugin
