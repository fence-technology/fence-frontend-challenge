import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const MinusIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}>
    <path
      d="M17 12.75H7C6.80109 12.75 6.61032 12.671 6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697C6.61032 11.329 6.80109 11.25 7 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default MinusIcon
