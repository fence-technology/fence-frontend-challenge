'use client'
import React, { useState } from 'react'
import Badge from '../badge/Badge'
import styles from './filter-split.module.scss'

interface IVariants {
  [key: string]: string
}

interface Props {
  onClear: () => void
  variants?: IVariants
  selected?: string[]
  events?: {
    onChange?: (item: string) => void
  }
}

const FilterSplitComponent: React.FC<Props> = ({
  onClear,
  events,
  variants = {},
  selected = []
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilter = () => setIsOpen(!isOpen)

  const onHandleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClear()
  }
  const onHandleButton = (event: string) => {
    events?.onChange?.(event)
  }

  const headersVariants = Object.keys(variants)

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader} onClick={toggleFilter}>
        <div className={styles.filterHeader__text}>
          <h2>Split by</h2>
          <span
            className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}></span>
        </div>
        <button className={styles.clearButton} onClick={onHandleClear}>
          Clear segmentation
        </button>
      </div>
      {isOpen && (
        <div className={styles.filterContent}>
          <p className={styles.filterContent__subtitle}>Variables</p>
          <div className={styles.filterContent__badge}>
            {headersVariants.map((item: string, index: number) => {
              return (
                <Badge
                  key={`asset-portfolio-badge-${item}-${index}`}
                  nameKey={item}
                  content={variants[item]}
                  containerClass={`${styles.badge} ${selected.includes(item) ? styles.badge__selected : styles.badge__no_selected}`}
                  actionButton={{
                    actionBadge(event) {
                      onHandleButton(event)
                    }
                  }}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterSplitComponent
