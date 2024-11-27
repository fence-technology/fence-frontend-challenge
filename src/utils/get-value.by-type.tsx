import { getCurrencyAmount } from '@/utils/currencies.transformer'
import { formatSimpleDate } from './format-date'
import { formatLabel } from './format-label'
import { formatNumber } from './format-number'
import { formatPercentage } from './format-percentage'

export enum EnumValueByType {
  CURRENCY = 'currency',
  PERCENTAGE = 'percentage',
  DATE = 'date',
  STRING = 'string',
  NUMBER = 'number',
  UPPERCASE = 'uppercase',
  CONVERT_TO_SIMPLE_DATE = 'convertToSimpleDate'
}

export const stringToEnumValueByType = (value?: string): EnumValueByType => {
  switch (value) {
    case 'currency':
      return EnumValueByType.CURRENCY
    case 'percentage':
      return EnumValueByType.PERCENTAGE
    case 'date':
      return EnumValueByType.DATE
    case 'string':
      return EnumValueByType.STRING
    case 'number':
      return EnumValueByType.NUMBER
    case 'uppercase':
      return EnumValueByType.UPPERCASE
    case 'convertToSimpleDate':
      return EnumValueByType.CONVERT_TO_SIMPLE_DATE
    default:
      return EnumValueByType.PERCENTAGE
  }
}

export default function getValueByType(
  value: unknown,
  type: EnumValueByType | undefined,
  precision?: number,
  position?: 'left' | 'right'
) {
  const formatter: Record<EnumValueByType | 'default', () => string> = {
    [EnumValueByType.CURRENCY]: () =>
      getCurrencyAmount(
        'EUR',
        String(value),
        precision ?? 2,
        position ?? 'right'
      ),
    [EnumValueByType.PERCENTAGE]: () => formatPercentage(value as number),
    [EnumValueByType.DATE]: () => value as string,
    [EnumValueByType.STRING]: () => String(value),
    [EnumValueByType.NUMBER]: () => formatNumber(Number(value)),
    [EnumValueByType.UPPERCASE]: () => formatLabel(String(value)),
    [EnumValueByType.CONVERT_TO_SIMPLE_DATE]: () =>
      formatSimpleDate(value as string),
    default: () => String(value)
  }

  return formatter[type as EnumValueByType]?.() || formatter['default']()
}
