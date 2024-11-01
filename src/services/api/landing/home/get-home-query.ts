"use client"
import { HomeFrontResponse, ApiReaderResponse, ApiEducationResponse, FrontSettingsRes } from "@/services/types"
import { useQuery } from "react-query"
import { getHomeFront, getReaderFront, getEductionFront, getFrontSettings } from "./home.api";
import { useLangParams } from "@/services/hooks";

export const GET_FRONT_SETTINGS_QUERY_KEY = '/settings'
export const GET_HOME_QUERY_KEY = '/home'
export const GET_READER_QUERY_KEY = '/smart_reader'
export const GET_Education_QUERY_KEY = '/education_management'



export const useGetFrontSettingsQuery = ({ initialData }: { initialData?: FrontSettingsRes }) => {

  const options: any = {};
  const { lang } = useLangParams();

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<FrontSettingsRes | null, Error>(
    [GET_FRONT_SETTINGS_QUERY_KEY, lang],
    () => getFrontSettings(),
    options
  );
};


export const useGetHomeFrontQuery = ({ initialData }: { initialData?: HomeFrontResponse }) => {
  const { lang } = useLangParams();
  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<HomeFrontResponse | null, Error>(
    [GET_HOME_QUERY_KEY, lang],
    () => getHomeFront(),
    options
  );
};


export const useGetReaderFrontQuery = ({ initialData }: { initialData?: ApiReaderResponse }) => {
  const { lang } = useLangParams();
  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<ApiReaderResponse | null, Error>(
    [GET_READER_QUERY_KEY, lang],
    () => getReaderFront(),
    options
  );
};

export const useGetEducationFrontQuery = ({ initialData }: { initialData?: ApiEducationResponse }) => {
  const { lang } = useLangParams();
  const options: any = {};

  if (initialData) {
    options.initialData = initialData;
  }
  return useQuery<ApiEducationResponse | null, Error>(
    [GET_Education_QUERY_KEY, lang],
    () => getEductionFront(),
    options
  );
};



