'use client'

import Icons from '@/components/icons/Icon'
import React, { CSSProperties } from 'react'
import styles from './badge.module.scss'

interface Props {
  content: string
  containerStyle?: CSSProperties
  contentStyle?: CSSProperties
  iconStyle?: CSSProperties
  containerClass?: string
  contentClass?: string
  iconClass?: string
  action?: boolean
  actionButton?: {
    actionIcon?: (event: string) => void
    actionBadge?: (event: string) => void
  }
  nameKey?: string
  variant?: EnumBadgeVariant | undefined
}

export enum EnumBadgeVariant {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

type TBadge = {
  label: string
  variant: EnumBadgeVariant
}

type BadgeStatusType<T extends string> = {
  [key in T]: TBadge
}

const DEFAULT_BADGE: TBadge = {
  label: 'Error',
  variant: EnumBadgeVariant.Error
}

export function getBadgeStatus<T extends string>(
  status: T,
  customStatus?: Partial<BadgeStatusType<T>>
): TBadge {
  const allStatus = customStatus
  if (allStatus && status in allStatus) {
    return allStatus[status as keyof typeof allStatus] || DEFAULT_BADGE
  }
  return DEFAULT_BADGE
}

const Badge: React.FC<Props> = ({
  content,
  containerStyle,
  contentStyle,
  contentClass,
  containerClass,
  iconClass,
  iconStyle,
  actionButton,
  action = false,
  nameKey = '',
  variant = EnumBadgeVariant.Info
}) => {
  if (!Object.values(EnumBadgeVariant).includes(variant)) {
    variant = EnumBadgeVariant.Info // Fallback to INFO if invalid variant
  }
  const variantClass = styles[variant] || ''
  const classNameContainer = `${styles.container} ${variantClass} ${containerClass || ''}`
  const classNameContent = `${styles.content} ${contentClass || ''}`
  const classNameIcon = `${styles.deleteIcon} ${iconClass || ''}`

  const iconStyles: React.CSSProperties = {
    fill: 'black',
    height: '20px',
    width: '20px',
    ...iconStyle
  }

  const onHandleBadgeButton = () => {
    actionButton?.actionBadge?.(nameKey)
  }

  const onHandleIconButton = () => {
    actionButton?.actionIcon?.(nameKey)
  }

  return (
    <div
      className={classNameContainer}
      style={containerStyle}
      onClick={onHandleBadgeButton}>
      <p style={contentStyle} className={classNameContent}>
        {content}
      </p>
      {action && (
        <div onClick={onHandleIconButton}>
          <Icons
            src={'DeleteCross'}
            className={classNameIcon}
            style={iconStyles}
          />
        </div>
      )}
    </div>
  )
}

export default Badge
