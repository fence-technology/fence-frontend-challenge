import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const CollectionsIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.00001 19.58V6.42001C6.00001 5.62436 6.31608 4.8613 6.87869 4.29869C7.4413 3.73608 8.20436 3.42001 9.00001 3.42001H15C15.7957 3.42001 16.5587 3.73608 17.1213 4.29869C17.6839 4.8613 18 5.62436 18 6.42001V19.58C18.0009 19.7609 17.9527 19.9387 17.8605 20.0944C17.7683 20.2501 17.6356 20.3778 17.4765 20.4641C17.3174 20.5503 17.1379 20.5917 16.9572 20.5839C16.7764 20.5762 16.6011 20.5195 16.45 20.42L12 17.42L7.55001 20.42C7.3989 20.5195 7.22363 20.5762 7.04286 20.5839C6.86209 20.5917 6.68261 20.5503 6.52353 20.4641C6.36446 20.3778 6.23175 20.2501 6.13956 20.0944C6.04736 19.9387 5.99914 19.7609 6.00001 19.58Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default CollectionsIcon
