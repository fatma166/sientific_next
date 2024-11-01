"use client"
import { Button, Drawer, Input } from "antd"
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { ClientLink } from "../shared"
import { ArchiveBook, Book, Heart, Home, Profile, SearchNormal, Star } from "iconsax-react"
import { useClientPathname, useLanguage } from "@/services/hooks"
import { useLocale } from "next-intl"
import { MainLogo } from "../layout/shared"
import { usePathname, useRouter } from "next/navigation"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"


const SingleLink = ({ href, name, icon, isLogout }: { href: string, name: string, icon?: ReactNode, isLogout?: boolean }) => {

  const { barePathname } = useClientPathname()

  const isActive = useMemo(() => barePathname == href, [barePathname, href])

  return (
    <ClientLink href={href} className={`flex items-center gap-2 hover:bg-primary hover:text-white p-2 transition-all duration-300 rounded font-bold ${isActive ? "bg-primary text-white" : "text-text-60"} ${isLogout ? '!text-danger' : ''}`}>
      {icon}
      {name}
    </ClientLink>
  )
}


const ShelfLinks = () => {


  const router = useRouter()
  const [search, setSearch] = useState('')

  const { t } = useLanguage()

  return (
    <div>
      <ul className="p-3 lg:p-4 border-b border-text-10 flex flex-col gap-2 list-none">
        <li className="mb-2">
          <Input placeholder={t("search")} size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onPressEnter={(e: any) => {

              if (e?.target?.value) {
                router.push(`/bookshelf/search?${SEARCH_PARAMS_NAMES.search}=${e?.target?.value}`)
                setSearch('')
              }
            }}

          />
        </li>
        <SingleLink href="/bookshelf" name={t("home")} icon={<Home variant="Bulk" />} />
        <SingleLink href="/bookshelf/search" name={t("search")} icon={<SearchNormal variant="Bulk" />} />
        <SingleLink href="/bookshelf/profile" name={t("profile")} icon={<Profile variant="Bulk" />} />
      </ul>
      <ul className="p-3 lg:p-4 border-b border-text-10 flex flex-col gap-2 list-none">
        <SingleLink href="/bookshelf/library" name={t("library")} icon={<Book variant="Bulk" />} />
        <SingleLink href="/bookshelf/favorite" name={t("favorites")} icon={<Heart variant="Bulk" />} />
        <SingleLink href="/bookshelf/last-watched" name={t("last_watched")} icon={<ArchiveBook variant="Bulk" />} />
        <SingleLink href="/bookshelf/reviews" name={t("reviews")} icon={<Star variant="Bulk" />} />
      </ul>

      <ul className="p-3 lg:p-4   flex flex-col gap-2 list-none">
        <SingleLink href="/logout" name={t("logout")} icon={<Book variant="Bulk" />} isLogout />

      </ul>
    </div>
  )
}
const ShelfSidebar = () => {

  const pathname = usePathname()
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)
  const locale = useLocale()

  const { t } = useLanguage()

  useEffect(() => {
    if (showMenuDrawer) {
      setShowMenuDrawer(false)
    }
  }, [pathname])

  return (
    <div className="md:max-h-screen md:overflow-y-auto">

      <div className="flex items-center gap-3 p-3 lg:p-4 border-b border-text-10">
        <Button
          className="flex items-center justify-center px-0 h-auto md:!hidden"
          type="text"
          onClick={() => setShowMenuDrawer(true)}
        >
          <FiMenu size={26} />
        </Button>

        <h1 className="text-lg text-primary font-bold">
          {t('bookshelf')}
        </h1>
      </div>

      <div className="hidden md:block">
        <ShelfLinks />
      </div>


      <Drawer
        open={showMenuDrawer}
        placement={locale === 'ar' ? "right" : 'left'}
        closable={false}
        width={'90vw'}
        styles={{
          body: { padding: 0 },
          wrapper: { maxWidth: '350px' }
        }}

        onClose={() => setShowMenuDrawer(false)}
        className="lg:hidden"
      >
        <div className="bg-bg h-screen flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 border-b border-primary-30 mb-3">
            <MainLogo />
            <Button size="small" onClick={() => setShowMenuDrawer(false)} className="!h-auto !p-1"  >
              <FiX size={20} />
            </Button>
          </div>
          <div className=" flex-1 overflow-y-auto "
            style={{
              maxHeight: 'calc(100vh - 200px)'
            }}
          >
            <ShelfLinks />

          </div>

        </div>
      </Drawer>

    </div>
  )
}

export default ShelfSidebar