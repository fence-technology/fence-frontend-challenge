import { ReactNode } from 'react'
import style from './modal-header.module.scss'

interface Props {
  children: ReactNode
}

const ModalHeader: React.FC<Props> = ({ children }) => {
  return <div className={style.modal_header}>{children}</div>
}

export default ModalHeader
