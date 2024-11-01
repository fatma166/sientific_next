
'use server'
import clientApi from "@/services/api/clientApi";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";



export const initServerPages = ({ locale }: { locale: string | undefined }) => {

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || ""

  if (token) {
    clientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const lang = locale === 'en' ? 'en' : 'ar'
  clientApi.defaults.headers.common['Accept-Language'] = lang
}
