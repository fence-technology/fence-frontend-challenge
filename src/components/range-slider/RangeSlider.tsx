import React, { useEffect, useRef, useState } from 'react'
import styles from './range-slider.module.scss'

interface RangeSliderProps {
  min: number
  max: number
  step?: number
  initialValue?: [number, number]
  onChange: (value: [number, number]) => void
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  initialValue,
  onChange
}) => {
  const [value, setValue] = useState<[number, number]>(
    initialValue || [min, max]
  )
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setValue([min, max])
  }, [min, max])

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue)
    }
  }, [initialValue])

  const handleChange = (index: number, newValue: number) => {
    const newValues = [...value] as [number, number]
    newValues[index] = newValue
    setValue(newValues)

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      onChange(newValues)
    }, 300) // Adjust the debounce delay as needed
  }

  const formatValue = (val: number) => {
    return val.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  return (
    <div className={styles.rangeSliderContainer}>
      <div className={styles.rangeSlider}>
        <span className={styles.rangeSlider__minValue}>
          {formatValue(value[0])}
        </span>
        <div className={styles.rangeSlider__sliderContainer}>
          <input
            type="range"
            min={0}
            max={max}
            step={step}
            value={value[0]}
            onChange={(e) => handleChange(0, Number(e.target.value))}
            className={styles.rangeSlider__thumb}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[1]}
            onChange={(e) => handleChange(1, Number(e.target.value))}
            className={styles.rangeSlider__thumb}
          />
          <div className={styles.rangeSlider__track}></div>
        </div>
        <span className={styles.rangeSlider__maxValue}>
          {formatValue(value[1])}
        </span>
      </div>
    </div>
  )
}

export default RangeSlider
