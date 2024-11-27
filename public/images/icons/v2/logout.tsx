import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const LogoutIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5.77778C4 4.8 4.79982 4 5.77738 4H12.8869V5.77778H5.77738V18.2222H12.8869V20H5.77738C4.79982 20 4 19.2 4 18.2222V5.77778ZM16.5981 11.1111L14.3444 8.85689L15.601 7.6L20 12L15.601 16.4L14.3444 15.1431L16.5981 12.8889H10.7452V11.1111H16.5981Z"
      fill={style?.fill || '#F0F0F0'}
      stroke={style?.fill || '#7D838E'}
      strokeWidth="0.3"
    />
  </svg>
)

export default LogoutIcon
