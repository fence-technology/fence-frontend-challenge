'use client'

import Button, { ButtonVariant } from '@/components/button/Button'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import styles from './main-modal.module.scss'

export type TButtonAction = {
  onClick: () => void
  text: string
  type: ButtonVariant
  startIcon?: React.ReactNode
}

interface Props {
  className?: string
  title: string
  description?: string
  withCancelButton?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
  confirmButtonTextForm?: string
  withConfirmButton?: boolean
  children?: React.ReactNode
  withCloseButton?: boolean
  customButtons?: TButtonAction[]
  events?: {
    onClose?: () => void
    onAccept?: () => void
  }
}

export const MainModal: React.FC<Props> = ({
  className,
  title,
  withCancelButton,
  children,
  cancelButtonText,
  confirmButtonText,
  withCloseButton = true,
  confirmButtonTextForm,
  events,
  description,
  customButtons,
  withConfirmButton = true
}) => {
  const handleConfirm = () => {
    events?.onAccept?.()
  }

  const handleOnClose = () => {
    events?.onClose?.()
  }

  return (
    <div className={styles.modal_confirm__wrapper}>
      <div className={`${styles.modal_confirm} ${className}`}>
        <div className={styles.modal_confirm__top}>
          <div className={styles.modal_confirm__title__container}>
            <p className={styles.modal_confirm__title}>{title}</p>
            {description && (
              <p className={styles.modal_confirm__description}>{description}</p>
            )}
          </div>
          {withCloseButton && (
            <IoCloseSharp
              className={styles.modal_confirm__close}
              onClick={handleOnClose}
            />
          )}
        </div>

        {children}

        <div className={styles.modal_confirm__actions}>
          {customButtons?.map((customButton, index) => (
            <Button
              key={`main-modal-custom-btn-${index}`}
              title={customButton.text}
              variant={customButton.type}
              onClick={customButton.onClick}
              leftIcon={customButton.startIcon}
              fullWidth
            />
          ))}
          {withConfirmButton && (
            <Button
              title={confirmButtonText || 'Confirm'}
              variant="primary"
              form={confirmButtonTextForm}
              onClick={handleConfirm}
              fullWidth
            />
          )}
          {withCancelButton && (
            <Button
              title={cancelButtonText || 'Cancel'}
              variant="secondary"
              onClick={handleOnClose}
              fullWidth
            />
          )}
        </div>
      </div>
    </div>
  )
}
