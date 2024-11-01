import Link from "next/link"
import React, { FC, ReactNode } from 'react'


interface Props {
  title?: string
  subTitle?: string
  links: {
    text: string | ReactNode,
    href: string
  }[]
  className?: string
}
const FooterLinks: FC<Props> = ({
  title, subTitle, links, className = ''
}) => {



  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-bold text-[#fff] mb-4"> {title}  </h3>
      )}
      {subTitle && (
        <h4 className="mb-2 font-medium"> {subTitle} </h4>
      )}
      <ul className="flex flex-col gap-2 lg:gap-3">
        {links.map((link, ix) => (
          <li key={ix + link.href} className="font-medium  text-text-85 text-[#fff]">
            <Link href={link.href} className="text-[#fff]" target={link.href.startsWith("http") ? "_blank" : "_self"} >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks