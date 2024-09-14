import { instance } from '../../../services/base-api.ts'
import { DomainUser } from '../user.types.ts'

export const userApi = {
  fetchUsers: () => {
    return instance.get<DomainUser[]>('/users')
  },
}
