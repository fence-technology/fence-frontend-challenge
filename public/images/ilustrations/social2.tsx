import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const Social2Ilustration: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="197"
    height="142"
    viewBox="0 0 197 142"
    fill="none"
    style={style}
    className={className}>
    <path
      d="M109.897 38.4573C109.897 38.4573 96.4835 68.5641 61.0101 61.6671C25.5367 54.7702 4.16407 103.293 37.7011 120.985C71.2382 138.678 47.9962 159.002 70.3631 169.384C95.7847 181.183 105.264 141.728 123.993 145.393C165.327 153.48 190.895 139.61 179.589 120.944C159.744 88.1787 145.334 89.3849 151.19 68.2258C157.046 47.0668 123.976 14.584 109.897 38.4573Z"
      fill="#DEE9FF"
    />
    <path
      d="M103.422 107.172C100.305 113.145 99.5191 116.32 90.0643 122.247C89.9909 122.295 89.9359 122.366 89.9082 122.45C88.3977 127.132 85.8407 131.41 82.4312 134.958C82.3853 135.005 82.353 135.064 82.3377 135.128C82.3225 135.192 82.3248 135.259 82.3445 135.322C83.4027 138.844 84.548 145.193 81.3614 150.397C76.6774 158.06 73.2082 153.433 73.9307 151.698C74.5494 150.212 79.8348 147.02 78.6146 139.046C78.6044 138.982 78.5779 138.922 78.5377 138.871C78.4975 138.821 78.4449 138.781 78.3851 138.757C78.3252 138.733 78.2601 138.724 78.196 138.732C78.1319 138.74 78.0709 138.765 78.019 138.803C74.188 141.584 69.7909 143.485 65.141 144.372C65.0894 144.381 65.0401 144.4 64.9965 144.429C64.9529 144.458 64.916 144.496 64.8881 144.54C64.8602 144.584 64.842 144.634 64.8348 144.686C64.8275 144.737 64.8314 144.79 64.846 144.84C66.0315 149.085 66.5924 155.718 61.6424 161.819C58.9998 164.999 55.4954 160.35 58.9998 157.181C61.174 155.221 61.0063 149.583 59.9886 145.24C59.9691 145.155 59.921 145.081 59.8524 145.028C59.7839 144.975 59.6991 144.948 59.6127 144.951C59.4103 144.956 59.202 144.956 58.9998 144.956C51.8472 144.967 44.8933 142.603 39.2287 138.236C39.1769 138.196 39.1154 138.17 39.0504 138.16C38.9853 138.15 38.9189 138.158 38.8576 138.182C38.7964 138.206 38.7424 138.245 38.701 138.296C38.6596 138.348 38.6322 138.409 38.6216 138.473C37.2626 147.448 42.6581 150.553 43.4269 152.855C44.2828 155.428 42.3166 157.718 39.8937 157.071C39.8412 157.055 39.7921 157.029 39.7492 156.995C31.85 151.062 32.5381 138.63 33.4055 132.644C33.4135 132.596 33.4109 132.545 33.3979 132.498C33.3849 132.45 33.3619 132.405 33.3303 132.367C28.9129 126.682 26.5215 119.685 26.5356 112.486C26.5356 99.2841 34.4175 87.9211 45.7342 82.8497C45.735 82.8497 45.7358 82.8496 45.7365 82.8493C45.7372 82.849 45.7378 82.8486 45.7384 82.8481C45.7389 82.8475 45.7393 82.8469 45.7396 82.8462C45.7399 82.8455 45.7401 82.8447 45.74 82.844C47.4806 80.6404 49.6029 77.5239 49.9268 75.338C49.9375 75.264 49.97 75.1948 50.0202 75.1393C50.0704 75.0838 50.136 75.0446 50.2086 75.0266C50.2812 75.0086 50.3576 75.0126 50.4279 75.0382C50.4982 75.0638 50.5593 75.1098 50.6033 75.1703C51.4361 76.2921 52.7256 78.4317 52.4423 80.687C52.4307 80.7621 52.4249 80.8372 52.4133 80.9124C52.3902 81.0398 52.3613 81.1611 52.3324 81.2884C52.3034 81.3867 52.2803 81.485 52.2457 81.5833C52.6501 81.2459 53.036 80.8868 53.4016 80.5077C54.2516 79.6346 55.3272 78.3219 55.7899 76.9167C55.8118 76.8417 55.8563 76.7754 55.9175 76.7268C55.9786 76.6782 56.0533 76.6498 56.1313 76.6454C56.2093 76.641 56.2867 76.6608 56.3529 76.7023C56.4191 76.7437 56.4709 76.8046 56.501 76.8766C56.8015 77.6168 57.1545 78.6519 57.2759 79.7101C57.2864 79.805 57.3319 79.8926 57.4035 79.9557C57.4752 80.0188 57.5678 80.0529 57.6633 80.0513C58.1086 80.0339 58.5538 80.0224 58.9992 80.0224C76.9312 80.0224 91.469 94.5601 91.469 112.486C91.469 112.897 91.4632 113.302 91.4458 113.707C91.4432 113.768 91.4558 113.83 91.4823 113.886C91.5089 113.942 91.5487 113.99 91.5982 114.027C91.6478 114.064 91.7056 114.088 91.7667 114.098C91.8278 114.108 91.8903 114.102 91.9489 114.082C93.8803 113.406 96.3148 111.775 97.7836 107.895C100.53 100.667 100.82 98.6427 99.9522 93.0045C99.0848 87.3663 103.278 87.6558 104.145 89.5349C105.012 91.4139 106.892 100.522 103.422 107.172Z"
      fill="#0E84E5"
    />
    <path
      d="M46.3175 115.334C46.2069 115.334 46.0994 115.297 46.0119 115.23C45.9244 115.162 45.8617 115.067 45.8336 114.96C45.6155 114.008 45.5687 113.024 45.6953 112.056C45.98 109.95 47.1259 108.402 49.009 107.58C50.2396 107.042 51.4029 107.011 52.4664 107.488C54.6462 108.465 55.5742 111.235 55.6127 111.352C55.65 111.478 55.6369 111.612 55.5764 111.728C55.5159 111.843 55.4126 111.931 55.2886 111.971C55.1646 112.012 55.0296 112.003 54.9124 111.945C54.7952 111.888 54.7051 111.787 54.6611 111.664C54.6532 111.64 53.8278 109.193 52.0537 108.4C51.2594 108.046 50.3701 108.078 49.4103 108.498C47.852 109.179 46.9376 110.411 46.6924 112.16C46.5804 113.009 46.6178 113.871 46.8031 114.707C46.8365 114.836 46.8175 114.972 46.7502 115.087C46.683 115.201 46.5731 115.285 46.4446 115.318C46.403 115.329 46.3603 115.334 46.3175 115.334Z"
      fill="white"
    />
    <path
      d="M61.4145 110.748C61.3095 110.748 61.2073 110.715 61.1221 110.653C61.037 110.592 60.9732 110.506 60.9399 110.406C60.6604 109.474 60.5498 108.499 60.6134 107.528C60.7611 105.417 61.8044 103.805 63.6304 102.865C64.826 102.25 65.9865 102.144 67.0803 102.552C69.3139 103.383 70.4179 106.069 70.4638 106.183C70.5119 106.306 70.5096 106.443 70.4574 106.564C70.4051 106.686 70.3071 106.781 70.1847 106.83C70.0622 106.88 69.9253 106.879 69.8036 106.828C69.6819 106.777 69.5853 106.68 69.5348 106.558C69.5248 106.534 68.5453 104.163 66.7272 103.489C65.9094 103.186 65.022 103.275 64.0889 103.756C62.5784 104.533 61.746 105.815 61.6149 107.568C61.5583 108.418 61.6515 109.271 61.8902 110.089C61.9151 110.164 61.9217 110.244 61.9096 110.323C61.8975 110.401 61.867 110.476 61.8206 110.54C61.7742 110.604 61.7132 110.656 61.6426 110.693C61.5721 110.729 61.4939 110.748 61.4147 110.748H61.4145Z"
      fill="white"
    />
    <path
      d="M60.1401 121.225C56.7315 121.225 54.1325 118.956 54.0024 118.841C53.9532 118.798 53.9131 118.745 53.8844 118.685C53.8556 118.626 53.8389 118.562 53.835 118.496C53.8311 118.431 53.8401 118.365 53.8617 118.303C53.8832 118.241 53.9167 118.183 53.9604 118.134C54.0041 118.085 54.057 118.045 54.1162 118.016C54.1753 117.987 54.2396 117.971 54.3052 117.967C54.3709 117.963 54.4367 117.972 54.4988 117.993C54.561 118.015 54.6183 118.049 54.6675 118.092C54.7016 118.122 58.1338 121.105 61.998 119.953C65.8442 118.807 66.899 113.924 66.9093 113.875C66.9374 113.746 67.0151 113.633 67.1256 113.561C67.2361 113.49 67.3705 113.464 67.4996 113.491C67.6288 113.517 67.7422 113.594 67.8153 113.703C67.8885 113.813 67.9154 113.947 67.8903 114.077C67.6522 115.088 67.2792 116.063 66.7814 116.975C65.6819 119.003 64.1271 120.364 62.2842 120.913C61.5884 121.121 60.8661 121.226 60.1401 121.225Z"
      fill="white"
    />
    <path
      d="M168.097 98.934C168.054 100.021 167.943 101.105 167.766 102.179C165.351 116.948 151.428 126.96 136.658 124.545C121.894 122.131 111.877 108.207 114.292 93.4371C114.446 92.4956 114.649 91.5741 114.89 90.6755C103.936 83.2365 104.576 68.8916 106.676 67.3012C108.796 65.6908 111.112 67.0478 110.87 71.5025C110.621 77.9716 114.604 83.3216 116.813 85.6519C121.985 75.3409 133.415 69.1116 145.4 71.0708C157.03 72.972 165.707 82.0135 167.694 92.979C169.862 92.1908 173.69 89.9162 176.792 83.4506C177.226 82.162 177.345 81.2148 177.368 80.6443C177.384 80.1113 177.592 79.6021 177.954 79.2107C178.633 78.5013 179.834 77.7484 181.385 78.9045C181.738 79.1682 182.022 79.5128 182.215 79.9092C182.407 80.3056 182.501 80.7423 182.489 81.1826C182.392 84.677 179.596 93.1789 168.097 98.934Z"
      fill="#699CFF"
    />
    <path
      d="M151.984 103.724C151.301 107.908 145.548 110.448 139.139 109.4C132.724 108.351 128.079 104.111 128.763 99.9283C128.893 99.1493 129.197 98.4098 129.653 97.7649C129.778 97.5903 129.965 97.4701 130.175 97.4291C130.386 97.3881 130.604 97.4294 130.785 97.5445C133.081 98.9821 136.716 100.25 140.909 100.935C144.768 101.566 148.34 101.576 150.939 101.083C151.15 101.042 151.37 101.085 151.551 101.201C151.732 101.318 151.861 101.5 151.912 101.709C152.069 102.369 152.093 103.054 151.984 103.724Z"
      fill="white"
    />
    <path
      d="M139.823 95.4242C139.751 95.4243 139.679 95.4086 139.613 95.3781C139.547 95.3477 139.488 95.3033 139.441 95.2479C139.394 95.1926 139.36 95.1277 139.34 95.0577C139.321 94.9877 139.317 94.9143 139.329 94.8426C139.497 93.8142 139.249 92.7612 138.641 91.9153C138.033 91.0693 137.113 90.4996 136.085 90.3315C135.057 90.1634 134.004 90.4107 133.158 91.019C132.312 91.6272 131.742 92.5467 131.574 93.575C131.552 93.7061 131.48 93.8233 131.372 93.9008C131.264 93.9784 131.13 94.0099 130.999 93.9884C130.868 93.967 130.751 93.8944 130.673 93.7865C130.595 93.6787 130.564 93.5444 130.585 93.4134C130.796 92.1229 131.511 90.969 132.573 90.2057C133.635 89.4423 134.956 89.132 136.247 89.3429C137.537 89.5539 138.691 90.2688 139.454 91.3305C140.218 92.3922 140.528 93.7136 140.317 95.0041C140.298 95.1213 140.238 95.2278 140.147 95.3048C140.057 95.3817 139.942 95.424 139.823 95.4242Z"
      fill="white"
    />
    <path
      d="M151.837 97.3882C151.764 97.3881 151.693 97.3723 151.627 97.3418C151.561 97.3113 151.502 97.2668 151.455 97.2115C151.408 97.1562 151.374 97.0913 151.354 97.0214C151.335 96.9514 151.331 96.8781 151.342 96.8064C151.506 95.78 151.257 94.7304 150.648 93.8875C150.04 93.0447 149.122 92.4773 148.096 92.3096C147.07 92.1419 146.02 92.3876 145.175 92.9929C144.33 93.5981 143.759 94.5136 143.588 95.5389C143.577 95.6039 143.554 95.6663 143.519 95.7224C143.485 95.7785 143.44 95.8273 143.386 95.8658C143.333 95.9044 143.272 95.932 143.208 95.9471C143.144 95.9623 143.077 95.9646 143.012 95.954C142.947 95.9433 142.885 95.92 142.829 95.8852C142.773 95.8504 142.724 95.805 142.686 95.7514C142.648 95.6978 142.62 95.6372 142.605 95.573C142.59 95.5088 142.588 95.4423 142.599 95.3773C142.814 94.0901 143.53 92.9405 144.59 92.1803C145.651 91.4202 146.97 91.1115 148.258 91.322C149.546 91.5326 150.698 92.2451 151.461 93.3034C152.224 94.3617 152.537 95.6796 152.331 96.9681C152.312 97.0853 152.251 97.1918 152.161 97.2688C152.071 97.3457 151.956 97.388 151.837 97.3882Z"
      fill="white"
    />
  </svg>
)

export default Social2Ilustration
