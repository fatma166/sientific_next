"use client"
import { RateBooksRes } from "@/services/types"
import { useQuery } from "react-query"

import { useLangParams } from "@/services/hooks";
import { getBookRating } from "./books.api";

export const GET_BOOK_RATING_QUERY_KEY = '/client_book_rating'

export const useGetBookRatingQuery = ({ initialData, page = 1, per_page = 12, search = '' }: { initialData?: RateBooksRes, page?: number, per_page?: number, search?: string }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<RateBooksRes | null, Error>(
    [GET_BOOK_RATING_QUERY_KEY, lang, page, per_page, search],
    () => getBookRating({ page, per_page, search }),
    options
  );
};

