'use client'

import { useUiContext } from '@/context/ui-context'
import NextLink, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props extends LinkProps {
  className?: string
  children?: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget
}

export const Link: React.FC<Props> = (props: Props) => {
  const { setLoader } = useUiContext()
  const pathname = usePathname()
  const href = props.href
  let externalLinkProps = {}
  const isExternal = typeof href === 'string' && href.match(/^https?:\/\//)

  if (isExternal) {
    externalLinkProps = { target: '_blank', rel: 'noopener' }
  }

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const pathFromHref = href.toString().split('?')[0]
    if (pathFromHref !== pathname) {
      setLoader(true)
    }
    props?.onClick?.(event)
  }

  return (
    <NextLink
      {...props}
      href={href}
      target={props.target}
      {...externalLinkProps}
      onClick={handleClick}>
      {props.children}
    </NextLink>
  )
}
