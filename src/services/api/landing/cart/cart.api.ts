import { CartItemsRes } from "@/services/types"
import clientApi from "../../clientApi"



export const addToCart = async ({ book_id, quantity = 1 }: { book_id: number, quantity?: number }) => {
  const res = await clientApi.post(`/cart/add_item`, {
    book_id,
    quantity
  })
  return res?.data
}


export const getCartItems = async () => {

  const authToken = clientApi.defaults.headers.common['Authorization'] || ''
  if (!authToken) return null
  const res = await clientApi.get<CartItemsRes>(`/cart`)
  return res?.data


}


export const deleteCart = async () => {
  const res = await clientApi.delete(`/cart/delete_cart`)
  return res?.data
}


export const deleteCartItem = async ({ id }: { id: number }) => {
  const res = await clientApi.delete(`/cart/delete_item/${id}`)
  return res?.data
}

export const updateCartItem = async ({ book_id, quantity }: { book_id: number, quantity: number }) => {
  const res = await clientApi.post(`/cart/update_item`, {
    book_id, quantity
  })
  return res?.data
}

export const completeCartProcess = async () => {
  const res = await clientApi.post(`/cart/complete_process`)
  return res?.data
}