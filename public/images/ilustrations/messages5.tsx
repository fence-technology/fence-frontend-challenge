import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const Messages5Ilustration: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="197"
    height="142"
    viewBox="0 0 197 142"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M124.339 42.1883C124.339 42.1883 103.322 68.8101 69.6939 52.9309C36.0661 37.0518 2.43881 80.0193 31.3956 106.174C60.3523 132.329 32.016 146.701 51.6884 162.73C74.0473 180.949 93.5133 144.005 111.261 152.412C150.432 170.966 179.45 163.621 172.912 142.137C161.434 104.424 146.757 101.971 157.966 82.3546C169.175 62.7385 144.437 21.9517 124.339 42.1883Z"
      fill="#DEE9FF"
    />
    <path
      d="M88.4313 125.718C88.4313 143.795 103.084 158.447 121.161 158.447C125.37 158.454 129.541 157.644 133.442 156.061C133.522 156.071 133.603 156.076 133.684 156.076H148.009C148.47 156.076 148.926 155.985 149.352 155.809C149.778 155.633 150.165 155.374 150.491 155.048C150.817 154.722 151.076 154.335 151.252 153.909C151.429 153.483 151.519 153.027 151.519 152.565V137.965C153.092 134.074 153.897 129.915 153.891 125.718C153.891 107.64 139.238 92.9879 121.161 92.9879C103.084 92.9879 88.4313 107.64 88.4313 125.718Z"
      fill="#A2BDFF"
    />
    <path
      d="M134.262 102.518C134.262 125.197 115.879 143.579 93.2007 143.579C87.9198 143.588 82.6874 142.571 77.7939 140.586C77.6932 140.597 77.5919 140.603 77.4904 140.603H59.5187C58.9403 140.604 58.3676 140.49 57.8332 140.269C57.2987 140.048 56.8132 139.723 56.4042 139.314C55.9952 138.905 55.6709 138.42 55.4497 137.885C55.2285 137.351 55.1148 136.778 55.1151 136.2V117.883C53.1417 113.001 52.1313 107.784 52.1397 102.518C52.1397 79.8397 70.5218 61.4576 93.2005 61.4576C115.879 61.4576 134.262 79.8394 134.262 102.518Z"
      fill="#418DF9"
    />
    <path
      d="M74.158 110.849C77.4445 110.849 80.1088 108.185 80.1088 104.898C80.1088 101.612 77.4445 98.9474 74.158 98.9474C70.8714 98.9474 68.2072 101.612 68.2072 104.898C68.2072 108.185 70.8714 110.849 74.158 110.849Z"
      fill="white"
    />
    <path
      d="M91.4149 110.849C94.7015 110.849 97.3657 108.185 97.3657 104.898C97.3657 101.612 94.7015 98.9474 91.4149 98.9474C88.1284 98.9474 85.4641 101.612 85.4641 104.898C85.4641 108.185 88.1284 110.849 91.4149 110.849Z"
      fill="white"
    />
    <path
      d="M109.268 110.849C112.554 110.849 115.219 108.185 115.219 104.898C115.219 101.612 112.554 98.9474 109.268 98.9474C105.981 98.9474 103.317 101.612 103.317 104.898C103.317 108.185 105.981 110.849 109.268 110.849Z"
      fill="white"
    />
    <path
      d="M127.715 82.8801C133.631 82.8801 138.427 78.0844 138.427 72.1686C138.427 66.2528 133.631 61.4571 127.715 61.4571C121.799 61.4571 117.004 66.2528 117.004 72.1686C117.004 78.0844 121.799 82.8801 127.715 82.8801Z"
      fill="#418DF9"
      stroke="white"
      stroke-width="15"
      stroke-miterlimit="10"
    />
    <path
      d="M131.12 68.9939C130.979 68.4492 130.726 67.9399 130.377 67.4985C130.069 67.1267 129.669 66.8415 129.217 66.671C128.243 66.3348 127.183 66.3348 126.209 66.671C125.758 66.8404 125.359 67.1259 125.054 67.4985C124.702 67.9377 124.448 68.4478 124.311 68.9939C124.123 69.7294 124.035 70.4869 124.05 71.2459V73.0511C124.034 73.8119 124.124 74.5712 124.315 75.3077C124.454 75.8581 124.709 76.3725 125.063 76.8164C125.37 77.192 125.77 77.4816 126.222 77.6571C127.192 78.0051 128.252 78.0051 129.222 77.6571C129.672 77.4814 130.068 77.1917 130.372 76.8164C130.721 76.3703 130.972 75.8564 131.111 75.3077C131.299 74.5706 131.386 73.8116 131.372 73.0511H131.381V71.2459C131.396 70.4869 131.308 69.7294 131.12 68.9939ZM129.505 73.3209C129.511 73.8027 129.473 74.2841 129.39 74.7589C129.334 75.0965 129.219 75.4216 129.049 75.7189C128.919 75.9484 128.725 76.1357 128.492 76.2587C128.252 76.3743 127.988 76.4319 127.722 76.4269C127.456 76.4309 127.192 76.3733 126.952 76.2587C126.716 76.1351 126.518 75.9482 126.381 75.7189C126.208 75.422 126.088 75.0971 126.027 74.7589C125.937 74.2851 125.895 73.8032 125.903 73.3209V70.9584C125.896 70.4777 125.936 69.9976 126.023 69.5248C126.081 69.1934 126.2 68.8755 126.372 68.5868C126.51 68.3662 126.706 68.1884 126.939 68.0736C127.18 67.9686 127.441 67.9143 127.704 67.9143C127.968 67.9143 128.228 67.9686 128.47 68.0736C128.704 68.1857 128.901 68.3641 129.036 68.5868C129.209 68.8755 129.327 69.1935 129.385 69.5248C129.473 69.9975 129.513 70.4777 129.505 70.9584V73.3211L129.505 73.3209Z"
      fill="white"
    />
  </svg>
)

export default Messages5Ilustration
