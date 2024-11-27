import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const RepaymentIlustration: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="182"
    height="189"
    viewBox="0 0 182 189"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M47.3999 6.14798C49.0071 7.72774 50.6998 9.21398 52.5811 10.4549C62.1762 16.7848 90.7138 31.9945 135.857 25.5621C192.262 17.5251 184.199 74.2989 176.136 89.4526C168.073 104.606 138.313 132.442 135.857 146.342C133.401 160.241 144.28 198.138 119.086 186.85C93.8923 175.561 79.2616 148.953 46.2617 152.178C13.2617 155.404 -10.1212 140.863 4.39228 114.672C18.9058 88.4816 36.3123 71.5484 13.9021 42.5212C-7.88614 14.2999 28.5318 -12.3967 47.3999 6.14798Z"
      fill="#DEE9FF"
    />
    <path
      d="M19.5996 77.9867L135.51 55.4112L131.05 32.5147C130.9 31.7404 130.598 31.0033 130.162 30.3456C129.726 29.6879 129.165 29.1225 128.511 28.6816C127.857 28.2407 127.122 27.9329 126.349 27.776C125.576 27.619 124.78 27.6158 124.005 27.7667L17.3721 66.5499L19.5996 77.9867Z"
      fill="#0E84E5"
    />
    <path
      d="M17.4421 66.9131L144.2 42.2256C146.023 41.8706 147.911 42.2542 149.451 43.2918C150.99 44.3293 152.055 45.936 152.41 47.7583L166.988 122.61C167.343 124.432 166.959 126.321 165.922 127.86C164.884 129.4 163.277 130.464 161.455 130.819L41.5675 154.168C39.7453 154.523 37.8566 154.14 36.3171 153.102C34.7776 152.064 33.7134 150.458 33.3585 148.635L17.4421 66.9131Z"
      fill="#A2BDFF"
    />
    <path
      d="M111.672 78.6381L155.981 70.0083C157.803 69.6534 159.692 70.037 161.232 71.0745C162.771 72.1121 163.835 73.7188 164.19 75.5411L167.481 92.438C167.836 94.2602 167.453 96.1489 166.415 97.6884C165.377 99.2279 163.771 100.292 161.948 100.647L117.639 109.277C117.29 109.345 116.929 109.271 116.634 109.073C116.34 108.874 116.136 108.567 116.068 108.218L110.613 80.2088C110.545 79.8602 110.618 79.4988 110.817 79.2042C111.015 78.9097 111.323 78.706 111.672 78.6381Z"
      fill="#418DF9"
    />
    <path
      d="M129.2 98.2684C133.146 98.2684 136.345 95.0693 136.345 91.1229C136.345 87.1766 133.146 83.9775 129.2 83.9775C125.254 83.9775 122.055 87.1766 122.055 91.1229C122.055 95.0693 125.254 98.2684 129.2 98.2684Z"
      fill="white"
    />
    <path
      d="M141.704 166.02C152.717 166.02 161.644 157.093 161.644 146.08C161.644 135.068 152.717 126.14 141.704 126.14C130.692 126.14 121.764 135.068 121.764 146.08C121.764 157.093 130.692 166.02 141.704 166.02Z"
      fill="#418DF9"
      stroke="white"
      strokeWidth="15"
      strokeMiterlimit="10"
    />
    <path
      d="M146.764 146.89H136.764C136.565 146.89 136.374 146.811 136.234 146.67C136.093 146.53 136.014 146.339 136.014 146.14C136.014 145.941 136.093 145.75 136.234 145.61C136.374 145.469 136.565 145.39 136.764 145.39H146.764C146.963 145.39 147.154 145.469 147.294 145.61C147.435 145.75 147.514 145.941 147.514 146.14C147.514 146.339 147.435 146.53 147.294 146.67C147.154 146.811 146.963 146.89 146.764 146.89Z"
      fill="#EFF9FF"
    />
  </svg>
)

export default RepaymentIlustration
