import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const SearchInput: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}>
    <g clipPath="url(#clip0_1_2397)">
      <path
        fill={style?.fill || '#BFBFBF'}
        d="M7.66634 14.5002C3.89967 14.5002 0.833008 11.4335 0.833008 7.66683C0.833008 3.90016 3.89967 0.833496 7.66634 0.833496C11.433 0.833496 14.4997 3.90016 14.4997 7.66683C14.4997 11.4335 11.433 14.5002 7.66634 14.5002ZM7.66634 1.8335C4.44634 1.8335 1.83301 4.4535 1.83301 7.66683C1.83301 10.8802 4.44634 13.5002 7.66634 13.5002C10.8863 13.5002 13.4997 10.8802 13.4997 7.66683C13.4997 4.4535 10.8863 1.8335 7.66634 1.8335Z"
      />
      <path
        fill={style?.fill || '#BFBFBF'}
        d="M14.6668 15.1666C14.5401 15.1666 14.4134 15.12 14.3134 15.02L12.9801 13.6866C12.8871 13.5925 12.835 13.4656 12.835 13.3333C12.835 13.201 12.8871 13.0741 12.9801 12.98C13.1734 12.7866 13.4934 12.7866 13.6868 12.98L15.0201 14.3133C15.2134 14.5066 15.2134 14.8266 15.0201 15.02C14.9201 15.12 14.7934 15.1666 14.6668 15.1666Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2397">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default SearchInput
