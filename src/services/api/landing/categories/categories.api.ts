import { LibraryBookDetailsRes } from "@/services/types"
import clientApi from "../../clientApi"



export const getCategories = async () => {
  const res = await clientApi.get<LibraryBookDetailsRes>(`/category`)
  return res?.data
}
