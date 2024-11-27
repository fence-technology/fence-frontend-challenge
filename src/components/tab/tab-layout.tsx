'use client'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import stylesBody from './tab-component.module.scss'
import stylesHeader from './tab-header/tab-header.module.scss'

// Mock user role enum
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

// Mock deal context hook
const useDealContext = () => {
  return {
    deal: {
      role: UserRole.ADMIN
    }
  }
}

export interface TabHeaderItem {
  key: string
  label: string
  roles?: string[]
  isHidden?: boolean
}

export interface Props {
  items: TabHeaderItem[]
  activeTab?: string
}

const TabLayout: React.FC<PropsWithChildren<Props>> = ({
  items,
  children,
  activeTab = items[0]?.key
}) => {
  const { deal: { role } = {} } = useDealContext()
  const router = useRouter()

  const filteredItems = items.filter((item) => {
    if (item.roles || item.isHidden) {
      return item.roles?.includes(role as UserRole)
    }
    return true
  })

  return (
    <div className={stylesBody.tabContainer}>
      <div className={stylesHeader.tabHeader}>
        {filteredItems.map((item) => (
          <button
            key={item.key}
            data-key={item.key}
            className={`${stylesHeader.tabButton} ${activeTab === item.key ? stylesHeader.active : ''}`}
            onClick={() => router.push(item.key)}>
            {item.label}
          </button>
        ))}
      </div>
      <div className={stylesBody.tabContent}>{children}</div>
    </div>
  )
}

export default TabLayout
