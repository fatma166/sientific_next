"use client"
import { RevealAnimation } from "@/components/shared"
import React, { FC } from 'react'
import { BookCard, LibraryBookCard } from "../books"
import { LibraryBook } from "@/services/types"
import { Empty } from "antd"


interface Props {
  className?: string
  title: string
  data: LibraryBook[]
  refetch: () => Promise<any>
}
const LibrarySection: FC<Props> = ({ className = '', title, data, refetch }) => {
  return (
    <section
      className={`py-12 lg:p-14 xl:py-16 bg-[#fff] ${className}`}
    >
      <RevealAnimation>

        <div className="container">

          <div className="mb-9">
            <h2 className="text-xl font-bold"> {title} </h2>
          </div>

          {data?.length ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 ">

              {data?.map((book, k) => (
                <LibraryBookCard key={book.id} index={k + 1} book={book} refetch={refetch} />
              ))}
            </div>
          ) : <Empty />}

        </div>

      </RevealAnimation>
    </section>
  )
}

export default LibrarySection