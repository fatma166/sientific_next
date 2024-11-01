"use client"
import { Button, Drawer, Input } from "antd"
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { ClientLink } from "../shared"
import { Book, Heart, Home, Profile, SearchNormal, ShoppingBag, Star } from "iconsax-react"
import { useClientPathname, useLanguage } from "@/services/hooks"
import { useLocale } from "next-intl"
import { MainLogo } from "../layout/shared"


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


const ShelfLinks = ({ links }: {
  links: {
    name: string;
    href: string;
    icon: React.JSX.Element;
  }[]
}) => {


  return (
    <div>
      <ul className="p-3 lg:p-4   flex flex-col gap-2 list-none">

        {links.map((link, ix) => (
          <SingleLink
            key={ix}
            href={link.href}
            name={link.name}
            icon={link.icon}
          />
        ))}
      </ul>

    </div>
  )
}
const ProfileSidebar = () => {

  const { barePathname } = useClientPathname()
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)
  const locale = useLocale()
  const { t } = useLanguage()


  useEffect(() => {
    if (showMenuDrawer) {
      setShowMenuDrawer(false)
    }
  }, [barePathname])



  const links = useMemo(() => [
    {
      name: t("profile"),
      href: "/profile",
      icon: <Profile variant="Bulk" />,
    },
    {
      name: t("orders"),
      href: "/profile/orders",
      icon: <ShoppingBag variant="Bulk" />,
    },
    {
      name: t("favorites"),
      href: "/profile/favorites",
      icon: <Heart variant="Bulk" />,
    },
    {
      name: t("reviews"),
      href: "/profile/reviews",
      icon: <Star variant="Bulk" />,
    }
  ], [t])

  const activeLink = useMemo(() => links.find(link => barePathname == link.href), [barePathname])

  return (
    <div className=" border border-text-10 rounded-lg  p-4 lg:p-5">

      <div className="flex items-center gap-3 md:p-3 lg:p-4 md:!hidden ">
        <Button
          className="flex items-center justify-center px-0 h-auto  "
          type="text"
          onClick={() => setShowMenuDrawer(true)}
        >
          <FiMenu size={26} />
        </Button>

        <div className=" flex items-center gap-2 text-primary">

          {!!activeLink && <>
            {activeLink?.icon}
            <h3 className="font-bold text-primary" >
              {activeLink?.name}
            </h3>
          </>}
        </div>

      </div>

      <div className="hidden md:block">
        <ShelfLinks links={links} />
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
            <ShelfLinks links={links} />

          </div>

        </div>
      </Drawer>

    </div>
  )
}

export default ProfileSidebar