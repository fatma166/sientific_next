"use client"
import React from 'react'
import ContactForm from "./ContactForm"
import { CallCalling, Map, Sms } from "iconsax-react"
import { useTranslations } from "next-intl";
import { useGetFrontSettingsQuery } from "@/services/api";
import { useLanguage } from "@/services/hooks";

const MainContactPage = () => {

  const { t } = useLanguage()
  const { data } = useGetFrontSettingsQuery({})


  return (
    <main className="bg-[#fff]">

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <ContactForm />

            <div  >
              {data?.data?.location && (

                <iframe


                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14583029.851617416!2d41.85111631896608!3d26.830089991823566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1715440873297!5m2!1sen!2seg"
                  src={data?.data?.location}
                  width="600"
                  height="550"
                  // allowfullscreen={true}
                  style={{ border: 0 }}
                  loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"


                ></iframe>
              )}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="lg:col-span-2 bg-bg p-4 md:p-5 lg:p-6 shadow-sm rounded-xl flex items-start gap-3">
              <Map size={56} variant='Bulk' className="text-primary" />
              <div>
                <h3 className="font-bold text-xl text-primary  mb-1 "> {t('address')} </h3>
                <p className="text-lg block">
                  {data?.data?.address}
                </p>
              </div>
            </div>

            <div className="  bg-bg p-4 md:p-5 lg:p-6 shadow-sm rounded-xl flex items-start gap-3">
              <CallCalling size={56} variant='Bulk' className="text-primary" />
              <div>
                <h3 className="font-bold text-xl text-primary  mb-1 "> {t('phone')}  </h3>
                <a className="text-lg block" href={"tel:" + data?.data?.phone}>
                  {data?.data?.phone}
                </a>
              </div>
            </div>

            <div className="  bg-bg p-4 md:p-5 lg:p-6 shadow-sm rounded-xl flex items-start gap-3">
              <Sms size={56} variant='Bulk' className="text-primary" />
              <div>
                <h3 className="font-bold text-xl text-primary mb-1 "> {t('e-mail')}</h3>
                <a className="text-lg block" href={"mailto:" + data?.data?.email}>
                  {data?.data?.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContactPage