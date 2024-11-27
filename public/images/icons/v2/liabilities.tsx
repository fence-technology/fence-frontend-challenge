import React, { CSSProperties } from 'react'

interface Props {
  filled?: boolean
  className?: string
  style?: CSSProperties
}

const LiabilitiesIcon: React.FC<Props> = ({
  filled = false,
  className,
  style
}) =>
  filled ? (
    <svg
      width={style?.width || '24'}
      height={style?.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M18.75 8.25V15.75C18.75 18 17.625 19.5 15 19.5H9C6.375 19.5 5.25 18 5.25 15.75V8.25C5.25 6 6.375 4.5 9 4.5H15C17.625 4.5 18.75 6 18.75 8.25Z"
        fill={style?.fill || 'white'}
        stroke={style?.fill || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 6.375V7.875C13.875 8.7 14.55 9.375 15.375 9.375H16.875M9 12.75H12M9 15.75H15"
        stroke={style?.stroke || '#101F35'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={style?.width || '24'}
      height={style?.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M18.75 8.25V15.75C18.75 18 17.625 19.5 15 19.5H9C6.375 19.5 5.25 18 5.25 15.75V8.25C5.25 6 6.375 4.5 9 4.5H15C17.625 4.5 18.75 6 18.75 8.25Z"
        stroke={style?.fill || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.875 6.375V7.875C13.875 8.7 14.55 9.375 15.375 9.375H16.875M9 12.75H12M9 15.75H15"
        stroke={style?.fill || 'white'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

export default LiabilitiesIcon
