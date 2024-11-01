import React from 'react'
import img from '@/assets/images/landing/ads1.jpg'
import { RevealAnimation } from "@/components/shared"
import Image from "next/image"

const SecSectionAds = () => {
  return (
    <section className="py-12 slider__library">
      <RevealAnimation>
        <div className="ads__ bg-center bg-cover h-[300px] w-full bg-no-repeat rounded-lg md:p-10 p-5 flex justify-center items-center flex-col gap-4">
            <h3 className="text-white font-bold sm:text-[40px] text-[30px] mb-0 text-center"> أقوى العروض على الكتب  </h3>
            <span className="text-white font-bold sm:text-[16px] text-[14px]"> سجل الاّن لـتحصل على أفضل العروض </span>
            <a href="" className="bg-primary text-white sm:py-[10px] py-[6px] sm:px-[30px] px-[15px] rounded-[8px] flex justify-center items-center"> سجل الاّن </a>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default SecSectionAds