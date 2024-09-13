import { ComponentProps } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'
type Props = ComponentProps<'button'>
export const Button = ({ className, ...props }: Props) => {
  const classNames = clsx(s.button, className)
  return <button {...props} className={classNames} />
}
