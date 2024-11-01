"use client"
import Link from "next/link"
import React, { useState } from 'react'

import { usePathname } from 'next/navigation';
import { ArrowDown2 } from "iconsax-react";
import { motion, useInView, useAnimation, Variants, Transition } from 'framer-motion'


interface NavLink {
  title: string
  href?: string
  subLinks?: NavLink[]
}

const navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About',
    href: '/about',
    subLinks: [
      {
        title: 'Careers',
        href: 'https://www.linkedin.com/company/buguard/jobs/'
      },
      // {
      //   title: 'News',
      //   href: '/news'
      // },

    ]
  },
  {
    title: 'Solutions',
    href: '#',
    subLinks: [
      {
        title: 'By Use Case',
        subLinks: [
          {
            title: 'Data Leak Detection',
            href: '/solutions/data-leak-detection'
          },
          {
            title: 'Ransomware Protection',
            href: '/solutions/ransomware-protection'
          },
          // {
          //   title: 'Phishing & Scam Protection',
          //   href: '/solutions/phishing-scam-protection'
          // },
          // {
          //   title: 'Bot Protection',
          //   href: '/solutions/bot-protection'
          // },
          {
            title: 'Dark & Deep Web Monitoring',
            href: '/solutions/dark-deep-web-monitoring'
          },
          {
            title: 'Anti-Piracy',
            href: '/solutions/anti-piracy'
          },
          // {
          //   title: 'CTI Program',
          //   href: '/solutions/cti-program'
          // }
        ]
      },
      {
        title: 'By Role',
        subLinks: [
          {
            title: 'Threat Intelliegence Teams',
            href: '/solutions/threat-intelliegence-teams'
          },
          {
            title: 'CISO',
            href: '/solutions/ciso'
          },
          {
            title: 'Security Operations',
            href: '/solutions/security-operations'
          }
        ]
      },
      {
        title: 'By Industry',
        subLinks: [
          {
            title: 'Financial Services',
            href: '/solutions/financial-services'
          },
          {
            title: 'Technology',
            href: '/solutions/technology'
          },
          {
            title: 'Healthcare',
            href: '/solutions/healthcare'
          },
          {
            title: 'Government',
            href: '/solutions/government'
          },
          {
            title: 'Cyber Insurance',
            href: '/solutions/cyber-insurance'
          }
        ]
      },
    ]
  },

  {
    title: 'Products',
    href: '/products',
    subLinks: [
      {
        title: 'Threat Intelligence',
        href: '/products/threat-intelligence'
      },
      {
        title: 'Brand Protection',
        href: '/products/brand-protection'
      },
      {
        title: 'Dark Web Monitoring',
        href: '/products/dark-web-monitoring'
      },
      {
        title: 'Attack Surface Management',
        href: '/products/asm'
      },

    ]
  },
  {
    title: 'Partners',
    href: '/partners'
  },
  {
    title: 'Pricing',
    href: '/pricing'
  },
  {
    title: 'Blog',
    href: '/blog'
  },
]



const NavLink = ({ link: { href, title, subLinks } }: { link: NavLink }) => {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const activeHref = subLinks?.length ? '#' : href ? href : '#'
  const isActive = pathname == (href || activeHref)
  return (
    <>
      <li className={`  w-full flex items-center gap-3 flex-1  px-4 ${isActive ? 'bg-primary-15' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex-1">
          {activeHref === '#' ? (
            <div className={`w-full py-3 cursor-pointer ${isActive ? "" : "text-text-45 hover:text-text"} ${!href ? 'text-gradient  ' : ''}`} >
              {title}
            </div>
          ) : (

            <Link
              href={activeHref}
              target={href?.startsWith("http") ? "_blank" : "_self"}
              className={`w-full py-3    ${isActive ? "" : "text-text-45 hover:text-text"} ${!href ? 'text-gradient  ' : ''}`} >
              {title}
            </Link>
          )}
        </div>
        {subLinks?.length && (
          <div>
            <ArrowDown2 size={14} />
          </div>
        )}
      </li>
      {subLinks?.length && open && (
        <motion.ul
          variants={{
            open: {
              height: 'auto',
              opacity: 1,
            },
            closed: {
              height: 0,
              opacity: 0,
            },
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          initial="closed"
          animate="open"

          className="flex flex-col items-center list-none lg:flex-row lg:gap-5 w-full  ps-4  mt-2">
          {(href && href !== '#') && (
            <NavLink link={{ href, title }} />
          )}

          {subLinks.map((link, ix) => (

            <NavLink key={link.title + ix} link={link} />
          ))}
        </motion.ul>
      )}
    </>
  )
}



const NavMenu = () => {
  const pathname = usePathname()

  return (
    <ul className="flex flex-col items-center   list-none lg:flex-row lg:gap-5   ">
      {navLinks.map((link, ix) => (
        <NavLink key={link.title + ix} link={link} />
      ))}
    </ul>
  )
}

export default NavMenu