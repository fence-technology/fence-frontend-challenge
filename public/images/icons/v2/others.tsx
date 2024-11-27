import React, { CSSProperties } from 'react'

interface Props {
  filled?: boolean
  className?: string
  style?: CSSProperties
}

const OthersIcon: React.FC<Props> = ({ filled = false, className, style }) =>
  filled ? (
    <svg
      width={style?.width || '24'}
      height={style?.height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M11.2727 19.2727C6.85971 19.2727 3.27274 15.6858 3.27274 11.2727C3.27274 9.51645 3.83088 7.84947 4.88762 6.4504C5.07367 6.20482 5.42343 6.16017 5.66901 6.34622C5.9146 6.53226 5.96669 6.88203 5.78064 7.12761C4.87419 8.31902 4.38515 9.7757 4.38901 11.2727C4.38901 15.0681 7.47739 18.1564 11.2727 18.1564C15.0681 18.1564 18.1565 15.0681 18.1565 11.2727C18.1565 7.47738 15.0681 4.38901 11.2727 4.38901C10.9676 4.38901 10.7146 4.13598 10.7146 3.83087C10.7146 3.52575 10.9676 3.27273 11.2727 3.27273C15.6858 3.27273 19.2727 6.8597 19.2727 11.2727C19.2727 15.6858 15.6858 19.2727 11.2727 19.2727Z"
        fill={style?.fill || 'white'}
      />
      <path
        d="M11.2727 17.0402C8.09505 17.0402 5.50528 14.4504 5.50528 11.2727C5.50528 10.9676 5.7583 10.7146 6.06342 10.7146C6.36854 10.7146 6.62156 10.9676 6.62156 11.2727C6.62156 13.8402 8.70528 15.9239 11.2727 15.9239C13.8402 15.9239 15.9239 13.8402 15.9239 11.2727C15.9239 8.70529 13.8402 6.62157 11.2727 6.62157C10.9676 6.62157 10.7146 6.36854 10.7146 6.06343C10.7146 5.75831 10.9676 5.50529 11.2727 5.50529C14.4504 5.50529 17.0402 8.09505 17.0402 11.2727C17.0402 14.4504 14.4504 17.0402 11.2727 17.0402Z"
        fill={style?.fill || 'white'}
      />
      <path
        d="M11.2727 14.8076C10.9676 14.8076 10.7146 14.5546 10.7146 14.2495C10.7146 13.9444 10.9676 13.6913 11.2727 13.6913C12.6048 13.6913 13.6913 12.6048 13.6913 11.2727C13.6913 9.94064 12.6048 8.85413 11.2727 8.85413C10.9676 8.85413 10.7146 8.6011 10.7146 8.29599C10.7146 7.99087 10.9676 7.73785 11.2727 7.73785C13.2225 7.73785 14.8076 9.32296 14.8076 11.2727C14.8076 13.2225 13.2225 14.8076 11.2727 14.8076Z"
        fill={style?.fill || 'white'}
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
        d="M11.2727 19.2727C6.85971 19.2727 3.27274 15.6858 3.27274 11.2727C3.27274 9.51645 3.83088 7.84947 4.88762 6.4504C5.07367 6.20482 5.42343 6.16017 5.66901 6.34622C5.9146 6.53226 5.96669 6.88203 5.78064 7.12761C4.87419 8.31902 4.38515 9.7757 4.38901 11.2727C4.38901 15.0681 7.47739 18.1564 11.2727 18.1564C15.0681 18.1564 18.1565 15.0681 18.1565 11.2727C18.1565 7.47738 15.0681 4.38901 11.2727 4.38901C10.9676 4.38901 10.7146 4.13598 10.7146 3.83087C10.7146 3.52575 10.9676 3.27273 11.2727 3.27273C15.6858 3.27273 19.2727 6.8597 19.2727 11.2727C19.2727 15.6858 15.6858 19.2727 11.2727 19.2727Z"
        fill={style?.fill || 'white'}
      />
      <path
        d="M11.2727 17.0402C8.09505 17.0402 5.50528 14.4504 5.50528 11.2727C5.50528 10.9676 5.7583 10.7146 6.06342 10.7146C6.36854 10.7146 6.62156 10.9676 6.62156 11.2727C6.62156 13.8402 8.70528 15.9239 11.2727 15.9239C13.8402 15.9239 15.9239 13.8402 15.9239 11.2727C15.9239 8.70529 13.8402 6.62157 11.2727 6.62157C10.9676 6.62157 10.7146 6.36854 10.7146 6.06343C10.7146 5.75831 10.9676 5.50529 11.2727 5.50529C14.4504 5.50529 17.0402 8.09505 17.0402 11.2727C17.0402 14.4504 14.4504 17.0402 11.2727 17.0402Z"
        fill={style?.fill || 'white'}
      />
      <path
        d="M11.2727 14.8076C10.9676 14.8076 10.7146 14.5546 10.7146 14.2495C10.7146 13.9444 10.9676 13.6913 11.2727 13.6913C12.6048 13.6913 13.6913 12.6048 13.6913 11.2727C13.6913 9.94063 12.6048 8.85412 11.2727 8.85412C10.9676 8.85412 10.7146 8.6011 10.7146 8.29598C10.7146 7.99087 10.9676 7.73784 11.2727 7.73784C13.2225 7.73784 14.8076 9.32296 14.8076 11.2727C14.8076 13.2225 13.2225 14.8076 11.2727 14.8076Z"
        fill={style?.fill || 'white'}
      />
    </svg>
  )

export default OthersIcon
