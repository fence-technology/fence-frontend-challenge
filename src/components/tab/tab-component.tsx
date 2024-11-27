'use client'
import { useSearchParams } from 'next/navigation'
import React, { CSSProperties, useCallback, useEffect, useState } from 'react'
import TabBody from './tab-body/tab-body'
import styles from './tab-component.module.scss'
import TabHeader from './tab-header/tab-header'

// Mock enum for UserRole since we removed the import
enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface TabItem {
  key: string
  label: string
  content: React.ReactNode
  roles?: string[]
  isHidden?: boolean
}

export interface Props {
  items: TabItem[]
  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
  defaultTab?: string
}

const Tab: React.FC<Props> = ({
  items,
  headerStyle,
  bodyStyle,
  defaultTab = items[0]?.key
}) => {

  const searchParams = useSearchParams()

  const [activeTab, setActiveTab] = useState(() => {
    const tabFromUrl = searchParams.get('tab')
    return tabFromUrl && items.some((item) => item.key === tabFromUrl)
      ? tabFromUrl
      : defaultTab
  })

  // Mock the role instead of using context
  const role = UserRole.ADMIN // Default mock role

  const filteredItems = items.filter((item) => {
    if (item.roles || item.isHidden) {
      return item.roles?.includes(role as UserRole)
    }
    return true
  })

  const handleTabChange = useCallback((tabKey: string) => {
    setActiveTab(tabKey)
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('tab', tabKey)
    window.history.pushState({}, '', newUrl.toString())
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      const tabFromUrl = params.get('tab')
      if (tabFromUrl && items.some((item) => item.key === tabFromUrl)) {
        setActiveTab(tabFromUrl)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [items])

  return (
    <div className={styles.tabContainer}>
      <TabHeader
        items={filteredItems}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        containerStyle={headerStyle}
      />
      <TabBody items={items} activeTab={activeTab} containerStyle={bodyStyle} />
    </div>
  )
}

export default Tab
