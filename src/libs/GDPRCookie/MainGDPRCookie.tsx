'use client'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import Cookies from 'js-cookie'
import { Button, Divider, Modal, Switch, Tooltip } from "antd"
import { InfoCircle } from "iconsax-react"
import { ButtonGhost, ButtonGradient } from "@/components/ui"

const EXPIRATION_DAYS = 365 * 100

const INFO_NECESSARY = 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
const INFO_PREFERENCES = 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
const INFO_STATISTICS = 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.'
const INFO_MARKETING = 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'

const MANDATORY = 'Mandatory - can not be deselected. Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'



const COOKIE_PREFIX = 'FIKR_COO_GDPR_'

const COOKIE_CONSENT = COOKIE_PREFIX + 'COOKIE_CONSENT'

const COOKIE_NECESSARY = COOKIE_PREFIX + 'COOKIE_NECESSARY'
const COOKIE_PREFERENCES = COOKIE_PREFIX + 'COOKIE_PREFERENCES'
const COOKIE_STATISTICS = COOKIE_PREFIX + 'COOKIE_STATISTICS'
const COOKIE_MARKETING = COOKIE_PREFIX + 'COOKIE_MARKETING'


const MainGDPRCookie = ({ ScriptsToLoad }: { ScriptsToLoad: ReactNode }) => {

  const [isModal, setIsModal] = useState(false)

  const [isNecessary, setIsNecessary] = useState(true)
  const [isPreferences, setIsPreferences] = useState(true)
  const [isStatistics, setIsStatistics] = useState(true)
  const [isMarketing, setIsMarketing] = useState(true)


  const isAllUnChecked = !isNecessary && !isPreferences && !isStatistics && !isMarketing
  const isOneChecked = isNecessary || isPreferences || isStatistics || isMarketing

  useEffect(() => {
    const isCookie = Cookies.get(COOKIE_CONSENT)
    if (!isCookie) {
      setIsModal(true)
    } else {
      const isNecessary = Cookies.get(COOKIE_NECESSARY)
      const isPreferences = Cookies.get(COOKIE_PREFERENCES)
      const isStatistics = Cookies.get(COOKIE_STATISTICS)
      const isMarketing = Cookies.get(COOKIE_MARKETING)
      if (!isNecessary) setIsNecessary(false)
      if (!isPreferences) setIsPreferences(false)
      if (!isStatistics) setIsStatistics(false)
      if (!isMarketing) setIsMarketing(false)
    }
  }, [])


  const handleAllowAll = () => {
    const ts = new Date().getTime() + ''
    Cookies.set(COOKIE_CONSENT, ts, { expires: EXPIRATION_DAYS })
    Cookies.set(COOKIE_NECESSARY, ts, { expires: EXPIRATION_DAYS })
    Cookies.set(COOKIE_PREFERENCES, ts, { expires: EXPIRATION_DAYS })
    Cookies.set(COOKIE_STATISTICS, ts, { expires: EXPIRATION_DAYS })
    Cookies.set(COOKIE_MARKETING, ts, { expires: EXPIRATION_DAYS })
    setIsModal(false)
  }
  const handleAllowSelected = () => {

    const ts = new Date().getTime() + ''

    Cookies.set(COOKIE_CONSENT, ts, { expires: EXPIRATION_DAYS })
    if (isNecessary) Cookies.set(COOKIE_NECESSARY, ts, { expires: EXPIRATION_DAYS })
    if (isPreferences) Cookies.set(COOKIE_PREFERENCES, ts, { expires: EXPIRATION_DAYS })
    if (isStatistics) Cookies.set(COOKIE_STATISTICS, ts, { expires: EXPIRATION_DAYS })
    if (isMarketing) Cookies.set(COOKIE_MARKETING, ts, { expires: EXPIRATION_DAYS })

    setIsModal(false)

  }
  const handleDeny = () => {
    const ts = new Date().getTime() + ''
    Cookies.set(COOKIE_CONSENT, ts, { expires: EXPIRATION_DAYS })

    setIsModal(false)

  }


  return (
    <>
      <Modal
        open={isModal}
        destroyOnClose
        footer={null}
        className=" modal__basic "
        rootClassName="modal__GDBR"
        onCancel={() => setIsModal(false)}
        maskClosable={false}
        closable={false}
      >
        <div className="bg-[#fff] border  border-primary-30 rounded-lg p-4 lg:p-6 ">

          <h2 className="text-lg">
            This website uses cookies
          </h2>
          <p className="text-xs mt-3">
            We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
          </p>
          <Divider />

          <div className="flex flex-wrap items-center gap-4 lg:gap-5">
            <div className="flex items-center gap-2 text-sm">
              <Tooltip title={MANDATORY}>

                <Switch checked={isNecessary} disabled />
              </Tooltip>
              <Tooltip title={INFO_NECESSARY}>
                Necessary
                {' '}
                <InfoCircle size={15} variant="Bulk" />
              </Tooltip>
            </div>

            <div className="flex items-center gap-2">
              <Switch checked={isPreferences} onChange={(c) => setIsPreferences(c)} />
              <Tooltip title={INFO_PREFERENCES}>
                Preferences {' '}
                <InfoCircle size={15} variant="Bulk" />
              </Tooltip>
            </div>

            <div className="flex items-center gap-2">
              <Switch checked={isStatistics} onChange={(c) => setIsStatistics(c)} />
              <Tooltip title={INFO_STATISTICS}>
                Statistics {' '}
                <InfoCircle size={15} variant="Bulk" />
              </Tooltip>
            </div>

            <div className="flex items-center gap-2">
              <Switch checked={isMarketing} onChange={(c) => setIsMarketing(c)} />
              <Tooltip title={INFO_MARKETING}>
                Marketing {' '}
                <InfoCircle size={15} variant="Bulk" />
              </Tooltip>
            </div>

          </div>

          <Divider />



          <div className="flex items-start md:items-center flex-col md:flex-row gap-3 " style={{ justifyContent: 'flex-end' }}>
            <ButtonGhost onClick={handleDeny} className='w-full sm:w-fit'> Deny </ButtonGhost>
            <ButtonGhost disabled={isAllUnChecked} onClick={handleAllowSelected} className='w-full sm:w-fit'> Allow Selection </ButtonGhost>
            <ButtonGradient onClick={handleAllowAll} className='w-full sm:w-fit'>
              <div style={{ padding: '0 24px', fontSize: '0.875rem' }}>
                Allow all
              </div>
            </ButtonGradient>

          </div>
        </div>
      </Modal >
      {isOneChecked && ScriptsToLoad
      }
    </>

  )
}

export default MainGDPRCookie