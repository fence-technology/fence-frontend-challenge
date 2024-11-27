import { formatDateWithHour, formatSimpleDate } from '@/utils/format-date'

export const getTableDate = (
  isoString: string,
  options?: { withHour: boolean }
) => {
  if (options?.withHour) {
    return formatDateWithHour(isoString)
  }

  return formatSimpleDate(isoString)
}

export const getApiDate = (isoString: string) => {
  const date = new Date(isoString)
  if (!date) return ''

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
