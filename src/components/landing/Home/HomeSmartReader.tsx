"use client"
import { NextImage, RevealAnimation } from "@/components/shared"
import { ButtonGradient } from "@/components/ui"
import React, { useEffect, useRef } from 'react'
import Link from "next/link"
import { useAnimation, useInView, motion, Variants } from "framer-motion"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import author from '@/assets/images/author.svg'
import { Button, Image } from "antd";

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const HomeSmartReader = ({ data }: { data: HomeSingleDetailsSection }) => {

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
    <section className="py-12 bg-[#fff] smartReader">
      <RevealAnimation>

        <motion.div ref={ref} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
            <div className="smartReader_info">


              <div className="text-lg bg_bg">
                <span className="">
                  الناشر و المؤلف
                </span>
              </div>

              <h1 className={`font-bold text-2xl md:text-xl  lg:text-2xl !leading-[1.4]  mt-4 `}>
              توفر منصة الفكر العالمي للحلول التعليمية للناشرين والمؤلفين الأدوات اللازمة لتحويل كتبهم إلى تجارب تفاعلية غنية بالمحتوى
              </h1>

              <p className="text-[#777] font-medium text-[16px]">
              تحويل الكتاب الأكاديمي الورقي إلى كتاب تفاعلي يُساعد في إتاحة النشر والمؤلف والحفاظ على حقوقهم من السرقة والتصوير والتحويل إلى ملفات PDF وتحويل الكتاب إلى كتاب تفاعلي يضمن النشر على نطاق واسع وأكثر أماناً فقط يسمح باستخدام نسخته ولا يسمح بعملية تحميل الكتاب أو القراءة فقط ولا يسمح بطباعه كامل الكتاب أو جزء منه، مما يتيح الحق الكامل للناشر، ويزيد من انتشار الكتاب، حيث يوفر بديل بدود سرعة حركه كتابيه للمنصة والتحويل إلى كتاب تفاعلي يعزز من انتشاره في الجامعات على بكل سهولة ووصوله الى جميع انحاء العالم وسرعة اقرائه في الكليات بأقسام مما يزيد من مبيعاته ويقلل التكلفة الطباعة تسويق الكتاب بالصورة التقليدية من خلال المعارض الدولية او عن طريق مندوب التسويق وتحرص على تقديم اضافة المحتوى بشكل دائم، بلغة العصر لذلك تقوم بتوفير مزايا اضافية بجامعاته ويسهل الوصول بالأقسام والكليات إليكم بعض من هذه المميزات.
              </p>

                  <ul className="flex justify-start items-start flex-col gap-3">
                    <li className="text-[#777] font-medium text-[16px]"> إضافة الوسائط المتعددة: يمكن دمج مقاطع الفيديو، والصور، والرسومات المتحركة، والرسومات التوضيحية التفاعلية لشرح المفاهيم بشكل أفضل وإضفاء الحيوية على المحتوى. </li>
                    <li className="text-[#777] font-medium text-[16px]"> الروابط التفاعلية: تتضمن روابط تشعبية إلى مصادر خارجية، مثل مقالات علمية، أو مواقع إلكترونية، أو مقاطع فيديو على الإنترنت، لمزيد من الاستكشاف والفهم. </li>
                    <li className="text-[#777] font-medium text-[16px]"> اختبارات تفاعلية وأسئلة: توفر اختبارات قصيرة وأسئلة متعددة الخيارات للمساعدة في تعزيز الفهم ومراجعة المحتوى. </li>
                  </ul>
            </div>
            <div className="author__img">
              <NextImage
                            src={author}
                            className="relative rtl:-scale-x-100 z-[1] w-full  object-contain  !h-[90%]" />
            </div>
          </div>


        </motion.div>
      </RevealAnimation>

    </section>
  )
}

export default HomeSmartReader