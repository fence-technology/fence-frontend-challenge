'use client'

import { LoaderLine } from '@/components/loaders/loader-line/loader-line'
import React from 'react'
import { NoResultsIcon } from '../../../../public/images/icons/no-results'
import styles from './main-table.module.scss'
import { TBody } from './tbody/tbody'
import { THead, TableHead } from './thead/thead'

export type TTableOrder = 'ASC' | 'DESC' | 'DEFAULT'
export type TTableSize = 'default' | 'small'

export type TableData = {
  [key: string]: string | React.ReactNode
}

export type TTableAction = {
  onClick: (row: any) => void
  icon: React.ReactNode
  position: 'left' | 'right'
  className?: string
  if?: (row: any) => boolean
}

export type TTableActions = TTableAction[]

interface Props {
  className?: string
  thead: TableHead[]
  showTHead?: boolean
  data: TableData[]
  size?: TTableSize
  actions?: TTableActions
  onClickRow?: (rowData: any) => void
  selectedRowClassName?: string
  loading?: boolean
  loadingRows?: number
  classNames?: {
    td?: string
    tdAction?: string
  }
}

export const MainTable: React.FC<Props> = ({
  thead,
  data,
  onClickRow,
  actions,
  showTHead = true,
  className,
  size = 'default',
  selectedRowClassName,
  loading,
  loadingRows = 5,
  classNames
}) => {
  let loadingData = []

  if (loading) {
    const arrayPlaceholder = thead.map((element, index) => {
      return [element.value, <LoaderLine key={index} />]
    })
    const placeholder = Object.fromEntries(arrayPlaceholder)
    loadingData = new Array(loadingRows).fill(placeholder)
  }

  return (
    <div className={`${styles.main_table__container} ${className}`}>
      <div className={styles.main_table__wrapper}>
        <table className={styles.main_table}>
          {showTHead && <THead thead={thead} actions={actions} size={size} />}

          <TBody
            selectedRowClassName={selectedRowClassName}
            thead={thead}
            data={loading ? loadingData : data}
            size={size}
            onClickRow={onClickRow}
            actions={actions}
            classNames={classNames}
          />
        </table>

        {data.length === 0 && !loading && (
          <div className={styles.main_table__no_results}>
            <NoResultsIcon />
            <p className={styles.main_table__no_results__text}>
              No results found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
