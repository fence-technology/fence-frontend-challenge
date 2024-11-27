'use client'

import {
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingDelayGroup,
  FloatingPortal,
  offset,
  Placement,
  safePolygon,
  arrow as setArrow,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles
} from '@floating-ui/react'
import React, { useRef, useState } from 'react'
import styles from './main-popover.module.scss'

export type TPopoverControls = {
  open: boolean
  setOpen: (value: boolean) => void
}

interface Props {
  className?: string
  content: React.ReactNode
  children: React.ReactElement
  controls?: TPopoverControls
  transition?: Parameters<typeof useTransitionStyles>['1']
  placement?: Placement
  arrow?: boolean
  visible?: boolean
  withHover?: boolean
  withClick?: boolean
  onShow?: () => void
}

export const usePopoverControls = () => {
  const [open, setOpen] = useState<boolean>(false)

  return {
    open,
    setOpen
  }
}

export const MainPopover: React.FC<Props> = ({
  onShow,
  controls,
  placement = 'bottom',
  transition,
  children,
  content,
  arrow,
  visible = true,
  withHover = true,
  withClick = true,
  className
}) => {
  const arrowRef = useRef(null)
  const defaultControls = usePopoverControls()

  const changeVisibility = (open: boolean) => {
    if (open) {
      onShow?.()
    }

    if (controls) {
      controls.setOpen(open)
      return
    }

    defaultControls.setOpen(open)
  }

  const { refs, floatingStyles, context } = useFloating({
    open: controls ? controls.open : defaultControls.open,
    onOpenChange: changeVisibility,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      setArrow({
        element: arrowRef
      }),
      flip({
        fallbackAxisSideDirection: 'start'
      }),
      shift()
    ]
  })

  const defaultTransition = {
    initial: {
      opacity: 0
    },
    close: {
      opacity: 0
    }
  }

  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    context,
    transition || defaultTransition
  )

  const click = useClick(context, { enabled: withClick })
  const hover = useHover(context, {
    move: false,
    enabled: withHover,
    handleClose: safePolygon()
  })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = [hover, click, focus, dismiss, role]

  const { getFloatingProps, getReferenceProps } = useInteractions(interactions)

  const childrenWithProps = React.cloneElement(children, {
    ref: refs.setReference,
    ...getReferenceProps({
      onClick(e) {
        children.props.onClick?.(e)
      },
      onMouseDown(e) {
        children.props.onMouseDown?.(e)
      },
      onMouseUp(e) {
        children.props.onMouseUp?.(e)
      },
      onTouchStart(e) {
        children.props.onTouchStart?.(e)
      },
      onTouchEnd(e) {
        children.props.onTouchEnd?.(e)
      }
    })
  })

  return (
    <FloatingDelayGroup delay={200}>
      {childrenWithProps}
      <FloatingPortal>
        {isMounted && visible && (
          <div
            className={`Tooltip ${styles.popover} ${className ?? ''}`}
            ref={refs.setFloating}
            style={{ ...transitionStyles, ...floatingStyles }}
            {...getFloatingProps()}>
            <div className={styles.popover__wrapper}>
              {arrow && (
                <FloatingArrow
                  className={styles.popover__arrow}
                  fill="#fff"
                  stroke="#E4E4E5"
                  strokeWidth={1}
                  ref={arrowRef}
                  context={context}
                />
              )}
              {content}
            </div>
          </div>
        )}
      </FloatingPortal>
    </FloatingDelayGroup>
  )
}
