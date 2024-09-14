import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { Layout } from '../../../ui/layout/layout.tsx'
import { Users } from '../../../pages/users'
import { EditUser } from '../../../pages/edit-user'
import { EditProfile } from '../../../pages/edit-user/edit-profile'
import { EditWorkspace } from '../../../pages/edit-user/edit_workspace'

export const PATH = {
  ROOT: '/',
  USERS: '/users',
  USER_EDIT: 'edit_user',
  USER_EDIT_PAGE: 'edit_user/:id',
  USER_EDIT_PROFILE: 'profile',
  USER_EDIT_WORKSPACE: 'workspace',
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
            element: <EditUser />,
            children: [
              {
                index: true,
                element: <Navigate to={PATH.USER_EDIT_PROFILE} />,
              },
              { path: PATH.USER_EDIT_PROFILE, element: <EditProfile /> },
              { path: PATH.USER_EDIT_WORKSPACE, element: <EditWorkspace /> },
            ],
          },
        ],
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
