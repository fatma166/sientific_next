'use client'
import React, { ReactNode, useState } from 'react'

import { ArrowLeft2, ArrowRight2 } from "iconsax-react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from 'swiper/types';
import '@/assets/styles/swiper.css'

import logo from '@/assets/images/landing/32.webp'

import user1 from '@/assets/images/sections/home/user-1.png'
import user2 from '@/assets/images/sections/home/user-2.png'
import user3 from '@/assets/images/sections/home/user-3.png'
import user4 from '@/assets/images/sections/home/user-4.png'
import geniusAi from '@/assets/images/logos/featured/genius-ai.svg'
import moneyFellow from '@/assets/images/logos/featured/moneyfellows.svg'
import paymob from '@/assets/images/logos/featured/Paymob.svg'


import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeTestimonial } from "@/services/types";
import { useLanguage } from "@/services/hooks";
import { useTranslations } from "next-intl";


const text = "“لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي”"


interface Testimonial {
  text: string;
  img: any;
  name: string;
}
const DATA: Testimonial[] = [{
  text,
  img: user1,
  name: 'Sergio, CTO at Genius AI',
}, {
  text,
  img: user2,
  name: 'Hussien Fahmey, SOC Manager at Paymob',
}, {
  text,
  img: user3,
  name: 'Ali Hamed, CISO at Moneyfellows',
},
{
  text,
  img: user4,
  name: 'Hossam, CTO at Amazon',
}

]


const slides = [
  user1, user2, user3, user4
]



const SliderBtn = ({ children, active = false, onClick = () => { } }: { children: ReactNode, active?: boolean, onClick?: () => void }) => {
  return <div className={`w-10 opacity-70 h-10   flex items-center justify-center  rounded-full cursor-pointer font-semibold ${active ? 'bg-[#555]' : 'bg-[#555]'} hover:opacity-80 hover:scale-105 flex-shrink-0`}
    onClick={onClick}
  >
    {children}
  </div>
}



const Single = ({ item }: { item: HomeTestimonial }) => {

  const { isArabic } = useLanguage()

  return <div className="bg-bg  rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
    <p className="md:text-lg text-text">
      “{isArabic ? item?.opinion_ar : item?.opinion_en}”
    </p>

    <div className="mt-6 flex flex-wrap items-center justify-between opacity-70">
      <div className="md:flex-1">

        <div className="  ">
          {isArabic ? item?.name_ar : item?.name_en}
        </div>

      </div>
      <div className="md:flex-shrink-0    ">
        <NextImage
          src={item.image}
          alt="logo"
          className="!h-10 w-auto object-contain object-right !rounded-full"
        />
      </div>
    </div>

  </div>
}



const Testimonials = ({ data }: { data: HomeTestimonial[] }) => {

  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0)

  const handleSwiperChange = (swiper: SwiperType) => {
    setSwiper(swiper);
    setActiveIndex(swiper?.activeIndex)
  }
  const t = useTranslations()

  return (
    <RevealAnimation>

      <section className="bg-[#fff] py-12">

        <div className="container">

          <div className="flex justify-center items-center flex-row w-full bg_bg">
            <span className="    ">
             {t('testimonials')}
            </span>
          </div>


          <div className="mt-12 w-full max-w-screen-lg mx-auto">
            <div className="w-full flex items-center gap-0 md:gap-10 lg:gap-12 ">
              <div>
                <SliderBtn active onClick={() => {
                  swiper?.slidePrev()
                }} >
                  <ArrowLeft2 size={20} className="rtl:rotate-180 text-white" />
                </SliderBtn>
              </div>

              <div className="min-w-0 px-4">
                <Swiper
                  key="Testimonials"
                  slidesPerView={1}
                  spaceBetween={40}
                  // autoplay={{
                  //   delay: 3000,
                  //   disableOnInteraction: true,
                  // }}
                  // loop={true}
                  onSwiper={handleSwiperChange}
                  onSlideChange={handleSwiperChange}
                >
                  {data.map((item, ix) => (
                    <SwiperSlide key={ix} className="inline-block  py-1" > <Single item={item} /> </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div>
                <SliderBtn active onClick={() => {
                  swiper?.slideNext()
                }} >
                  <ArrowRight2 size={20} className="rtl:rotate-180 text-white" />
                </SliderBtn> </div>
            </div>

            <div className=" flex items-center justify-center relative mt-8 gap-2 ">

              {data.map((slide, ix) => (
                <div key={ix}
                  className={`w-5 h-5 rounded-full overflow-hidden  relative ${activeIndex === ix ? 'border border-primary' : ' '} hover:!scale-[2.6] cursor-pointer `}
                  style={{
                    zIndex: activeIndex === ix ? (data.length * 4) : (data.length * 2) - ix,
                    transform: activeIndex === ix ? 'scale(2.5)' : 'scale(2)'
                  }}

                  onClick={() => {
                    swiper?.slideTo(ix)
                  }}
                >

                  <NextImage
                    src={slide.image}
                    alt="user"
                    className="!w-full !h-full object-cover -translate-y-1.5"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </RevealAnimation>

  )
}

export default Testimonials