"use client"
import React from 'react'
import { SingleHero } from "../shared"

import studentImg from '@/assets/images/students.svg'
import right from '@/assets/images/check2.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import Link from "next/link"




const HomeStudent = () => {



 
  return (

    <section className="py-12 student__section relative">
        <div className="container">
            <div className='flex justify-center items-center flex-row w-full bg_bg'>
                <span className="      ">
                    الطلاب
                </span>
            </div>
            <div className='grid grid-cols-12 gap-4 mt-[50px]'>
            <div className="col-span-12 md:col-span-7 gap-4">
                    <h1 className="text-primary text-[25px] font-semibold mb-4"> 
                    تقدم المنصة محتوى تعليمي شامل يناسب جميع المستويات، مع أدوات تفاعلية لتعزيز الفهم وإمكانية الوصول في أي وقت
                     </h1>
                    <span className="text-[#000] font-medium text-[20px] mb-4"> تدعم الطلاب بموارد للتحضير والاختبارات، وتعزز مهارات التفكير النقدي والشخصي والاجتماعي. توفر بيئة محفزة وتتابع تقدم الطلاب لمساعدتهم على تحسين أدائهم. </span>
                    <ul className='flex justify-start items-start flex-col gap-5 mt-4'>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row w-[60px]'>
                    
                    <Image alt="check" src={right} width={40} height={40} className='object-cover w-[40px] h-[40px]'  />
                    </div>
                            <span>
                            محتوى تعليمي شامل ومتنوّع: يشمل دروساً وشروحات في مختلف المواد مصممة لتتناسب جميع المستويات الدراسية.                            </span>
                        </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row w-[60px]'>
                    
                    <Image alt="check" src={right} width={40} height={40} className='object-cover w-[40px] h-[40px]'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            أدوات تعلم تفاعلية: توفر المنصة أدوات تفاعلية مثل الفيديوهات التعليمية والاختبارات القصيرة التي تساعد على تعزيز الفهم وترسيخ المعلومات بطريقة ممتعة وفعالة.                            </span>
                            </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row w-[60px]'>
                    
                    <Image alt="check" src={right} width={40} height={40} className='object-cover w-[40px] h-[40px]'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            دعم التحصيل الدراسي: تقدم المنصة موارد لمساعدة الطلاب على التحضير للاختبارات والامتحانات بما في ذلك ملخصات وأسئلة تدريبية وحلول نموذجية.                            </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row w-[60px]'>
                    
                    <Image alt="check" src={right} width={40} height={40} className='object-cover w-[40px] h-[40px]'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            إمكانية الوصول إلى المواد التعليمية في أي وقت: توفر المنصة مواد تعليمية يمكن الوصول إليها في أي وقت مما يتيح للطلاب التعلم بالوتيرة التي تناسبهم وبناء جداولهم الدراسية الخاصة.                            </span>
                            </li>
                    </ul>
                    <Link href={'/students'} className="my-5">
                        <button className='cursor-pointer relative bg-[#EFEEFE] text-[#553ddd] !py-[12px] !px-[20px] sm:px-[18px] rounded-xl font-medium text-[15px] lg:w-[150px] w-auto h-[45px]'> اقرأ المزيد </button>
                    </Link>
                </div>
                <div className="col-span-12 md:col-span-5 ">
                    <Image src={studentImg} alt="student" className='object-contain' />
                </div>


            </div>
        </div>
    </section>
  )
}

export default HomeStudent