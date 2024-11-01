import { defaultLocale } from "@/i18n"
import { useLocale } from "next-intl"
import Link, { LinkProps } from "next/link"
import React, { FC, ReactNode, useMemo } from 'react'


interface ClientLinkProps extends LinkProps {
  children?: ReactNode
  className?: string
  target?: string
  style?: React.CSSProperties
}
const ClientLink: FC<ClientLinkProps> = ({ href, children, style = {}, ...props }) => {

  const locale = useLocale()

  const baseUrl = useMemo(() => {


    let h = href as string
    if (locale !== defaultLocale) {
      h = '/' + locale + h
    }


    return h
  }, [href, locale])

  return (
    <Link href={baseUrl} style={style} {...props}>
      {children}
    </Link>
  )
}

export default ClientLink