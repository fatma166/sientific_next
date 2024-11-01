"use client"
import { LibraryBookDetailsRes } from "@/services/types"
import { useQuery } from "react-query"
import { getCategories } from "./categories.api";
import { useLangParams } from "@/services/hooks";

export const GET_FRONT_CATEGORIES_QUERY_KEY = '/category'

export const useGetCategoriesQuery = ({ initialData }: { initialData?: LibraryBookDetailsRes }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<LibraryBookDetailsRes | null, Error>(
    [GET_FRONT_CATEGORIES_QUERY_KEY, lang],
    () => getCategories(),
    options
  );
};

