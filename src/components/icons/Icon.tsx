import React, { CSSProperties } from 'react'

import {
  Alert,
  AlertNegative,
  AlertPositive,
  AlertWarning,
  Amount,
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ArrowRight,
  ArrowUp,
  Back,
  Borrowed,
  Calendar,
  Capital,
  Cash,
  Close,
  CloseModal,
  Collections,
  Covenants,
  Dashboard,
  DeleteCross,
  DeleteTrash,
  Document,
  DocumentIcon,
  DocumentPurple,
  Export,
  Filters,
  Liabilities,
  Link,
  ListOffAssets,
  Logout,
  Minus,
  Negative,
  Others,
  Percentage,
  Plus,
  Portfolio,
  Positive,
  ReadinessScore,
  Region,
  Report,
  Search,
  SearchIcon,
  Settings,
  Tooltip,
  Trash,
  Upload,
  UploadBlue,
  Warning
} from '@images/icons/v2'

import { ArchiveBookIcon } from '@images/icons/archive-book'
import { MoneyBagIcon } from '@images/icons/assets/money-bag'
import { MoneyIcon } from '@images/icons/money'
import { CashIcon } from '@images/icons/monitoring/cash'

export const IconsObj = {
  Dashboard,
  Portfolio,
  Liabilities,
  Others,
  Cash,
  Settings,
  Logout,
  Report,
  Covenants,
  Search,
  ListOffAssets,
  Collections,
  Percentage,
  Amount,
  Borrowed,
  Capital,
  Document,
  ArrowDown,
  ArrowUp,
  Calendar,
  Plus,
  Minus,
  Filters,
  ArrowBack,
  Link,
  Negative,
  Positive,
  Alert,
  Warning,
  Close,
  Tooltip,
  Back,
  DeleteCross,
  DeleteTrash,
  Upload,
  Export,
  AlertPositive,
  AlertNegative,
  AlertWarning,
  MoneyIcon,
  MoneyBagIcon,
  ArchiveBookIcon,
  CashIcon,
  Region,
  ReadinessScore,
  ArrowRight,
  SearchIcon,
  DocumentIcon,
  ArrowForward,
  CloseModal,
  UploadBlue,
  Trash,
  DocumentPurple
} as const

type IconKeys = keyof typeof IconsObj

export interface IconProps {
  src: IconKeys
  style?: CSSProperties
  className?: string
  filled?: boolean
}

export const isValidIconKey = (key: string): key is IconKeys => {
  return key in IconsObj
}

const Icons: React.FC<IconProps> = ({
  src,
  style,
  className,
  filled = false
}) => {
  const IconComponent = IconsObj[src]

  if (!IconComponent) {
    return null
  }

  return <IconComponent style={style} className={className} filled={filled} />
}

export default Icons
