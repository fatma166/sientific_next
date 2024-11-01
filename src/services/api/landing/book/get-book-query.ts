"use client"
import { LibraryBookDetailsRes } from "@/services/types"
import { useQuery } from "react-query"
import { getLibraryBookDetails } from "./book.api";
import { useLangParams } from "@/services/hooks";

export const GET_FRONT_LIBRARY_BOOK_QUERY_KEY = '/book_detail/:id'

export const useGetLibraryBookDetailsQuery = ({ initialData, id }: { initialData?: LibraryBookDetailsRes, id: string | number }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<LibraryBookDetailsRes | null, Error>(
    [GET_FRONT_LIBRARY_BOOK_QUERY_KEY, id, lang],
    () => getLibraryBookDetails({ id }),
    options
  );
};

