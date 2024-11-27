'use client'
import React, { CSSProperties, ReactNode, useState } from 'react'
import Icons from '../icons/Icon'
import Input from '../input/Input'
import styles from './filter.module.scss'

interface Props {
  children: ReactNode
  filterClass?: string
  clearFiltersClass?: string
  FilterTextClass?: CSSProperties
  contentFilter?: string
  iconFilter?: boolean
  onClear: () => void
}

interface IOption {
  [key: string]: string
}

export type OptionFilter = {
  content: string
  nameKey: string
}

export type FilterSection = {
  title: string
  filterKey: string
  isUnique?: boolean
  options: OptionFilter[]
  position?: number
  type?: FilterOptionType
  placeholder?: string
}

export type FilterOptionType = 'select' | 'text' | 'currency' | 'children'

interface FilterOptionProps {
  title: string
  option?: IOption
  optionClass?: string
  containerClass?: string
  type?: FilterOptionType
  children?: ReactNode
  placeholder?: string
  selected?: string
  events?: {
    onChange?: (event: any) => void
    onChangeBadge?: (event: any) => void
  }
}

interface FilterOption {
  label: string
  placeholder: string
}

const FilterComponent: React.FC<Props> & {
  Option: React.FC<FilterOptionProps>
} = ({
  children,
  filterClass,
  clearFiltersClass,
  FilterTextClass,
  contentFilter = 'Filter by',
  iconFilter = true,
  onClear
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilter = () => setIsOpen(!isOpen)

  const onHandleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClear()
  }
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterHeader} onClick={toggleFilter}>
        <div className={styles.filterHeader__text}>
          <div>
            {iconFilter && (
              <Icons
                src="Filters"
                style={{ height: '20px', width: '20px', fill: '#344054' }}
              />
            )}
          </div>
          <h2 style={FilterTextClass}>{contentFilter}</h2>
          <span
            className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}></span>
        </div>
        <button
          className={`${styles.clearButton} ${clearFiltersClass}`}
          onClick={onHandleClear}>
          Clear all filters
        </button>
      </div>
      {isOpen && (
        <div className={`${styles.filterContent} ${filterClass}`}>
          {children}
        </div>
      )}
    </div>
  )
}

const FilterOption: React.FC<FilterOptionProps> = ({
  title,
  option = {},
  selected = '',
  optionClass,
  containerClass,
  placeholder = '',
  children,
  type = 'select',
  events
}) => {
  const handleChange = (event: any) => {
    events?.onChange?.(event)
  }

  const headersOption = Object.keys(option)

  return (
    <div className={`${styles.filterOption} ${containerClass}`}>
      <label>{title}:</label>
      {type === 'select' && (
        <div className={`${styles.filterOption__input_select} ${optionClass}`}>
          <select onChange={handleChange} value={selected}>
            <option value={''} disabled hidden>
              Search {title}
            </option>
            {headersOption.length > 0 &&
              headersOption.map((item, index) => (
                <option key={`${item}-${index}-option`} value={item}>
                  {option[item]}
                </option>
              ))}
          </select>
          <div className={styles.filterOption__input_select__arrow}>
            <Icons src="ArrowDown" style={{ fill: '#BFBFBF' }} />
          </div>
        </div>
      )}
      {(type === 'text' || type === 'currency') && (
        <Input
          type={type === 'text' ? 'basic' : 'currency'}
          placeholder={placeholder}
          title=""
          className={`${styles.container_input} ${optionClass}`}
          events={{
            onChange(event) {
              handleChange(event)
            }
          }}
          debounceOnChange={1000}
          initValue={selected}
        />
      )}
      {type === 'children' && children && children}
    </div>
  )
}

FilterComponent.Option = FilterOption

export default FilterComponent
