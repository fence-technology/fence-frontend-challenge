import { getTableDate } from '@/utils/date-transformer'
type DateFormat =
  | 'yyyy-mm-dd'
  | 'mm-dd-yyyy'
  | 'dd-mm-yyyy'
  | 'yyyy/mm/dd'
  | 'mm/dd/yyyy'
  | 'dd/mm/yyyy'

export type DateFormatOption =
  | 'default'
  | 'year-month-day'
  | 'day-month-year-short'
  | 'year-month'
  | 'month-year'
  | 'year'
  | 'short'
  | 'short-day'
  | DateFormat

interface DateOptions {
  daysToAdd?: number
  format?: DateFormat | DateFormatOption
  date?: Date | string
  separator?: '-' | '/' | '.'
  locale?: string
  interval?: 'all' | 'week' | 'month'
}

export const formatDate = ({
  daysToAdd = 0,
  format = 'yyyy-mm-dd',
  date = new Date(),
  separator = '-',
  locale = 'es-ES'
}: DateOptions = {}): string => {
  let targetDate: Date

  if (date instanceof Date) {
    targetDate = new Date(date)
  } else {
    // Handle potential MM-YYYY format
    if (date.includes('-') && date.split('-').length === 2) {
      const [month, year] = date.split('-')
      targetDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    } else {
      targetDate = new Date(date)
    }
  }

  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date provided')
  }

  targetDate.setDate(targetDate.getDate() + daysToAdd)

  const standardFormats: DateFormat[] = [
    'yyyy-mm-dd',
    'mm-dd-yyyy',
    'dd-mm-yyyy',
    'yyyy/mm/dd',
    'mm/dd/yyyy',
    'dd/mm/yyyy'
  ]

  if (standardFormats.includes(format as DateFormat)) {
    const year = targetDate.getFullYear()
    const month = String(targetDate.getMonth() + 1).padStart(2, '0')
    const day = String(targetDate.getDate()).padStart(2, '0')

    const normalizedFormat = format.replace(/-/g, separator)

    switch (normalizedFormat) {
      case `yyyy${separator}mm${separator}dd`:
        return `${year}${separator}${month}${separator}${day}`
      case `mm${separator}dd${separator}yyyy`:
        return `${month}${separator}${day}${separator}${year}`
      case `dd${separator}mm${separator}yyyy`:
        return `${day}${separator}${month}${separator}${year}`
      default:
        return `${year}${separator}${month}${separator}${day}`
    }
  }

  switch (format) {
    case 'year-month-day':
      return targetDate.toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    case 'year-month':
      return targetDate.toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit'
      })
    case 'month-year':
      return targetDate.toLocaleDateString(locale, {
        month: '2-digit',
        year: 'numeric'
      })
    case 'year':
      return targetDate.toLocaleDateString(locale, {
        year: 'numeric'
      })
    case 'short':
      return targetDate.toLocaleDateString(locale, {
        year: '2-digit',
        month: 'short'
      })
    case 'short-day':
      return targetDate.toLocaleDateString(locale, {
        day: '2-digit',
        month: 'short'
      })
    case 'day-month-year-short':
      return targetDate.toLocaleDateString(locale, {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      })
    default:
      return targetDate.toLocaleDateString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
  }
}

export const formatSimpleDate = (dateStr: string): string => {
  if (!dateStr) return '-'
  const dateObj = new Date(dateStr)
  return dateObj
    .toLocaleDateString('es-ES', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(',', ' ')
}

export const formatDateWithHour = (str: string): string => {
  const dateObj = new Date(str)
  return dateObj
    .toLocaleDateString('es-ES', {
      timeZone: 'Europe/Madrid',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
    .replace(',', ' ')
}

export const filterLabels = (
  value: string,
  index: number,
  interval: 'all' | 'week' | 'month' = 'all'
) => {
  if (interval === 'all') return value
  if (interval === 'week') return index % 7 === 0 ? value : ''
  if (interval === 'month') {
    const currentDate = new Date(value)
    return currentDate.getDate() === 1 ? value : ''
  }
}

export const formatFullDate = (date?: Date | string) => {
  if (!date) return ''

  const dateObj = typeof date === 'string' ? new Date(date) : date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formattedDate = dateObj.toLocaleDateString('en-US', options)
  const day = dateObj.getDate()
  const daySuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }
  return formattedDate.replace(/\d+/, `${day}${daySuffix(day)}`)
}

export const convertToYYYYMMDD = (str: string): string => {
  const getFormat = getTableDate(str)
  const [day, month, year] = getFormat.split('/')
  return `${year}-${month}-${day}`
}
