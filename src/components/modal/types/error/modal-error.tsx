import Icons from '@/components/icons/Icon'
import React from 'react'
import Modal from '../../Modal'
import ModalFooter from '../../footer/modal-footer'
import ModalHeader from '../../header/modal-header'
import style from './modal-error.module.scss'

interface Props {
  onClose: () => void
  onConfirm: () => void
}

export const ModalError: React.FC<Props> = ({ onClose, onConfirm }) => {
  return (
    <Modal>
      <ModalHeader>
        <Icons
          src="AlertNegative"
          style={{ width: '93.262px', height: '93.262px' }}
        />
        <div className={style.modal_error__header}>
          <p className={style.modal_error__header__title}>
            Something went error
          </p>
          <p className={style.modal_error__header__description}>
            Please try again.
          </p>
        </div>
      </ModalHeader>
      <ModalFooter>
        <button className={style.modal_error__btn__blue} onClick={onConfirm}>
          Try again
        </button>
        <button className={style.modal_error__btn__white} onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  )
}
