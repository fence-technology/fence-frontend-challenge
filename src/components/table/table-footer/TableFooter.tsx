'use client'

import React from 'react'
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5'
import styles from './table-footer.module.scss'

interface Props {
  className?: string
  currentPage: number
  totalResults: number
  perPage?: number
  onPageChange: (pageNumber: number) => void
}

const TableFooter: React.FC<Props> = ({
  currentPage,
  totalResults,
  onPageChange,
  perPage = 20,
  className
}) => {
  const numberOfPages = Math.ceil(totalResults / perPage) || 1
  const prevPage = currentPage > 1 ? currentPage - 1 : currentPage
  const nextPage = currentPage < numberOfPages ? currentPage + 1 : numberOfPages

  const handleButtonClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className={`${styles.table_pagination__container} ${className}`}>
      <div className={styles.table_pagination}>
        <div className={styles.table_pagination__text}>
          Page {currentPage} of {numberOfPages}
        </div>
        <div className={styles.table_pagination__arrow}>
          <IoChevronBackOutline
            onClick={(event) => {
              event.preventDefault()
              handleButtonClick(prevPage)
            }}
          />
          <IoChevronForward
            onClick={(event) => {
              event.preventDefault()
              handleButtonClick(nextPage)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default TableFooter
