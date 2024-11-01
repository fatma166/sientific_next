"use client"
import React, { useEffect, useMemo } from 'react'
import { useParams, usePathname, useRouter } from "next/navigation"
import { defaultLocale } from "@/i18n"
import { useTranslations } from "next-intl"
import { useQueryClient } from "react-query"
import clientApi from "../api/clientApi"


export const useLangParams = () => {
  const params = useParams()

  const lang = useMemo(() => {
    return params.locale === 'en' ? 'en' : 'ar'
  }, [params.locale])


  return { lang }
}


export const useLanguage = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useParams().locale
  const lang = useParams().locale || defaultLocale
  const t = useTranslations()

  const queryClient = useQueryClient()

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const isArabic = lang === 'ar'

  const handleChangeLanguage = (lng: string) => {
    let basePath = pathname
    const isDefault = lng == defaultLocale
    if (locale) {
      basePath = basePath.replace('/' + locale, '')
      if (!isDefault) basePath = '/' + lng + basePath
      if (!basePath) basePath = '/'
    }


    clientApi.defaults.headers.common['Accept-Language'] = lng === 'en' ? 'en' : 'ar'
    router.replace(basePath)
  }


  useEffect(() => {
    clientApi.defaults.headers.common['Accept-Language'] = lang === 'en' ? 'en' : 'ar'
  }, [lang])

  const getLangKey = (key: string) => {
    const lang_key = key + '_' + lang
    return lang_key
  }

  // const getKeyData = ({ data, key }: { key: string, data: any }) => {
  //   const langKey = getLangKey(key)
  //   return data[langKey] || data[key] || data[key + 's'] || ''
  // }

  return { handleChangeLanguage, resolvedLanguage: lang, dir, isArabic, getLangKey, t, lang: lang === 'en' ? 'en' : 'ar' }
}

