export const formatPercentage = (value: number | undefined): string => {
  if (!value) return '0.0%'

  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}
