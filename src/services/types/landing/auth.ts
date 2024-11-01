import { LibraryBook } from "./library"
import { Pagination } from "./meta"

export interface LoginClient {
  id: number
  user_name: string
  name: string
  email: string
  phone: string
  verification_code?: string
  status: number
  statusAsString: string
  created_at: string
}

export interface UserProfile extends LoginClient { }

export interface LoginResponse {
  status: boolean
  message: string
  data: {
    accessToken: string,
    client: LoginClient
  }
}

export interface ProfileResponse {
  status: boolean
  message: string
  data: UserProfile
}


export interface UserFavoriteResponse {
  status: boolean
  message: string
  data: {
    data: LibraryBook[]
    pagination: Pagination
  }
}

