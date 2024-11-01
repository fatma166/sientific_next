"use client"
import React, { FC, useState } from 'react'
import { Button } from "antd"
import { Book, Book1, Heart } from "iconsax-react"
import Link from "next/link"

import { ClientLink, RevealAnimation } from "@/components/shared"
import { ButtonGradient } from "@/components/ui"

interface Props {

  index?: number
  noCart?: boolean
  defaultFav?: boolean
}

const BookCard: FC<Props> = ({ index, noCart = false, defaultFav = false }) => {
  const [isFavorite, setIsFavorite] = useState(defaultFav)

  return (
    <RevealAnimation delay={0.25 + ((index || 1) * 0.15)}>
      <ClientLink href="/library/slug" className="w-full border border-text-10 rounded-lg p-3 lg:p-4 bg-white">

        <div className="relative  rounded-lg overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0   h-2/5 bg-gradient-to-b from-black/50 to-black/0   ">
            <div className="w-full flex items-center justify-between p-4 ">
              <Button className="!bg-white/60 !p-1   !h-auto"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setIsFavorite(!isFavorite)
                }}
              >
                <Heart className="text-danger" variant={isFavorite ? 'Bold' : "Outline"} />
              </Button>


              <div className="rounded shadow-sm bg-primary text-white py-1 px-2 text-sm">
                التكنولوجيا
              </div>
            </div>
          </div>
          <div className="w-full aspect-[4/3] h-[250px]">
            <img src="https://ahmedyousry74.github.io/st-website/assets/images/book-1.jpeg" alt="blog image" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm opacity-100 mt-5 pb-3 border-b border-solid border-[#ccc]'>
          <Book1 size={14} />
          250 pages
        </div>
        <hr className="py-2"/>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">   كتاب مميز يحكي عن العلوم   </h3>
          <p className='text-[#666] font-medium text-[14px]'>
            لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى
          </p>

          {!noCart && (

            <h4 className="font-bold text-[#f02d2d]"> 120 SAR </h4>
          )}
        </div>
        {!noCart && (
          <div className="mt-3">
            {/* <ButtonGradient block> Add to Cart </ButtonGradient> */}
            <button className="bg-[#FF9501] text-white text-[15px] font-semibold py-[8px] px-[25px] rounded-[4px] flex justify-center items-center w-full"> إضافة إلى السلة </button>
          </div>
        )}

      </ClientLink>
    </RevealAnimation>
  )
}

export default BookCard