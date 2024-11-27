import React, { CSSProperties, ReactNode, useState } from 'react'
import Icons from '../icons/Icon'
import styles from './filter.module.scss'

interface BaseFilterProps {
  children: ReactNode
  filterClass?: string
  clearFiltersClass?: string
  FilterTextClass?: CSSProperties
  contentFilter?: string
  iconFilter?: boolean
  onClear: () => void
  isCollapsed?: boolean
  toggleCollapse?: () => void
  isBorderNone?: boolean
}

const BaseFilterComponent: React.FC<BaseFilterProps> = ({
  children,
  filterClass,
  clearFiltersClass,
  FilterTextClass,
  contentFilter = 'Filter ',
  iconFilter = false,
  onClear,
  isCollapsed = true,
  toggleCollapse,
  isBorderNone
}) => {
  const [isOpen, setIsOpen] = useState(!isCollapsed)

  const toggleFilter = () => {
    setIsOpen(!isOpen)
    if (toggleCollapse) {
      toggleCollapse()
    }
  }

  const onHandleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClear()
  }

  return (
    <div
      className={`${styles.filterContainer} ${isBorderNone ? styles.border_none : ''}`}>
      <div className={styles.filterHeader} onClick={toggleFilter}>
        <div className={styles.filterHeader__text}>
          {iconFilter && (
            <Icons
              src="Filters"
              style={{ height: '20px', width: '20px', fill: '#344054' }}
            />
          )}
          <h2 style={FilterTextClass}>{contentFilter}&nbsp;</h2>
        </div>
        {isOpen && (
          <button
            className={`${styles.clearButton} ${clearFiltersClass}`}
            onClick={onHandleClear}>
            Clear all
          </button>
        )}
      </div>
      {isOpen && (
        <div className={`${styles.filterContent} ${filterClass}`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default BaseFilterComponent
