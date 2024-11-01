'use client'
import { BookCard, LibraryBookCard } from "@/components/landing"
import { ErrorMessage, RevealAnimation } from "@/components/shared"
import { CardLoader } from "@/components/shared/loaders"
import { useGetBooksQuery, useGetClientBooksQuery } from "@/services/api/books"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"
import { useLanguage, useSetSingleSearchParam } from "@/services/hooks"
import { Empty, Input, Pagination } from "antd"
import { SearchNormal } from "iconsax-react"
import React, { useEffect, useMemo, useState } from 'react'

const MainBookshelfSearchPage = () => {

  const { t } = useLanguage()
  const [searchParams, setSearchParam] = useSetSingleSearchParam()
  const [search, setSearch] = useState(searchParams?.get(SEARCH_PARAMS_NAMES.search) || '')









  return (
    <div>


      <div className="bg-primary py-12">
        <div className="container max-w-lg">

          <Input
            suffix={<SearchNormal />}
            placeholder={t('search')}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value || '')
            }}
            onPressEnter={() => {
              setSearchParam(SEARCH_PARAMS_NAMES.search, search)
            }}
          />
        </div>
      </div>


      <RevealAnimation>

        <div className="container my-5 lg:my-8">

          <div className="mb-9">
            <h2 className="text-xl font-bold"> {t('search_results')} </h2>
          </div>

          <Content />

        </div>

      </RevealAnimation>


    </div>
  )
}


const Content = ({ }) => {

  const [searchParams, setSearchParam] = useSetSingleSearchParam()
  const [page, setPage] = useState(1)

  const searchVal = useMemo(() => {
    if (!searchParams) return ''
    return searchParams.get(SEARCH_PARAMS_NAMES.search) || ''
  }, [searchParams])

  useEffect(() => {
    setPage(1)
  }, [searchVal])


  const { data, isLoading, error, refetch } = useGetBooksQuery({ page, search: searchVal })



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

export default MainBookshelfSearchPage