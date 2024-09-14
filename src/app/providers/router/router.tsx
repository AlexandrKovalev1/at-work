import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { Layout } from '../../../ui/layout/layout.tsx'
import { Users } from '../../../pages/users'

export const PATH = {
  ROOT: '/',
  USERS: '/users',
  USER_EDIT: 'edit_user',
  USER_EDIT_PAGE: 'edit_user/:id',
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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: PATH.USER_EDIT_PAGE,
            element: <div>Edit</div>,
          },
        ],
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
