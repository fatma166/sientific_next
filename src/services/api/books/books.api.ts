import { ClientBooksRes, RateBooksRes } from "@/services/types"
import clientApi from "../clientApi"



export const getClientBooks = async ({ page = 1, per_page = 12, search = '' }: { page?: number, per_page?: number, search?: string }) => {

  let extra = ''

  if (search) {
    extra += `&search=${search}`
  }

  if (per_page) {
    extra += `&per_page=${per_page}`
  }


  const res = await clientApi.get<ClientBooksRes>(`/client_books?page=${page}${extra}`)
  return res?.data
}


export const getBooks = async ({ page = 1, per_page = 12, search = '', category = '' }: { page?: number, per_page?: number, search?: string, category?: string }) => {

  let extra = ''

  if (per_page) {
    extra += `&per_page=${per_page}`
  }

  if (search) {
    extra += `&search=${search}`
  }


  if (category) {
    extra += `&category=${category}`
  }


  const res = await clientApi.get<ClientBooksRes>(`/book_search?page=${page}${extra}`)
  return res?.data
}


export const getClientFavBooks = async ({ page = 1, per_page = 12, search = '' }: { page?: number, per_page?: number, search?: string }) => {

  let extra = ''

  if (search) {
    extra += `&search=${search}`
  }

  if (per_page) {
    extra += `&per_page=${per_page}`
  }


  const res = await clientApi.get<ClientBooksRes>(`/client_favorite_list?page=${page}${extra}`)
  return res?.data
}


export const getClientLastWatchedBooks = async ({ page = 1, per_page = 12, search = '' }: { page?: number, per_page?: number, search?: string }) => {

  let extra = ''

  if (search) {
    extra += `&search=${search}`
  }

  if (per_page) {
    extra += `&per_page=${per_page}`
  }


  const res = await clientApi.get<ClientBooksRes>(`/book_last_seen?page=${page}${extra}`)
  return res?.data
}


export const getBookRating = async ({ page = 1, per_page = 12, search = '' }: { page?: number, per_page?: number, search?: string }) => {

  let extra = ''

  if (search) {
    extra += `&search=${search}`
  }

  if (per_page) {
    extra += `&per_page=${per_page}`
  }


  const res = await clientApi.get<RateBooksRes>(`/client_book_rating?page=${page}${extra}`)
  return res?.data
}