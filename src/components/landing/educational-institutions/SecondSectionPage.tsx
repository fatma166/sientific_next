import { HomeSingleDetail } from "@/services/types"
import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion, Variants } from "framer-motion"
import { useLanguage } from "@/services/hooks"
import { NextImage, RevealAnimation } from "@/components/shared"

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}


const SecondSectionPage = ({ data }: { data: HomeSingleDetail }) => {



  const mainControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  useEffect(() => {

    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])


  return (
    <section className="py-6 bg-[#fff]">
      <RevealAnimation>

        <motion.div ref={ref} className="container">
          <div className="grid grid-cols-1 md:grid-cols-2   gap-5 lg:gap-8">

            <div className="hidden md:flex items-center justify-center">

              {data?.image && (
                <NextImage
                  src={data?.image}
                  alt={data?.title}
                  className="relative ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[80vh]" />
              )}

            </div>

            <div className=" flex flex-col justify-center">

              <h2 className="text-2xl text-primary font-bold ">
                {data?.title}
              </h2>

              <div className="my-5 lg:my-6 text-xl text-text about    "
                dangerouslySetInnerHTML={{ __html: data?.details || '' }}
              />



            </div>

          </div>


        </motion.div>
      </RevealAnimation >

    </section >
  )
}

export default SecondSectionPage