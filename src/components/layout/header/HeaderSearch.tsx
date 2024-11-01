"use client"
import { RevealAnimation } from "@/components/shared"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"
import { useClientRouter } from "@/services/hooks"
import { Input } from "antd"
import { SearchNormal } from "iconsax-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useState } from 'react'

const HeaderSearch = ({ hide = false, isWhite = false, condensed = true }) => {
  const t = useTranslations();
  const router = useClientRouter()

  // const { data, isLoading } = useGetCategoriesQuery({})
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    if (!search) return
    router.push(`/library/categories?${SEARCH_PARAMS_NAMES.search}=${search}`)
  }


  if (hide) return null
  // if (isLoading) return <div className="flex items-center justify-center py-2">
  //   <Skeleton.Input active />
  //   <Skeleton.Button active />
  // </div>


  return (
    <RevealAnimation delay={0} duration={0.2} hide={hide}    >

      <div className={`flex items-center justify-center py-2 ${isWhite ? '' : ' bg-gradient'} `}>

        <div className="max-w-3xl">

          <Input
            size="small"
            className="lg:!min-w-96"
            placeholder={`${t('search')}..`}
            suffix={<SearchNormal variant="TwoTone" className=" opacity-60 cursor-pointer" size={16}
              onClick={() => handleSearch()}
            />}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            // addonBefore={<Select
            //   className="bg-bg-50"
            //   size="small"
            //   defaultValue="all"
            //   style={{ width: 150 }}
            //   // onChange={handleChange}
            //   options={[
            //     { value: 'all', label: t('categories') },
            //     { value: 'arts', label: t('arts') },
            //     { value: 'politics', label: t('politics') },
            //     { value: 'science', label: t('science') },
            //     { value: 'management', label: t('management') },
            //   ]}
            // />}

            onPressEnter={(e) => handleSearch()}

          />
        </div>
      </div>
    </RevealAnimation>

  )
}

export default HeaderSearch