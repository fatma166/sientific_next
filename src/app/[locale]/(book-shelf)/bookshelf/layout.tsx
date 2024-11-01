import { ShelfSidebar } from "@/components/bookshelf"
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#fff] min-h-screen md:h-screen md:overflow-hidden flex flex-col md:flex-row   ">

      <aside
        className="w-full md:max-w-[250px] lg:max-w-xs md:bg-bg "
      >

        <ShelfSidebar />
      </aside>

      <section className="flex-1 max-h-screen overflow-y-auto ">

        {children}
      </section>

    </main>
  )
}

export default Layout