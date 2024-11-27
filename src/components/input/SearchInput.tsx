import Icons from '@/components/icons/Icon'
import { useDebounce } from '@/hooks/use-debounce'
import { useEffect, useState } from 'react'
import styles from './search-input.module.scss'

interface SearchInputProps {
  placeholder: string
  onChange?: (value: string) => void
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const [value, setValue] = useState('')
  const { value: debouncedValue } = useDebounce({ timer: 300, value })

  useEffect(() => {
    if (onChange) {
      onChange(debouncedValue)
    }
  }, [debouncedValue, onChange])

  return (
    <div className={styles.wrap}>
      <Icons src="SearchIcon" style={{ width: '16px', height: '16px' }} />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
