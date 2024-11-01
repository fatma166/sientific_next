
"use client"
import React from 'react'
import CategoriesSlider from "@/components/landing/shared/CategoriesSlider"
import HomeHeroSection from "../Home/HomeHeroSection"
import LibrarySection from "./LibrarySection"
import LibrarySlider from "./slider"
import SliderLibrarySection from "./SliderLibrarySection"
import SectionAd from "../shared/SectionAd"
import SecSectionAds from "../shared/SecSectionAds"
import { useGetFrontLibraryQuery } from "@/services/api"
import { FrontLibraryRes } from "@/services/types"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"
import { useTranslations } from "next-intl"
import { useLanguage } from "@/services/hooks"
import HeaderSearch from "@/components/layout/header/HeaderSearch"




const MainLibraryPage = ({ libraryData }: { libraryData: FrontLibraryRes }) => {

  const { data, isLoading, error, refetch } = useGetFrontLibraryQuery({ initialData: libraryData })

  const { t } = useLanguage()

  if (isLoading) return <CardLoader num={4} />
  if (error) return <ErrorMessage error={error} refetch={refetch} />
  if (!data?.data) return null



  return (
    <main>

      <section className="py-2">
        <HeaderSearch isWhite condensed={false} />
      </section>
      <LibrarySlider />
      {!!data?.data?.category && <CategoriesSlider data={data?.data?.category || []} />}
      {!!data?.data?.most_sales && <LibrarySection title={t('the_most_selling')} data={data?.data?.most_sales?.data || []} refetch={refetch} />}
      <SectionAd />
      {!!data?.data?.book_choices && <SliderLibrarySection title={t('platform_selections')} data={data?.data?.book_choices?.data || []} refetch={refetch} />}
      <SectionAd />
      {!!data?.data?.book_latest_release && <SliderLibrarySection title={t('last_edition')} data={data?.data?.book_latest_release?.data || []} refetch={refetch} />}
      <SecSectionAds />
      {!!data?.data?.book_offers && <SliderLibrarySection title={t('offers')} data={data?.data?.book_offers?.data || []} refetch={refetch} />}


    </main>
  )
}

export default MainLibraryPage