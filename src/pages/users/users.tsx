import s from './users.module.scss'
import { Typography, UserItemCard } from '../../components'
import { useEffect } from 'react'
import {
  selectActiveUsers,
  selectAllUsers,
  selectArchivedUsers,
  usersThunks,
} from '../../slices/users/model/users-slice.ts'
import { useAppDispatch, useAppSelector } from '../../app/providers/store/store.ts'
import { CustomUser } from '../../slices/users/user.types.ts'

export const Users = () => {
  const allUsers = useAppSelector(selectAllUsers)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!allUsers.length) {
      dispatch(usersThunks.fetchUsers())
    }
  }, [allUsers, dispatch])

  return (
    <div className={s.wrapper}>
      <ActiveUsers />
      <Archive />
    </div>
  )
}

const ActiveUsers = () => {
  const activeUsers = useAppSelector<CustomUser[]>(selectActiveUsers)

  return (
    <div>
      <div className={s.categoryHeading}>
        <Typography as={'h2'} variant={'title'}>
          Активные
        </Typography>
      </div>
      <div className={s.contentBlock}>
        {activeUsers?.map(u => (
          <UserItemCard
            key={u.id}
            userName={u.username}
            city={u.address.city}
            companyName={u.company.name}
            avatar={u.avatar}
            status={u.status}
            id={u.id}
          />
        ))}
      </div>
    </div>
  )
}

const Archive = () => {
  const archiveUsers = useAppSelector<CustomUser[]>(selectArchivedUsers)
  return (
    <div>
      <div className={s.categoryHeading}>
        <Typography as={'h2'} variant={'title'}>
          Архив
        </Typography>
      </div>
      <div className={s.contentBlock}>
        {archiveUsers?.map(u => (
          <UserItemCard
            key={u.id}
            userName={u.username}
            city={u.address.city}
            companyName={u.company.name}
            avatar={u.avatar}
            status={u.status}
            id={u.id}
          />
        ))}
      </div>
    </div>
  )
}
