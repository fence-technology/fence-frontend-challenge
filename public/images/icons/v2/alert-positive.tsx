import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const AlertPositiveIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 94 94"
    fill="none"
    className={className}>
    <circle cx="47" cy="47" r="47" fill="#23A26D" fillOpacity="0.12" />
    <path
      d="M47 24.5001C34.6025 24.5001 24.5 34.6026 24.5 47.0001C24.5 59.3976 34.6025 69.5001 47 69.5001C59.3975 69.5001 69.5 59.3976 69.5 47.0001C69.5 34.6026 59.3975 24.5001 47 24.5001ZM57.755 41.8251L44.9975 54.5826C44.6825 54.8976 44.255 55.0776 43.805 55.0776C43.355 55.0776 42.9275 54.8976 42.6125 54.5826L36.245 48.2151C35.5925 47.5626 35.5925 46.4826 36.245 45.8301C36.8975 45.1776 37.9775 45.1776 38.63 45.8301L43.805 51.0051L55.37 39.4401C56.0225 38.7876 57.1025 38.7876 57.755 39.4401C58.4075 40.0926 58.4075 41.1501 57.755 41.8251Z"
      fill={style?.fill || '#23A26D'}
    />
  </svg>
)

export default AlertPositiveIcon
