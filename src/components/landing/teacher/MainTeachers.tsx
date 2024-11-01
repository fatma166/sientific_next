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

import teacherImg from '@/assets/images/teacher.svg'
import right from '@/assets/images/check2.png'

import imgBg from '@/assets/images/landing/about_8.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"




const mainTeachers = () => {


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
      <section className="py-12 teacher__section relative">
          <div className="container">
              <div className='flex justify-center items-center flex-row w-full bg_bg' style={{height: '60px'}}>
                  <span className="" style={{top: '20px'}}>
                      أعضاء هيئة التدريس
                  </span>
              </div>
              <div className='grid grid-cols-12 gap-4 mt-[50px]'>
                  <div className="col-span-12 md:col-span-5 ">
                      <Image src={teacherImg} alt="teacher" className='object-contain' />
                  </div>

                  <div className="col-span-12 md:col-span-7 gap-4">
                      <h1 className="text-primary text-[25px] font-semibold mb-4"> 
                      تقدم المنصة لأعضاء هيئة التدريس
مجموعة من الموارد والخدمات التي تدعم عملهم وتساعدهم في تقديم تعليم عالي الجودة. من بين ما تقدمه المنصة للمعلمين </h1>
                      <span className="text-[#000] font-medium text-[20px] mb-4"> يمكن لأعضاء هيئة التدريس الاستفادة من مجموعة من الوظائف والأدوات المخصّصة لتحسين تجربتهم التعليمية وتنظيم العمل. وهذه الأدوات تساعد على زيادة كفاءة العملية التعليمية، وتقديم تجربة تعليمية متميزة للطلاب </span>
                      <ul className='flex justify-start items-start flex-col gap-5 mt-4'>
                          <li className="flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={55} height={55} className='object-contain' />
                      </div>
                              <span>
                              مواد تعليمية جاهزة: توفر المنصة خطط دراسية وموارد تعليمية متكاملة تغطي مختلف الموضوعات والمراحل التعليمية مما يساعد أعضاء هيئة التدريس على تحضير الدروس بفعالية وكفاءة
                              </span>
                          </li>
                          <li className="flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              أدوات تفاعلية وإلكترونية : تساعد الأدوات التفاعلية مثل العروض التقديمية التفاعلية الفيديوهات التعليمية والمحاكاة في تقديم محتوى جذاب وممتع للطلاب مما يعزز من فهمهم واهتمامهم                              </span>
                              </li>
                          <li className="flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              برامج تدريب وتطوير مهني توفر المنصة برامج تدريبية لتطوير مهارات التدريس بما في ذلك كيفية استخدام التكنولوجيا في التعليم استراتيجيات التدريس الحديثة والتعامل مع المنصة بفاعلية.                              </span>
                              </li>
                          <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              أدوات تقييم وتحليل الأداء: تتيح المنصة أدوات لقياس وتقييم أداء الطلاب من خلال اختبارات قصيرة أسئلة تدريبية وتحليل النتائج مما يساعد أعضاء هيئة التدريس على متابعة تقدم الطلاب وتحديد النقاط التي تحتاج إلى تحسين مستواه                              </span>
                              </li>
                          <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              مشاركة المصادر والأفكار: تتيح المنصة مساحة لأعضاء هيئة التدريس لمشاركة الموارد والأفكار التعليمية والتفاعل مع زملائهم لتحسين
                              ممارساتهم التدريسية.                              </span>
                              </li>
                          <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              إدارة الدروس والمواد: توفر المنصة نظم إدارة تعلم (LMS) تساعد أعضاء هيئة التدريس في تنظيم الدروس توزيع المواد وإدارة الواجبات والاختبارات. . تطوير المناهج الدراسية: تقدم المنصة أدوات وموارد تدعم تطوير وتحديث المناهج الدراسية بما يتوافق مع أحدث المعايير التعليمية ومتطلبات التعلم. .                               </span>
                              </li>
                          <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                          <div className='icon__  flex justify-center items-center flex-row'>
                      
                      <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                      </div>
                              <span className="text-[#666] font-normal text-[15px] ">

                              دعم في التحول إلى التعليم الإلكتروني : تساعد المنصة أعضاء هيئة التدريس في الانتقال إلى نماذج التعليم الإلكتروني أو التعلم المختلط ((Blended Learning ، من خلال توفير الأدوات والتدريبات اللازمة.                              </span>
                              </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <section className="pt-[50px] pb-[70px] lg:px-[100px] px-[20px] h-full" style={{background: '#f5f5fe'}} >
      <div className='flex justify-center items-center flex-row bg_bg mb-7'>
            <span className="" > المميزات</span>
        </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className="reader_info flex justify-start items-start flex-col gap-3 md:mt-[65px]">
            <h1 className="text-third-color font-semibold text-[20px] sm:text-[25px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> 
            منصة الفكر العلمي للحلول التعليمية أعضاء هيئة التدريس لوحة تحكم (داش بورد) خاصة تساعدهم على إدارة ومتابعة الأنشطة التعليمية بشكل فعال من خلال هذه اللوحة </h1>
            <p className="text-fourth-color font-medium text-[16px] sm:text-[17px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s">  
            يمكن لأعضاء هيئة التدريس الاستفادة من مجموعة من الوظائف والأدوات المخصصة لتحسين تجربتهم التعليمية وتنظيم العمل وهذه الميزات تساعد على زيادة كفاءة العملية التعليمية، وتقديم تجربة تعليمية متميزة للطلاب وتشمل مميزات لوحة التحكم
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> إدارة الدروس والمواد </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> يمكن لأعضاء هيئة التدريس إنشاء وتخطيط الدروس وتحميل المواد التعليمية مثل العروض التقديمية الفيديوهات والمستندات مما يسهل على الطلاب الوصول إليها. </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> متابعة تقدم الطلاب </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> تتيح لوحة التحكم عرض تقارير مفصلة عن أداء الطلاب بما في ذلك نتائج الاختبارات والواجبات مما يساعد أعضاء هيئة التدريس على تحديد الطلاب الذين يحتاجون إلى دعم إضافي </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> تقييم الأداء </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> مكن لأعضاء هيئة التدريس استخدام أدوات التقييم المختلفة مثل الاختبارات القصيرة والاستبيانات والأسئلة المفتوحة لتقييم فهم الطلاب وتقديم تغذية راجعة فورية. </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> التفاعل مع الطلاب </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> توفر المنصة قنوات تواصل تتيح للمعلمين التفاعل مع الطلاب من خلال الرسائل المنتديات أو الملاحظات، مما يعزز من دعم الطلاب وتقديم الإرشادات </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> إدارة الفصول الدراسية </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> يمكن لأعضاء هيئة التدريس تنظيم الفصول الدراسية الافتراضية تحديد مواعيد الدروس المباشرة وتتبع الحضور والمشاركة </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> تحليل البيانات </span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> تتيح لوحة التحكم أدوات لتحليل بيانات الأداء والإحصاءات المتعلقة بتفاعل الطلاب مع المواد التعليمية مما يساعد أعضاء هيئة التدريس على تحسين استراتيجياتهم التدريسية. </p>
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
              <span className="text-third-color font-semibold text-[19px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> إعداد التقارير</span>
              <p className="text-fourth-color font-medium text-[15px] wow fadeIn" data-wow-duration="0.7s" data-wow-delay="0.5s"> يمكن لأعضاء هيئة التدريس إعداد تقارير شاملة عن تقدم الطلاب وأداء الفصول الدراسية والتي يمكن مشاركتها مع الإداريين أو أولياء الأمور </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default mainTeachers