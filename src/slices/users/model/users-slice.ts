import { createAppSlice } from '../../../common/utils/createAppSlice.ts'
import { CustomUser, DomainUser, UserStatus } from '../user.types.ts'
import { userApi } from '../api/user-api.ts'
import { isAxiosError } from 'axios'
import { createSelector, PayloadAction } from '@reduxjs/toolkit'
import cover from '../../../assets/images/cardCover.jpg'

const slice = createAppSlice({
  name: 'users',
  initialState: {
    users: [] as CustomUser[],
  },
  reducers: create => ({
    fetchUsers: create.asyncThunk<DomainUser[]>(
      async (_, { rejectWithValue }) => {
        try {
          const res = await userApi.fetchUsers()
          return res.data.filter((_, index) => index <= 5)
        } catch (e) {
          if (isAxiosError(e)) {
            return rejectWithValue({ message: e.message })
          }
          return rejectWithValue({ message: e })
        }
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload.map(u => ({ ...u, status: 'active', avatar: cover }))
        },
      }
    ),
    editStatusUser: create.reducer(
      (state, action: PayloadAction<{ id: number; status: UserStatus }>) => {
        state.users = state.users?.map(u =>
          u.id === action.payload.id ? { ...u, status: action.payload.status } : u
        )
      }
    ),
  }),
  selectors: {
    selectActiveUsers: createSelector(
      state => state.users,
      (users: CustomUser[]) => users?.filter(user => user.status === 'active')
    ),
    selectArchivedUsers: createSelector(
      state => state.users,
      (users: CustomUser[]) => users?.filter(user => user.status === 'archive')
    ),
    selectAllUsers: state => state.users,
  },
})

export const userReducer = slice.reducer
export const usersThunks = slice.actions
export const { selectAllUsers, selectActiveUsers, selectArchivedUsers } = slice.selectors
