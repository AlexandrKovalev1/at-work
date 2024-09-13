import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from '../../../ui/layout/layout.tsx'
import { Users } from '../../../pages/users'

export const PATH = {
  ROOT: '/',
  USERS: '/users',
} as const

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: PATH.ROOT,
    children: [
      {
        element: <Navigate to={PATH.USERS} />,
        path: PATH.ROOT,
      },
      {
        path: PATH.USERS,
        element: <Users />,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
