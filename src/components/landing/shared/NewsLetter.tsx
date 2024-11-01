"use client"
import React, { useMemo, useRef } from 'react'

import ani1 from '@/assets/images/ani1.png'
import ani2 from '@/assets/images/ani2.png'
import ani3 from '@/assets/images/ani3.png'
import ani4 from '@/assets/images/global.svg'
import digital from '@/assets/images/digital.jpg'

import Image from "next/image"
import { Button, Input, message } from "antd"
import { RevealAnimation } from "@/components/shared"
import { useTranslations } from "next-intl";
import * as Yup from 'yup';
import { ERRORS_STR } from "@/services/constants"
import { useFormik } from "formik"
import { subscribeToNewsletter } from "@/services/api"
const NewsLetter = () => {
  const t = useTranslations();


  return (
    <section className="digital_number flex justify-center items-center flex-col bg gap-3 w-full dark relative pt-8 lg:py-10">
      <div className="container">
        <div className='flex justify-center items-center flex-row w-full bg_bg'>
          <span className="">
            التحول الرقمي 
          </span>
        </div>
          <div className='grid grid-cols-12 gap-4 mt-8'>
          <div className='col-span-12 md:col-span-6'>
              <Image alt='digital' src={digital} className='w-full object-cover rounded-[12px] '/>
            </div>
            <div className='col-span-12 md:col-span-6 '>
              <div className='flex justify-center h-full items-start flex-col gap-5 relative z-50'>
                <h2 className='text-primary font-semibold text-[22px' > التحول الرقمي </h2>
                <ul className='flex justify-start items-start flex-col'>
                  <li className='text-[#000] font-normal text-[18px] leading-[2]'> استخدام التكنولوجيا الرقمية لتحسين وتطوير العمليات والخدمات في جميع جوانب الحياة، سواء في المؤسسات الحكومية، الشركات، أو في الحياة اليومية للأفراد  </li>
                  <li className='text-[#000] font-normal text-[18px] leading-[2]'> استخدام التكنولوجيا الرقمية لتحسين وتطوير العمليات والخدمات في جميع جوانب الحياة، سواء في المؤسسات الحكومية، الشركات، أو في الحياة اليومية للأفراد  </li>
                  <li className='text-[#000] font-normal text-[18px] leading-[2]'> استخدام التكنولوجيا الرقمية لتحسين وتطوير العمليات والخدمات في جميع جوانب الحياة، سواء في المؤسسات الحكومية، الشركات، أو في الحياة اليومية للأفراد  </li>
                </ul>
                <a href="" target='_blank' className='bg-[#FEA71D] font-medium text-[17px] py-[8px] px-[35px] text-[#fff] rounded-full'> ملف الأعمال </a>
              </div>
            </div>
            
          </div>
      </div>
      {/* <RevealAnimation> */}

      {/* </RevealAnimation> */}

    </section>
  )
}

export default NewsLetter