import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const CapitalIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none">
    <path
      d="M17.25 10.5H20.7C20.7398 10.4986 20.7794 10.5054 20.8164 10.52C20.8535 10.5346 20.8871 10.5566 20.9152 10.5848C20.9434 10.6129 20.9654 10.6465 20.98 10.6836C20.9946 10.7206 21.0014 10.7602 21 10.8V13.2C21.0014 13.2398 20.9946 13.2794 20.98 13.3164C20.9654 13.3535 20.9434 13.3871 20.9152 13.4152C20.8871 13.4434 20.8535 13.4654 20.8164 13.48C20.7794 13.4946 20.7398 13.5014 20.7 13.5H17.25C16.8522 13.5 16.4706 13.342 16.1893 13.0607C15.908 12.7794 15.75 12.3978 15.75 12C15.75 11.6022 15.908 11.2206 16.1893 10.9393C16.4706 10.658 16.8522 10.5 17.25 10.5Z"
      fill={style?.fill || 'white'}
    />
    <path
      d="M17.38 9H20.7C20.7398 9.0014 20.7794 8.99459 20.8164 8.98001C20.8535 8.96543 20.8871 8.94338 20.9152 8.91524C20.9434 8.8871 20.9654 8.85347 20.98 8.81644C20.9946 8.77941 21.0014 8.73977 21 8.7V7.9C21 7.13087 20.6945 6.39325 20.1506 5.84939C19.6068 5.30554 18.8691 5 18.1 5H5.9C5.13087 5 4.39325 5.30554 3.84939 5.84939C3.30553 6.39325 3 7.13087 3 7.9V16.1C3 16.8691 3.30553 17.6068 3.84939 18.1506C4.39325 18.6945 5.13087 19 5.9 19H18.1C18.8691 19 19.6068 18.6945 20.1506 18.1506C20.6945 17.6068 21 16.8691 21 16.1V15.3C21.0014 15.2602 20.9946 15.2206 20.98 15.1836C20.9654 15.1465 20.9434 15.1129 20.9152 15.0848C20.8871 15.0566 20.8535 15.0346 20.8164 15.02C20.7794 15.0054 20.7398 14.9986 20.7 15H17.25C16.8051 15.0001 16.3657 14.9012 15.9637 14.7106C15.5618 14.5199 15.2072 14.2422 14.9258 13.8976C14.6444 13.553 14.4431 13.1501 14.3366 12.7182C14.2301 12.2862 14.221 11.8359 14.31 11.4C14.4683 10.7083 14.8599 10.0921 15.419 9.65506C15.9781 9.21801 16.6705 8.9867 17.38 9ZM10 9.75H7C6.80109 9.75 6.61032 9.67098 6.46967 9.53033C6.32902 9.38968 6.25 9.19891 6.25 9C6.25 8.80109 6.32902 8.61032 6.46967 8.46967C6.61032 8.32902 6.80109 8.25 7 8.25H10C10.1989 8.25 10.3897 8.32902 10.5303 8.46967C10.671 8.61032 10.75 8.80109 10.75 9C10.75 9.19891 10.671 9.38968 10.5303 9.53033C10.3897 9.67098 10.1989 9.75 10 9.75Z"
      fill={style?.fill || 'white'}
    />
  </svg>
)

export default CapitalIcon
