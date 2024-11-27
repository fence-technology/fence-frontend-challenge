import numeral from 'numeral'

const CURRENCIES = {
  EUR: { symbol: '€', position: 'right' },
  USD: { symbol: '$', position: 'left' }
}

export type TCurrency = keyof typeof CURRENCIES

export type TCurrencyPosition = 'right' | 'left'

export const DEFAULT_CURRENCY: TCurrency = 'EUR'

export const getCurrencySymbol = (currency: TCurrency = DEFAULT_CURRENCY) => {
  return CURRENCIES[currency]?.symbol || CURRENCIES['EUR'].symbol
}

export const getCurrencyPosition = (currency: string = DEFAULT_CURRENCY) => {
  return (
    (CURRENCIES[currency.toUpperCase() as TCurrency]
      ?.position as TCurrencyPosition) || 'right'
  )
}

export const getCurrencyAmount = (
  currency: string = DEFAULT_CURRENCY,
  value: string | number = 0,
  decimals: number = 2,
  overridePosition?: TCurrencyPosition
) => {
  const symbol = getCurrencySymbol(currency as TCurrency)
  const position = overridePosition || getCurrencyPosition(currency)

  let formattedValue = value
  if (decimals > 0) {
    formattedValue = numeral(value).format(`0,0.${'0'.repeat(decimals)}`)
  } else {
    formattedValue = numeral(value).format('0,0')
  }

  const isNegative = Number(value) < 0
  const absoluteFormattedValue = isNegative
    ? formattedValue.slice(1)
    : formattedValue
  const negativeSign = isNegative ? '-' : ''

  if (position === 'left') {
    return `${negativeSign}${symbol}${absoluteFormattedValue}`
  } else {
    return `${negativeSign}${absoluteFormattedValue}${symbol}`
  }
}
