"use client"
import React from 'react'
import { SingleHero } from "../shared"
import img from '@/assets/images/landing/about_1.png'
import userImg from '@/assets/images/landing/32.webp'


import bg1 from '@/assets/images/landing/shape1.png'
import bg2 from '@/assets/images/landing/shape2.png'
import bg3 from '@/assets/images/landing/shape3.png'
import educate from '@/assets/images/educate.webp'
import icon1 from '@/assets/images/icon1.webp'
import icon2 from '@/assets/images/icon2.webp'
import icon3 from '@/assets/images/icon3.webp'
import icon4 from '@/assets/images/icon4.webp'
import icon5 from '@/assets/images/icon5.webp'
import icon6 from '@/assets/images/icon6.webp'


import imgBg from '@/assets/images/landing/about_8.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"





const HomeAuthor = ({ data }: { data: HomeSingleDetailsSection }) => {

  // const data = [
  //   "إدارة المكتبات الرقمية",
  //   "تحرير المحتوى",
  //   "توزيع المحتوى",
  //   "مزامنة البيانات",
  //   "تقارير الأداء",
  //   "لوحات تحكم تفاعلية",
  // ]


  const icons = [
    <Book1 variant="Linear" size={22} className="flex-shrink-0 text-white" key={1} />,
    <ArchiveBook variant="Linear" size={22} className="flex-shrink-0 text-white" key={2} />,
    <UserEdit variant="Linear" size={22} className="flex-shrink-0 text-white" key={3} />,
    <Data2 variant="Linear" size={22} className="flex-shrink-0 text-white" key={4} />,
    <PresentionChart variant="Linear" size={22} className="flex-shrink-0 text-white" key={5} />,
    <Setting5 variant="Linear" size={22} className="flex-shrink-0 text-white" key={6} />,
  ]
  return (

    <section className="bg-primary py-12 dark h-[100vh] educational_system relative">
        <div className='flex justify-center items-center flex-row bg_bg'>
            <span className="" > الناشر و المؤلف </span>
        </div>
      <RevealAnimation>



        <div className="container ">
          <SingleHero
            isReverse
            title="توفر منصة الفكر العالمي للحلول التعليمية للناشرين والمؤلفين الأدوات اللازمة"
            subTitle="لتحويل كتبهم إلى تجارب تفاعلية غنية بالمحتوى، حيث أن تحويل الكتاب الأكاديمي الورقي إلى كتاب تفاعلي يُساعد في إتاحة النشر والمؤلف والحفاظ على حقوقهم من السرقة والتصوير"

            imgNode={<div className="relative w-full h-full  ">
              <Image src={bg1} alt='guard art image' className="absolute top-12 -end-16  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              <Image src={bg2} alt='guard art image' className="absolute top-1/3 translate-y-8 -end-16  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              <Image src={bg3} alt='guard art image' className="absolute top-1/4 translate-y-8   end-1/3  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              <Image src={educate} alt='guard art image' className="relative -bottom-14 ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[60vh] " />
              

            </div>}
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg dark text-white">
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> لوحة تحكم شخصية للمؤلف
                    </p>
                </div>
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> تقليل تكاليف الإنتاج
                    </p>
                </div>
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> ربط الكتاب بواجبات وتقييمات الطلاب
                    </p>
                </div>
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> تسجيل دخول آمن للطلاب
                    </p>
                </div>
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> الوصول المباشر لأعضاء هيئة التدريس
                    </p>
                </div>
                <div className='flex justify-start items-center flex-row gap-2 sm:gap-3 border border-solid border-white sm:px-3 p-1 sm:p-3 rounded-lg'>
                    <Image src={icon1} alt='guard art image'  />
                    <p className='text-white font-medium sm:font-semibold text-[12px] sm:text-[14px]'> توفير تكاليف التسويق التقليدي
                    </p>
                </div>
            </div>

          </SingleHero>
        </div>

      </RevealAnimation>
      <div className="custom-shape-divider-bottom-1710021382 d-lg-block d-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              {/* <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path> */}
              {/* <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path> */}
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" color='#fff' stroke='#fff' fill='#fff'></path>
          </svg>
      </div>
    </section>
  )
}

export default HomeAuthor