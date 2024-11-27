import React from 'react'
import { MainPopover, TPopoverControls } from '../main-popover/main-popover'
import styles from './popover-options.module.scss'

type TOption = {
  label: string
  onClick: () => void
}

interface Props {
  children: React.ReactElement
  options: TOption[]
  controls: TPopoverControls
}

const Content: React.FC<Pick<Props, 'options'>> = ({ options }) => {
  return (
    <ul className={styles.popover_options}>
      {options.map((element, index) => (
        <li
          className={styles.popover_options__option}
          key={index}
          onClick={() => element.onClick()}>
          {element.label}
        </li>
      ))}
    </ul>
  )
}

export const PopoverOptions: React.FC<Props> = ({
  children,
  options,
  controls
}) => {
  return (
    <MainPopover
      controls={controls}
      placement="bottom-start"
      content={<Content options={options} />}>
      {children}
    </MainPopover>
  )
}
