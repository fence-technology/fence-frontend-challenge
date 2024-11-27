'use client'

import Icon from '@/components/icons/Icon'
import style from './snackbar.module.scss'

export type SnackBarType = 'Warning' | 'Info' | 'Alert' | 'Success'

export enum EnumIcon {
  Warning = 'Warning',
  Info = 'Tooltip',
  Alert = 'Alert',
  Success = 'Positive'
}

export interface Props {
  type: SnackBarType
  title: string
  description: string
}

const SnackBar: React.FC<Props> = ({ type, title, description }) => {
  const iconSrc = EnumIcon[type] || EnumIcon.Info
  const className = style[type]
  return (
    <div className={className}>
      <Icon src={iconSrc} className={style.icon} />
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
    </div>
  )
}

export default SnackBar
