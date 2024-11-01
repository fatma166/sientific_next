"use client"
import { ClientBooksRes } from "@/services/types"
import { useQuery } from "react-query"

import { useLangParams } from "@/services/hooks";
import { getClientLastWatchedBooks } from "./books.api";

export const GET_CLIENT_LAST_WATCHED_BOOKS_QUERY_KEY = '/book_last_seen'

export const useGetClientLastWatchedBooksQuery = ({ initialData, page = 1, per_page = 12, search = '' }: { initialData?: ClientBooksRes, page?: number, per_page?: number, search?: string }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<ClientBooksRes | null, Error>(
    [GET_CLIENT_LAST_WATCHED_BOOKS_QUERY_KEY, lang, page, per_page, search],
    () => getClientLastWatchedBooks({ page, per_page, search }),
    options
  );
};

