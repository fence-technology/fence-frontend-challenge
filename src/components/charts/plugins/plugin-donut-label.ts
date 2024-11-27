import { Chart as ChartJS, ChartType, Plugin } from 'chart.js/auto'

type DonutChartPluginOptions = {
  showValues?: boolean
  strokeWidth?: number
  strokeColor?: string
  valueFormatter?: (value: number) => string
}

type DonutChartFormatterCallback = (chart: ChartJS) => DonutChartPluginOptions

declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    donutChartPlugin?: DonutChartPluginOptions | DonutChartFormatterCallback
  }
}

const donutChartPlugin: Plugin<'doughnut'> = {
  id: 'donutChartPlugin',

  beforeInit(chart) {
    const chartType = (chart.config as any).type as string
    if (chartType !== 'doughnut') {
      return
    }
  },

  afterDraw(chart, args, pluginOptions) {
    if (!pluginOptions || !pluginOptions.showValues) return

    const ctx = chart.ctx
    const dataset = chart.data.datasets[0]
    const meta = chart.getDatasetMeta(0)

    ctx.save()
    ctx.font = '14px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const strokeWidth = pluginOptions.strokeWidth || 0
    const strokeColor = pluginOptions.strokeColor || '#fff'
    const valueFormatter =
      typeof pluginOptions.valueFormatter === 'function'
        ? pluginOptions.valueFormatter
        : (value: number) => `${value}`

    meta.data.forEach((element: any, index: number) => {
      const startAngle = element?.startAngle ?? 0
      const endAngle = element?.endAngle ?? 0

      const dataItem = element as {
        outerRadius: number
        innerRadius: number
        x: number
        y: number
      }

      const value = dataset.data[index] as number
      const formattedValue = valueFormatter(value)

      const angle = (startAngle + endAngle) / 2

      const uniformDistance = 18

      const x =
        dataItem.x + (dataItem.outerRadius + uniformDistance) * Math.cos(angle)
      const y =
        dataItem.y + (dataItem.outerRadius + uniformDistance) * Math.sin(angle)

      if (strokeWidth > 0) {
        ctx.lineWidth = strokeWidth
        ctx.strokeStyle = strokeColor
        ctx.strokeText(formattedValue, x, y)
      }

      ctx.fillStyle = '#161A41C7'
      ctx.fillText(formattedValue, x, y)
    })

    ctx.restore()
  }
}

ChartJS.register(donutChartPlugin)

export default donutChartPlugin
