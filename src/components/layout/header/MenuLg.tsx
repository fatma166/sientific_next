import Link from "next/link"
import React, { ReactNode, useMemo } from 'react'

import { usePathname } from 'next/navigation';
import { Popover } from "@/components/ui";
import Image from "next/image";

import firewallImg from '@/assets/images/icons/Firewall.svg'
import { useTranslations } from "next-intl";
import { ClientLink } from "@/components/shared";


const NavLink = ({ href, name }: { href: string, name?: string }) => {
  const pathname = usePathname()
  const t = useTranslations()

  const isOuterLink = href.startsWith("http")
  const isHashLink = href.startsWith("#")

  const _href = (isOuterLink || isHashLink) ? href : "/" + href
  const isActive = useMemo(() => pathname == ('/' + href) || pathname.startsWith('/' + (name?.toLowerCase() || href)), [pathname, href, name])

  return (
    <li className="[&>a.active]:text-primary w-full ">
      <ClientLink href={_href}
        className={`capitalize w-full px-3 text-[18px]  text-nowrap  ${isActive ? "active font-bold dark:!text-text" : "text-text-45 dark:text-text-85 hover:text-text hover:bg-primary-20 md:hover:bg-transparent py-3 md:py-0"}`}
        target={isOuterLink ? "_blank" : "_self"}
      >
        {t(name) || href}
      </ClientLink>
    </li>
  )
}

const MenuLg = ({ isDrawer = false }) => {


  return (
    <ul className={`flex items-center list-none gap-3 2xl:gap-5 ${isDrawer ? "flex-col" : ""} `}>
      <NavLink href="" name="home" />
      <NavLink href="library" name="library" />
      <NavLink href="educational-institutions" name="educationalInstitutionsManagement" />
      <NavLink href="author" name="الناشر و المؤلف" />
      <NavLink href="reader-ai" name="smartReader" />
      {/* <NavLink href="support" name="helpAndSupport" /> */}
      <NavLink href="contact" name="contactUs" />
      {/* <Popover
        trigger="hover"
        content={<CompanySubLinks />}
        overlayInnerStyle={{ background: 'var(--dark-gradient)' }}
        align={{
          offset: [0, -30],
        }}
        arrow={undefined}
      >
        <>
          <NavLink href="#" name="Company" />
        </>
      </Popover> */}


    </ul>
  )
}

export default MenuLg