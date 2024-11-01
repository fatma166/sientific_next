"use client"
import { FrontLibraryRes } from "@/services/types"
import { useQuery } from "react-query"
import { getFrontLibrary } from "./library.api";
import { useLangParams } from "@/services/hooks";

export const GET_FRONT_LIBRARY_QUERY_KEY = '/library'

export const useGetFrontLibraryQuery = ({ initialData }: { initialData?: FrontLibraryRes }) => {
  const { lang } = useLangParams();
  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<FrontLibraryRes | null, Error>(
    [GET_FRONT_LIBRARY_QUERY_KEY, lang],
    () => getFrontLibrary(),
    options
  );
};

