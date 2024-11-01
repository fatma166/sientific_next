"use client"
import { NextImage, RevealAnimation } from "@/components/shared"
import React, { useEffect, useRef } from 'react'

import { useAnimation, useInView, motion, Variants } from "framer-motion"
import { Data, DocumentText, TrendUp, VideoTick } from "iconsax-react"

import { HomeSingleDetailsSection } from "@/services/types"

const data = [
  {
    title: 'تحرير النصوص',
    content: 'يمكن لأدوات الذكاء الاصطناعي تصحيح الأخطاء اللغوية والنحوية بشكل تلقائيء.',
    icon: <DocumentText variant="Bulk" size={55} />
  },
  {
    title: 'تحسين الجودة',
    content: 'توفر تقنيات الذكاء الاصطناعي اقتراحات لتحسين الأسلوب اللغوي وتنظيم المحتوى',
    icon: <TrendUp variant="Bulk" size={55} />
  },
  {
    title: 'اقتراحات المحتوى',
    content: 'تساعد الأدوات الذكية في تقديم اقتراحات لإضافة محتوى جديد',
    icon: <VideoTick variant="Bulk" size={55} />
  },
  {
    title: 'تحليل البيانات',
    content: 'تحليل هذه البيانات لفهم سلوكيات القراءة وتفضيلات المستخدمين',
    icon: <Data variant="Bulk" size={55} />
  },


]


const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const HomeAi = ({ data }: { data: HomeSingleDetailsSection }) => {



  const mainControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  useEffect(() => {

    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])


  return (
    <section className="py-12 bg-[#fff] HomeAI">
              <div className='flex justify-center items-center flex-row bg_bg' style={{height: '60px'}}>
            <span className="  " style={{top: '15px'}}> {data?.main_section?.title} </span>
        </div>
      <RevealAnimation>

        <motion.div ref={ref} className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            <div className="lg:col-span-2">


              <div className="my-5 lg:my-6 text-xl text-text    text-justify  "
                dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }}
              />
              {/* 
              <h1 className={`font-bold text-2xl md:text-3xl  lg:text-4xl !leading-[1.4]  mt-4 `}>
                يتيح استخدام الذكاء الاصطناعي في إنشاء الكتب الرقمية مجموعة من الميزات المتقدمة التي تعزز من جودة وتفاعلية المحتوى
              </h1> */}
              {!!data?.items?.data && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pb-10 mt-6">

                  {data?.items?.data?.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex gap-2  `}
                      variants={variants}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >

                      {item?.image && (
                        <div className="flex items-center justify-center bg-secondary !h-16 !w-16  flex-shrink-0 rounded-md">

                          <NextImage
                            src={item?.image}
                            alt={item?.title}
                            className="relative rtl:-scale-x-100 z-[1] w-full  object-contain  !h-[90%]" />
                        </div>
                      )}
                      { }
                      {/* <div className="flex-shrink-0 text-6xl text-primary">

                        {item.icon}
                      </div> */}
                      <div>


                        <h3 className="!text-[#533AD4] font-semibold text-[17px]"> {item?.title}</h3>
                        <p className="text-sm">     {item?.details}</p>


                      </div>
                    </motion.div>
                  ))}

                </div>
              )}


            </div>
            <div className="hidden md:flex items-center justify-center">

              {/* <Image src={img} alt='guard art image' className="relative ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[80vh]" /> */}


              {data?.main_section?.image && (
                <NextImage
                  src={data?.main_section?.image}
                  alt={data?.main_section?.title}
                  className="relative ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[80vh]" />
              )}

            </div>
          </div>


        </motion.div>
      </RevealAnimation >

    </section >
  )
}

export default HomeAi