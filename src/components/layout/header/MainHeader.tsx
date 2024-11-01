"use client"
import React, { useEffect, useState } from 'react'
import MainLogo from "../shared/MainLogo"
import NavMenu from "./NavMenu"
import HeaderActions from "./HeaderActions"
import { useParams, usePathname } from "next/navigation"
import { Button, Drawer } from "@/components/ui"
import { FiMenu, FiX } from "react-icons/fi"
import MenuLg from "./MenuLg"
import HeaderSearch from "./HeaderSearch"





const MainHeader = () => {

  const pathname = usePathname()
  const params = useParams();
  const [scrollY, setScrollY] = useState(0)
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)


  useEffect(() => {
    if (typeof window === 'undefined') return
    setScrollY(window.scrollY)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseSideDrawer = () => {
    setShowMenuDrawer(false)
  }

  useEffect(() => {
    if (showMenuDrawer) {
      handleCloseSideDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, params]);

  const isScrolled = scrollY > 140

  return (
    <header >
      <div className="w-full"
        style={{
          height: '5.25rem',
        }}
      > </div>
      {/* // bg-primary-5 */}
      <div className={`navbar bg-bg/70 fixed z-50 top-0 w-screen   backdrop-blur transition-all duration-300 border-b border-primary-10 border-solid  `}>


        {/* <HeaderSearch hide={isScrolled} /> */}
        <div
          // className={`${isScrolled ? 'py-2 bg-primary-85  ' : 'py-3 bg-primary-5'}`}
          className={`${isScrolled ? 'py-2    ' : 'py-3 '}`}


        >
          <div className="container-fluid px-4 md:px-5 lg:px-6 ">
            <div className="flex items-center gap-4 justify-between">

              <div className="flex items-center gap-4">
                <Button
                  className="flex items-center justify-center px-0 h-auto lg:!hidden"
                  type="text"
                  onClick={() => setShowMenuDrawer(true)} >
                  <FiMenu size={26} />
                </Button>

                <div className="sm:hidden">
                  <MainLogo size={30} />
                </div>
                <div className=" hidden sm:block">
                  <MainLogo />
                </div>

              </div>

              <div
                // className={`hidden lg:block ${isScrolled ? 'dark' : ''}`}
                className={`hidden lg:block  `}

              >
                <MenuLg />
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <HeaderActions

                  // isScrolled={isScrolled} 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Drawer
        open={showMenuDrawer}
        placement={params?.locale === 'ar' ? "right" : 'left'}
        closable={false}
        width={'90vw'}
        styles={{
          body: { padding: 0 },
          wrapper: { maxWidth: '350px' }
        }}

        onClose={handleCloseSideDrawer}
        className="lg:hidden"
      >
        <div className="bg-bg h-screen flex flex-col gap-3">
          <div className="flex items-center justify-between p-4 border-b border-primary-30 mb-3">
            <MainLogo />
            <Button size="small" onClick={handleCloseSideDrawer}  >
              <FiX size={24} />
            </Button>
          </div>
          <div className=" flex-1 overflow-y-auto "
            style={{
              maxHeight: 'calc(100vh - 200px)'
            }}
          >

            <MenuLg isDrawer />
          </div>
          <div className="p-3  ">

            <HeaderActions isDrawer />
          </div>
        </div>
      </Drawer>
    </header>
  )
}

export default MainHeader