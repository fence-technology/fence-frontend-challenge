import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ArrowUpIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}>
    <path
      d="M18 14.4692L12.5308 9L7.06158 14.4692L8.41667 15.8243L12.5308 11.7102L16.6449 15.8243L18 14.4692Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default ArrowUpIcon
