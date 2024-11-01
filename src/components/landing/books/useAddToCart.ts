import { addToCart, GET_FRONT_LIBRARY_BOOK_QUERY_KEY, toggleLibraryBookFavorite, useGetCartItemsQuery, useGetProfileQuery } from "@/services/api"
import { useClientRouter, useLanguage } from "@/services/hooks"
import { errorMessageLog } from "@/utils"
import { message } from "antd"
import React, { useMemo, useState } from 'react'
import { useQueryClient } from "react-query"

const useAddToCart = () => {
  const router = useClientRouter()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [favUpdating, setFavUpdating] = useState(false)
  const queryClient = useQueryClient()

  const { data } = useGetProfileQuery({})
  const { t } = useLanguage()
  const { refetch } = useGetCartItemsQuery({})


  const isAuth = useMemo(() => !!data?.data?.id, [data])

  const handleAddToCart = async ({ book_id, quantity = 1, path }: { book_id: number, quantity?: number, path?: string }) => {

    if (!isAuth) {
      message.warning(t('login_to_add_to_cart'))
      router.push('/login')
      return
    }

    setIsAddingToCart(true)
    try {

      await addToCart({ book_id, quantity })
      if (refetch) {
        await refetch()
      }
      message.success(t('added_to_cart_success'))

      if (path) {
        router.push(path)
      }
    } catch (error) {
      errorMessageLog(error)
    }
    setIsAddingToCart(false)
  }


  const handleToggleFav = async ({ book_id, is_favorite, apiRefetch }: {
    book_id: number, is_favorite: boolean,
    apiRefetch?: () => Promise<any>
  }) => {

    if (!isAuth) {
      message.warning(t('login_to_add_to_favorites'))
      return
    }


    setFavUpdating(true)
    try {
      //
      await toggleLibraryBookFavorite({ id: book_id })
      if (apiRefetch) await apiRefetch()
      if (is_favorite) {
        message.success(t('add_to_favorites_success'))
      } else {
        message.success(t('remove_from_favorites_success'))
      }
    } catch (error) {
      errorMessageLog(error)
    }
    setFavUpdating(false)
  }


  return { isAddingToCart, handleAddToCart, isAuth, favUpdating, handleToggleFav }
}

export default useAddToCart