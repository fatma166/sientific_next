"use client"
import React, { FC, useMemo, useState } from 'react'
import { } from "antd"
import { Book1, Heart, Star, Star1 } from "iconsax-react"
import { Rate } from "antd"
import { ClientLink, NextImage, RevealAnimation } from "@/components/shared"
import { LibraryBook } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { Button } from "@/components/ui"
import { errorMessageLog } from "@/utils"
import { addToCart, useGetProfileQuery } from "@/services/api"
import { useRouter } from "next/navigation"
import useAddToCart from "./useAddToCart"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"

interface Props {

  index?: number
  noCart?: boolean
  defaultFav?: boolean
  book: LibraryBook
  refetch: () => Promise<any>
  href?: string
}

const LibraryBookCard: FC<Props> = ({ index, noCart = false, book, refetch, href }) => {


  const { t } = useLanguage()
  const { handleAddToCart, isAddingToCart, isAuth, favUpdating, handleToggleFav } = useAddToCart()



  const isFavorite = useMemo(() => book?.is_favorite || false, [book])


  return (
    <RevealAnimation delay={0.25 + ((index || 1) * 0.15)}>
      <ClientLink href={href || `/library/${book.id}`} className="w-full border border-text-10 rounded-2xl p-3 lg:p-4 bg-white">

        <div className="relative  rounded-lg overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0   h-2/5  z-10  ">
            <div className="w-full flex items-center justify-between p-1 ">
              {isAuth ? (

                <Button className="!bg-white/60 !p-1   !h-auto"
                  loading={favUpdating}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleToggleFav({ book_id: book.id, is_favorite: !isFavorite, apiRefetch: refetch })
                  }}
                >
                  <Heart className="text-danger" variant={isFavorite ? 'Bold' : "Outline"} />
                </Button>
              ) : <span> </span>}


              {book.category && (
                <ClientLink href={`/library/categories?${SEARCH_PARAMS_NAMES.category_slug}=${book.category_id}`} className="rounded shadow-sm bg-primary text-white py-1 px-2 text-sm">
                  {book?.category}
                </ClientLink>
              )}
            </div>
          </div>
          <div className="w-full aspect-[4/3] h-[200px] [&>div]:!h-full [&>div]:!w-full">
            <img src="https://ahmedyousry74.github.io/st-website/assets/images/book-1.jpeg" alt="blog image" className="w-full h-full object-contain" />
            {/* <NextImage src={book.image} alt={book?.title} className="!w-full !h-full object-contain" /> */}
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm opacity-100 mt-5 text-secondary'>
          <Book1 size={14} />
          {book.page_num} {t('pages')}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-primary">
            {book?.title}

          </h3>
          <div className='text-[#666] font-medium text-[14px] h-[40px] desc__book'
            dangerouslySetInnerHTML={{ __html: book?.details }}
          >

          </div>
          <div className='flex justify-start items-center flex-row gap-1'>
          <Rate
            value={4}
            className="!text-[14px] !text-secondary"
          />
          </div>
          {!noCart && (

            <h4 className="font-bold text-[#f02d2d]"> {book.price} {t('SAR')} </h4>

          )}
        </div>
        {!noCart && (
          <div className="mt-3 w-full">
            <button className="bg-primary text-white w-full font-medium sm:text-[15px] text-[13px] rounded-[6px] sm:py-[8px] py-[5px] sm:px-[25px] px-[12px] w-100"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleAddToCart({ book_id: book.id })
              }}
              loading={isAddingToCart}
              disabled={isAddingToCart}>
              {t('add_to_cart')}
            </button>
            {/* <Button block type='primary' className="bg-secondary text-primary-color font-medium sm:text-[15px] text-[13px] rounded-[6px] sm:py-[8px] py-[5px] sm:px-[25px] px-[12px] w-100"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleAddToCart({ book_id: book.id })
              }}
              loading={isAddingToCart}
              disabled={isAddingToCart}
            >

              {t('add_to_cart')}

            </Button> */}
            {/* <button className="bg-[#FF9501] text-white text-[15px] font-semibold py-[8px] px-[25px] rounded-[4px] flex justify-center items-center w-full"> إضافة إلى السلة </button> */}
          </div>
        )}

      </ClientLink>
    </RevealAnimation>
  )
}

export default LibraryBookCard