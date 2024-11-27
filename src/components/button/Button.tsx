'use client'

import { Link } from '@/components/Link/Link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './button.module.scss'

export enum EnumButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Link = 'link',
  Dark = 'dark'
}

export type ButtonVariant = 'primary' | 'secondary' | 'link' | 'dark'
type ButtonType = 'default' | 'error' | 'icon'
type ButtonSize = 'large' | 'medium' | 'small'
type ButtonTarget = '_self' | '_blank' | '_parent'

export interface ButtonProps {
  title?: string
  type?: ButtonType
  isDisabled?: boolean
  leftIcon?: React.ReactNode // TODO: Add leftIcon prop
  rightIcon?: React.ReactNode // TODO: Add rightIcon prop
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
  styleBtn?: React.CSSProperties
  href?: string
  target?: ButtonTarget
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  form?: string
  keyId?: string
  fullWidth?: boolean
}

const getClass = (type: string, variant: ButtonVariant): string => {
  return `${type}${variant.charAt(0).toUpperCase() + variant.slice(1)}`
}

const Button: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  type = 'default',
  isDisabled = false,
  size = 'small',
  variant = EnumButtonVariant.Primary,
  className = '',
  href = '/',
  styleBtn = {},
  target = '_self',
  onClick,
  form,
  keyId,
  fullWidth
}) => {
  const getButtonClass = (isDisabled: boolean): string => {
    const classes = [
      styles.button,
      styles[size],
      isDisabled
        ? styles[getClass('disabled', variant)]
        : styles[getClass(type, variant)],
      className
    ]
    if (fullWidth) {
      classes.push(styles.fullWidth)
    }

    return classes.filter(Boolean).join(' ')
  }

  const commonProps = {
    className: getButtonClass(isDisabled),
    style: styleBtn
  }

  const buttonProps = {
    ...commonProps,
    disabled: isDisabled,
    form: form,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!isDisabled && onClick) {
        onClick(event)
      }
    }
  }

  const linkProps = {
    ...commonProps,
    href: href,
    target: target
  }

  const content =
    type === 'icon' ? (
      <span className={styles.iconLeft}>{leftIcon ?? rightIcon}</span>
    ) : (
      <>
        {(title || (!title && leftIcon)) && (
          <span className={styles.iconLeft}>{leftIcon}</span>
        )}
        {title && <span className={styles.title}>{title}</span>}
        {(title || (!title && rightIcon)) && (
          <span className={styles.iconRight}>{rightIcon}</span>
        )}
      </>
    )

  return variant === EnumButtonVariant.Link ? (
    <Link key={keyId ?? uuidv4()} {...linkProps}>
      {content}
    </Link>
  ) : (
    <button key={keyId ?? uuidv4()} {...buttonProps}>
      {content}
    </button>
  )
}

export default Button
