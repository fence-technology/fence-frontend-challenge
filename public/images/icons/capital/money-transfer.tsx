import React from 'react'

interface Props {
  className?: string
}
export const MoneyTransfer: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      className={className}>
      <path
        d="M11.1681 5.21918C11.1681 7.05004 9.72939 8.53425 7.95463 8.53425C6.17988 8.53425 4.74115 7.05004 4.74115 5.21918C4.74115 3.38832 6.17988 1.90411 7.95463 1.90411C9.72939 1.90411 11.1681 3.38832 11.1681 5.21918Z"
        fill="#F7F7F7"
        stroke="#00A2FF"
        strokeWidth="0.7"
      />
      <ellipse
        cx="5.90968"
        cy="7.93152"
        rx="3.21348"
        ry="3.31507"
        fill="white"
        stroke="#00A2FF"
        strokeWidth="0.7"
      />
      <path
        d="M5.91879 10.0411C5.83757 10.0411 5.76896 10.0116 5.71295 9.95259C5.65694 9.89356 5.62893 9.81978 5.62893 9.73123V9.40361L5.75496 9.52315C5.56732 9.51429 5.40489 9.48921 5.26766 9.44789C5.13043 9.40656 5.01841 9.36524 4.93159 9.32392C4.85877 9.2885 4.80696 9.23833 4.77616 9.1734C4.74815 9.10846 4.73695 9.04205 4.74255 8.97417C4.75095 8.90628 4.77476 8.8443 4.81396 8.78822C4.85317 8.73215 4.90358 8.69525 4.9652 8.67754C5.02961 8.65688 5.10382 8.66574 5.18784 8.70411C5.24385 8.73657 5.32787 8.77051 5.43989 8.80593C5.55472 8.8384 5.69615 8.85463 5.86418 8.85463C5.9818 8.85463 6.07422 8.84283 6.14144 8.81921C6.21145 8.7956 6.26046 8.76461 6.28847 8.72624C6.31927 8.68492 6.33468 8.64065 6.33468 8.59342C6.33468 8.54915 6.32347 8.51226 6.30107 8.48274C6.28147 8.45028 6.24786 8.42224 6.20025 8.39862C6.15264 8.37206 6.08683 8.34845 6.00281 8.32779L5.52811 8.22153C5.26766 8.15955 5.07302 8.05625 4.94419 7.91163C4.81817 7.76405 4.75515 7.57368 4.75515 7.34051C4.75515 7.16342 4.79576 7.00551 4.87698 6.86679C4.961 6.72512 5.07722 6.61001 5.22565 6.52147C5.37688 6.43292 5.55332 6.37684 5.75496 6.35323L5.62893 6.42849V6.13187C5.62893 6.04332 5.65694 5.96954 5.71295 5.91051C5.76896 5.85148 5.83757 5.82196 5.91879 5.82196C6.00281 5.82196 6.07282 5.85148 6.12883 5.91051C6.18485 5.96954 6.21285 6.04332 6.21285 6.13187V6.42849L6.08683 6.34438C6.19325 6.34733 6.30807 6.36651 6.4313 6.40193C6.55452 6.4344 6.66234 6.48015 6.75476 6.53918C6.81918 6.57459 6.86398 6.62329 6.88919 6.68528C6.9172 6.74726 6.927 6.81072 6.9186 6.87565C6.91299 6.93763 6.89059 6.99371 6.85138 7.04388C6.81497 7.09406 6.76456 7.128 6.70015 7.14571C6.63854 7.16047 6.56432 7.14866 6.47751 7.11029C6.41309 7.08078 6.34028 7.05717 6.25906 7.03946C6.18064 7.0188 6.07982 7.00847 5.9566 7.00847C5.80817 7.00847 5.69334 7.03651 5.61213 7.09258C5.53371 7.14866 5.4945 7.22097 5.4945 7.30952C5.4945 7.36855 5.51691 7.41873 5.56172 7.46005C5.60933 7.49842 5.69475 7.53236 5.81797 7.56187L6.29687 7.67255C6.56292 7.73454 6.75896 7.83784 6.88499 7.98246C7.01381 8.12414 7.07823 8.3086 7.07823 8.53587C7.07823 8.71296 7.03762 8.86939 6.9564 9.00516C6.87519 9.14093 6.76176 9.25161 6.61613 9.3372C6.4733 9.4228 6.30667 9.47888 6.11623 9.50544L6.21285 9.39919V9.73123C6.21285 9.81978 6.18485 9.89356 6.12883 9.95259C6.07562 10.0116 6.00561 10.0411 5.91879 10.0411Z"
        fill="#00A2FF"
      />
      <path
        d="M3.67015 1.5527C3.80469 1.41391 3.80469 1.18888 3.67015 1.05008C3.53561 0.91129 3.31748 0.91129 3.18294 1.05008L3.67015 1.5527ZM0.452818 4.01372C0.452818 4.21 0.607062 4.36912 0.79733 4.36912L3.89794 4.36912C4.08821 4.36912 4.24245 4.21 4.24245 4.01372C4.24245 3.81744 4.08821 3.65832 3.89794 3.65832L1.14184 3.65832L1.14184 0.815093C1.14184 0.61881 0.987599 0.45969 0.79733 0.45969C0.607062 0.45969 0.452818 0.61881 0.452818 0.815093L0.452818 4.01372ZM3.18294 1.05008L0.553724 3.76241L1.04094 4.26503L3.67015 1.5527L3.18294 1.05008Z"
        fill="#00A2FF"
      />
      <path
        d="M10.3402 11.4474C10.2057 11.5862 10.2057 11.8112 10.3402 11.95C10.4748 12.0888 10.6929 12.0888 10.8274 11.95L10.3402 11.4474ZM13.5576 8.98634C13.5576 8.79006 13.4033 8.63094 13.213 8.63094L10.1124 8.63094C9.92217 8.63094 9.76792 8.79006 9.76792 8.98634C9.76792 9.18262 9.92217 9.34174 10.1124 9.34174L12.8685 9.34174L12.8685 12.185C12.8685 12.3813 13.0228 12.5404 13.213 12.5404C13.4033 12.5404 13.5576 12.3813 13.5576 12.185L13.5576 8.98634ZM10.8274 11.95L13.4567 9.23765L12.9694 8.73503L10.3402 11.4474L10.8274 11.95Z"
        fill="#00A2FF"
      />
    </svg>
  )
}