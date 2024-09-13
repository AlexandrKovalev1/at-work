import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreIcon } from '../../assets/icons/MoreIcon.tsx'

import s from './drop-down.module.scss'

export const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.iconButton} aria-label="Customise options">
          <MoreIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.menuContent} align={'end'}>
          <DropdownMenu.Item className={s.menuItem}>Редактировать</DropdownMenu.Item>
          <DropdownMenu.Item className={s.menuItem}>Архивировать</DropdownMenu.Item>
          <DropdownMenu.Item className={s.menuItem}>Скрыть</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
