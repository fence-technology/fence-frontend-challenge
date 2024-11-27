import React, { CSSProperties } from 'react'

interface Props {
  filled?: boolean
  className?: string
  style?: CSSProperties
}

const CashIcon: React.FC<Props> = ({ filled = false, className, style }) =>
  filled ? (
    <svg
      width={style?.width || '24'}
      height={style?.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle
        cx="12"
        cy="12"
        r="8"
        fill={style?.fill || 'white'}
        stroke={style?.stroke || 'white'}
        strokeWidth="1.5"
      />
      <path
        d="M13.7504 10.0915C13.7504 10.0915 13.0924 9.35795 12.025 9.44962C10.9577 9.5413 10.4432 10.197 10.4432 10.8546C10.4432 12.7724 13.7504 11.4433 13.7504 13.41C13.7504 14.4238 11.5566 15.1395 10.2495 13.9467"
        stroke="#101F35"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1558 8.16L12.1558 9.4417"
        stroke="#101F35"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.1558 14.5583L12.1558 15.84"
        stroke="#101F35"
        strokeWidth="1.5"
        strokeLinecap="round"
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
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={style?.stroke || 'white'}
        strokeWidth="1.5"
      />
      <path
        d="M13.7504 10.0915C13.7504 10.0915 13.0924 9.35795 12.025 9.44962C10.9577 9.5413 10.4432 10.197 10.4432 10.8546C10.4432 12.7724 13.7504 11.4433 13.7504 13.41C13.7504 14.4238 11.5566 15.1395 10.2495 13.9467"
        stroke={style?.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1558 8.16L12.1558 9.44169"
        stroke={style?.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.1558 14.5583L12.1558 15.84"
        stroke={style?.stroke || 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )

export default CashIcon
