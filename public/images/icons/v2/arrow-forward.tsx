import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ArrowForwardIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}>
    <mask
      id="mask0_2232_24043"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="17">
      <rect y="0.527832" width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2232_24043)">
      <path
        fill={style?.fill || '#00A2FF'}
        d="M5.35033 15.1947L4.16699 14.0113L9.65033 8.52799L4.16699 3.04466L5.35033 1.86133L12.017 8.52799L5.35033 15.1947Z"
      />
    </g>
  </svg>
)

export default ArrowForwardIcon
