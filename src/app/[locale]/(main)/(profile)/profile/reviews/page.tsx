
import { MainProfileReviews } from "@/components/profile"
import { GET_DEFAULT_SEO_META } from "@/services/constants"
import { initServerPages } from "@/utils"
import React from 'react'


const defaultMetaData = GET_DEFAULT_SEO_META({})

export const metadata = {
  ...defaultMetaData,
  title: 'Reviews - ' + defaultMetaData.title,
}

export default function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })
  return (<MainProfileReviews />
  )
}
