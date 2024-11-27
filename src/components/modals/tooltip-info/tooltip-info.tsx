'use client'

import Icons from '@/components/icons/Icon'
import React from 'react'
import { MainPopover } from '../main-popover/main-popover'
import styles from './tooltip-info.module.scss'

type TVariant = 'light' | 'dark'

interface Props {
  text: string
  variant?: TVariant
  colorIcon?: string
  classNameIcon?: string
  children?: React.ReactElement | string
}

export const TooltipInfo: React.FC<Props> = ({
  text,
  variant,
  colorIcon,
  classNameIcon,
  children
}) => {
  return (
    <div className={styles.tooltip_info}>
      <MainPopover
        arrow
        placement="top"
        withClick={false}
        content={
          <div>
            <div className={styles.tooltip_info__text}>{text}</div>
          </div>
        }>
        {children ? (
          <div>{children}</div>
        ) : (
          <div className={classNameIcon}>
            <Icons
              className={styles.tooltip_info__icon}
              style={{
                fill: colorIcon || (variant === 'light' ? '#6C757D' : '#fff')
              }}
              src="Tooltip"
            />
          </div>
        )}
      </MainPopover>
    </div>
  )
}
