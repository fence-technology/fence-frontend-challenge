import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const CovenantsIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <path
      d="M19 13.41H5C4.80109 13.41 4.61032 13.489 4.46967 13.6297C4.32902 13.7703 4.25 13.9611 4.25 14.16C4.25 14.3589 4.32902 14.5497 4.46967 14.6903C4.61032 14.831 4.80109 14.91 5 14.91H17.19L14.87 17.23C14.7295 17.3706 14.6507 17.5612 14.6507 17.76C14.6507 17.9587 14.7295 18.1494 14.87 18.29C15.0106 18.4304 15.2012 18.5093 15.4 18.5093C15.5988 18.5093 15.7894 18.4304 15.93 18.29L19.53 14.69C19.6339 14.5839 19.7043 14.4497 19.7328 14.3039C19.7612 14.1582 19.7463 14.0074 19.69 13.87C19.6341 13.7332 19.5385 13.6162 19.4155 13.5343C19.2925 13.4523 19.1478 13.409 19 13.41Z"
      fill={style?.fill || 'white'}
    />
    <path
      d="M5 10.59H19C19.1989 10.59 19.3897 10.511 19.5303 10.3703C19.671 10.2297 19.75 10.0389 19.75 9.83999C19.75 9.64108 19.671 9.45031 19.5303 9.30966C19.3897 9.16901 19.1989 9.08999 19 9.08999H6.81L9.13 6.76999C9.20368 6.70133 9.26279 6.61853 9.30378 6.52653C9.34477 6.43453 9.36681 6.33522 9.36859 6.23451C9.37036 6.13381 9.35184 6.03378 9.31412 5.94039C9.2764 5.84701 9.22025 5.76217 9.14903 5.69095C9.07782 5.61973 8.99298 5.56359 8.89959 5.52587C8.80621 5.48815 8.70618 5.46962 8.60547 5.4714C8.50477 5.47318 8.40546 5.49522 8.31346 5.53621C8.22146 5.5772 8.13866 5.6363 8.07 5.70999L4.47 9.30999C4.36524 9.41488 4.29392 9.54846 4.26503 9.69386C4.23615 9.83925 4.251 9.98995 4.30771 10.1269C4.36442 10.2639 4.46045 10.381 4.58366 10.4634C4.70688 10.5458 4.85176 10.5899 5 10.59Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default CovenantsIcon
