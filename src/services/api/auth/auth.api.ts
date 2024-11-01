import { LoginResponse, ProfileResponse } from "@/services/types"
import clientApi from "../clientApi"
import { setAuthCookie } from "./auth-cookie"



export const login = async (body: { email: string, password: string }) => {
  const res = await clientApi.post<LoginResponse>(`/clientlogin`,
    {
      email: body.email,
      password: body.password
    }
  )

  return res?.data
}


export const register = async (body: { email: string, password: string, phone: string, user_name: string, name: string }) => {
  const res = await clientApi.post<LoginResponse>(`/client_register`,
    {
      email: body.email,
      password: body.password,
      phone: body.phone,
      user_name: body.user_name,
      name: body.name
    }
  )
  return res?.data
}

export const getProfile = async () => {

  try {

    const token = clientApi.defaults.headers.common['Authorization'] || ''

    if (!token) return null

    const res = await clientApi.get<ProfileResponse>(`/client_profile`)
    return res?.data
  } catch (error) {
    return null
  }
}

export const getProfileBase = async () => {
  const token = clientApi.defaults.headers.common['Authorization'] || ''
  if (!token) return null
  const res = await clientApi.get<ProfileResponse>(`/client_profile`)
  return res?.data
}


export const updateProfile = async (body: { password?: string, phone?: string, user_name?: string, name?: string }) => {
  const res = await clientApi.post<LoginResponse>(`/update_client_profile`,
    body
  )
  return res?.data
}