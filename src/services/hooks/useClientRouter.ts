"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import React from 'react'

export const useClientRouter = () => {

  const router = useRouter()
  const locale = useLocale()

  const push = (url: string) => {
    let path = url
    if (locale === 'ar') {
      // nothing 
    } else if (locale === 'en') {
      path = '/en' + path
    }
    router.push(path)
  }

  return { ...router, push }
}
