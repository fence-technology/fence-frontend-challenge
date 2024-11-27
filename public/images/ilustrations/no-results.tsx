import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const NoResultIlustration: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="179"
    height="185"
    viewBox="0 0 179 185"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M18.8375 80.8118C18.8375 80.8118 50.3404 79.5502 57.1483 27.7662C63.1938 -18.223 116.316 2.70958 131.672 21.042C151.563 44.79 140.96 85.6417 166.692 90.8025C192.425 95.9632 175.621 153.342 136.56 147.85C87.9704 141.018 99.7264 169.411 85.14 181.429C74.6716 190.054 31.7474 181.751 30.3168 150.441C29.113 124.094 17.9993 124.178 10.1218 121.19C-1.23929 116.881 -8.39804 85.6771 18.8375 80.8118Z"
      fill="#DEE9FF"
    />
    <path
      d="M125.93 138.321L94.979 107.738L88.8504 113.94L119.801 144.524L125.93 138.321Z"
      fill="#699CFF"
    />
    <path
      d="M137.753 146.539L113.673 122.745C113.539 122.613 113.323 122.614 113.191 122.748L104.077 131.971C103.944 132.105 103.945 132.321 104.079 132.454L128.159 156.248C128.293 156.38 128.509 156.379 128.642 156.245L137.756 147.022C137.888 146.888 137.887 146.671 137.753 146.539Z"
      fill="#0E84E5"
    />
    <path
      d="M67.5473 123.119C88.8405 123.119 106.102 105.858 106.102 84.5644C106.102 63.2713 88.8405 46.0098 67.5473 46.0098C46.2542 46.0098 28.9928 63.2713 28.9928 84.5644C28.9928 105.858 46.2542 123.119 67.5473 123.119Z"
      fill="#0E84E5"
    />
    <path
      d="M67.5472 116.828C85.366 116.828 99.8109 102.383 99.8109 84.5646C99.8109 66.7458 85.366 52.3009 67.5472 52.3009C49.7285 52.3009 35.2835 66.7458 35.2835 84.5646C35.2835 102.383 49.7285 116.828 67.5472 116.828Z"
      fill="#D4E5FF"
    />
    <path
      d="M132.728 49.7108C123.685 46.7794 113.911 51.7372 110.968 60.818C108.037 69.8616 112.995 79.6349 122.075 82.5781C131.156 85.5213 140.904 80.5149 143.836 71.4709C146.768 62.4269 141.772 52.6421 132.728 49.7108ZM129.999 58.1298C131.012 58.458 131.904 59.0793 132.562 59.9152C133.221 60.751 133.617 61.7635 133.699 62.8245C133.781 63.8854 133.547 64.9469 133.025 65.8743C132.503 66.8017 131.717 67.5532 130.768 68.0336C129.818 68.5139 128.748 68.7015 127.691 68.5724C126.635 68.4433 125.641 68.0034 124.835 67.3086C124.029 66.6137 123.448 65.6951 123.165 64.6693C122.882 63.6436 122.909 62.5568 123.245 61.547C124.15 58.7529 127.205 57.2242 129.999 58.1298ZM123.172 79.1958C120.167 78.2269 117.593 76.2436 115.89 73.5855C119.077 71.7746 122.409 71.2702 125.424 72.2474C128.439 73.2245 130.89 75.5628 132.36 78.9238C129.422 80.0775 126.173 80.1736 123.172 79.1958Z"
      fill="#418DF9"
    />
    <path
      d="M57.4559 132.121C55.8851 132.923 54.5873 134.172 53.7267 135.712C52.866 137.251 52.4812 139.011 52.6209 140.769C52.7605 142.527 53.4184 144.205 54.5112 145.589C55.6041 146.973 57.0829 148.002 58.7606 148.546C60.4383 149.09 62.2396 149.124 63.9366 148.644C65.6337 148.164 67.1503 147.191 68.2947 145.849C69.4391 144.508 70.1599 142.856 70.3659 141.105C70.5719 139.353 70.2539 137.58 69.4521 136.009C68.375 133.905 66.5071 132.313 64.2581 131.584C62.0091 130.855 59.5628 131.048 57.4559 132.121ZM59.5329 136.19C60.0221 135.94 60.5745 135.841 61.12 135.906C61.6655 135.971 62.1795 136.196 62.5968 136.553C63.0141 136.91 63.3159 137.383 63.464 137.912C63.612 138.441 63.5996 139.002 63.4283 139.524C63.257 140.046 62.9346 140.505 62.5019 140.844C62.0692 141.182 61.5458 141.384 60.9979 141.425C60.4501 141.465 59.9026 141.342 59.4249 141.071C58.9472 140.8 58.5608 140.393 58.3147 139.902C57.9885 139.247 57.9334 138.49 58.1615 137.796C58.3895 137.101 58.8822 136.524 59.5329 136.19ZM64.7296 146.371C63.2793 147.114 61.6158 147.33 60.0241 146.981C60.5263 145.157 61.5585 143.756 63.0158 143.013C64.4732 142.269 66.221 142.228 67.9843 142.918C67.3327 144.411 66.1821 145.632 64.7296 146.371Z"
      fill="#418DF9"
    />
  </svg>
)

export default NoResultIlustration
