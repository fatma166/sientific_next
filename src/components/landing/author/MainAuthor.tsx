"use client"
"use client"
import React from 'react'
import Link from "next/link"
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
import { SingleHero } from "../shared"


import imgBg from '@/assets/images/landing/about_8.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"




const mainAuthor = () => {


  return (
    <section>
    <section className="py-12 bg-[#fff]-50 bg-cover bg-center bg-no-repeat relative header__hero"
    >
      <div className="w-full h-full flex justify-center items-end relative">
      
        <div className="container relative">
          <div className="flex items-center justify-center gap-4 absolute bottom-[10px] right-0 w-full">
                  <Link href={'/library'}>
                    <button className='cursor-pointer relative bg-[#553ddd] text-[#fff] !py-[12px] !px-[20px] sm:px-[18px] rounded-xl font-medium text-[15px] lg:w-[150px] w-auto h-[45px]'> المكتبة </button>
                  </Link>
                  <Link href={'/'}>
                    <button className='cursor-pointer relative bg-[#EFEEFE] text-[#553ddd] !py-[12px] !px-[20px] sm:px-[18px] rounded-xl font-medium text-[15px] lg:w-[150px] w-auto h-[45px]'> الرئيسية </button>
                  </Link>
                </div>
        </div>
      </div>
    </section>
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
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" color='#f5f5fe' stroke='#f5f5fe' fill='#f5f5fe'></path>
          </svg>
      </div>
      </section>
      <section className="pt-[50px] pb-[70px] lg:px-[100px] px-[20px] h-full" style={{background: '#f5f5fe'}} >
      <div className='flex justify-center items-center flex-row bg_bg mb-7'>
            <span className="" > المميزات</span>
        </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className="reader_info flex justify-start items-start flex-col gap-3 md:mt-[65px]">
            <h1 className="text-third-color font-semibold text-[20px] sm:text-[25px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> مزايا لوحة التحكم (Dashboard) الخاصة بالمؤلف والناشر
            تحليلات الأداء التفصيلية: </h1>
            <p className="text-fourth-color font-medium text-[16px] sm:text-[17px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">  
            وفر لوحة التحكم للمؤلفين والناشرين أدوات لمتابعة المبيعات وتحليل تفاعل القراء مع المحتوى، مثل معرفة الفصول الأكثر قراءة ومدة التفاعل. كما تتيح الحصول على تعليقات القراء لتطوير المحتوى، مع إمكانية تحديث المواد بناءً على التحليلات المستمرة. تساعد هذه الأدوات في تعزيز نجاح المحتوى بالسوق الرقمي
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">
            <div className="reader_ai_item bg-[#fff] p-[25px] rounded-[12px] flex justify-start items-start flex-col gap-3">
              <div className="relative w-20 h-[60px]">
                <svg className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z" fill="#5F2DED"></path>
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z" fill="#5F2DED"></path>
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z" fill="#5F2DED"></path>
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z" fill="#5F2DED"></path>
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z" fill="#FFB31F"></path>
                </svg>
                <div className="service__bg__img w-20 h-[60px]">
                  <svg className="w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                  </svg>
                </div>
              </div>
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> متابعة المبيعات </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">معرفة عدد النسخ المباعة والتوزيع الجغرافي للمبيعات.</p>
            </div>
            <div className="reader_ai_item bg-[#fff] p-[25px] rounded-[12px] flex justify-start items-start flex-col gap-3 md:translate-y-[30px]">
              <div className="relative w-20 h-[60px]">
                <svg className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M28.525 44.0499H20.4753C18.7037 44.0499 17.2625 42.7046 17.2625 41.0509C17.2625 36.723 15.7895 32.4935 13.115 29.1417C11.2743 26.835 10.3045 24.0912 10.3103 21.2067C10.3172 17.7711 11.7888 14.4906 14.4541 11.9697C17.1201 9.44796 20.6146 8.03229 24.2939 7.98346C28.1232 7.9323 31.7312 9.28502 34.4566 11.7915C37.1864 14.302 38.6898 17.6547 38.6898 21.2322C38.6898 24.0423 37.7594 26.7272 35.9993 28.9965C33.2113 32.5912 31.7377 36.7597 31.7377 41.0511C31.7377 42.7046 30.2964 44.0499 28.525 44.0499ZM24.5008 10.6603C24.4454 10.6603 24.3904 10.6607 24.3349 10.6614C18.3004 10.7416 13.1927 15.5731 13.1814 21.2117C13.1767 23.5138 13.9501 25.7029 15.418 27.5424C18.4589 31.3533 20.1335 36.1507 20.1335 41.0509C20.1335 41.2278 20.2869 41.3716 20.4752 41.3716H28.5249C28.7133 41.3716 28.8665 41.2278 28.8665 41.051C28.8665 36.1921 30.5286 31.4809 33.6733 27.4265C35.0768 25.6168 35.8187 23.4749 35.8187 21.2321C35.8187 18.3773 34.6191 15.7019 32.4409 13.6987C30.3067 11.7359 27.4925 10.6603 24.5008 10.6603Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M34.5884 35.3186H14.4117V37.9969H34.5884V35.3186Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M23.8501 30.4466L21.4301 29.0054L24.8268 24.0417H21.5536C21.0311 24.0417 20.5498 23.7768 20.297 23.3501C20.0444 22.9235 20.0602 22.4024 20.3384 21.9897L25.0805 14.9543L27.5109 16.38L24.1519 21.3634H27.4464C27.9708 21.3634 28.4533 21.63 28.7053 22.059C28.9573 22.4879 28.9385 23.0109 28.6564 23.4232L23.8501 30.4466Z" fill="#FFB31F"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M25.9355 2.17908H23.0645V6.19654H25.9355V2.17908Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M10.6816 6.93133L8.65027 8.8241L11.6922 11.6649L13.7235 9.77218L10.6816 6.93133Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M38.3173 6.93027L35.2754 9.77112L37.3067 11.6639L40.3486 8.82304L38.3173 6.93027Z" fill="#5F2DED"></path>
                </svg>

                <div className="service__bg__img w-20 h-[60px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">
                  <svg className="w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                  </svg>
                </div>
              </div>
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> تحليل الأداء </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> عرض تحليلات تفصيلية حول كيفية تفاعل القراء مع المحتوى، مثل الفصول الأكثر قراءة والأجزاء التي يتوقف عندها القراء، ومتوسط الوقت الذي يقضيه القراء في كل جزء. </p>
            </div>
            <div className="reader_ai_item bg-[#fff] p-[25px] rounded-[12px] flex justify-start items-start flex-col gap-3 wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">
              <div className="relative w-20 h-[60px]">
                <svg className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" d="M45.8483 26.6935C45.3965 26.2639 44.7953 26.0262 44.1558 26.0262C43.5164 26.0262 42.9166 26.2639 42.4634 26.6935L33.7409 34.9886C33.7306 34.9886 33.7183 34.9867 33.708 34.9867H25.1438C25.1438 34.9541 25.1458 34.9229 25.1458 34.8898C25.1458 34.2537 25.0301 33.6443 24.8165 33.0772H29.4735C29.7924 33.6951 30.4593 34.1214 31.2316 34.1214C32.314 34.1214 33.193 33.2873 33.193 32.258C33.193 31.2287 32.314 30.3946 31.2316 30.3946C30.4593 30.3946 29.7924 30.821 29.4735 31.4389H23.8321C22.7928 30.2507 21.2243 29.4949 19.4716 29.4949C17.9393 29.4949 16.5502 30.0736 15.53 31.0111L15.5281 31.0092L2.44995 43.5669H15.5486L19.0217 40.2842H33.708C34.1956 40.2842 34.6542 40.1645 35.0526 39.9548C35.325 39.8434 35.5749 39.6827 35.79 39.4776L45.8488 29.9124C46.3015 29.4832 46.5499 28.911 46.5499 28.3029C46.5499 27.6949 46.3015 27.1231 45.8483 26.6935ZM19.4716 37.1422C18.1633 37.1422 17.1034 36.1325 17.1034 34.8902C17.1034 33.6461 18.1633 32.6369 19.4716 32.6369C20.7799 32.6369 21.8397 33.6466 21.8397 34.8902C21.8397 36.1325 20.7799 37.1422 19.4716 37.1422ZM33.6664 38.9106C32.9255 38.9106 32.3253 38.3402 32.3253 37.6352C32.3253 36.9321 32.925 36.3599 33.6664 36.3599C34.4077 36.3599 35.0075 36.9321 35.0075 37.6352C35.0075 38.3402 34.4077 38.9106 33.6664 38.9106ZM36.3001 36.6749C36.133 36.2634 35.8606 35.9028 35.5127 35.6209L42.0537 29.4026C42.2727 29.7814 42.602 30.096 43.0019 30.3024L36.3001 36.6749ZM36.231 9.4762H28.4753V8.49301H36.231V9.4762ZM36.231 12.0986H28.4753V11.1155H36.231V12.0986ZM23.3048 9.4762H15.5486V8.49301H23.3044L23.3048 9.4762ZM23.3048 12.0986H15.5486V11.1155H23.3044L23.3048 12.0986ZM41.057 5.87011H39.3308V4.23132H28.589C27.7295 4.23132 26.9215 4.55004 26.3139 5.1283C26.1517 5.28253 26.0106 5.45121 25.8886 5.63014C25.7666 5.45121 25.6255 5.28253 25.4633 5.1283C24.8557 4.55004 24.0477 4.23132 23.1882 4.23132H12.4464V5.87011H10.7231V23.8991H24.0217C24.2677 24.6582 25.011 25.2103 25.8901 25.2103C26.7691 25.2103 27.5125 24.6586 27.7585 23.8991H41.057V5.87011ZM27.0455 5.82305C27.4576 5.43071 28.0059 5.2145 28.589 5.2145H38.2964L38.2797 20.6211H30.4471C29.0344 20.6211 27.6364 20.9873 26.4237 21.6644L26.407 7.29176C26.4065 6.73727 26.6329 6.21586 27.0455 5.82305ZM13.4803 5.21497H23.1877C23.7708 5.21497 24.3191 5.43118 24.7312 5.82352C25.1433 6.21586 25.3702 6.73773 25.3697 7.29223L25.353 21.6653C24.1388 20.9878 22.7413 20.6215 21.3296 20.6215H13.4803V5.21497Z" fill="#5F2DED"></path>
                  <rect x="15" y="8.54175" width="8" height="0.993317" fill="#FFB31F"></rect>
                  <rect x="28" y="8.54175" width="8" height="0.993317" fill="#FFB31F"></rect>
                  <rect x="15" y="11.5198" width="8" height="0.993319" fill="#FFB31F"></rect>
                  <rect x="28" y="11.5198" width="8" height="0.993319" fill="#FFB31F"></rect>
                </svg>
                <div className="service__bg__img w-20 h-[60px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">
                  <svg className="w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                  </svg>
                </div>
              </div>
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> التفاعل مع الجمهور </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> الحصول على تعليقات وردود أفعال القراء، مما يساعد في تحسين المحتوى. </p>
            </div>
            <div className="reader_ai_item bg-[#fff] p-[25px] rounded-[12px] flex justify-start items-start flex-col gap-3 md:translate-y-[30px]">
              <div className="relative w-20 h-[60px]">
                <svg className="absolute inline-block translate-y-3 translate-x-2 w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z" fill="#5F2DED"></path>
                   <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z" fill="#FFB31F"></path>
                </svg>
                <div className="service__bg__img w-20 h-[60px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">
                  <svg className="w-20 h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark" fill-rule="evenodd" clip-rule="evenodd" d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z" fill="#5F2DED" fill-opacity="0.05"></path>
                  </svg>
                </div>
              </div>
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> إدارة المحتوى والتحديثات </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> إمكانية تحديث المحتوى بشكل مستمر وإضافة مواد جديدة استناداً إلى ملاحظات القراء وتحليلات الأداء. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default mainAuthor