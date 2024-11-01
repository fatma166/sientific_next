"use client"
import React from 'react'


import img from '@/assets/images/landing/avatar.webp'
import Image from "next/image"
import { Call, Sms } from "iconsax-react"
import { ProfileSidebar } from "@/components/profile"
import { useGetProfileQuery } from "@/services/api"
import { Skeleton } from "antd"
const Layout = ({ children }: { children: React.ReactNode }) => {


  const { data, isLoading } = useGetProfileQuery({})

  return (



    <main className="bg-[#fff] py-10 lg:py-12 ">

      <section  >
        <div className="container  ">
          <div className="  bg-primary rounded-lg text-white p-4 min-h-36 lg:min-h-44 relative ">


            <div className="absolute bottom-0 start-6 md:start-8 lg:start-10    translate-y-1/3 ">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-28 md:w-32 lg:w-36 aspect-square rounded-full border-8 lg:border-r-[12px] border-bg-secondary bg-[#fff]">
                  <Image src={img} alt='guard art image' className="w-full h-full object-cover rounded-full" />
                </div>
                {isLoading ? (<div className="p-3">  <Skeleton.Input active /> </div>) : (
                  <div className="flex flex-col gap-1 -translate-y-1/3">
                    <h2 className="text-white"> {data?.data?.name || 'n/a'} </h2>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Call size={14} />
                        <a href={`tel:${data?.data?.phone || ''}`} target="_blank" className="hover:text-secondary">
                          {data?.data?.phone || 'n/a'}
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sms size={14} />
                        <a href={`mailto:${data?.data?.email || ''}`} target="_blank" className="hover:text-secondary">
                          {data?.data?.email || 'n/a'}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </section>




      <div className="mt-14  flex flex-col md:flex-row container gap-4 mmd:gap-5 lg:gap-6  ">

        <aside
          className="w-full md:max-w-[250px] lg:max-w-xs  "
        >

          <ProfileSidebar />
        </aside>
        <section className="flex-1 border border-text-10 rounded-lg  p-4 lg:p-5 ">

          {children}
        </section>

      </div>
    </main>
  )
}

export default Layout