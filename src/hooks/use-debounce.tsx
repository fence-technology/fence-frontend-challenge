import React from 'react'

interface UseDebounceProps {
  timer: number
  value: string
}
export const useDebounce = ({ timer, value }: UseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value)
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, timer)
    return () => {
      clearTimeout(handler)
    }
  }, [value, timer])

  return { value: debouncedValue }
}
