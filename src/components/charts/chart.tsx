import {
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
  Plugin
} from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { forwardRef } from 'react'
import { Chart } from 'react-chartjs-2'
import './plugins/plugin-divide-background'
import customBackgroundColor from './plugins/plugin-divide-background'
import donutPluginCenterText from './plugins/plugin-donut-center-text'
import donutChartPlugin from './plugins/plugin-donut-label'

ChartJS.defaults.locale = 'es'

ChartJS.register(
  ChartDataLabels,
  customBackgroundColor,
  donutChartPlugin,
  donutPluginCenterText
)

ChartJS.defaults.plugins.datalabels = { display: false }
ChartJS.register(
  ...Object.values(ChartJS).filter((chartClass) => chartClass.id)
)

export type LegendOptions = {
  display?: boolean
  position?: 'top' | 'left' | 'bottom' | 'right'
  align?: 'start' | 'center' | 'end'
  labels?: {
    usePointStyle?: boolean
    pointStyle?:
      | 'circle'
      | 'cross'
      | 'crossRot'
      | 'dash'
      | 'line'
      | 'rect'
      | 'rectRounded'
      | 'rectRot'
      | 'star'
      | 'triangle'
    boxHeight?: number
    boxWidth?: number
    padding?: number
  }
}

interface CustomChartProps {
  type: ChartType
  data: ChartData | undefined
  options?: ChartOptions
  width?: number | string
  height?: number | string
  plugins?: Plugin<keyof ChartTypeRegistry>[]
  stacked?: boolean
}

const CustomChart = forwardRef<ChartJS, CustomChartProps>(
  ({ type, data, options, width, height, plugins, stacked = false }, ref) => {
    const defaultOptions: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const
        },
        title: {
          display: true,
          text: 'Graph'
        }
      },
      scales: {
        x: {
          display: false,
          stacked
        },
        y: {
          display: false,
          stacked
        }
      }
    }

    const mergedOptions = { ...defaultOptions, ...options }
    const mergedPlugins = [...(plugins || [])]

    if (!data) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          No data available
        </div>
      )
    }

    return (
      <div style={{ width: width || '100%', height: height || '400px' }}>
        <Chart
          ref={ref as any}
          type={type}
          data={data}
          options={mergedOptions}
          plugins={mergedPlugins}
        />
      </div>
    )
  }
)

CustomChart.displayName = 'CustomChart'

export default CustomChart
