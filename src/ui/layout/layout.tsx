import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Container } from '../../components'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container upper>
          <Outlet />
        </Container>
      </main>
    </>
  )
}
