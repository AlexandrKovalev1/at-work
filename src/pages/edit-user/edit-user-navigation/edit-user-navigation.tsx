import s from './edit-user-navigation.module.scss'
import { Category, Typography } from '../../../components'
import { PATH } from '../../../app/providers/router/router.tsx'

export const EditUserNavigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <Typography as={Category} to={PATH.USER_EDIT_PROFILE} variant={'text2-semibold'}>
            Данные профиля
          </Typography>
        </li>
        <li>
          <Typography as={Category} to={PATH.USER_EDIT_WORKSPACE} variant={'text2-semibold'}>
            Рабочее пространство
          </Typography>
        </li>
        <li>
          <Typography as={Category} to={'/'} variant={'text2-semibold'}>
            Приватность
          </Typography>
        </li>
        <li>
          <Typography as={Category} to={'/'} variant={'text2-semibold'}>
            Безопасность
          </Typography>
        </li>
      </ul>
    </nav>
  )
}
