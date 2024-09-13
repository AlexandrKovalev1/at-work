import { NavLink, NavLinkProps } from 'react-router-dom'
import s from './category.module.scss'

type Props = NavLinkProps

export const Category = ({ className, ...props }: Props) => {
  return <NavLink {...props} className={`${s.category} ${className}`} />
}
