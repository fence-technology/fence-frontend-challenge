import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ArrowBackIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}>
    <path
      d="M6 12H18"
      stroke={style?.fill || '#EAECF0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.6 15.6L6 12L9.6 8.39999"
      stroke={style?.fill || '#EAECF0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowBackIcon
