'use client'

import CustomChart from '@/components/charts/chart'
import { getRandomColor } from '@/utils/get-color'
import { ChartData, ChartOptions, TitleOptions } from 'chart.js'
import React, { CSSProperties } from 'react'

type LegendOptions = {
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

const DoughnutChart: React.FC<{
  name: string
  data?: {
    labels: string[]
    values: {
      value: number
      type: string
    }[]
  }
  dataSet?: ChartData
  style?: CSSProperties
  dataSetsColor?: string[]
  cutout?: number
  titleCss?: CSSProperties
  optionPlugins?: ChartOptions<'doughnut'>['plugins']
  legend?: LegendOptions
  yType?: 'currency' | 'percentage' | 'number'
  layoutPadding?: {
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
  titleOptions?: Partial<TitleOptions>
}> = ({
  data,
  dataSet,
  name,
  cutout,
  titleCss,
  dataSetsColor = [],
  style,
  optionPlugins,
  legend = {
    position: 'top',
    display: true
  },
  yType = 'currency',
  layoutPadding,
  titleOptions
}) => {
  if (!data && !dataSet) return
  const backgroundColors = data?.labels.map((item, i) =>
    dataSetsColor[i] ? dataSetsColor[i] : getRandomColor(i)
  )
  const chartData = {
    labels: data?.labels ?? [],
    datasets: [
      {
        data:
          data?.values.map((item) => {
            return item.type === 'percentage' ? item.value * 100 : item.value
          }) ?? [],
        backgroundColor: backgroundColors,
        borderColor: backgroundColors?.map((color) => color),
        borderWidth: 1
      }
    ]
  }

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    layout: {
      padding: layoutPadding
    },
    cutout: `${cutout || 70}%`,
    plugins: {
      legend,
      title: {
        display: true,
        align: 'start',
        padding: {
          bottom: 25
        },
        position: 'top',
        text: name,
        color: 'rgba(22, 26, 65, 0.78)',
        ...titleOptions,
        font: {
          size: 16,
          ...titleCss
        }
      },
      tooltip: {
        bodyFont: {
          family: 'var(--font-montserrat)',
          weight: 600
        },
        titleAlign: 'center',
        displayColors: false,
        callbacks: {
          title: () => '',
          label: function (context) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed !== null) {
              if (yType === 'currency') {
                label += new Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: 'EUR',
                  maximumFractionDigits: 2
                }).format(context.parsed)
              } else if (yType === 'percentage') {
                label += context.parsed.toFixed(0) + '%'
              } else {
                label += context.parsed
              }
            }
            return label
          }
        }
      },
      ...optionPlugins
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', margin: 'auto', ...style }}>
      <CustomChart
        type="doughnut"
        data={dataSet ?? chartData}
        options={options as ChartOptions}
        width={'100%'}
        height={'100%'}
      />
    </div>
  )
}

export default DoughnutChart
