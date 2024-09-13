import { ComponentProps, ReactNode } from 'react'
import s from './container.module.scss'
import clsx from 'clsx'

type Props = {
  maxWidth?: string
  children?: ReactNode
  upper?: boolean
} & Omit<ComponentProps<'div'>, 'style'>

export const Container = ({ maxWidth = '1160px', children, className, upper, ...props }: Props) => {
  const totalClass = clsx(s.container, upper && s.upper, className)
  return (
    <div style={{ maxWidth: maxWidth }} className={totalClass} {...props}>
      {children}
    </div>
  )
}
