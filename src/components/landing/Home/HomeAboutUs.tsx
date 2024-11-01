"use client"
import React from 'react'
import { SingleHero } from "../shared"
import img from '@/assets/images/landing/about_1.png'
import right from '@/assets/images/check2.png'
import Image from "next/image"
import imgBg from '@/assets/images/landing/about_8.png'
import { TickCircle } from "iconsax-react"
import { RevealAnimation } from "@/components/shared"
import { HomeAboutUsIN } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { useTranslations } from "next-intl";

const HomeAboutUs = ({ data }: { data: HomeAboutUsIN }) => {

  const t = useTranslations();

  return (
    <section className="bg-[#fff] py-12 about_us_section">
      <RevealAnimation >




        <div className="container">
        <div className='flex justify-center items-center flex-row bg_bg'>
            <span className="  " > {t('about_us')} </span>
        </div>
          <SingleHero
            title={data?.[0]?.title}
            subTitle={data?.[0]?.details || ''}
            img={data?.[0]?.image || img.src}
            imgBg={imgBg}
          >
            {!!data?.items?.data?.length && (

              <div className="flex flex-col gap-4 text-lg">
                {data?.items?.data?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className='icon__  flex justify-center items-center flex-row rounded-[4px] p-[3px]'>
                    
                    <Image alt="check" src={right} width={30} height={30} />
                    </div>
                    {/* <div className='icon__ bg-secondary flex justify-center items-center flex-row rounded-[4px] p-[3px] border border-solid border-[#ccc]'>
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#533AD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div> */}
                    <p> {item?.detail_ar}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="profile__btn mt-8 mb-5">
              <a href="" target='_blank' className='bg-primary font-medium text-[17px] py-[8px] px-[35px] text-[#fff] rounded-full'> ملف الأعمال </a>
            </div>
          </SingleHero>
        </div>

      </RevealAnimation>
    </section>
  )
}

export default HomeAboutUs