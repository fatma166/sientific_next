"use client"
import { ProfileResponse } from "@/services/types"
import { useQuery } from "react-query"
import { getProfile } from "./auth.api";
import { useLangParams } from "@/services/hooks";


export const GET_PROFILE_KEY = '/client_profile'

export const useGetProfileQuery = ({ initialData }: { initialData?: ProfileResponse | null }) => {
  const { lang } = useLangParams();

  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<ProfileResponse | null, Error>(
    [GET_PROFILE_KEY, lang],
    () => getProfile(),
    options
  );
};

