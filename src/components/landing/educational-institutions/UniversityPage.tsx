'use client'
import React, { useEffect, useRef } from 'react'

import { useAnimation, useInView, motion, Variants } from "framer-motion"
import { UniversityDetail } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { NextImage, RevealAnimation } from "@/components/shared"
import Link from "next/link"

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const UniversityPage = ({ data }: { data: UniversityDetail[] }) => {

  const { t } = useLanguage()

  const mainControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  useEffect(() => {

    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <section className="py-12 bg-[#fff]">
      <RevealAnimation >
        <motion.div ref={ref} className="container">
          <div className="text-base text-center ">
            <span className="  py-2 px-6 bg-primary-10 text-primary rounded-full font-bold inline-block  ">
              {t('select_university')}
            </span>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {data?.map((item, index) => (
              <RevealAnimation delay={0.25 + (index * 0.15)} key={item.id}>
                <Link href={item?.university_link || '#'} className="w-full h-full">
                  <div className="hover:[&>div]:opacity-100 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/50  z-10 opacity-0 transition-all duration-300 flex items-center justify-center  ">
                      <h4 className="text-white">

                        {item?.name}
                      </h4>

                    </div>
                    <NextImage
                      src={item?.image}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </motion.div>
      </RevealAnimation>
    </section>
  )
}

export default UniversityPage