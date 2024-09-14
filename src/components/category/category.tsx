import { NavLink, NavLinkProps } from 'react-router-dom'
import s from './category.module.scss'
import clsx from 'clsx'

type Props = NavLinkProps

export const Category = ({ className, ...props }: Props) => {
  const classNameHandler = ({ isActive }: { isActive: boolean }) => {
    return isActive ? clsx(s.category, className, s.active) : clsx(s.category, className)
  }
  return <NavLink {...props} className={classNameHandler} />
}
