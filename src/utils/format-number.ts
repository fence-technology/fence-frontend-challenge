export const formatNumber = (
  value: number = 0,
  options?: { decimals?: number }
) => {
  if (value === 0) {
    return '0.00'
  }
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: options?.decimals ?? 2,
    maximumFractionDigits: options?.decimals ?? 2
  }).format(value)
}

export const parseInputCurrency = (value: string): number => {
  if (typeof value === 'number') {
    return value
  }

  let cleanedValue = value.replace(/[^\d.,-]/g, '').trim()

  if (cleanedValue.includes(',') && cleanedValue.includes('.')) {
    cleanedValue = cleanedValue.replace(/\./g, '').replace(',', '.')
  } else if (cleanedValue.includes(',') && !cleanedValue.includes('.')) {
    cleanedValue = cleanedValue.replace(',', '.')
  }

  const numericValue = Number(cleanedValue)

  return isNaN(numericValue) ? 0 : numericValue
}

export const removeCurrencySymbol = (value: string | number): number => {
  if (typeof value === 'number') {
    return value
  }
  let cleanedValue = value.replace(/[^\d.,-]/g, '').trim()
  cleanedValue = cleanedValue.replace(/\./g, '').replace(',', '.')
  const numericValue = Number(cleanedValue)
  return isNaN(numericValue) ? 0 : numericValue
}
