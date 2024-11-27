import React from 'react'

import { MainModal } from '../main-modal/main-modal'
import styles from './modal-alert.module.scss'

export interface ModalAlertProps {
  title: string
  description?: string
  text: string
  onClose: () => void
  onAccept: () => void
}

export const ModalAlert: React.FC<ModalAlertProps> = ({
  onClose,
  onAccept,
  text,
  description,
  title
}) => {
  return (
    <MainModal
      title={title}
      description={description}
      className={styles.modal_budget_history}
      events={{ onAccept, onClose }}>
      <p className={styles.modal_alert__text}>{text}</p>
    </MainModal>
  )
}
