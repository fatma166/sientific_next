"use client"
import { BookCard, LibraryBookCard } from "@/components/landing"
import { ErrorMessage } from "@/components/shared"
import { CardLoader } from "@/components/shared/loaders"
import { useFavoriteListQuery } from "@/services/api/auth/get-favorite-list-query"
import { Empty, Pagination } from "antd"
import React, { useState } from 'react'


export default function MainProfileFavorites() {

  const [page, setPage] = useState(1)

  const { data, isLoading, error, refetch } = useFavoriteListQuery({ page: 1 })


  if (isLoading) return <div className="   ">
    <CardLoader num={4} />
  </div>

  if (error) return <ErrorMessage error={error} refetch={refetch} />


  if (!data?.data?.data?.length) return <div className="  ">
    <Empty />
  </div>

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 lg:gap-6 ">


        {data?.data?.data?.map((book, k) => (
          <LibraryBookCard key={book.id} index={k + 1} book={book} defaultFav={true} refetch={refetch} />
        ))}

        {/* {Array(6).fill('').map((_, k) => (
          <BookCard key={k} index={(k + 1) / 10} noCart defaultFav={true} />
        ))} */}



      </div>

      {data?.data?.pagination?.total_pages > 1 && (
        <div className="flex items-center justify-center mt-6">
          <Pagination
            size="small"
            current={data?.data?.pagination?.current_page}
            total={data?.data?.pagination?.total}
            onChange={(page) => setPage(page)}
          />
        </div>
      )}
    </div>
  )
}
