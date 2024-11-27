import { ReactNode } from 'react'
import style from './modal-footer.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

const ModalFooter: React.FC<Props> = ({ children, className }) => {
  return <div className={`${style.modal_footer} ${className}`}>{children}</div>
}

export default ModalFooter
