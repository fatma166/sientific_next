"use client"
import { ClientLink, NextImage, RevealAnimation } from "@/components/shared"
import { useLanguage } from "@/services/hooks"
import { HomeBlog } from "@/services/types"
import { Calendar } from "iconsax-react"
import Link from "next/link"
import React from 'react'



const BlogCard = ({ index = 0, data }: { data: HomeBlog, index?: number }) => {

  const { isArabic } = useLanguage()
  return (
    <RevealAnimation delay={0.25 + (index * 0.15)}>
      <ClientLink href="/blog/slug" className="cursor-pointer hover:scale-105">
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
          {/* <img src={`https://picsum.photos/400/300?random=${Math.random()}`} alt="blog image" className="w-full h-full object-cover" /> */}
          <NextImage
            src={data?.image}
            alt="blog image" className="w-full h-full object-cover"

          />


        </div>
        <div className="flex items-center gap-1 mt-1 opacity-65">
          <Calendar size={14} />
          <small> {data?.blog_date} </small>
        </div>

        <div className="mt-1">
          <h3 className="font-bold text-primary">

            {isArabic ? data.title_ar : data.title_en}
          </h3>
          <p>

            {isArabic ? data.detail_ar : data.detail_en}
          </p>
        </div>

      </ClientLink>
    </RevealAnimation>
  )
}

export default BlogCard