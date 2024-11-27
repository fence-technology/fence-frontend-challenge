import CustomChart from '@/components/charts/chart'
import { DateFormatOption, formatDate } from '@/utils/format-date'
import { formatEuroWithSuffix } from '@/utils/format-euro-with-suffix'
import { getRandomColor, hexToRgba } from '@/utils/get-color'
import getValueByType, { EnumValueByType } from '@/utils/get-value.by-type'
import {
  CartesianScaleTypeRegistry,
  Chart,
  ChartData,
  ChartOptions,
  InteractionMode,
  LegendItem,
  LegendOptions,
  PointStyle,
  ScaleOptionsByType
} from 'chart.js'
import React, { CSSProperties, useRef } from 'react'

interface Props {
  data?: unknown[]
  xAxisKey?: string
  xAxisGrid?: boolean
  xAxisTitle?: string
  xAxisTicks?: Partial<
    ScaleOptionsByType<keyof CartesianScaleTypeRegistry>['ticks']
  >
  yAxisTicks?: Partial<
    ScaleOptionsByType<keyof CartesianScaleTypeRegistry>['ticks']
  >
  yAxisTitle?: string
  yAxisGrid?: boolean
  title?: string
  className?: string
  style?: CSSProperties
  isFilled?: boolean
  opacity?: number
  interactionMode?: InteractionMode
  formattedDate?: DateFormatOption
  dataSetsColor?: string[]
  pointRadius?: number
  legend?: LegendOptions<'line'>
  YLabelFormat?: string
  yType?: 'currency' | 'percentage' | 'number'
  isStacked?: boolean
  maxTicksLimit?: number
  minRotation?: number
  maxRotation?: number
  dataSet?: ChartData
}

const LinearChart: React.FC<Props> = ({
  data,
  xAxisKey = 'date',
  title = '',
  className,
  style,
  isFilled = false,
  opacity = 0.5,
  formattedDate = 'default',
  interactionMode = 'point',
  pointRadius = 0,
  isStacked = false,
  dataSetsColor = [],
  xAxisGrid = false,
  yAxisGrid = false,
  xAxisTitle = 'Date',
  yAxisTitle = 'Amount (EUR)',
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
          fillStyle: dataset.borderColor as string,
          strokeStyle: dataset.borderColor as string,
          hidden: !chart.isDatasetVisible(i),
          pointStyle: 'rect' as PointStyle,
          datasetIndex: i
        }))
      }
    }
  },
  yType = 'currency',
  xAxisTicks = {},
  yAxisTicks = {},
  maxTicksLimit = 15,
  dataSet,
  minRotation,
  maxRotation
}) => {
  const chartRef = useRef<Chart<'line'> | null>(null)

  const createGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: { top: number; bottom: number },
    color: string
  ) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    )
    const colorRGBA = hexToRgba(color, 0.1)
    gradient.addColorStop(0.2, colorRGBA)

    const transparentRGBA = hexToRgba(color, 0.1)
    gradient.addColorStop(1, transparentRGBA)
    return gradient
  }

  const formatedData = (values: any[]): ChartData<'line'> => {
    if (!data || data.length === 0) {
      return {
        labels: [],
        datasets: []
      }
    }

    const labelKeys = Object?.keys(values[0]).filter(
      (item) => item !== xAxisKey
    )

    const chartInstance = chartRef.current
    const ctx = chartInstance?.ctx as CanvasRenderingContext2D
    const chartArea = chartInstance?.chartArea

    return {
      labels: values.map((item) => item[xAxisKey] as string),
      datasets: labelKeys.map((key, i) => {
        const newColor = dataSetsColor[i] ? dataSetsColor[i] : getRandomColor(i)
        const backgroundColor =
          chartArea && ctx
            ? createGradient(ctx, chartArea, newColor)
            : hexToRgba(newColor, opacity)

        return {
          label: getValueByType(key, EnumValueByType.UPPERCASE),
          data: values.map((item) => item[key]),
          borderColor: newColor,
          backgroundColor: backgroundColor,
          fill: isFilled,
          pointRadius,
          tension: 0.3
        }
      })
    }
  }

  const formatNumberWithSuffix = (value: number): string => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M'
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K'
    } else {
      return value.toFixed(2)
    }
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: interactionMode,
      intersect: false
    },
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 16
        }
      },
      legend,
      tooltip: {
        displayColors: true,
        bodyColor: 'black',
        titleColor: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        bodyFont: {
          weight: 500
        },
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              if (yType === 'currency') {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 2
                }).format(context.parsed.y)
              } else if (yType === 'percentage') {
                label += (context.parsed.y * 100).toFixed(2) + '%'
              } else {
                label += formatNumberWithSuffix(context.parsed.y)
              }
            }
            return label
          },
          labelColor: function (context) {
            return {
              borderColor: `${dataSetsColor[context.datasetIndex]}`,
              backgroundColor: `${dataSetsColor[context.datasetIndex]}`,
              borderWidth: 3
            }
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
          font: { size: 12 }
        },
        ticks: {
          maxTicksLimit,
          callback(tickValue) {
            const actualLabel = this.getLabelForValue(tickValue as number)
            return formatDate({ date: actualLabel, format: formattedDate })
          },
          minRotation,
          maxRotation,
          ...xAxisTicks
        },
        grid: {
          display: xAxisGrid,
          color: '#e0e0e0'
        }
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        stacked: isStacked,
        title: {
          display: true,
          text: yAxisTitle,
          font: { size: 12 }
        },
        ticks: {
          callback: function (value) {
            if (yType === 'currency') {
              return formatEuroWithSuffix(value as number)
            } else if (yType === 'percentage') {
              return (Number(value) * 100).toFixed(2) + '%'
            } else {
              return formatNumberWithSuffix(Number(value))
            }
          },
          ...yAxisTicks
        },
        grid: {
          display: yAxisGrid,
          color: '#e0e0e0'
        }
      }
    }
  }

  return (
    <div
      style={{ width: '100%', height: '100%', margin: 'auto', ...style }}
      className={className || ''}>
      <CustomChart
        ref={chartRef}
        type="line"
        data={!data ? dataSet : formatedData(data)}
        options={options}
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default LinearChart
