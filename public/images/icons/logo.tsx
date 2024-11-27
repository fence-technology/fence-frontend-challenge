import React from 'react'

interface Props {
  className?: string
  type?: 'simple' | 'text'
  color?: string
}
export const Logo: React.FC<Props> = ({
  className,
  type = 'text',
  color
}: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="159"
      height="32"
      viewBox="0 0 159 32"
      fill="none">
      <g clipPath="url(#clip0_1727_613)">
        <path
          d="M15.3359 0.354431H27.2639V8.14411H7.78968V7.90068C7.78968 3.7332 11.1685 0.354431 15.3359 0.354431ZM0 19.8286H23.369V12.0389H0V19.8286ZM11.6845 23.2366C9.26436 23.2366 7.30282 25.1982 7.30282 27.6183C7.30282 30.0385 9.26436 32 11.6845 32C14.1047 32 16.0662 30.0385 16.0662 27.6183C16.0662 25.1982 14.1047 23.2366 11.6845 23.2366Z"
          fill={color || '#00A2FF'}
        />
        <path
          style={{
            transition: '0.3s all ease-in-out',
            opacity: type === 'text' ? 1 : 0
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.7689 5.25206C50.769 5.25211 50.7692 5.25215 50.7693 5.25219H50.7689L50.7689 5.25206ZM49.0624 5.03359C49.5876 5.03359 50.2874 5.12068 50.7689 5.25206L51.6442 0.393866C50.4626 0.0876339 49.412 0 48.2742 0C45.3857 0 43.154 1.05063 41.6656 2.49464C40.1773 3.93866 39.3896 5.9961 39.3896 9.40993V10.0915H33.5381V14.906H39.3896V31.5131H45.0795V14.906H51.0649V10.0915H45.0795V9.62902C45.0795 7.65969 45.3857 6.87196 45.8672 6.25901C46.5678 5.42746 47.6617 5.03359 49.0624 5.03359ZM108.231 20.9212C108.231 24.2479 110.638 26.6987 114.096 26.6987C116.415 26.6987 118.254 25.298 119.173 23.8973L123.55 27.1802C121.055 30.5064 117.904 31.9509 113.921 31.9509C107.356 31.9509 102.541 27.0925 102.541 20.9212C102.541 14.7498 107.487 9.84766 113.965 9.84766C117.641 9.84766 120.924 11.5546 122.894 14.093L118.867 17.6383C117.728 16.1505 116.022 15.0998 113.965 15.0998C110.682 15.0998 108.231 17.5945 108.231 20.9212ZM53.8633 20.9217C53.8633 15.0127 57.8896 9.84814 64.1924 9.84814C70.057 9.84814 74.2153 14.7936 74.2153 20.7026C74.2153 21.2712 74.1715 21.8404 74.0838 22.3219H59.3779C59.6841 25.2985 62.0916 27.3554 65.1116 27.3554C67.5191 27.3554 69.4446 25.9991 70.4514 24.9046L73.6904 28.1437C71.6335 30.5945 68.2635 31.9514 64.9806 31.9514C58.634 31.9514 53.8633 27.5745 53.8633 20.9217ZM64.1924 14.4436C61.8287 14.4436 59.9027 16.2381 59.6403 18.1641H68.394C68.2192 16.2819 66.5561 14.4436 64.1924 14.4436ZM88.5088 9.84814C82.9007 9.84814 78.3545 13.8262 78.3545 18.7332V31.5132H84.0444V20.2649C84.0444 17.3331 85.0653 15.1003 88.5088 15.1003C91.9523 15.1003 92.9733 17.3331 92.9733 20.2649V31.5132H98.6632V18.7332C98.6632 13.8262 94.1169 9.84814 88.5088 9.84814ZM153.877 23.2366C156.297 23.2366 158.259 25.1983 158.259 27.6183C158.259 30.0382 156.297 32 153.877 32C151.457 32 149.495 30.0382 149.495 27.6183C149.495 25.1983 151.457 23.2366 153.877 23.2366ZM135.778 9.84814C129.476 9.84814 125.449 15.0127 125.449 20.9217C125.449 27.5745 130.22 31.9514 136.567 31.9514C139.849 31.9514 143.219 30.5945 145.276 28.1437L142.037 24.9046C141.031 25.9991 139.105 27.3554 136.698 27.3554C133.678 27.3554 131.27 25.2985 130.964 22.3219H145.67C145.757 21.8404 145.801 21.2712 145.801 20.7026C145.801 14.7936 141.643 9.84814 135.778 9.84814ZM131.226 18.1641C131.489 16.2381 133.415 14.4436 135.778 14.4436C138.142 14.4436 139.805 16.2819 139.98 18.1641H131.226Z"
          fill={color || 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1727_613">
          <rect width="158.258" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
