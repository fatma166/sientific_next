import React from 'react'
import AddressForm from "./AddressForm"
import PayForm from "./PayForm"
import { ButtonGhost } from "@/components/ui"

const MainCheckoutPage = () => {
  return (
    <section className="py-14 lg:py-16">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">


          <div>
            <div className="border-text-10 border p-4 lg:p-5 rounded-lg md:sticky md:top-24 lg:text-lg">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                <span>
                  الأجمالي
                </span>

                <strong >
                  300 ر.س
                </strong>
              </div>

              <div className="py-2 flex items-center justify-center">
                <ButtonGhost size="large" block>
                  <div className="px-4 lg:px-6 font-bold text-lg">
                    دفع
                  </div>
                </ButtonGhost>

              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-3 ">

            <div className="mb-3">
              <h2 className="text-xl font-bold"> إضافة عنوان توصيل </h2>
            </div>
            <div className="border-text-10 border p-4 lg:p-5 rounded-lg">
              <AddressForm />
            </div>
            <div className="border-text-10 border p-4 lg:p-5 rounded-lg mt-5 lg:mt-6">
              <PayForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCheckoutPage