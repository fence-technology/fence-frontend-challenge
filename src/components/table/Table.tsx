'use client'
import TableBody from '@/components/table/table-body/TableBody'
import TableFooter from '@/components/table/table-footer/TableFooter'
import TableHeader from '@/components/table/table-header/TableHeader'
import { TableAction } from '@/components/tables/main-table/table-actions/table-actions'
import React, {
  CSSProperties,
  isValidElement,
  ReactElement,
  ReactNode
} from 'react'
import styles from './table.module.scss'

type TableChild = ReactElement<
  typeof TableFooter | typeof TableHeader | typeof TableBody
>

interface Props {
  children?: TableChild | TableChild[]
  style?: CSSProperties
  className?: string
}

export type TableData = {
  [key: string]: string | number
}

export type TTableOrder = 'ASC' | 'DESC' | 'DEFAULT'
export type TTableSize = 'default' | 'small'
export type TTableActions = {
  selectedIndex?: number
  position: 'left' | 'right'
  items: TableAction[]
}

const Table: React.FC<Props> = ({ children, style, className }) => {
  let Head: ReactNode = null
  let Header: ReactNode = null
  let Body: ReactNode = null
  let Footer: ReactNode = null

  React.Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === TableHeader) {
        Header = child
      } else if (child.type === TableBody) {
        Body = child
      } else if (child.type === TableFooter) {
        Footer = child
      } else {
        Head = child
      }
    }
  })

  return (
    <div
      style={{
        ...style
      }}
      className={`${styles.table_container} ${className}`}>
      <div className={styles.table_head}>{Head}</div>
      <table className={styles.table}>
        {Header}
        {Body}
      </table>
      {Footer}
    </div>
  )
}

export default Table
