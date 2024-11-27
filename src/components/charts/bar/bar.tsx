'use client'
import CustomChart from '@/components/charts/chart'
import { formatDate } from '@/utils/format-date'
import { formatEuroWithSuffix } from '@/utils/format-euro-with-suffix'
import { getRandomColor } from '@/utils/get-color'
import getValueByType, { EnumValueByType } from '@/utils/get-value.by-type'
import {
  CartesianScaleTypeRegistry,
  ChartData,
  ChartOptions,
  InteractionMode,
  LegendItem,
  LegendOptions,
  PointStyle,
  ScaleOptionsByType,
  TooltipOptions
} from 'chart.js'
import React, { CSSProperties } from 'react'

type DateFormatOption =
  | 'default'
  | 'year-month-day'
  | 'year-month'
  | 'year'
  | 'short'

interface Props {
  data?: unknown[]
  xAxisKey?: string
  xAxisTitle?: string
  yAxisTitle?: string
  barThickness?: number
  title?: string
  className?: string
  style?: CSSProperties
  formattedDate?: DateFormatOption
  interactionMode?: InteractionMode
  stacked?: boolean
  dataSetsColor?: string[]
  dataSet?: ChartData
  chartOptions?: ChartOptions
  optionPlugins?: ChartOptions<'bar'>['plugins']
  xAxisTicks?: Partial<
    ScaleOptionsByType<keyof CartesianScaleTypeRegistry>['ticks']
  >
  yAxisTicks?: Partial<
    ScaleOptionsByType<keyof CartesianScaleTypeRegistry>['ticks']
  >
  legend?: LegendOptions<'bar'>
  tooltip?: Partial<TooltipOptions<'bar'>>
  maxTicksLimit?: number | undefined
}

const BarChart: React.FC<Props> = ({
  data,
  xAxisKey = 'date',
  xAxisTitle = 'Date',
  yAxisTitle = 'Amount (EUR)',
  title = '',
  className,
  style,
  barThickness = 50,
  formattedDate = 'default',
  interactionMode = 'point',
  stacked = true,
  dataSetsColor = [],
  chartOptions,
  dataSet,
  optionPlugins,
  legend = {
    position: 'bottom',
    display: true,
    labels: {
      font: {
        size: 12
      },
      boxWidth: 10,
      boxHeight: 10,
      generateLabels: (chart): LegendItem[] => {
        const datasets = chart.data.datasets
        return datasets.map((dataset, i) => ({
          text: dataset.label || '',
          fillStyle: dataset.backgroundColor as string,
          strokeStyle: dataset.backgroundColor as string,
          hidden: !chart.isDatasetVisible(i),
          pointStyle: 'rect' as PointStyle,
          datasetIndex: i
        }))
      }
    }
  },
  xAxisTicks = {},
  yAxisTicks = {},
  tooltip = {
    callbacks: {
      label: function (context) {
        let label = context.dataset.label || ''
        const indexAxis =
          context.chart.config?.options?.indexAxis === 'y' ? 'x' : 'y'
        if (label) {
          label += ': '
        }
        if (context.parsed[indexAxis] !== null) {
          label += new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 2
          }).format(context.parsed[indexAxis])
        }
        return label
      },
      labelColor: function (context) {
        return {
          borderColor: `${dataSetsColor[context.datasetIndex]}`,
          backgroundColor: `${dataSetsColor[context.datasetIndex]}`
        }
      }
    }
  },
  maxTicksLimit
}) => {
  if (!data && !dataSet) return

  const formatedData = (values: any[]) => {
    let chartData: ChartData
    if (data?.length === 0) {
      chartData = {
        labels: [],
        datasets: []
      }
    } else {
      const labelKeys = Object.keys(values[0]).filter(
        (item) => item !== xAxisKey
      )
      chartData = {
        labels: values.map((item) => item[xAxisKey] as string),
        datasets: labelKeys.map((key, i) => {
          const newColor = dataSetsColor[i]
            ? dataSetsColor[i]
            : getRandomColor(i)
          return {
            label: getValueByType(key, EnumValueByType.UPPERCASE),
            data: values.map((item) => item[key]),
            backgroundColor: newColor,
            barThickness
          }
        })
      }
    }
    return chartData
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: chartOptions?.indexAxis ?? 'x',
    interaction: {
      mode: interactionMode,
      intersect: false
    },
    plugins: {
      title: {
        display: true,
        text: title
      },
      legend,
      tooltip,
      ...optionPlugins
    },
    ...optionPlugins,
    scales: {
      x: {
        beginAtZero: false,
        title: {
          display: true,
          text: xAxisTitle
        },
        stacked: stacked,
        ticks: {
          callback(tickValue) {
            const actualLabel = this.getLabelForValue(tickValue as number)
            return formatDate({ date: actualLabel, format: formattedDate })
          },
          maxTicksLimit,
          ...xAxisTicks
        }
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: yAxisTitle
        },
        stacked: stacked,
        ticks: {
          callback: function (value) {
            return formatEuroWithSuffix(value as number)
          },
          ...yAxisTicks
        },
        min: undefined,
        max: maxTicksLimit ?? undefined
      }
    }
  }

  return (
    <div
      style={{ width: '100%', height: '100%', margin: 'auto', ...style }}
      className={className || ''}>
      <CustomChart
        type="bar"
        data={!data ? dataSet : formatedData(data)}
        options={options}
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default BarChart
