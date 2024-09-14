import { instance } from '../../../services/base-api.ts'
import { DomainUser, EditUserData } from '../user.types.ts'

export const userApi = {
  fetchUsers: () => {
    return instance.get<DomainUser[]>('/users')
  },
  editUser: (data: EditUserData) => {
    return new Promise<EditUserData>(resolve => setTimeout(() => resolve(data), 1000))
  },
}
