"use client"
import React from 'react'
import { SingleHero } from "../shared"

import teacherImg from '@/assets/images/teacher.svg'

import right from '@/assets/images/check2.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"

import Link from "next/link"



const Hometeacher = () => {



 
  return (

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
                    تمنح منصة الفكر العالمي للحلول التعليمية أعضاء هيئة التدريس لوحة تحكم (داش بورد) خاصة تساعدهم على إدارة ومتابعة الأنشطة التعليمية بشكل فعال من خلال هذه اللوحة، </h1>
                    <span className="text-[#000] font-medium text-[20px] mb-4"> يمكن لأعضاء هيئة التدريس الاستفادة من مجموعة من الوظائف والأدوات المخصّصة لتحسين تجربتهم التعليمية وتنظيم العمل. وهذه الأدوات تساعد على زيادة كفاءة العملية التعليمية، وتقديم تجربة تعليمية متميزة للطلاب </span>
                    <ul className='flex justify-start items-start flex-col gap-5 mt-4'>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row'>
                    
                    <Image alt="check" src={right} width={55} height={55} className='object-contain' />
                    </div>
                            <span>
                                إدارة الدروس والوحدات: يمكن لأعضاء هيئة التدريس إنشاء وتخطيط الدروس وتعديلها وتفعيل أدوات تعليمية مثل العروض التقديمية، الفيديوهات، والاستفسارات مما يسهل على الطلاب الوصول إليها.  
                            </span>
                        </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row'>
                    
                    <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            متابعة تقدم الطلاب: تتيح لوحة التحكم عرض تقارير مفصلة عن أداء الطلاب بما في ذلك نتائج الاختبارات والواجبات مما يساعد أعضاء هيئة التدريس على تحديد الطلاب الذين يحتاجون إلى دعم إضافي.  
                            </span>
                            </li>
                        <li className="flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row'>
                    
                    <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            تقييم الأداء: يمكن لأعضاء هيئة التدريس استخدام أدوات التقييم المختلفة مثل الاختبارات القصيرة والاستبيانات والأسئلة المتنوعة لتقييم فهم الطلاب وتقديم تغذية راجعة فورية.  
                            </span>
                            </li>
                        <li className="text-[#666] font-normal text-[15px] flex justify-start items-start flex-row gap-3 "> 
                        <div className='icon__  flex justify-center items-center flex-row'>
                    
                    <Image alt="check" src={right} width={50} height={50} className='object-contain'  />
                    </div>
                            <span className="text-[#666] font-normal text-[15px] ">

                            التفاعل مع الطلاب: توفر المنصة قنوات تواصل تتيح للمعلمين التفاعل مع الطلاب من خلال المنتديات أو الملاحظات مما يعزز من دعم الطلاب وتقديمهم للإرشادات.  
                            </span>
                            </li>
                    </ul>
                    <Link href={'/teacher'} className="my-5">
                        <button className='cursor-pointer relative bg-[#EFEEFE] text-[#553ddd] !py-[12px] !px-[20px] sm:px-[18px] rounded-xl font-medium text-[15px] lg:w-[150px] w-auto h-[45px]'> اقرأ المزيد </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hometeacher