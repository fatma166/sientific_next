"use client"

import React from 'react'
import SliderLibrarySection from "../library/SliderLibrarySection"
import BookImgSlide from "./BookImgSlide"
import BookDetails from "./BookDetails"
import { useGetLibraryBookDetailsQuery } from "@/services/api"
import { LibraryBookDetailsRes } from "@/services/types"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"
import { useLanguage } from "@/services/hooks"






const MainSingleBook = ({ id, bookData }: { id: number | string, bookData: LibraryBookDetailsRes }) => {

  const { data, isLoading, error, refetch } = useGetLibraryBookDetailsQuery({ id, initialData: bookData })
  const { t } = useLanguage()

  if (isLoading) return <CardLoader num={4} />
  if (error) return <ErrorMessage error={error} refetch={refetch} />
  if (!data?.data) return null

  return (
    <main>
      <BookDetails book={data?.data?.book} rating={data?.data?.rating?.data || []} refetch={refetch} />
      <SliderLibrarySection title="كتب مشابهة" data={data?.data?.similar_books?.data || []} refetch={refetch} />
    </main>
  )
}

export default MainSingleBook