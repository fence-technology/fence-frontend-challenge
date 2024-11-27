import React from 'react'
import styles from './loader-line.module.scss'

interface Props {
  width?: string
  height?: string
}

export const LoaderLine: React.FC<Props> = ({
  width = '100%',
  height = '20px'
}) => {
  return <div className={styles.loader_line} style={{ width, height }}></div>
}
