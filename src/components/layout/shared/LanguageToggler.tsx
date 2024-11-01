"use client"
import { ButtonGhost } from "@/components/ui"
import { useLanguage } from "@/services/hooks"
import { Button, Dropdown, MenuProps } from "antd"
import { ArrowDown2 } from "iconsax-react"
import { useTranslations } from "next-intl"
import React, { useMemo } from 'react'
import ReactCountryFlag from "react-country-flag"


const CountryFlag = ({ code = 'SA', size = '1em' }) => {

  return <ReactCountryFlag countryCode={code} svg style={{
    width: size,
    height: size,
  }} />
}


const LanguageToggler = ({ showFlags = false }) => {

  const t = useTranslations()
  const { handleChangeLanguage, resolvedLanguage: lang } = useLanguage()




  const items: MenuProps['items'] = useMemo(() => [
    {
      key: 'ar',
      label: (<div className="capitalize flex items-center gap-2" > <CountryFlag size="1.5em" />  {t('ar')} (العربية) </div>),
      onClick: () => handleChangeLanguage('ar'),
    },

    {
      key: 'en',
      label: (<div className="capitalize flex items-center gap-2" > <CountryFlag size="1.5em" code="US" />  {t('en')} (English) </div>),
      onClick: () => handleChangeLanguage('en'),
    },

  ], [])


  const Content = (
    <div className={`flex items-center justify-center  ${showFlags ? 'gap-2' : 'gap-14'}`}
      style={{
        // maxWidth: showFlags ? '50px' : '100%'
      }}
    >
      {!showFlags ? (
        <> {t(lang)}
          <ArrowDown2 size={18} />
        </>
      ) : (<>
        <CountryFlag code={lang === 'en' ? 'US' : 'SA'} size="1.75em" />
      </>)}
      {/* <ArrowDown2 size={showFlags ? 14 : 18} /> */}
    </div>
  )

  return (
    <Dropdown menu={{ items, activeKey: 'ar' }}  >
      <a onClick={(e) => e.preventDefault()}>
        {showFlags ? (

          <button className="!px-2 bg-transparent">
            {Content}
          </button>
        ) : (
          <Button className="!px-2" size="small" block>
            {Content}
          </Button>
        )}
      </a>
    </Dropdown>
  )
}

export default LanguageToggler