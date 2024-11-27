import { LoaderLine } from '@/components/loaders/loader-line/loader-line'
import { TooltipInfo } from '@/components/modals/tooltip-info/tooltip-info'
import React, { CSSProperties, ReactNode } from 'react'
import styles from './card.module.scss'

interface CardProps {
  style?: CSSProperties
  className?: string
  children: ReactNode
  tooltipClassName?: string
  tooltipStyle?: CSSProperties
  tooltipText?: string
}

interface CardHeaderProps {
  title: string
  subtitle?: string
  titleClass?: string
  subtitleClass?: string
  title_full_width?: string
  loading?: {
    title?: boolean
    value?: boolean
  }
}

interface CardBodyProps {
  content?: string
  contentClass?: string
  contentSpanClass?: string
  highlightFirstWord?: boolean
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>
  Body: React.FC<CardBodyProps>
  Footer: React.FC<CardFooterProps>
} = ({
  style,
  className,
  children,
  tooltipText,
  tooltipClassName,
  tooltipStyle = {}
}) => {
  return (
    <div
      className={` ${styles.container_card} ${className || ''}`}
      style={style}>
      <div
        className={`${styles.container_card__tooltip_wrapper} ${tooltipClassName || ''}`}
        style={tooltipStyle}>
        {tooltipText && <TooltipInfo text={tooltipText} />}
      </div>
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  titleClass,
  subtitleClass,
  loading,
  title_full_width
}) => {
  return (
    <div className={`${styles.full_width} ${title_full_width} || ''}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {loading?.title ? (
          <LoaderLine height="12px" />
        ) : (
          <TooltipInfo text={title}>{title}</TooltipInfo>
        )}
      </div>
      {subtitle && (
        <div className={`${styles.subtitle} ${subtitleClass || ''}`}>
          {loading?.value ? (
            <LoaderLine width="100px" height="28px" />
          ) : (
            subtitle
          )}
        </div>
      )}
    </div>
  )
}

const CardBody: React.FC<CardBodyProps> = ({
  content,
  contentClass,
  contentSpanClass,
  highlightFirstWord = true
}) => {
  const getContent = (str: string): ReactNode => {
    const split = str.split(' ')
    if (highlightFirstWord && split.length > 1) {
      return (
        <div className={`${styles.content} ${contentClass || ''}`}>
          {split[0]}{' '}
          <span className={`${styles.content_span} ${contentSpanClass || ''}`}>
            {split.slice(1).join(' ')}
          </span>
        </div>
      )
    }
    return <p className={`${styles.content} ${contentClass || ''}`}>{str}</p>
  }

  return <>{content && getContent(content)}</>
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return <div className={`${className || ''} ${styles.footer}`}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
