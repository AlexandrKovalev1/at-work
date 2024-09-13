import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
