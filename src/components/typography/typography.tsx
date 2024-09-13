import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './typography.module.scss'
import clsx from 'clsx'

type Props<T extends ElementType> = {
  as?: T
  className?: string
  children?: ReactNode
  variant?:
    | 'title'
    | 'headline'
    | 'text1-semibold'
    | 'text1-medium'
    | 'text2-semibold'
    | 'text2-medium'
    | 'caption'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'text2-medium',
  ...props
}: Props<T>) => {
  const Component = as ?? 'p'

  const classNames = clsx(s[variant], className)

  return <Component {...props} className={classNames} />
}
