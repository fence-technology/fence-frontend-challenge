import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ArrowRightIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={style?.width || '24'}
    height={style?.height || '24'}
    viewBox="0 0 24 24"
    style={style}
    className={className}
    fill="none">
    <path
      d="M5 12H17"
      stroke={style?.stroke || '#EAECF0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8.40001L18.6 12L15 15.6"
      stroke={style?.stroke || '#EAECF0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowRightIcon
