import Icons from '@/components/icons/Icon'
import React from 'react'
import Modal from '../../Modal'
import ModalFooter from '../../footer/modal-footer'
import ModalHeader from '../../header/modal-header'
import WrapModal from '../../wrap-modal'
import style from './modal-confirm.module.scss'

interface Props {
  onClose: () => void
  onConfirm: () => void
  title: string
  isLoading?: boolean
}

export const ModalConfirm: React.FC<Props> = ({
  onClose,
  onConfirm,
  title,
  isLoading
}) => {
  return (
    <WrapModal onClose={onClose} isLoading={isLoading}>
      <Modal>
        <ModalHeader>
          <Icons
            src="AlertNegative"
            style={{ width: '93.262px', height: '93.262px' }}
          />
          <div className={style.modal_error__header}>
            <p className={style.modal_error__header__title}>{title}</p>
            <p className={style.modal_error__header__description}>
              If you delete, you will not be able to recover them.
            </p>
          </div>
        </ModalHeader>
        <ModalFooter>
          <button
            className={style.modal_error__btn__blue}
            onClick={onConfirm}
            disabled={isLoading}>
            Yes, delete
          </button>
          <button
            className={style.modal_error__btn__white}
            onClick={onClose}
            disabled={isLoading}>
            No, cancel
          </button>
        </ModalFooter>
      </Modal>
    </WrapModal>
  )
}
