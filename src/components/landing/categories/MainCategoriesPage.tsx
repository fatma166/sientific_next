"use client"

import React from 'react'
import CategProducts from "./CategProducts"
import CategSidebar from "./CategSidebar"
import { ClientBooksRes } from "@/services/types"
import { useGetBooksQuery } from "@/services/api/books"

const MainCategoriesPage = ({
  initialData, page = 1, search = '', category = ''
}: {
  initialData: ClientBooksRes, page?: number, search?: string, category?: string
}) => {

  useGetBooksQuery({ page, search, category, initialData })

  return (
    <main className="bg-[#fff]">
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6  ">

            <div className="">
              <CategSidebar />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <CategProducts />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainCategoriesPage