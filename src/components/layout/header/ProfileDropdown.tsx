import { ClientLink } from "@/components/shared"
import { ButtonGhost } from "@/components/ui"
import { useGetProfileQuery } from "@/services/api"
import { useClientPathname, useLanguage } from "@/services/hooks"
import { Dropdown, MenuProps, Skeleton } from "antd"
import { Book, Logout, Profile, UserSquare } from "iconsax-react"
import React, { useMemo } from 'react'

const ProfileDropdown = ({ isScrolled, block }: { isScrolled?: boolean, block?: boolean }) => {

  const { pathname } = useClientPathname()
  const { t } = useLanguage()


  const { data, isLoading } = useGetProfileQuery({})

  const items: MenuProps['items'] = useMemo(() => [
    {
      key: '1',
      label: (<ClientLink href="/profile" className="flex items-center gap-2" >
        <UserSquare variant="Bulk" size={20} />
        {t('profile')}
      </ClientLink>),
    },
    {
      key: '2',
      label: (<ClientLink href="/bookshelf" className="flex items-center gap-2" >
        <Book variant="Bulk" size={20} />
        {t('bookshelf')}
      </ClientLink>),
    },
    {
      key: '3',
      label: (<ClientLink href={`/logout?pathname=${pathname}`} className="flex items-center gap-2 !text-danger" >
        <Logout variant="Bulk" size={20} />
        {t('logout')}
      </ClientLink>),
    },
  ], [t, pathname])

  if (isLoading) return <Skeleton.Button active shape="square" />

  if (!data?.data) return <ClientLink href="/login">
    <button className="!px-2 bg-transparent">
      <Profile variant="Bulk" size={22} className={`${isScrolled ? 'text-white  ' : 'dark:text-white !text-text'}`} />
    </button>
  </ClientLink>

  return (
    <Dropdown menu={{ items }}  >
      <a onClick={(e) => e.preventDefault()}>
        <button className="!px-2 bg-transparent">
          <Profile variant="Bulk" size={22} className={`${isScrolled ? 'text-white  ' : 'dark:text-white !text-text'}`} />
        </button>
      </a>
    </Dropdown>
  )
}

export default ProfileDropdown