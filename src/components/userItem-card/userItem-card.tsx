import { Card, DropDown, Typography } from '../index.ts'
import s from './userItemCard.module.scss'

type Props = {
  userName: string
  city: string
  companyName: string
  avatar: string
  status: 'active' | 'archive' | 'hidden'
}
export const UserItemCard = ({ userName, city, companyName, avatar, status }: Props) => {
  return (
    <Card className={`${s.wrapper} ${status === 'archive' && s.archive}`}>
      <img src={avatar} alt="user-avatar" className={s.avatar} />
      <div className={s.information}>
        <DropDown className={s.menu} active={status === 'active'} />
        <div>
          <Typography as={'h3'} variant={'headline'} className={s.userName}>
            {userName}
          </Typography>
          <Typography
            as={'span'}
            variant={'text2-medium'}
            className={`${status === 'archive' && s.company}`}
          >
            {companyName}
          </Typography>
        </div>
        <Typography as={'span'} variant={'caption'} className={s.city}>
          {city}
        </Typography>
      </div>
    </Card>
  )
}
