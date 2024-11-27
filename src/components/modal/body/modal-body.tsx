import { ReactNode } from 'react'
import style from './modal-body.module.scss'
interface Props {
  children: ReactNode
  className?: string
}

const ModalBody: React.FC<Props> = ({ children, className }) => {
  return <div className={`${style.modal_body} ${className}`}>{children}</div>
}

export default ModalBody
