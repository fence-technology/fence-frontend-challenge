import getValueByType, { EnumValueByType } from '@/utils/get-value.by-type'
import { CSSProperties } from 'react'
import Icons, { IconsObj } from '../icons/Icon'
import style from './info-card.module.scss'

interface Props {
  title: string
  value: string | number
  className?: string
  styles?: CSSProperties
  icon: keyof typeof IconsObj
}

const InfoCard: React.FC<Props> = ({
  title,
  value,
  className,
  styles,
  icon
}) => {
  const formatValue = (): React.ReactNode => {
    let result = ''
    if (typeof value === 'string')
      result = getValueByType(value, EnumValueByType.UPPERCASE)
    else result = getValueByType(value, EnumValueByType.CURRENCY, 0, 'left')
    return result
  }

  return (
    <div className={`${style.card} ${className || ''}`} style={styles}>
      <div className={style.card__icon}>
        <Icons src={icon} style={{ fill: '#00A2FF' }} />
      </div>
      <div className={style.card__text}>
        <p className={style.card__text__value}>{formatValue()}</p>
        <p className={style.card__text__title}>{title}</p>
      </div>
    </div>
  )
}

export default InfoCard
