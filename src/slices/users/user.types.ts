export type DomainUser = {
  id: number
  name: string
  username: string
  email: string
  address: UserAddress
  phone: string
  website: string
  company: UserCompany
}
export type UserAddressGeo = {
  lat: string
  lng: string
}
export type UserAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: UserAddressGeo
}
export type UserCompany = {
  name: string
  catchPhrase: string
  bs: string
}

export type UserStatus = 'active' | 'archive' | 'hidden'
export type CustomUser = DomainUser & {
  status: UserStatus
  avatar: string
}

export type EditUserData = {
  id: string
  name: string
  nickName: string
  email: string
  city: string
  phone: string
  company: string
}
