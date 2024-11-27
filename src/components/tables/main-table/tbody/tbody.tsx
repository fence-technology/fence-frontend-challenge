import React, { useState } from 'react'
import { TTableActions, TTableSize, TableData } from '../main-table'
import { TableActions } from '../table-actions/table-actions'
import { TableHead } from '../thead/thead'
import styles from './tbody.module.scss'

interface Props {
  thead: TableHead[]
  data: TableData[]
  size?: TTableSize
  actions?: TTableActions
  onClickRow?: (rowData: any, index: number) => void
  selectedRowClassName?: string
  classNames?: {
    td?: string
    tdAction?: string
  }
}

export const TBody: React.FC<Props> = ({
  data,
  thead,
  size,
  onClickRow,
  actions = [],
  selectedRowClassName,
  classNames
}) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>()
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
          className={` ${selectedRowIndex === index ? selectedRowClassName : ''}`}>
          {actions
            .filter((action) => action.position === 'left')
            .map((action, actionIndex) => (
              <td
                key={`action-left-${actionIndex}`}
                className={`${styles.tbody__td__actions} ${action.className || ''}`}>
                <TableActions actions={[action]} row={row} rowIndex={index} />
              </td>
            ))}

          {thead.map((head, headIndex) => (
            <td
              className={`
               ${size === 'default' ? styles.tbody__td : styles.tbody__td_small}
               ${classNames?.td || ''}
              `}
              key={`column-${headIndex}`}>
              <div className={styles.tbody__td__content}>
                {row[head.value] || row[head.value] === 0
                  ? row[head.value]
                  : '-'}
              </div>
            </td>
          ))}

          {actions
            .filter((action) => action.position === 'right')
            .map((action, actionIndex) => (
              <td
                key={`action-right-${actionIndex}`}
                className={`${styles.tbody__td__actions} ${action.className || ''}`}>
                <TableActions actions={[action]} row={row} rowIndex={index} />
              </td>
            ))}
        </tr>
      ))}
    </tbody>
  )
}
