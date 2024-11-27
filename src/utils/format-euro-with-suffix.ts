export const formatEuroWithSuffix = (
  value: number,
  decimal?: number
): string => {
  if (value >= 1000000) return `€${(value / 1000000).toFixed(decimal || 0)} M`
  if (value >= 1000) return `€${(value / 1000).toFixed(decimal || 0)} K`
  return `€${value.toFixed(decimal || 0)}`
}
