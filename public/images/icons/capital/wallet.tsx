import React from 'react'

interface Props {
  className?: string
}
export const WalletIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      className={className}>
      <path
        d="M14.7105 3.56667V1.66667C14.7105 0.75 14 0 13.1316 0H2.07895C1.20263 0 0.5 0.75 0.5 1.66667V13.3333C0.5 14.25 1.20263 15 2.07895 15H13.1316C14 15 14.7105 14.25 14.7105 13.3333V11.4333C15.1763 11.1417 15.5 10.6167 15.5 10V5C15.5 4.38333 15.1763 3.85833 14.7105 3.56667ZM13.9211 5V10H8.39474V5H13.9211ZM2.07895 13.3333V1.66667H13.1316V3.33333H8.39474C7.52632 3.33333 6.81579 4.08333 6.81579 5V10C6.81579 10.9167 7.52632 11.6667 8.39474 11.6667H13.1316V13.3333H2.07895Z"
        fill="#00A2FF"
      />
    </svg>
  )
}
