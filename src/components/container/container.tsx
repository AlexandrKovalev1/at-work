import { ComponentProps, ReactNode } from 'react'
import s from './container.module.scss'

type Props = {
  maxWidth?: string
  children?: ReactNode
} & Omit<ComponentProps<'div'>, 'style'>

export const Container = ({ maxWidth = '1160px', children, className, ...props }: Props) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={`${s.container} ${className}`} {...props}>
      {children}
    </div>
  )
}
