import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const ECommerce4Ilustration: React.FC<Props> = ({
  className,
  style
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="197"
    height="142"
    viewBox="0 0 197 142"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M131.623 35.4352C131.623 35.4352 108.757 64.4002 72.1698 47.1231C35.583 29.846 -1.0039 76.5958 30.5015 105.052C62.0069 133.509 31.1765 149.145 52.5799 166.585C76.9064 186.407 98.0854 146.212 117.395 155.359C160.013 175.546 191.585 167.555 184.471 144.18C171.983 103.148 156.015 100.479 168.21 79.1365C180.405 57.7938 153.49 13.4183 131.623 35.4352Z"
      fill="#DEE9FF"
    />
    <path
      d="M101.633 97.3474V158.115L54.4517 137.737L54.6767 77.1883L101.633 97.3474Z"
      fill="#418DF9"
    />
    <path
      d="M101.634 97.3838V158.152L148.586 138.477V77.3821L101.634 97.3838Z"
      fill="#A2BDFF"
    />
    <path
      d="M101.633 97.3474L148.814 77.5856L102.004 56.8357L54.4517 77.0916L101.633 97.3474Z"
      fill="#0E84E5"
    />
    <path
      d="M41.5672 87.9319L89.049 110.979C89.1766 111.041 89.321 111.059 89.4601 111.031C89.5991 111.003 89.725 110.93 89.8185 110.823L101.633 97.3473L54.4516 77.0915L41.4615 86.8314C41.3727 86.898 41.3025 86.9863 41.2576 87.0879C41.2128 87.1894 41.1948 87.3008 41.2054 87.4113C41.216 87.5218 41.2549 87.6277 41.3182 87.7189C41.3816 87.8101 41.4673 87.8834 41.5672 87.9319Z"
      fill="#699CFF"
    />
    <path
      d="M148.814 77.5856L161.918 89.4324C161.998 89.5047 162.058 89.5957 162.094 89.6974C162.13 89.799 162.14 89.908 162.123 90.0144C162.106 90.1209 162.063 90.2214 161.997 90.3069C161.932 90.3925 161.846 90.4602 161.747 90.5042L114.851 111.434C114.726 111.49 114.586 111.505 114.452 111.476C114.318 111.447 114.196 111.377 114.105 111.275L101.633 97.3474L148.814 77.5856Z"
      fill="#699CFF"
    />
    <path
      d="M102.003 56.8356L148.945 77.5856L155.696 76.0208C155.829 75.9901 155.949 75.9182 156.038 75.8155C156.128 75.7127 156.183 75.5844 156.195 75.4487C156.207 75.313 156.176 75.1769 156.107 75.0597C156.037 74.9425 155.933 74.8502 155.808 74.796L112.944 56.2232C112.85 56.1825 112.748 56.1647 112.646 56.1711L102.003 56.8356Z"
      fill="#699CFF"
    />
    <path
      d="M102.003 56.8356L55.3245 77.1882L49.4237 76.1966C49.287 76.1711 49.1622 76.1023 49.0677 76.0005C48.9732 75.8986 48.914 75.769 48.8988 75.6308C48.8836 75.4927 48.9133 75.3533 48.9835 75.2333C49.0536 75.1134 49.1605 75.0191 49.2883 74.9646L93.2116 56.0353C93.3087 55.9941 93.4144 55.9771 93.5195 55.9859L102.003 56.8356Z"
      fill="#699CFF"
    />
    <path
      d="M150.654 148.677C157.091 148.677 162.309 143.459 162.309 137.023C162.309 130.586 157.091 125.369 150.654 125.369C144.218 125.369 139 130.586 139 137.023C139 143.459 144.218 148.677 150.654 148.677Z"
      fill="#418DF9"
      stroke="white"
      stroke-width="15"
      stroke-miterlimit="10"
    />
    <path
      d="M154.359 133.569C154.166 132.9 153.896 132.356 153.55 131.942C153.215 131.537 152.78 131.227 152.289 131.042C151.228 130.676 150.076 130.676 149.015 131.042C148.525 131.226 148.091 131.536 147.759 131.942C147.407 132.356 147.138 132.9 146.95 133.569C146.762 134.238 146.666 135.056 146.666 136.019V137.983C146.666 138.946 146.762 139.764 146.955 140.438C147.106 141.037 147.383 141.597 147.768 142.08C148.103 142.488 148.537 142.804 149.03 142.994C150.085 143.373 151.239 143.373 152.294 142.994C152.783 142.803 153.215 142.488 153.546 142.08C153.925 141.594 154.198 141.035 154.349 140.438C154.537 139.764 154.634 138.946 154.634 137.983H154.644V136.019C154.643 135.056 154.546 134.238 154.359 133.569ZM152.602 138.277C152.608 138.801 152.566 139.325 152.476 139.841C152.416 140.208 152.29 140.562 152.106 140.886C151.964 141.135 151.753 141.339 151.499 141.473C151.238 141.599 150.951 141.661 150.662 141.656C150.372 141.66 150.085 141.598 149.824 141.473C149.567 141.338 149.352 141.135 149.203 140.886C149.015 140.563 148.885 140.209 148.818 139.841C148.72 139.326 148.674 138.801 148.683 138.277V135.706C148.675 135.183 148.718 134.661 148.813 134.146C148.877 133.786 149.006 133.44 149.194 133.126C149.343 132.886 149.557 132.692 149.81 132.567C150.073 132.453 150.356 132.394 150.643 132.394C150.93 132.394 151.213 132.453 151.476 132.567C151.731 132.689 151.946 132.883 152.092 133.126C152.28 133.44 152.409 133.786 152.473 134.146C152.568 134.661 152.611 135.183 152.603 135.706V138.277H152.602Z"
      fill="white"
    />
  </svg>
)

export default ECommerce4Ilustration