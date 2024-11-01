import React from 'react'


import img1 from '@/assets/images/landing/xc-logo-1.png.pagespeed.ic.xGdGUEH-1m.webp'
import img2 from '@/assets/images/landing/xc-logo-2.png.pagespeed.ic.OMrLcfI1Hy.webp'
import img3 from '@/assets/images/landing/xc-logo-3.png.pagespeed.ic.NQcNeNZ4a_.webp'
import img4 from '@/assets/images/landing/xc-logo-4.png.pagespeed.ic.S5vWVkWjmD.webp'
import img5 from '@/assets/images/landing/xc-logo-5.png.pagespeed.ic.-Y5kLux1yA.webp'
import { SliderContainer } from "@/libs/slider"
import Image from "next/image"
import { SCREEN_SIZES } from "@/services/theme"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomePartner } from "@/services/types"
import { useTranslations } from "next-intl";


const Partners = ({ data }: { data: HomePartner[] }) => {
    const t = useTranslations()
  return (
    <section className="py-12 bg-[#fff]">
      <RevealAnimation>
        <div className="container">
          <div className="flex justify-center items-center flex-row w-full bg_bg">
            <span className="  ">
              {t('partners')}
            </span>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10">
            <SliderContainer
              sliderOptions={{
                slidesPerView: 2,
                spaceBetween: 40,
                // centeredSlides: true,
                centerInsufficientSlides: true,
                loop: true,
                autoplay: {
                  delay: 1000,
                  disableOnInteraction: true,

                },

                breakpoints: {
                  [SCREEN_SIZES.md]: {
                    slidesPerView: 3
                  },
                  [SCREEN_SIZES.lg]: {
                    slidesPerView: 4
                  },
                  [SCREEN_SIZES.xl]: {
                    slidesPerView: 5
                  },
                }

              }}

            >
              {data.map((item, ix) => (

                <div key={item?.id || ix} className="p-4 dark:bg-white/80 rounded-l ltr:bg-transparent flex items-center justify-center"  >
                  <NextImage
                    src={item?.image}
                    alt="logo brand name"
                    className=" !h-20 !w-full object-contain opacity-85"

                  />
                </div>
              ))}

            </SliderContainer>
          </div>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default Partners