import { LibraryBookDetailsRes } from "@/services/types"
import clientApi from "../../clientApi"



export const getLibraryBookDetails = async ({ id }: { id: string | number }) => {
  const res = await clientApi.get<LibraryBookDetailsRes>(`/book_detail/${id}`)
  return res?.data
}

export const toggleLibraryBookFavorite = async ({ id }: { id: string | number }) => {
  const res = await clientApi.post(`/add_remove_favorite`, {
    book_id: id
  })
  return res?.data
}

