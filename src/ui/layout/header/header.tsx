import s from './header.module.scss'
import { Container, LinearProgress, Typography } from '../../../components'
import { Link } from 'react-router-dom'
import { PATH } from '../../../app/providers/router/router.tsx'
import { Logo } from '../../../assets/logo.tsx'
import { FavoriteIcon } from '../../../assets/icons/FavoriteIcon.tsx'
import { NotificationIcon } from '../../../assets/icons/NotificationIcon.tsx'
import photo from '../../../assets/images/header-foto.jpg'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container} upper>
        <Link to={PATH.ROOT}>
          <Logo />
        </Link>
        <div className={s.registeredMenu}>
          <div className={s.infoIconsBlock}>
            <FavoriteIcon />
            <NotificationIcon />
          </div>
          <div className={s.photoNameBlock}>
            <img src={photo} alt="user-avatar" />
            <Typography as={'span'} variant={'text2-medium'}>
              Ivan1234
            </Typography>
          </div>
        </div>
      </Container>
      <LinearProgress />
    </header>
  )
}
