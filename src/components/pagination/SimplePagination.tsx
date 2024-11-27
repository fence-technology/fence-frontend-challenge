import Icons from '@/components/icons/Icon'
import styles from './simple-pagination.module.scss'

interface SimplePaginationProps {
  currentPage: number
  totalPage: number
  onChangePage: (pageNumber: number) => void
}

export const SimplePagination = ({
  currentPage,
  totalPage,
  onChangePage
}: SimplePaginationProps) => {
  return (
    <div className={styles.wrap}>
      Page {currentPage} of {totalPage}
      <button
        disabled={currentPage === 1}
        className={styles.icon_left}
        onClick={() => onChangePage(currentPage - 1)}>
        <Icons
          src="ArrowForward"
          style={{
            fill: currentPage !== 1 ? '#00A2FF' : 'grey'
          }}
        />
      </button>
      <button
        disabled={currentPage === totalPage}
        className={styles.icon_right}
        onClick={() => onChangePage(currentPage + 1)}>
        <Icons
          src="ArrowForward"
          style={{
            fill: currentPage !== totalPage ? '#00A2FF' : 'grey'
          }}
        />
      </button>
    </div>
  )
}
