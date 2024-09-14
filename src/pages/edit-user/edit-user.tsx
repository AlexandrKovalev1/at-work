import s from './edit-user.module.scss'
import { Card, Typography } from '../../components'
import { BackArrowIcon } from '../../assets/icons/BackArrowIcon.tsx'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/providers/store/store.ts'
import { selectAllUsers } from '../../slices/users/model/users-slice.ts'
import { EditUserNavigation } from './edit-user-navigation'
import { PATH } from '../../app/providers/router/router.tsx'

export const EditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const onBackClickHandler = () => navigate(PATH.USERS)
  const allUsers = useAppSelector(selectAllUsers)
  if (!id) return
  const currentUser = allUsers.find(u => u.id === +id)
  if (!currentUser) return

  return (
    <div className={s.wrapper}>
      <div className={s.backButtonWrapper} onClick={onBackClickHandler}>
        <BackArrowIcon />
        <Typography as={'button'} variant={'headline'}>
          Назад
        </Typography>
      </div>
      <div className={s.content}>
        <Card className={s.card}>
          <img src={currentUser.avatar} alt="user-avatar" className={s.avatar} />
          <EditUserNavigation />
        </Card>
        <Outlet context={id} />
      </div>
    </div>
  )
}
