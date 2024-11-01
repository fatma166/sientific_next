
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
  return (
    <div className="container mt-12">
      <div className=" bg-bg p-4 md:p-6 lg:py-8 rounded-lg max-w-full overflow-x-auto">
        <MainProfileReviews />
      </div>
    </div>
  )
}
