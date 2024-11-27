import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const Conectivity2Ilustration: React.FC<Props> = ({
  className,
  style
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="201"
    height="201"
    viewBox="0 0 201 201"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M133.004 31.5564C133.004 31.5564 108.958 62.0148 70.4844 43.8462C32.0108 25.6777 -6.46245 74.8393 26.6672 104.763C59.7968 134.687 27.377 151.13 49.8847 169.47C75.466 190.313 97.7369 148.046 118.042 157.665C162.858 178.893 196.058 170.489 188.578 145.909C175.446 102.761 158.654 99.9545 171.478 77.5111C184.303 55.0676 155.998 8.40356 133.004 31.5564Z"
      fill="#DEE9FF"
    />
    <path
      d="M130.574 87.24C130.574 87.24 155.047 85.6508 156.954 61.4961C154.729 59.907 151.551 50.3723 156.954 49.4188C162.357 48.4654 166.171 49.4188 166.171 49.4188C166.171 49.4188 176.023 57.0465 163.628 62.7674C163.31 65.9457 162.992 94.2321 137.566 106.627C112.14 119.023 130.574 87.24 130.574 87.24Z"
      fill="#699CFF"
    />
    <path
      d="M170.987 33.9052L161.176 32.1174C160.631 32.0182 160.11 32.379 160.011 32.9232L156.475 52.3245C156.376 52.8687 156.737 53.3903 157.281 53.4895L167.093 55.2773C167.637 55.3764 168.158 55.0157 168.258 54.4714L171.793 35.0701C171.892 34.5259 171.531 34.0044 170.987 33.9052Z"
      fill="#0E84E5"
    />
    <path
      d="M142.88 104.771C142.88 118.234 136.918 130.312 127.485 138.512C119.365 145.559 108.971 149.433 98.2196 149.419C82.3411 149.419 68.4077 141.143 60.4875 128.659C56.2146 121.904 53.8324 114.127 53.5892 106.138C53.3461 98.1488 55.251 90.241 59.1052 83.239C62.9594 76.237 68.6218 70.3974 75.5016 66.3293C82.3815 62.2612 90.227 60.1135 98.2196 60.1104C118.929 60.1104 136.359 74.2092 141.393 93.3422C142.388 97.0702 142.888 100.913 142.88 104.771Z"
      fill="#A2BDFF"
    />
    <path
      d="M127.485 138.512C119.365 145.559 108.971 149.433 98.2196 149.419C82.3411 149.419 68.4076 141.143 60.4875 128.659C67.4542 122.951 71.3825 123.561 74.0014 124.54C76.8618 125.62 78.4509 130.464 86.7144 125.697C94.978 120.929 101.652 132.371 104.83 134.278C117.543 133.363 124.167 136.071 127.485 138.512Z"
      fill="#0E84E5"
    />
    <path
      d="M141.393 93.3422C122.514 97.8172 123.849 87.0747 121.993 80.5656C120.086 73.8913 118.815 76.116 107.055 85.3333C95.2956 94.5506 94.0242 79.6125 93.8083 77.07C93.5795 74.5274 93.0709 73.5743 87.0323 74.3239C80.9936 75.0736 79.4045 70.3956 74.3192 73.5739C72.2089 74.8961 69.3358 74.2985 66.7041 73.1416C70.8407 69.0018 75.7541 65.7195 81.1624 63.4833C86.5707 61.2471 92.3673 60.1009 98.2197 60.1106C118.929 60.1104 136.359 74.2092 141.393 93.3422Z"
      fill="#0E84E5"
    />
    <path
      d="M60.2971 56.7543C60.0927 57.4445 60.0976 58.1799 60.3111 58.8675C60.5246 59.555 60.9372 60.1637 61.4967 60.6167C62.0562 61.0697 62.7375 61.3467 63.4544 61.4125C64.1713 61.4783 64.8916 61.3301 65.5242 60.9866C66.1569 60.6431 66.6735 60.1196 67.0086 59.4825C67.3438 58.8454 67.4825 58.1232 67.4073 57.4072C67.332 56.6913 67.0461 56.0137 66.5858 55.4602C66.1255 54.9067 65.5113 54.5022 64.8211 54.2977C63.8954 54.0237 62.8988 54.1286 62.0504 54.5892C61.202 55.0499 60.5714 55.8287 60.2971 56.7543Z"
      fill="#699CFF"
    />
    <path
      d="M58.4282 47.9191C57.1299 48.6195 55.9835 49.5705 55.0553 50.7171C54.1272 51.8637 53.4358 53.183 53.0212 54.5987C52.9406 54.8673 52.9138 55.1491 52.9424 55.4281C52.9709 55.707 53.0543 55.9776 53.1877 56.2243C53.321 56.4709 53.5018 56.6888 53.7196 56.8655C53.9374 57.0421 54.1879 57.1741 54.4567 57.2537C54.7256 57.3333 55.0076 57.359 55.2864 57.3295C55.5652 57.2999 55.8355 57.2155 56.0817 57.0813C56.3279 56.947 56.5451 56.7654 56.721 56.547C56.8968 56.3286 57.0278 56.0776 57.1065 55.8084C57.3661 54.9311 57.7961 54.1135 58.3718 53.4023C58.9475 52.6911 59.6577 52.1003 60.4618 51.6637C61.2659 51.227 62.1481 50.953 63.0581 50.8574C63.9681 50.7617 64.888 50.8463 65.7652 51.1063C66.0338 51.1869 66.3157 51.2136 66.5946 51.1851C66.8736 51.1565 67.1442 51.0731 67.3908 50.9398C67.6375 50.8064 67.8554 50.6256 68.032 50.4078C68.2087 50.1901 68.3406 49.9396 68.4202 49.6707C68.4998 49.4018 68.5256 49.1199 68.496 48.841C68.4664 48.5622 68.3821 48.2919 68.2478 48.0457C68.1135 47.7996 67.932 47.5823 67.7136 47.4065C67.4952 47.2306 67.2442 47.0996 66.975 47.021C65.5618 46.5979 64.0787 46.4594 62.6116 46.6136C61.1445 46.7678 59.7226 47.2115 58.4282 47.9191Z"
      fill="#699CFF"
    />
    <path
      d="M55.0802 41.754C52.9707 42.8922 51.1079 44.4374 49.5996 46.3003C48.0913 48.1633 46.9676 50.3069 46.2934 52.6071C46.1329 53.1488 46.1943 53.7321 46.4639 54.2286C46.7335 54.7251 47.1893 55.0942 47.7311 55.2546C48.2728 55.4151 48.8561 55.3537 49.3526 55.0841C49.8491 54.8145 50.2182 54.3587 50.3787 53.8169C50.8999 52.0561 51.7629 50.4152 52.9184 48.988C54.0739 47.5607 55.4992 46.3751 57.1129 45.4987C58.7266 44.6223 60.4972 44.0724 62.3235 43.8804C64.1498 43.6884 65.996 43.858 67.7567 44.3796C68.0253 44.4602 68.3071 44.487 68.5861 44.4584C68.8651 44.4298 69.1356 44.3465 69.3823 44.2131C69.629 44.0797 69.8469 43.8989 70.0235 43.6812C70.2002 43.4634 70.3321 43.2129 70.4117 42.944C70.4913 42.6751 70.5171 42.3932 70.4875 42.1144C70.4579 41.8355 70.3735 41.5652 70.2393 41.3191C70.105 41.0729 69.9235 40.8556 69.705 40.6798C69.4866 40.5039 69.2356 40.3729 68.9665 40.2943C66.6703 39.6072 64.2607 39.3824 61.8771 39.633C59.4935 39.8836 57.1833 40.6045 55.0802 41.754Z"
      fill="#699CFF"
    />
    <path
      d="M70.964 33.5526C67.7815 32.6099 64.4443 32.3033 61.1433 32.6504C57.8422 32.9974 54.6418 33.9914 51.7249 35.5755C48.808 37.1595 46.2317 39.3027 44.1431 41.8825C42.0545 44.4623 40.4946 47.4283 39.5524 50.611C39.4718 50.8796 39.445 51.1615 39.4736 51.4404C39.5022 51.7194 39.5855 51.99 39.7189 52.2366C39.8523 52.4833 40.0331 52.7012 40.2508 52.8778C40.4686 53.0545 40.7191 53.1864 40.988 53.266C41.2569 53.3456 41.5388 53.3714 41.8177 53.3418C42.0965 53.3122 42.3668 53.2279 42.6129 53.0936C42.8591 52.9593 43.0764 52.7778 43.2522 52.5594C43.4281 52.3409 43.5591 52.09 43.6377 51.8208C44.421 49.1746 45.7179 46.7087 47.4543 44.5638C49.1907 42.4189 51.3326 40.6371 53.7577 39.3201C56.1829 38.0031 58.8437 37.1768 61.5882 36.8883C64.3327 36.5997 67.1072 36.8547 69.7532 37.6386C70.2941 37.7962 70.8755 37.7332 71.3701 37.4632C71.8647 37.1933 72.2322 36.7385 72.3923 36.1983C72.5524 35.658 72.492 35.0764 72.2243 34.5806C71.9567 34.0848 71.5035 33.7152 70.964 33.5526Z"
      fill="#699CFF"
    />
  </svg>
)

export default Conectivity2Ilustration
