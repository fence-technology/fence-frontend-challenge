import { ReactNode, useState } from 'react'
import styles from './accordion.module.scss'

interface AccordionProps {
  title: string
  children: ReactNode
  isCollapsed?: boolean
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isCollapsed = true
}) => {
  const [isOpen, setIsOpen] = useState(!isCollapsed)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={isOpen ? styles.arrowUp : styles.arrowDown}></span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  )
}

export default Accordion
