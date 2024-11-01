import React from 'react'
import img from '@/assets/images/landing/ads1.jpg'
import { RevealAnimation } from "@/components/shared"
import Image from "next/image"

const SectionAd = () => {
  return (
    <section className="py-12 slider__library">
      <RevealAnimation>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 md:col-span-6 gap-4">
          <div className="ads__item bg-center bg-cover h-[300px] w-full bg-no-repeat rounded-lg p-2 sm:mb-0 mb-3" >
            <div className="ads__info sm:my-[75px] flex justify-start items-start flex-col gap-3">
              <h1 className="text-white font-semibold text-[35px]"> خصم 20%  </h1>
              <p className="text-white font-semibold text-[18px]"> كل شئ يمر بـشكل جيد مع كتاب عظيم </p>
              <a href="" className="bg-white text-third-color px-[25px] py-[9px] rounded-[25px] font-semibold text-[15px]"> تسوق الاّن </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 gap-4">
          <div className="ads__item2 bg-center bg-cover h-[300px] w-full bg-no-repeat rounded-lg p-2 sm:mb-0 mb-3">
            <div className="ads__info sm:mt-[75px] flex justify-start items-start flex-col gap-3">
              <h1 className="text-white font-semibold text-[35px]"> خصم 20%  </h1>
              <p className="text-white font-semibold text-[18px]"> كل شئ يمر بـشكل جيد مع كتاب عظيم </p>
              <a href="" className="bg-white text-third-color px-[25px] py-[9px] rounded-[25px] font-semibold text-[15px]"> تسوق الاّن </a>
            </div>
          </div>
        </div>
      </div>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default SectionAd