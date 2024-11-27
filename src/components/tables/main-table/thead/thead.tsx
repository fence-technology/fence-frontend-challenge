'use client'

import React, { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import { TTableAction, TTableOrder, TTableSize } from '../main-table'
import styles from './thead.module.scss'

export type TableHead = {
  label: string
  value: string
  defaultOrder?: 'ASC' | 'DESC'
  onClickOrder?: (value: TTableOrder, head: TableHead) => void
}

interface Props {
  thead: TableHead[]
  actions?: TTableAction[]
  size?: TTableSize
}

export const THead: React.FC<Props> = ({
  thead,
  actions = [],
  size = 'default'
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
    const newOrder = [...order]
    newOrder[index] = value
    setOrder(newOrder)
    head.onClickOrder?.(value, head)
  }

  const hasLeftActions = actions?.some((action) => action.position === 'left')
  const hasRightActions = actions?.some((action) => action.position === 'right')

  return (
    <thead className={styles.thead__thead}>
      <tr>
        {hasLeftActions && (
          <th
            className={
              size === 'default' ? styles.thead__th : styles.thead__th_small
            }></th>
        )}
        {thead.map((element, index) => (
          <th
            className={
              size === 'default' ? styles.thead__th : styles.thead__th_small
            }
            key={index}>
            <div className={styles.thead__th__content}>
              {element.label}

              {order[index] === 'DESC' && (
                <IoChevronDownOutline
                  className={styles.thead__order}
                  onClick={() => handleOrderClick('ASC', element, index)}
                />
              )}
              {order[index] === 'ASC' && (
                <IoChevronUpOutline
                  className={styles.thead__order}
                  onClick={() => handleOrderClick('DESC', element, index)}
                />
              )}
            </div>
          </th>
        ))}

        {hasRightActions && (
          <th
            className={
              size === 'default' ? styles.thead__th : styles.thead__th_small
            }></th>
        )}
      </tr>
    </thead>
  )
}
