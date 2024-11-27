import { LoaderLine } from '@/components/loaders/loader-line/loader-line'
import React from 'react'
import { MainTable, TTableActions, TableData } from '../main-table/main-table'
import styles from './list-table.module.scss'

interface Props {
  className?: string
  data: TableData[]
  actions?: TTableActions
}

const thead = [
  {
    label: '',
    value: 'label'
  },
  {
    label: '',
    value: 'value'
  }
]

export const ListTable: React.FC<Props> = ({ className, data, actions }) => {
  return (
    <MainTable
      className={`${styles.list_table__table} ${className}`}
      thead={thead}
      data={data}
      actions={actions}
      showTHead={false}
    />
  )
}

interface PlaceholderProps {
  rows?: number
  className?: string
}

export const ListTablePlaceholder: React.FC<PlaceholderProps> = ({
  className,
  rows = 5
}) => {
  const data = new Array(rows).fill({
    label: <LoaderLine />,
    value: <LoaderLine />
  })

  return (
    <MainTable
      className={`${styles.list_table__table} ${className}`}
      thead={thead}
      data={data}
      showTHead={false}
    />
  )
}
