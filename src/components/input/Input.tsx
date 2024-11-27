import { TooltipInfo } from '@/components/modals/tooltip-info/tooltip-info'
import { useDebounce } from '@/hooks/use-debounce'
import React, { useEffect, useState } from 'react'
import styles from './input.module.scss'

type InputType = 'currency' | 'percentage' | 'basic'

interface InputProps {
  type: InputType
  title: string
  subtitle?: string
  tooltip?: string
  placeholder: string
  leftHelperText?: string
  rightHelperText?: string
  isDisabled?: boolean
  className?: string
  events?: {
    onBlur?: (event: any) => void
    onFocus?: (event: any) => void
    onChange?: (value: string | null) => void
  }
  debounceOnChange?: number
  errorText?: string
  max?: number | string
  initValue?: string
}

const Input: React.FC<InputProps> = ({
  type,
  title,
  tooltip,
  subtitle,
  placeholder,
  leftHelperText,
  rightHelperText,
  isDisabled = false,
  className = '',
  events,
  debounceOnChange = 0,
  errorText,
  max,
  initValue
}) => {
  const [isFilled, setIsFilled] = useState(false)
  const [value, setValue] = useState<string>(initValue ?? '')
  const debouncedValue = useDebounce({
    timer: debounceOnChange,
    value
  })
  let inputType: React.HTMLInputTypeAttribute = 'text'

  function formatNumber(value: string) {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function getFormatValue(input: HTMLInputElement): string[] {
    let inputValue = input.value
    let inputCleanValue = input.value

    if (type === 'currency' && inputValue) {
      const originalLength = input.value.length
      let caretPos = input.selectionStart ?? 0

      if (inputValue.includes('.')) {
        const [leftSide, rightSide] = inputValue.split('.')
        const formattedLeft = formatNumber(leftSide)
        const formattedRight = formatNumber(rightSide)
        inputValue = `${formattedLeft}.${formattedRight.substring(0, 2)}`
      } else {
        inputValue = `${formatNumber(inputValue)}`
      }

      const updatedLength = inputValue.length
      caretPos = updatedLength - originalLength + caretPos

      input.value = inputValue
      inputCleanValue = inputValue.replaceAll(',', '')
      input.setSelectionRange(caretPos, caretPos)
    }

    return [inputValue, inputCleanValue]
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()

    const [, cleanValue] = getFormatValue(event.target)
    const target = { ...event.target, value: cleanValue }
    const currentTarget = { ...event.currentTarget, value: cleanValue }
    events?.onFocus?.({ ...event, target, currentTarget })
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const [, cleanValue] = getFormatValue(event.target)
    const target = { ...event.target, value: cleanValue }
    const currentTarget = { ...event.currentTarget, value: cleanValue }
    events?.onBlur?.({ ...event, target, currentTarget })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [, cleanValue] = getFormatValue(event.target)
    setValue(cleanValue)
    setIsFilled(cleanValue !== '')
  }

  useEffect(() => {
    if (debouncedValue !== null) {
      events?.onChange?.(debouncedValue.value)
    }
  }, [debouncedValue])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputType !== 'number' && type !== 'currency') return
    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
      e.preventDefault()
    }
  }

  const handleMaxClick = () => {
    if (max !== undefined) {
      setValue(max.toString())
      events?.onBlur?.({ target: { value: max.toString() } } as any)
    }
  }

  const getIcon = (type: InputType) => {
    switch (type) {
      case 'currency':
        inputType = 'text'
        return '€'
      case 'percentage':
        inputType = 'number'
        return '%'
      default:
        inputType = 'text'
        return null
    }
  }

  const getPattern = (type: InputType) => {
    switch (type) {
      case 'currency':
        return '^$d{1,3}(,d{3})*(.d+)?$'
      default:
        return ''
    }
  }

  useEffect(() => {
    if (initValue !== value) {
      setValue(initValue ?? '')
    }
  }, [initValue])

  return (
    <div className={`${styles.layout} ${className}`}>
      <label className={styles.title}>
        {title}
        {tooltip && (
          <div className={styles.title__tooltip}>
            <TooltipInfo text={tooltip} />
          </div>
        )}
      </label>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <div
        className={`input_container ${styles.container} ${isDisabled ? styles.disabled : ''} ${isFilled ? styles.filled : ''}`}>
        {type !== 'basic' && (
          <div className={styles.iconContainer}>
            <span className={styles.icon}>{getIcon(type)}</span>
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          className={styles.input}
          disabled={isDisabled}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          value={value}
          pattern={getPattern(type)}
        />
        {max !== undefined && (
          <div className={styles.btn_max} onClick={handleMaxClick}>
            Max
          </div>
        )}
      </div>
      <div className={styles.container_below_input}>
        <div className={styles.helperContainer}>
          {leftHelperText && <p className={styles.helper}>{leftHelperText}</p>}
          {rightHelperText && (
            <p className={styles.helper}>{rightHelperText}</p>
          )}
        </div>
        {errorText && <p className={styles.error}>{errorText}</p>}
      </div>
    </div>
  )
}

export default Input
