'use client'

import { ButtonProps } from '@/components/button/Button'
import { cloneElement, CSSProperties, ReactElement } from 'react'
import Illustration, { icons } from '../illustration/Illustration'
import style from './quickactions.module.scss'

export interface Props {
  type: keyof typeof icons
  title: string
  children: ReactElement<ButtonProps>
  description?: string
  row?: '1' | '2'
  styles?: CSSProperties
  styleBtn?: CSSProperties
}

const QuickActions: React.FC<Props> = ({
  type,
  title,
  description,
  children,
  row = '1',
  styles = {},
  styleBtn = {}
}) => {
  const styleButton: CSSProperties =
    row == '1' ? { ...styleBtn } : { width: '100%', ...styleBtn }
  const styleContainer: CSSProperties =
    row == '1'
      ? { ...styles }
      : {
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '6px',
          ...styles
        }
  const styleIlustration: CSSProperties =
    row == '1'
      ? { height: '76px', width: '79px' }
      : { height: '56px', width: '54px' }
  const styleText: CSSProperties =
    row == '1'
      ? { height: '76px', width: '79px' }
      : { flexGrow: 1, alignItems: 'center' }

  return (
    <div className={style.quick_actions} style={styleContainer}>
      <div className={style.quick_actions__container}>
        <div style={styleIlustration}>
          <Illustration
            src={type}
            className={style.icon}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className={style.quick_actions__container__text} style={styleText}>
          <p className={style.quick_actions__container__text__title}>{title}</p>
          {description && (
            <p className={style.quick_actions__container__text__description}>
              {description}
            </p>
          )}
        </div>
      </div>
      <div>{cloneElement(children, { styleBtn: { ...styleButton } })}</div>
    </div>
  )
}

export default QuickActions
