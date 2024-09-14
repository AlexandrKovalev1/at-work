import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreIcon } from '../../assets/icons/MoreIcon.tsx'

import s from './drop-down.module.scss'
import { useAppDispatch } from '../../app/providers/store/store.ts'
import { usersThunks } from '../../slices/users/model/users-slice.ts'
import { Link } from 'react-router-dom'
import { PATH } from '../../app/providers/router/router.tsx'

type Props = {
  className?: string
  active?: boolean
  id: number
}

export const DropDown = ({ className, active, id }: Props) => {
  const dispatch = useAppDispatch()
  const onArchiveClickHandler = () => {
    dispatch(usersThunks.editStatusUser({ id, status: 'archive' }))
  }
  const onActiveClickHandler = () => {
    dispatch(usersThunks.editStatusUser({ id, status: 'active' }))
  }

  const onHiddenClickHandler = () => {
    dispatch(usersThunks.editStatusUser({ id, status: 'hidden' }))
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={className}>
        <button className={s.iconButton} aria-label="Customise options">
          <MoreIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.menuContent} align={'end'}>
          <DropdownMenu.Item className={s.menuItem}>
            <Link to={`${PATH.USER_EDIT}/${id}`} className={s.link}>
              {' '}
              Редактировать
            </Link>
          </DropdownMenu.Item>
          {active ? (
            <DropdownMenu.Item className={s.menuItem} onClick={onArchiveClickHandler}>
              Архивировать
            </DropdownMenu.Item>
          ) : (
            <DropdownMenu.Item className={s.menuItem} onClick={onActiveClickHandler}>
              Активировать
            </DropdownMenu.Item>
          )}
          <DropdownMenu.Item className={s.menuItem} onClick={onHiddenClickHandler}>
            Скрыть
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
