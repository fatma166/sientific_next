'use client'
import { BookCard, LibraryBookCard } from "@/components/landing"
import { ErrorMessage, RevealAnimation } from "@/components/shared"
import { CardLoader } from "@/components/shared/loaders"
import { useGetClientFavBooksQuery } from "@/services/api/books"
import { useLanguage } from "@/services/hooks"
import { Empty, Pagination } from "antd"
import React, { useState } from 'react'

const MainBookshelfFavoritePage = () => {

  const { t } = useLanguage()

  return (
    <div>
      <RevealAnimation>

        <div className="container  py-10 lg:py-12">

          <div className="mb-9">
            <h2 className="text-xl font-bold">  {t('favorites')} </h2>
          </div>

          <Content />

        </div>

      </RevealAnimation>
    </div>
  )
}



const Content = ({ }) => {

  const [page, setPage] = useState(1)


  const { data, isLoading, error, refetch } = useGetClientFavBooksQuery({ page })



  if (isLoading) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 lg:gap-6">
    {Array(6).fill('').map((_, k) => (
      <CardLoader key={k} />
    ))}
  </div>

  if (error) return <ErrorMessage error={error} refetch={refetch} />

  return (
    <div>

      {!data?.data?.data?.length ? (<Empty />) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 lg:gap-6 ">
          {data?.data?.data.map((book, k) => (
            <LibraryBookCard book={book} refetch={refetch} key={k} noCart />
          ))}
        </div>
      )}
      {!!data?.data?.pagination?.last_page && data?.data?.pagination?.last_page > 1 && (
        <div className="w-full mt-6">
          <Pagination
            align="center"
            size="small"
            current={data?.data?.pagination?.current_page}
            pageSize={data?.data?.pagination?.per_page}
            total={data?.data?.pagination?.total}
            onChange={(page) => {
              setPage(page)
            }}

          />
        </div>
      )}
    </div>
  )
}



export default MainBookshelfFavoritePage