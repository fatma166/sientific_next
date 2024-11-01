import React, { useEffect, useMemo, useState } from 'react'
import { BookCard, LibraryBookCard } from "../books"
import { useSetSingleSearchParam } from "@/services/hooks"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"
import { useGetBooksQuery } from "@/services/api/books"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"
import { Empty, Pagination } from "antd"

const CategProducts = () => {

  const [searchParams, setSearchParam] = useSetSingleSearchParam()
  // const [page, setPage] = useState(1)

  const searchVal = useMemo(() => {
    if (!searchParams) return ''
    return searchParams.get(SEARCH_PARAMS_NAMES.search) || ''
  }, [searchParams])

  const page = useMemo(() => {
    if (!searchParams) return 1
    return searchParams.get(SEARCH_PARAMS_NAMES.page) ? Number(searchParams.get(SEARCH_PARAMS_NAMES.page)) : 1
  }, [searchParams])


  const category = useMemo(() => {
    if (!searchParams) return ''
    return searchParams.get(SEARCH_PARAMS_NAMES.category_slug) || ''
  }, [searchParams])


  const { data, isLoading, error, refetch } = useGetBooksQuery({ page, search: searchVal, category })



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
              setSearchParam(SEARCH_PARAMS_NAMES.page, page.toString())
            }}

          />
        </div>
      )}
    </div>
  )
}

export default CategProducts