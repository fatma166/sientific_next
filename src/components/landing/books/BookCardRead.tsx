"use client"
import React, { FC, useState } from 'react'
import { Button } from "antd"
import { Book, Book1, Heart } from "iconsax-react"
import Link from "next/link"

import { ClientLink, RevealAnimation } from "@/components/shared"
import { ButtonGhost, ButtonGradient } from "@/components/ui"

interface Props {

  index?: number
}

const BookCardRead: FC<Props> = ({ index }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <RevealAnimation delay={0.25 + ((index || 1) * 0.15)}>
      <ClientLink href="/library/slug" className="w-full border border-text-10 rounded-lg p-3 lg:p-4 flex gap-3 xl:gap-4 min-h-64">
        <div className="relative  rounded-lg overflow-hidden flex-shrink-0 flex flex-col gap-3">

          <div className="w-28 md:w-32 lg:w-36 flex-1">
            <img src={`https://picsum.photos/400/300?random=${Math.random()}`} alt="blog image" className="w-full h-full object-cover" />
          </div>

          <ButtonGhost className=" w-full ">
            اكمل القراءة
          </ButtonGhost>
        </div>
        <div>

          <div className="flex flex-col gap-2">
            <div>
              <div className="rounded shadow-sm bg-primary text-white py-1 px-2 text-sm inline-block">
                التكنولوجيا
              </div>
            </div>
            <h3 className="font-bold">   كتاب مميز يحكي عن العلوم   </h3>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى
            </p>


          </div>


        </div>



      </ClientLink>
    </RevealAnimation>
  )
}

export default BookCardRead