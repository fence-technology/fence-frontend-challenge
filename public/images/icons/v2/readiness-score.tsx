import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ReadinessScoreIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={style?.width || 24}
    height={style?.height || 24}
    viewBox="0 0 24 24"
    className={className}
    fill="none">
    <mask
      id="mask0_771_73"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24">
      <rect width="24" height="24" fill={style?.fill || '#D9D9D9'} />
    </mask>
    <g mask="url(#mask0_771_73)">
      <path
        d="M7.375 21.025C6.775 21.0083 6.20417 20.8542 5.6625 20.5625C5.12083 20.2708 4.60833 19.8417 4.125 19.275C3.45833 18.475 2.9375 17.5208 2.5625 16.4125C2.1875 15.3042 2 14.1667 2 13C2 11.6167 2.2625 10.3167 2.7875 9.1C3.3125 7.88333 4.025 6.825 4.925 5.925C5.825 5.025 6.88333 4.3125 8.1 3.7875C9.31667 3.2625 10.6167 3 12 3C13.3833 3 14.6833 3.26667 15.9 3.8C17.1167 4.33333 18.175 5.05833 19.075 5.975C19.975 6.89167 20.6875 7.96667 21.2125 9.2C21.7375 10.4333 22 11.7583 22 13.175C22 14.4583 21.7917 15.6583 21.375 16.775C20.9583 17.8917 20.3667 18.8333 19.6 19.6C19.1333 20.0667 18.6417 20.4208 18.125 20.6625C17.6083 20.9042 17.0833 21.025 16.55 21.025C16.25 21.025 15.95 20.9875 15.65 20.9125C15.35 20.8375 15.05 20.725 14.75 20.575L13.35 19.875C13.15 19.775 12.9375 19.7 12.7125 19.65C12.4875 19.6 12.25 19.575 12 19.575C11.75 19.575 11.5125 19.6 11.2875 19.65C11.0625 19.7 10.85 19.775 10.65 19.875L9.25 20.575C8.93333 20.7417 8.62083 20.8625 8.3125 20.9375C8.00417 21.0125 7.69167 21.0417 7.375 21.025ZM7.425 19.025C7.575 19.025 7.72917 19.0083 7.8875 18.975C8.04583 18.9417 8.2 18.8833 8.35 18.8L9.75 18.1C10.1 17.9167 10.4625 17.7833 10.8375 17.7C11.2125 17.6167 11.5917 17.575 11.975 17.575C12.3583 17.575 12.7417 17.6167 13.125 17.7C13.5083 17.7833 13.875 17.9167 14.225 18.1L15.65 18.8C15.8 18.8833 15.95 18.9417 16.1 18.975C16.25 19.0083 16.4 19.025 16.55 19.025C16.8667 19.025 17.1667 18.9417 17.45 18.775C17.7333 18.6083 18.0167 18.3583 18.3 18.025C18.8333 17.3917 19.25 16.6333 19.55 15.75C19.85 14.8667 20 13.9583 20 13.025C20 10.7917 19.225 8.89583 17.675 7.3375C16.125 5.77917 14.2333 5 12 5C9.76667 5 7.875 5.78333 6.325 7.35C4.775 8.91667 4 10.8167 4 13.05C4 14 4.15417 14.925 4.4625 15.825C4.77083 16.725 5.2 17.4833 5.75 18.1C6.03333 18.4333 6.30833 18.6708 6.575 18.8125C6.84167 18.9542 7.125 19.025 7.425 19.025ZM12 15C12.55 15 13.0208 14.8042 13.4125 14.4125C13.8042 14.0208 14 13.55 14 13C14 12.8667 13.9875 12.7333 13.9625 12.6C13.9375 12.4667 13.9 12.3333 13.85 12.2L15.1 10.525C15.2667 10.7417 15.4125 10.9708 15.5375 11.2125C15.6625 11.4542 15.7667 11.7167 15.85 12H17.9C17.65 10.5333 16.9708 9.33333 15.8625 8.4C14.7542 7.46667 13.4667 7 12 7C10.5333 7 9.24167 7.47083 8.125 8.4125C7.00833 9.35417 6.33333 10.55 6.1 12H8.15C8.38333 11.1 8.85833 10.375 9.575 9.825C10.2917 9.275 11.1 9 12 9C12.2833 9 12.55 9.025 12.8 9.075C13.05 9.125 13.2917 9.2 13.525 9.3L12.25 11.025C12.2167 11.025 12.175 11.0208 12.125 11.0125C12.075 11.0042 12.0333 11 12 11C11.45 11 10.9792 11.1958 10.5875 11.5875C10.1958 11.9792 10 12.45 10 13C10 13.55 10.1958 14.0208 10.5875 14.4125C10.9792 14.8042 11.45 15 12 15Z"
        fill={style?.fill || '#F7F7F7'}
      />
    </g>
  </svg>
)

export default ReadinessScoreIcon