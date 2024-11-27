import { getApiDate } from '@/utils/date-transformer'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './input-calendar.module.scss'

type DatePickerMode = 'single' | 'range'

interface InputCalendarProps {
  label?: string
  singleDate?: Date
  startDate?: Date
  endDate?: Date
  disabled?: boolean
  className?: string
  errorText?: string
  leftHelperText?: string
  rightHelperText?: string
  event?: {
    onDateChange?: (date: string | null | undefined) => void
    onDateStartChange?: (date: string | null | undefined) => void
    onDateEndChange?: (date: string | null | undefined) => void
  }
  mode: DatePickerMode
}

export const InputCalendar: React.FC<InputCalendarProps> = ({
  label,
  singleDate,
  startDate,
  endDate,
  disabled,
  className,
  errorText,
  leftHelperText,
  rightHelperText,
  event,
  mode = 'single'
}) => {
  const handleSingleDateChange = (date: Date | null) => {
    const formattedDate = date ? getApiDate(date.toISOString()) : null
    event?.onDateChange?.(formattedDate)
  }

  const handleRangeChange = (date: Date | null, isStart: boolean) => {
    const formattedDate = date ? getApiDate(date.toISOString()) : null
    if (isStart) {
      event?.onDateStartChange?.(formattedDate)
    } else {
      event?.onDateEndChange?.(formattedDate)
    }
  }

  return (
    <div className={`${styles.input_calendar} ${className}`}>
      {label && <label className={styles.input_calendar__label}>{label}</label>}

      <div className={styles.input_calendar__wrapper}>
        {mode === 'range' ? (
          <div className={styles.input_calendar__wrapper__container_dates}>
            <DatePicker
              selected={startDate || undefined}
              maxDate={endDate || undefined}
              dateFormat="dd/MM/yy"
              disabled={disabled}
              onChange={(date: any) => handleRangeChange(date as Date, true)}
              className={`${startDate ? styles.input_calendar__input__left__value : styles.input_calendar__input__left__no_value}`}
              wrapperClassName={styles.input_calendar__input__wrapper}
              showPopperArrow={false}
              placeholderText="DD/MM/YYYY"
            />
            <span className={styles.input_calendar__separator}>-</span>
            <DatePicker
              selected={endDate || undefined}
              minDate={startDate || undefined}
              dateFormat="dd/MM/yy"
              disabled={disabled}
              onChange={(date: any) => handleRangeChange(date as Date, false)}
              className={`${endDate ? styles.input_calendar__input__right__value : styles.input_calendar__input__right__no_value}`}
              wrapperClassName={styles.input_calendar__input__wrapper}
              showPopperArrow={false}
              placeholderText="DD/MM/YYYY"
            />
          </div>
        ) : (
          <DatePicker
            selected={singleDate || undefined}
            dateFormat="dd/MM/yy"
            disabled={disabled}
            onChange={(date: any) => handleSingleDateChange(date as Date)}
            className={`${singleDate ? styles.input_calendar__input__right__value : styles.input_calendar__input__right__no_value}`}
            wrapperClassName={styles.input_calendar__input__wrapper}
            showPopperArrow={false}
            placeholderText="DD/MM/YYYY"
          />
        )}
      </div>

      {(leftHelperText || rightHelperText) && (
        <div className={styles.input_calendar__helpers}>
          {leftHelperText && (
            <p className={styles.input_calendar__helper}>{leftHelperText}</p>
          )}
          {rightHelperText && (
            <p className={styles.input_calendar__helper}>{rightHelperText}</p>
          )}
        </div>
      )}

      {errorText && <p className={styles.input_calendar__error}>{errorText}</p>}
    </div>
  )
}

export default InputCalendar
