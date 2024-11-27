import Button from '@/components/button/Button'
import Icons from '@/components/icons/Icon'
import React from 'react'
import Modal from '../../Modal'
import ModalFooter from '../../footer/modal-footer'
import ModalHeader from '../../header/modal-header'
import style from './modal-exit.module.scss'

interface Props {
  onClose: () => void
  onConfirm: () => void
}

export const ModalExit: React.FC<Props> = ({ onClose, onConfirm }) => {
  return (
    <Modal>
      <ModalHeader>
        <Icons
          src="Warning"
          style={{ width: '85px', height: '76.600px', fill: '#FF948D' }}
        />
        <div className={style.modal_exit__header}>
          <p className={style.modal_exit__header__title}>
            Are you sure you want to exit?
          </p>
          <p className={style.modal_exit__header__description}>
            Are you sure you want to exit?
          </p>
        </div>
      </ModalHeader>
      <ModalFooter>
        <Button
          className={style.modal_exit__btn__blue}
          variant={'primary'}
          title="Yes, exit"
          onClick={onConfirm}
        />
        <Button
          className={style.modal_exit__btn__blue}
          variant={'secondary'}
          title="No, cancel"
          onClick={onClose}
        />
      </ModalFooter>
    </Modal>
  )
}
