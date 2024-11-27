import React from 'react'

interface Props {
  className?: string
}
export const CheckMarkIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M9.70007 0.5C4.45132 0.5 0.200073 4.75125 0.200073 10C0.200073 15.2487 4.45132 19.5 9.70007 19.5C14.9488 19.5 19.2001 15.2487 19.2001 10C19.2001 4.75125 14.9488 0.5 9.70007 0.5ZM14.4501 4.7275L16.1601 6.4375L8.51257 14.085L4.42757 10L6.13757 8.29L8.51257 10.665L14.4501 4.7275Z"
        fill="#20C997"
      />
    </svg>
  )
}
