import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}
export const ArchiveBookIcon: React.FC<Props> = ({
  className,
  style
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}>
      <path
        d="M15.75 5.25V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V5.25C2.25 3 3.375 1.5 6 1.5H12C14.625 1.5 15.75 3 15.75 5.25Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={style?.stroke || 'white'}
      />
      <path
        d="M9.9375 10.5H13.125M6.75 13.5H13.125M11.625 1.5V7.395C11.625 7.725 11.235 7.89 10.995 7.6725L9.255 6.0675C9.18599 6.00253 9.09478 5.96635 9 5.96635C8.90522 5.96635 8.81401 6.00253 8.745 6.0675L7.005 7.6725C6.765 7.89 6.375 7.725 6.375 7.395V1.5H11.625Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={style?.stroke || 'white'}
      />
    </svg>
  )
}
