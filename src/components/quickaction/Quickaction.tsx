'use client'

import { ButtonProps } from '@/components/button/Button'
import { cloneElement, CSSProperties, ReactElement } from 'react'
import Illustration, { icons } from '../illustration/Illustration'
import style from './quickaction.module.scss'

export interface Props {
  type: keyof typeof icons
  title: string
  children: ReactElement<ButtonProps>
  description?: string
  row?: '1' | '2'
  styles?: CSSProperties
  styleBtn?: CSSProperties
}

const QuickAction: React.FC<Props> = ({
  type,
  title,
  description,
  children,
  row = '1',
  styles = {},
  styleBtn = {}
}) => {
  const containerClassName = `${style.quick_actions} ${row === '2' ? style.quick_actions__row2 : ''}`

  return (
    <div className={containerClassName} style={styles}>
      <div className={style.quick_actions__content}>
        <div className={style.quick_actions__illustration}>
          <Illustration src={type} className={style.icon} />
        </div>
        <div className={style.quick_actions__text}>
          <p className={style.quick_actions__title}>{title}</p>
          {description && (
            <p className={style.quick_actions__description}>{description}</p>
          )}
        </div>
      </div>
      <div className={style.quick_actions__button}>
        {cloneElement(children, { styleBtn: { ...styleBtn } })}
      </div>
    </div>
  )
}

export default QuickAction
