import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const FiltersIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    className={className}>
    <path
      d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
      stroke={style?.fill || 'white'}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default FiltersIcon
