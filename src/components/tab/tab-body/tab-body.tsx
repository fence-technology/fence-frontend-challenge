'use client'

import React, { CSSProperties } from 'react'
import { TabItem } from '../tab-component'
import styles from './tab.body.module.scss'

interface Props {
  items: TabItem[]
  activeTab: string
  containerStyle?: CSSProperties
}

// Mock enum for UserRole since we removed the import
enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

const TabBody: React.FC<Props> = ({ items, activeTab, containerStyle }) => {
  // Mock the role instead of using context
  const role = UserRole.ADMIN // Default mock role

  return (
    <div className={styles.tabContent} style={containerStyle}>
      {items.map((item) => {
        if (item.roles && !item.roles.includes(role)) {
          return null
        }
        return (
          <div
            key={item.key}
            className={
              activeTab === item.key
                ? styles.activeContent
                : styles.inactiveContent
            }>
            {item.content}
          </div>
        )
      })}
    </div>
  )
}

export default TabBody
