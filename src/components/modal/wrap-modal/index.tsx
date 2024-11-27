import Icons from '@/components/icons/Icon'
import React from 'react'
import styles from './wrap-modal.module.scss'

interface WrapModalProps {
  onClose?: () => void
  title?: string
  width?: string
  isLoading?: boolean
}

const WrapModal = ({
  onClose,
  title,
  children,
  width,
  isLoading
}: React.PropsWithChildren<WrapModalProps>) => {
  return (
    <div>
      <div className={styles.rgba} />
      <div className={styles.wrap_content} style={{ width }}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button
            disabled={isLoading}
            className={styles.close_icon}
            onClick={() => onClose && onClose()}>
            <Icons src="CloseModal" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default WrapModal
