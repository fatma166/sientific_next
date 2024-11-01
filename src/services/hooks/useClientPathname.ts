"use client"
import { defaultLocale } from "@/i18n"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import React, { useMemo } from 'react'

export const useClientPathname = () => {

  const pathname = usePathname()
  const locale = useLocale()

  const barePathname = useMemo(() => {
    let h = pathname as string
    if (pathname?.includes("/" + locale)) {
      h = h.replace("/" + locale, "")
    }
    return h
  }, [pathname, locale])

  return { pathname, locale, barePathname }

}

