import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const CloseModal: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    style={style}
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill={style?.fill || '#CACACA'}
      d="M2.06485 0.268485C1.70687 -0.0894952 1.12647 -0.0894952 0.768486 0.268485C0.410505 0.626466 0.410505 1.20687 0.768486 1.56485L4.70364 5.5L0.768485 9.43515C0.410505 9.79313 0.410505 10.3735 0.768486 10.7315C1.12647 11.0895 1.70687 11.0895 2.06485 10.7315L6 6.79636L9.93515 10.7315C10.2931 11.0895 10.8735 11.0895 11.2315 10.7315C11.5895 10.3735 11.5895 9.79313 11.2315 9.43515L7.29636 5.5L11.2315 1.56485C11.5895 1.20687 11.5895 0.626466 11.2315 0.268485C10.8735 -0.089495 10.2931 -0.089495 9.93515 0.268485L6 4.20364L2.06485 0.268485Z"
    />
  </svg>
)

export default CloseModal
