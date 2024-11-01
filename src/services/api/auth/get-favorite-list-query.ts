"use client"
import { UserFavoriteResponse } from "@/services/types"
import { useQuery } from "react-query"
import clientApi from "../clientApi"
import { useLangParams } from "@/services/hooks"


export const getFavoriteList = async ({ page = 1 }: { page?: number }) => {
  const res = await clientApi.get<UserFavoriteResponse>(`/client_favorite_list?page=${page}`)
  return res?.data
}


export const GET_FAVORITE_LIST_KEY = '/client_favorite_list'

export const useFavoriteListQuery = ({ initialData, page }: { initialData?: UserFavoriteResponse | null, page?: number }) => {
  const { lang } = useLangParams();
  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<UserFavoriteResponse | null, Error>(
    [GET_FAVORITE_LIST_KEY, lang],
    () => getFavoriteList({ page }),
    options
  );
};
