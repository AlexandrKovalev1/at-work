import { instance } from '../base-api.ts'
import { User } from './user.types.ts'

export const userApi = {
  fetchUsers: () => {
    return instance.get<User[]>('/users')
  },
}
