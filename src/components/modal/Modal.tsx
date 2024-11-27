'use client'

import React, { isValidElement, ReactElement, ReactNode } from 'react'
import ModalBody from './body/modal-body'
import ModalFooter from './footer/modal-footer'
import ModalHeader from './header/modal-header'
import style from './modal.module.scss'
import { ModalNoConection } from './types/conection/modal-no-conection'
import { ModalError } from './types/error/modal-error'
import { ModalExit } from './types/exit/modal-exit'
import { ModalNoResults } from './types/no-results/modal-no-results'

type TableChild =
  | ReactElement<typeof ModalFooter>
  | ReactElement<typeof ModalHeader>
  | ReactElement<typeof ModalBody>
  | ReactElement<typeof ModalBody>[]
  | undefined
  | null

interface Props {
  children: TableChild | TableChild[]
  backgroundColor?: string
  modalClass?: string
  allowScroll?: boolean
}

interface ModalType extends React.FC<Props> {
  ModalError: typeof ModalError
  ModalExit: typeof ModalExit
  ModalNoResults: typeof ModalNoResults
  ModalNoConection: typeof ModalNoConection
}

const Modal: React.FC<Props> = ({
  children,
  backgroundColor = '#FFF',
  modalClass,
  allowScroll = true
}) => {
  let header: ReactNode = null
  const body: ReactNode[] = []
  let footer: ReactNode = null

  const childArray = React.Children.toArray(children) as ReactElement[]

  childArray.forEach((child) => {
    if (isValidElement(child)) {
      if (child.type === ModalHeader) {
        header = child
      } else if (child.type === ModalBody) {
        body.push(child)
      } else if (child.type === ModalFooter) {
        footer = child
      }
    }
  })

  return (
    <div
      className={`${style.modal} ${modalClass || ''}`}
      style={{ backgroundColor: backgroundColor }}>
      {header}
      <div
        className={`${style.modal__body} ${allowScroll ? style.modal__scroll : ''}`}>
        {body.map((item, index) => (
          <React.Fragment key={index}>
            <div className={style.line}></div>
            {item}
          </React.Fragment>
        ))}
      </div>
      {footer}
    </div>
  )
}

;(Modal as ModalType).ModalError = ModalError
;(Modal as ModalType).ModalExit = ModalExit
;(Modal as ModalType).ModalNoResults = ModalNoResults
;(Modal as ModalType).ModalNoConection = ModalNoConection

export default Modal as ModalType
