import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ArrowDownIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <path
      d="M6.96662 10.5309L12.4691 15.9666L17.9048 10.4641L16.5415 9.11735L12.4526 13.2565L8.31341 9.16757L6.96662 10.5309Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default ArrowDownIcon
