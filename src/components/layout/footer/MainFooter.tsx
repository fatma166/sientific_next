'use client'

import React, { useMemo } from 'react'
import { LanguageToggler, MainLogo, SocialLinks } from "../shared"
import FooterLinks from "./FooterLinks"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl";

import footerBg from '@/assets/images/artwork/footer-bg.svg'
import footerLogo from '@/assets/images/footer-logo.png'
import { Call, Sms } from "iconsax-react"
import { useGetFrontSettingsQuery } from "@/services/api"
import { useLanguage } from "@/services/hooks"

{/* <NavLink href="products/#threat-intelligence" name="Threat Intelligence" />
<NavLink href="products/#brand-protection" name="Brand Protection" />
<NavLink href="products/#dark-web-monitoring" name="Dark Web Monitoring" />
<NavLink href="products/#attack-surface-management" name="Attack Surface Management " / */}

// eslint-disable-next-line react-hooks/rules-of-hooks









const MainFooter = () => {

  const { t } = useLanguage()
  const { data } = useGetFrontSettingsQuery({})


  const callUs = useMemo(() => {

    const phone = data?.data?.phone
    const email = data?.data?.email

    return [
      { text: <div className="flex items-center gap-1">  <Call variant="Bulk" /> {phone} </div>, href: 'tel:' + phone },
      { text: <div className="flex items-center gap-1">  <Sms variant="Bulk" /> {email} </div>, href: 'mailto:' + email },

    ]
  }, [data?.data])

  const importantLinks = [
    { text: t('home'), href: '/' },
    //   { text: 'المكتبة', href: '/library' },
    { text: t('smartReader'), href: '/reader-ai' },
    { text: t('educationalInstitutionsManagement'), href: '/educational-institutions' },
    //   { text: 'المساعدة و الدعم', href: '/support' },
    { text: t('contactUs'), href: '/contact' },
  ]
  return (
    <footer className="  bg-[#553DDD]  relative overflow-hidden">
   
      <div className="container relative  pt-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8 pb-6">

          <div>
            <Image alt="logo" src={footerLogo} className='w-[150px] h-[100px] object-contain' />
            <p className="my-4 lg:my-5 text-[#fff]">
              {data?.data?.details}
            </p>




          </div>


          <div>
            <FooterLinks
              title={t('quick_link')}
              links={importantLinks}
            />

          </div>

          <div>
            <FooterLinks
              title={t('contactUs')}
              links={callUs}
            />

          </div>

          <div>

            <div className="mb-4 lg:mb-6  ">
              <h3 className="text-xl font-bold text-[#fff] mb-4"> {t('social_media')}  </h3>
              <SocialLinks size={24} gap="0.75rem" data={data?.data} />
            </div>
            {/* <div className="pt-4   ">
              <LanguageToggler />
            </div> */}
          </div>

        </div>

        <div className="text-sm text-text-60 text-center flex items-center justify-center gap-3 pt-6 pb-6 border-t border-primary-30">
          {/* <div className="flex items-center justify-center gap-1">
            <Link href="/" >Privacy</Link>
            |
            <Link href="/" >Terms</Link>
          </div> */}
          <p className='text-[#fff]'> {t('copyright')}

            {/* // app_name */}

            {' '} <a href="/" target="_blank">
              {data?.data?.app_name}
            </a> {' '}
            {new Date().getFullYear()}
          </p>
        </div>


      </div>





    </footer>
  )
}

export default MainFooter