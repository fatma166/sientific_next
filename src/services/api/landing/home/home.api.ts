import { HomeFrontResponse, ApiReaderResponse, ApiEducationResponse, FrontSettingsRes } from "@/services/types"
import clientApi from "../../clientApi"



export const getFrontSettings = async () => {
  const res = await clientApi.get<FrontSettingsRes>(`/settings`)
  return res?.data
}


export const getHomeFront = async () => {
  const res = await clientApi.get<HomeFrontResponse>(`/home`)
  return res?.data
}


export const getReaderFront = async () => {
  const res = await clientApi.get<ApiReaderResponse>(`/smart_reader`)
  return res?.data
}

export const getEductionFront = async () => {
  const res = await clientApi.get<ApiEducationResponse>(`/education_management`)
  return res?.data
}


export const submitContactForm = async (body: {
  email: string,
  name: string,
  phone: string,
  text: string,

}) => {
  const res = await clientApi.post(`/contact_us`, body)
  return res?.data
}

export const subscribeToNewsletter = async (body: {
  email: string,
}) => {
  const res = await clientApi.post(`/subscribe_mail`, body)
  return res?.data
}