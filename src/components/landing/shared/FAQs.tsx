"use client"
import React, { useEffect, useMemo } from 'react'
import { Collapse, CollapseProps } from '../../ui/Collapse'
import ArrowDown from '@/assets/images/icons/arrow-square-down.svg'
import Image from 'next/image';

import { stagger, useAnimate, useInView } from "framer-motion";
import { RevealAnimation } from "../../shared";
import { HomeFAQ } from "@/services/types";
import { useLanguage } from "@/services/hooks";
import { useTranslations } from "next-intl";



const qus = [

  {
    title: ' كيف تعمل منصة الفكر التعليمي ؟',
    content: (<p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
      .</p>)
  },

  {
    title: ' كيف تعمل منصة الفكر التعليمي ؟',
    content: (<p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
      .</p>)
  },
  {
    title: ' كيف تعمل منصة الفكر التعليمي ؟',
    content: (<p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
      .</p>)
  },
  {
    title: ' كيف تعمل منصة الفكر التعليمي ؟',
    content: (<p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها
      .</p>)
  },
]



// const items: CollapseProps['items'] = qus.map((q, ix) => (
//   {
//     key: ix + 1,
//     label: q.title,
//     children: (
//       <div className='font-normal text-base   [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-2  '>
//         {q.content}
//       </div>
//     ),
//     style: { fontSize: '20px', fontWeight: 600 }
//   })
// )




export default function FAQ({ data }: { data: HomeFAQ[] }) {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, margin: '0px 0px -200px 0px' })
  const { isArabic } = useLanguage()
  const t = useTranslations()
  const handleAnimate = async () => {
    await animate([
      [".faq-items > div", { y: 50, opacity: 0 }, { duration: 0 }],
      [".faq-items > div", { y: 0, opacity: 1 }, { duration: 0.6, delay: stagger(0.4), ease: 'circInOut' }],
    ]);
  }

  useEffect(() => {
    if (isInView) {
      handleAnimate()
    }
  }, [isInView])


  const items: CollapseProps['items'] = useMemo(() => {

    return data.map((q, ix) => (
      {
        key: q.id,
        label: isArabic ? q.question_ar : q.question_en,
        children: (
          <div className='font-normal text-base   [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-2  '>
            {isArabic ? q.answer_ar : q.answer_en}
          </div>
        ),
        style: { fontSize: '20px', fontWeight: 600 }
      })
    )
  }, [data, isArabic])

  return (
    <section className="bg-[#fff] py-12">


      <RevealAnimation>
        <div className='container'>
          <div className='  flex flex-col gap-14 items-center'>
            <div className="flex justify-center items-center flex-row w-full bg_bg">
              <span className="  ">
                {t('faqs')}
              </span>
            </div>
            <div ref={scope} className='faq-items flex flex-col items-center gap-2 [&>div]:opacity-0'>
              {/* {data.map((item, index) => (
              
            ))} */}

              <Collapse

                defaultActiveKey={1}
                expandIconPosition='end'
                expandIcon={({ isActive }) => <Image alt="arrow" src={ArrowDown} className={`opacity-80 ${isActive === false ? 'rotate-0' : 'rotate-180'}`} />}
                className='w-[95vw] lg:w-[760px] !p-1 !border-2 !border-solid !border-primary-10 !bg-bg'
                items={items} />
            </div>

          </div>
        </div>
      </RevealAnimation>
    </section>

  )
}
