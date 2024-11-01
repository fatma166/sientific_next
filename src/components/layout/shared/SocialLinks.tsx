import { FrontSettings } from "@/services/types";
import Link from "next/link";
import React, { ReactNode } from 'react'
import { FaSquareXTwitter, FaSquareFacebook, FaInstagram, FaLinkedinIn, FaYoutube, FaSnapchat } from "react-icons/fa6";


const SocialLink = ({ href, children }: { href: string, children: ReactNode }) => {

  return <Link href={href} target="_blank" className="text-text-45 hover:text-text hover:scale-105 transition-all">
    {children}
  </Link>
}

const SocialLinks = ({ size = 18, gap = '0.5rem', data }: { size?: number, gap?: string, data?: FrontSettings }) => {
  return (
    <div className="flex items-center  "
      style={{ gap }}
    >

      {data?.facebook && (
        <SocialLink href={data?.facebook}>
          <FaSquareFacebook size={size} />
        </SocialLink>
      )}

      {data?.instagram && (
        <SocialLink href={data?.instagram}>
          <FaInstagram size={size} />
        </SocialLink>
      )}



      {/* <SocialLink href="https://www.linkedin.com/company/st/">
        <FaLinkedinIn size={size} />
      </SocialLink> */}

      {data?.twitter && (

        <SocialLink href={data?.twitter}>
          <FaSquareXTwitter size={size} />
        </SocialLink>
      )}

      {data?.youtube && (
        <SocialLink href={data?.youtube}>
          <FaYoutube size={size} />
        </SocialLink>
      )}

      {data?.snapchat && (
        <SocialLink href={data?.snapchat}>
          <FaSnapchat size={size} />
        </SocialLink>
      )}



    </div>
  )
}

export default SocialLinks