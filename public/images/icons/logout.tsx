import React from 'react'

interface Props {
  className?: string
}
export const LogoutIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2.33333C1 1.6 1.6 1 2.33333 1H7.66667V2.33333H2.33333V11.6667H7.66667V13H2.33333C1.6 13 1 12.4 1 11.6667V2.33333ZM10.4507 6.33333L8.76 4.64267L9.70267 3.7L13.0027 7L9.70267 10.3L8.76 9.35733L10.4507 7.66667H6.06V6.33333H10.4507Z"
        stroke="#7D838E"
        strokeWidth="0.3"
      />
    </svg>
  )
}
