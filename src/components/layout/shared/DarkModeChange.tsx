"use client"
import { ButtonGhost } from "@/components/ui"
import { Dropdown, MenuProps } from "antd"
import { Moon, Sun1, Setting2 } from "iconsax-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import React, { useMemo } from 'react'

const DarkModeChange = ({ isScrolled = false }) => {

  const { setTheme, theme, themes, resolvedTheme, forcedTheme, systemTheme } = useTheme()
  const t = useTranslations();


  const items: MenuProps['items'] = useMemo(() => [
    {
      key: 'light',
      label: (<div >  {t('light')} </div>),
      onClick: () => setTheme("light"),
      icon: <Sun1 variant="Bulk" size={16} />

    },
    {
      key: 'dark',
      label: (<div >  {t('dark')} </div>),
      onClick: () => setTheme("dark"),
      icon: <Moon variant="Bulk" size={16} />,
    },
    {
      key: 'system',
      label: (<div >  {t('system')} </div>),
      onClick: () => setTheme("system"),
      icon: <Setting2 variant="Bulk" size={16} />
    },

  ], [setTheme, theme])


  return (
    <Dropdown menu={{ items, activeKey: theme }}  >
      <a onClick={(e) => e.preventDefault()}>
        <button className="!px-2 bg-transparent">
          <Moon variant="Bulk" size={22} className={`${isScrolled ? 'text-white ' : 'dark:text-white !text-text'}`} />
        </button>
      </a>
    </Dropdown>
  )
}

export default DarkModeChange