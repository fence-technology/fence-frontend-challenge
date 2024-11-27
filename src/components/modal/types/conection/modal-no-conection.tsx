import Ilustration from '@/components/illustration/Illustration'
import React from 'react'
import Modal from '../../Modal'
import ModalFooter from '../../footer/modal-footer'
import ModalHeader from '../../header/modal-header'
import style from './modal-no-conection.module.scss'

interface Props {
  onConfirm: () => void
}

export const ModalNoConection: React.FC<Props> = ({ onConfirm }) => {
  return (
    <Modal backgroundColor="transparent">
      <ModalHeader>
        <Ilustration
          src="Conectivity1"
          style={{ width: '190px', height: '140.800px' }}
        />
        <div className={style.modal_conection__header}>
          <p className={style.modal_conection__header__title}>
            Are you sure you want to conection?
          </p>
          <div className={style.modal_conection__header__description}>
            <p>There&rsquo;s been a problem loading this secttion.</p>
            <p>Please try again.</p>
          </div>
        </div>
      </ModalHeader>
      <ModalFooter>
        <button
          className={style.modal_conection__btn__blue}
          onClick={onConfirm}>
          Try again
        </button>
      </ModalFooter>
    </Modal>
  )
}
