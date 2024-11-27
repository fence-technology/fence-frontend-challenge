import React, { CSSProperties, useRef } from 'react'
import { TabItem } from '../tab-component'
import styles from './tab-header.module.scss'

interface Props {
  items: TabItem[]
  activeTab: string
  setActiveTab: (key: string) => void
  containerStyle?: CSSProperties
}

const TabHeader: React.FC<Props> = ({
  items,
  activeTab,
  setActiveTab,
  containerStyle
}) => {
  const headerRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (key: string) => {
    setActiveTab(key)
    const activeTabElement = headerRef.current?.querySelector(
      `[data-key="${key}"]`
    ) as HTMLButtonElement
    if (activeTabElement && headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect()
      const buttonRect = activeTabElement.getBoundingClientRect()
      const scrollLeft =
        headerRef.current.scrollLeft +
        buttonRect.left -
        headerRect.left -
        (headerRect.width - buttonRect.width) / 2
      headerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.tabHeader} ref={headerRef} style={containerStyle}>
      {items.map((item) => (
        <button
          key={item.key}
          data-key={item.key}
          className={`${styles.tabButton} ${activeTab === item.key ? styles.active : ''}`}
          onClick={() => handleTabClick(item.key)}>
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TabHeader
