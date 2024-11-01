"use client"
import { ClientBooksRes } from "@/services/types"
import { useQuery } from "react-query"

import { useLangParams } from "@/services/hooks";
import { getBooks, getClientBooks } from "./books.api";

export const GET_BOOKS_QUERY_KEY = '/book_search'

export const useGetBooksQuery = ({ initialData, page = 1, per_page = 12, search = '', category = '' }: { initialData?: ClientBooksRes, page?: number, per_page?: number, search?: string, category?: string }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<ClientBooksRes | null, Error>(
    [GET_BOOKS_QUERY_KEY, lang, page, per_page, search, category],
    () => getBooks({ page, per_page, search, category }),
    options
  );
};

