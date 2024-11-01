"use client"
import { ButtonGhost } from "@/components/ui"
import { Profile, ShoppingCart } from "iconsax-react"
import React from 'react'
import DarkModeChange from "../shared/DarkModeChange"
import ProfileDropdown from "./ProfileDropdown"
import { ClientLink } from "@/components/shared"
import { LanguageToggler } from "../shared"
import HeaderCart from "./HeaderCart"

const HeaderActions = ({ isDrawer = false, isScrolled }: { isDrawer?: boolean, isScrolled?: boolean }) => {
  return (
    <div className={`navbar_btns flex items-center justify-center  ${isDrawer ? 'flex-col items-stretch ' : ''}`}>


      <ProfileDropdown isScrolled={isScrolled} block={isDrawer} />
      {/* <ButtonGhost className="!px-2" size="small"  >
        <Profile variant="Bulk" size={22} className={`${isScrolled ? 'text-white  ' : 'dark:text-white !text-text'}`} />
      </ButtonGhost> */}
      <HeaderCart isDrawer={isDrawer} isScrolled={isScrolled} />

      <DarkModeChange isScrolled={isScrolled} />

      <LanguageToggler showFlags />

    </div>
  )
}

export default HeaderActions