'use client'

import {
  TTableActions,
  TTableOrder,
  TTableSize
} from '@/components/table/Table'
import React, { CSSProperties, ReactNode, useState } from 'react'
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io'
import styles from './table-header.module.scss'

export type TableHead = {
  label: string
  value: string
  defaultOrder?: 'ASC' | 'DESC'
  onClickOrder?: (value: TTableOrder, head: TableHead) => void
  headCustom?: ReactNode
  align?: CSSProperties['justifyContent']
}

interface Props {
  thead: TableHead[]
  actionsPosition?: TTableActions['position']
  size?: TTableSize
  sortData: (value: any) => void
  classNames?: {
    th?: string
    thAction?: string
  }
}

const TableHeader: React.FC<Props> = ({
  thead,
  actionsPosition,
  size = 'default',
  classNames,
  sortData
}) => {
  const defaultOrders = thead.map(
    (element) => element.defaultOrder || 'DEFAULT'
  )
  const [order, setOrder] = useState<TTableOrder[]>(defaultOrders)

  const handleOrderClick = (
    value: TTableOrder,
    head: TableHead,
    index: number
  ) => {
    const newOrder = order.map((element, i) => {
      if (i === index) {
        return value
      }
      return 'DEFAULT'
    })
    setOrder(newOrder)
    sortData(newOrder)
    head.onClickOrder?.(value, head)
  }
  return (
    <thead className={styles.thead__thead}>
      <tr>
        {actionsPosition === 'left' && (
          <th
            className={
              size === 'default' ? styles.thead__th : styles.thead__th_small
            }></th>
        )}
        {thead.map((element, index) => (
          <th
            className={
              `${size === 'default' ? styles.thead__th : styles.thead__th_small} ${styles[element.align || 'center']}` ||
              ''
            }
            key={index}>
            <div
              className={`${styles.thead__th__content} ${classNames?.th || ''}`}>
              {element.headCustom ? (
                element.headCustom
              ) : (
                <>
                  {element.label}
                  {order[index] === 'DEFAULT' ? (
                    <div style={{ height: '13px', width: '13px' }}>
                      <IoMdArrowDown
                        className={styles.thead__order}
                        onClick={() => handleOrderClick('ASC', element, index)}
                      />
                    </div>
                  ) : order[index] === 'ASC' ? (
                    <div style={{ height: '13px', width: '13px' }}>
                      <IoMdArrowUp
                        className={styles.thead__order}
                        onClick={() => handleOrderClick('DESC', element, index)}
                      />
                    </div>
                  ) : (
                    <div style={{ height: '13px', width: '13px' }}>
                      <IoMdArrowDown
                        className={styles.thead__order}
                        onClick={() => handleOrderClick('ASC', element, index)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </th>
        ))}

        {actionsPosition === 'right' && (
          <th
            className={
              size === 'default' ? styles.thead__th : styles.thead__th_small
            }></th>
        )}
      </tr>
    </thead>
  )
}

export default TableHeader
