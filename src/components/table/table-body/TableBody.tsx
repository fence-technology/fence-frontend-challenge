'use client'

import { TableData } from '@/components/tables/main-table/main-table'
import React, { CSSProperties, useState } from 'react'
import styles from './table-body.module.scss'

interface Props {
  data: TableData[]
  onClickRow?: (rowData: any, index: number) => void
  selectedRowClassName?: string
  classNames?: {
    td?: string
    tdAction?: string
  }
  fallbackText?: string
  alignItems?: Record<string, CSSProperties['justifyContent']>
}

const TableBody: React.FC<Props> = ({
  data,
  onClickRow,
  selectedRowClassName,
  classNames,
  alignItems,
  fallbackText = '-'
}) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | undefined>(
    undefined
  )
  const handleRowClick = (rowData: TableData, index: number) => {
    setSelectedRowIndex(index)
    onClickRow?.(rowData, index)
  }

  return (
    <tbody className={styles.tbody__tbody}>
      {data.map((row, index) => (
        <tr
          key={`row-${index}`}
          onClick={() => handleRowClick(row, index)}
          className={selectedRowIndex === index ? selectedRowClassName : ''}>
          {Object.keys(row).map((key, cellIndex) => (
            <td
              className={`${styles.tbody__td} ${classNames?.td || ''}`}
              key={`cell-${cellIndex}`}>
              <div
                className={`${styles.tbody__td__content} ${styles[(alignItems?.[key] as any) ?? 'center']}`}>
                {row[key] !== undefined && row[key] !== null
                  ? row[key]
                  : fallbackText}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
