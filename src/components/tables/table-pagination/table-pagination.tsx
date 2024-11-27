'use client'

import React from 'react'

import { createRange } from '@/utils/create-range'
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5'
import styles from './table-pagination.module.scss'

interface Props {
  className?: string
  currentPage: number
  totalResults: number
  perPage?: number
  onPageChange: (pageNumber: number) => void
}

const padding = 2
const maxButtons = padding * 2 + 1

export const TablePagination: React.FC<Props> = ({
  currentPage,
  totalResults,
  onPageChange,
  perPage = 20,
  className
}) => {
  const numberOfPages = Math.ceil(totalResults / perPage)
  let pages = createRange(1, numberOfPages)
  const prevPage = currentPage > 1 ? currentPage - 1 : currentPage
  const nextPage = currentPage < numberOfPages ? currentPage + 1 : numberOfPages

  if (numberOfPages > maxButtons) {
    if (currentPage - padding <= 0) {
      // show first 5
      pages = createRange(1, maxButtons)
    } else if (currentPage + padding > numberOfPages) {
      // show last 5

      pages = createRange(currentPage - maxButtons + 1, numberOfPages)
    } else {
      // show from curr - pad to curr + pad
      pages = createRange(currentPage - padding, currentPage + padding)
    }
  }

  const handleButtonClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <div className={styles.table_pagination__container}>
      <div className={`${styles.table_pagination} ${className}`}>
        <IoChevronBackOutline
          onClick={(event) => {
            event.preventDefault()
            handleButtonClick(prevPage)
          }}
          className={styles.table_pagination__arrow}
        />

        {numberOfPages > maxButtons && pages[0] !== 1 && (
          <>
            <div
              role="button"
              aria-label="First page"
              onClick={(event) => {
                event.preventDefault()
                handleButtonClick(1)
              }}>
              1
            </div>
            <div className={styles.table_pagination__dots}></div>
          </>
        )}

        {pages.map((pageNumber) => (
          <div
            role="button"
            key={pageNumber}
            aria-label={`Page ${pageNumber}`}
            className={`
            ${styles.table_pagination__page}
            ${currentPage === pageNumber ? styles.table_pagination__page_selected : ''}
          `}
            onClick={(event) => {
              event.preventDefault()
              handleButtonClick(pageNumber)
            }}>
            {pageNumber}
          </div>
        ))}

        {numberOfPages > maxButtons &&
          pages[pages.length - 1] !== numberOfPages && (
            <>
              <div className={styles.table_pagination__dots}></div>
              <div
                role="button"
                aria-label="Last page"
                onClick={(event) => {
                  event.preventDefault()
                  handleButtonClick(numberOfPages)
                }}>
                {numberOfPages}
              </div>
            </>
          )}

        <IoChevronForward
          onClick={(event) => {
            event.preventDefault()
            handleButtonClick(nextPage)
          }}
          className={styles.table_pagination__arrow}
        />
      </div>
    </div>
  )
}
