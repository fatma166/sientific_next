import { BookCardRead } from "@/components/landing"
import SectionAd from "@/components/landing/shared/SectionAd"
import { AudioSquare, Book, ChartSuccess, Heart, Home2, Magicpen, Radar2 } from "iconsax-react"
import React from 'react'

const MainBookshelfHomePage = () => {
  return (
    <div className="container py-12">

      <div className="bg-bg rounded-lg shadow-sm border border-text-10 p-4 lg:p-5">

        <div className="flex items-start gap-3">
          <div className="pt-2">
            <Home2 variant="TwoTone" className="text-primary" />
          </div>
          <div>

            <h2 className="font-bold mb-1"> مرحبا بك في منصة الفكر العلمي </h2>
            <p>
              استخدم لوحة التحكم للتحكم في المحتوى و إضافة العديد من العناصر إلى المكتبة, والمزيد ...
            </p>
          </div>
        </div>
      </div>


      <div className="  mt-6 lg:mt-8">
        <h3 className="mb-3">
          شاهدته مؤخرا
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-bg rounded-lg shadow-sm">
            <BookCardRead />
          </div>

          <div className="bg-bg rounded-lg shadow-sm">
            <BookCardRead />
          </div>

        </div>
      </div>

      <div className=" ">
        <SectionAd />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">


        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <Book variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              كود الكتاب
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>

        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <Radar2 variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              استكشف
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>

        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <Heart variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              المفضلة
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>



      </div>


      <div className="  mt-6 lg:mt-8 flex flex-col gap-2" >


        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <AudioSquare variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              تعلم عندما تستمتع
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>


        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <Magicpen variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              ادرس طريقك
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>

        <div className="bg-bg rounded-lg shadow-sm  border border-text-10 p-4 flex gap-3">
          <ChartSuccess variant="TwoTone" className="text-primary flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold mb-1">
              زد خبرتك
            </h4>
            <p>
              لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainBookshelfHomePage