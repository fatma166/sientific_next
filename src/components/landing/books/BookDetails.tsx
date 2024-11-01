"use client"
import { ClientLink, RevealAnimation } from "@/components/shared"
import React, { useMemo, useState } from 'react'
import BookImgSlide from "./BookImgSlide"
import { Add, ArchiveBook, Book, Book1, BoxSearch, Calendar, CalendarEdit, Category2, Heart, LanguageSquare, Minus, Profile, ShoppingCart, TickCircle } from "iconsax-react"
import { Button, InputNumber, message, Rate, Tabs, TabsProps } from "antd"
import BookInfo from "./BookInfo"
import BookRates from "./BookRates"
import { ButtonGhost } from "@/components/ui"
import { BookRate, LibraryBook } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { errorMessageLog } from "@/utils"
import useAddToCart from "./useAddToCart"
import { toggleLibraryBookFavorite, useGetProfileQuery } from "@/services/api"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"

const BookDetails = ({ book, rating, refetch }: { book: LibraryBook, rating: BookRate[], refetch: () => Promise<any> }) => {


  const { t } = useLanguage()
  const { handleAddToCart, isAddingToCart, isAuth, favUpdating, handleToggleFav } = useAddToCart()


  const [cartCount, setCartCount] = useState(1)






  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <div className="px-2"> الوصف </div>,
      children: <BookInfo details={book?.details || ''} />,
    },
    {
      key: '2',
      label: <div className="px-2"> التقييمات </div>,
      children: <BookRates rating={rating} />,
    },
  ];


  const allImages = useMemo(() => {
    const imgs: string[] = []
    if (book?.image) imgs.push(book.image)

    if (book?.book_images) {
      imgs.push(...book.book_images)
    }


    return imgs
  }, [book])





  const addToCart = async () => {
    await handleAddToCart({ book_id: book.id, quantity: cartCount, path: '/cart' })

  }

  return (
    <section className="py-12 bg-[#fff]">

      <RevealAnimation>
        <div className="container book-details">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <div className="lg:col-span-5 xl:col-span-4 relative h-full  ">
              <BookImgSlide images={allImages} productTitle={book?.title} />
            </div>
            <div className="md:col-span-2 lg:col-span-7 xl:col-span-8 md:pt-4">


              <div className="text-base   ">
                <span className="  py-2 px-6 bg-primary text-white rounded-full font-bold inline-block  ">
                  تفاصيل الكتاب
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 ">
                  <Book variant="Bulk" size={22} className="text-primary flex-shrink-0" />
                  <h1 className="text-xl lg:text-2xl font-bold">
                    {book?.title || 'n/a'}
                  </h1>
                </div>
                <div className="flex items-start gap-2 ">

<TickCircle variant="Bulk" size={20} className="text-primary flex-shrink-0" />
<div
  dangerouslySetInnerHTML={{ __html: book?.details }}
></div>
</div>
                <div className="flex items-center gap-2 ">
                    <Profile variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      المؤلف :  {book?.publish_by || 'n/a'}
                    </p>
                  </div>
                <div className="flex items-center gap-2 ">
                    <Profile variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      الناشر :  دار العلوم
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 ">
                    <ArchiveBook variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      الطبعة : {book?.book_symbol || 'n/a'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Calendar variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      تاريخ النشر : {book?.publish_date || 'n/a'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Book variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      عدد الصفح : {book?.page_num || 'n/a'} {t('pages')}
                    </p>
                  </div>




                  {book?.category && (
                    <ClientLink href={`/library/categories?${SEARCH_PARAMS_NAMES.category_slug}=${book.category_id}`} className="flex items-center gap-2 ">
                      <Category2 variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                      <strong className="inline-block bg-secondary text-white py-1 px-3 rounded-full">
                        {book?.category}
                      </strong>
                    </ClientLink>
                  )}



                  <div className="flex items-center gap-2 ">
                    <LanguageSquare variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      اللغة : {book?.languages?.map(l => l?.name).join(', ')}
                    </p>
                  </div>


                  {/* <div className="flex items-center gap-2 ">
                    <CalendarEdit variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      تاريخ الأصدار : 27-11-2020
                    </p>
                  </div> */}




                  <div className="flex items-center gap-2 ">
                    <BoxSearch variant="Bulk" size={20} className="text-primary flex-shrink-0" />
                    <p>
                      ISBN : {book.isbn || 'n/a'}
                    </p>
                  </div>


                    
                  <Rate
                    value={4}
                    className="!text-[14px] !text-secondary"
                  />
                <div>

                  <div >
                    <div className="inline-block" dir="ltr">
                      <InputNumber
                        className="InputNumber [&_input]:!text-center !text-[#f02d2d] [&_.ant-input-number-handler-wrap]:!hidden max-w-48 [&_.ant-input-number-group-addon]:!p-0 [&_.ant-input-number-group-addon]:overflow-hidden"
                        dir='ltr'
                        value={cartCount}
                        min={1}
                        upHandler={<></>}
                        downHandler={<></>}
                        addonAfter={<div className="w-full h-full px-3 py-2 hover:opacity-50 cursor-pointer  select-none"
                          onClick={() => setCartCount(cartCount + 1)}
                        > <Add /> </div>}
                        addonBefore={<div className={`w-full h-full px-3 py-2 hover:opacity-50 select-none  ${cartCount <= 1 ? 'opacity-50' : 'cursor-pointer'}`}
                          onClick={() => {
                            if (cartCount <= 1) return
                            setCartCount(cartCount - 1)
                          }}
                        > <Minus /> </div>}

                      />
                    </div>

                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="bg-[#3BB77E] cursor-pointer py-[11px] px-[20px] rounded-[8px] flex justify-center items-center !text-white"
                      onClick={() => {
                        addToCart()
                      }}
                    >
                      <div className="flex items-center gap-2 px-4 ">
                        <ShoppingCart />
                        <span className="font-bold !text-white" >
                          إضافة إلى السلة
                        </span>
                      </div>
                    </button>

                    
                      <Button className="!bg-white/0 !p-2.5 "
                        onClick={(e) => {
                          handleToggleFav({ book_id: book?.id, is_favorite: !!book?.is_favorite, apiRefetch: refetch })
                        }}
                        loading={favUpdating}
                      >
                        <Heart className="text-danger" variant={!!book?.is_favorite ? 'Bold' : "Outline"} />
                      </Button>
                    
                  </div>
                </div>





              </div>

            </div>
          </div>


          <div className="mt-4 lg:mt-6">
            <Tabs defaultActiveKey="1" items={items} size="large" />
          </div>
        </div>
      </RevealAnimation>

    </section>
  )
}

export default BookDetails