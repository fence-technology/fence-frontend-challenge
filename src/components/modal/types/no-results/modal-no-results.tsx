import Ilustration from '@/components/illustration/Illustration'
import React from 'react'
import Modal from '../../Modal'
import ModalFooter from '../../footer/modal-footer'
import ModalHeader from '../../header/modal-header'
import style from './modal-no-results.module.scss'

interface Props {
  onClose: () => void
}

export const ModalNoResults: React.FC<Props> = ({ onClose }) => {
  return (
    <Modal>
      <ModalHeader>
        <Ilustration
          src="NoResults"
          style={{ width: '153px', height: '153px' }}
        />
        <div className={style.modal_no_results__header}>
          <p className={style.modal_no_results__header__title}>
            No results found
          </p>
          <p className={style.modal_no_results__header__description}>
            There is no result for the filter applied. Please try again with
            different selection.
          </p>
        </div>
      </ModalHeader>
      <ModalFooter>
        <button className={style.modal_no_results__btn__blue} onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  )
}
