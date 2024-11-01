'use client'
import Image from "next/image"
import Link from "next/link"
import React, { FC, useMemo } from 'react'

import logo from '@/assets/images/logo.png'

interface Props {

  size?: number
  color?: 'normal' | 'primary'

}

const MainLogo: FC<Props> = ({ size = 60, color = 'normal' }) => {


  const width = useMemo(() => {
    return size * 100 / 60
  }, [size])




  return (
    <Link href="/" className={` 
    ${color === 'normal' ? "fill-text" : ""} 
    ${color === 'primary' ? "fill-primary" : ""} 
      flex items-center transition-all duration-300  hover:opacity-80
     `}>
      <Image src={logo} alt="logo" height={size} objectFit="contain" className="!object-contain" width={300} />

    </Link>
  )
}

export default MainLogo