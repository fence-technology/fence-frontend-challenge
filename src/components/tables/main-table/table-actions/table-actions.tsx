import React from 'react'
import { TableData } from '../main-table'
import styles from './table-actions.module.scss'

export type TableAction = {
  icon: React.ReactNode
  onClick: (row: TableData, index: number) => void
  if?: (row: TableData, index: number) => boolean
  className?: string
}

export const TableActions = ({
  actions,
  row,
  rowIndex
}: {
  actions: TableAction[]
  row: TableData
  rowIndex: number
}) => {
  const handleClickAction = (action: TableAction) => {
    action.onClick(row, rowIndex)
  }

  return (
    <div className={styles.table__actions}>
      {actions.map((action, index) => {
        if (!action.if || action.if(row, index)) {
          return (
            <div
              key={`action-${index}`}
              className={`${styles.table__action} ${action.className || ''}`}
              onClick={() => handleClickAction(action)}>
              {action.icon}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
