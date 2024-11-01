"use client"
import { CartItemsRes } from "@/services/types"
import { useQuery } from "react-query"
import { useLangParams } from "@/services/hooks";
import { getCartItems } from "./cart.api";
import { useGetProfileQuery } from "../../auth";
import { useMemo } from "react";

export const GET_CART_ITEMS_QUERY_KEY = '/cart'

export const useGetCartItemsQuery = ({ initialData }: { initialData?: CartItemsRes }) => {
  const { lang } = useLangParams();

  const { data } = useGetProfileQuery({})

  const userId = useMemo(() => data?.data?.id, [data])

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<CartItemsRes | null, Error>(
    [GET_CART_ITEMS_QUERY_KEY, lang, userId],
    () => getCartItems(),
    options
  );
};

