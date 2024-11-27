import React, { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

const AlertNegativeIcon: React.FC<Props> = ({ className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width="24"
    height="24"
    viewBox="0 0 94 94"
    fill="none"
    className={className}>
    <circle cx="47" cy="47" r="47" fill="#A22323" fillOpacity="0.12" />
    <path
      d="M47.5 25C43.0499 25 38.6998 26.3196 34.9997 28.7919C31.2996 31.2643 28.4157 34.7783 26.7127 38.8896C25.0097 43.001 24.5642 47.525 25.4323 51.8895C26.3005 56.2541 28.4434 60.2632 31.5901 63.4099C34.7368 66.5566 38.7459 68.6995 43.1105 69.5677C47.475 70.4358 51.999 69.9902 56.1104 68.2873C60.2217 66.5843 63.7357 63.7004 66.2081 60.0003C68.6804 56.3002 70 51.9501 70 47.5C70 41.5326 67.6295 35.8097 63.4099 31.5901C59.1903 27.3705 53.4674 25 47.5 25ZM55 52.5C55.3075 52.8438 55.4774 53.2888 55.4774 53.75C55.4774 54.2112 55.3075 54.6562 55 55C54.6562 55.3075 54.2112 55.4774 53.75 55.4774C53.2888 55.4774 52.8438 55.3075 52.5 55L47.5 50L42.5 55C42.1562 55.3075 41.7112 55.4774 41.25 55.4774C40.7888 55.4774 40.3438 55.3075 40 55C39.6925 54.6562 39.5225 54.2112 39.5225 53.75C39.5225 53.2888 39.6925 52.8438 40 52.5L45 47.5L40 42.5C39.6925 42.1562 39.5225 41.7112 39.5225 41.25C39.5225 40.7888 39.6925 40.3438 40 40C40.3412 39.6873 40.7872 39.5138 41.25 39.5138C41.7128 39.5138 42.1588 39.6873 42.5 40L47.5 45L52.5 40C52.8412 39.6873 53.2872 39.5138 53.75 39.5138C54.2128 39.5138 54.6588 39.6873 55 40C55.3075 40.3438 55.4774 40.7888 55.4774 41.25C55.4774 41.7112 55.3075 42.1562 55 42.5L50 47.5L55 52.5Z"
      fill={style?.fill || '#FF948D'}
    />
  </svg>
)

export default AlertNegativeIcon
