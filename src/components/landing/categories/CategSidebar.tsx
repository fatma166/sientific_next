"use client"
import { SEARCH_PARAMS_NAMES } from "@/services/constants";
import { useLanguage, useSetSingleSearchParam } from "@/services/hooks";
import { Checkbox, Collapse, CollapseProps, Input } from "antd"
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useMemo, useState } from 'react'



const plainOptions = ['محاسبة',
  "تسويق",
  " إدارة أعمال"];
const Content = () => (
  <Checkbox.Group className="flex flex-col gap-2" options={plainOptions} />
)
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <h4 className="font-bold"> سياسة واقتصاد </h4>,
    children: <Content />,
  },
  {
    key: '2',
    label: <h4 className="font-bold"> اعلام </h4>,
    children: <Content />,
  },
  {
    key: '3',
    label: <h4 className="font-bold"> ادارة </h4>,
    children: <Content />,
  },
];


const CategSidebar = () => {

  const [searchParams, setSingleSearchParam, setMultipleSearchParam] = useSetSingleSearchParam()
  const { t } = useLanguage()

  const searchKey = useMemo(() => {
    if (!searchParams) return ''
    return searchParams.get(SEARCH_PARAMS_NAMES.search) || ''
  }, [searchParams])

  const [search, setSearch] = useState(searchKey)

  return (
    <div className="w-full border border-text-10 rounded-lg p-3 lg:p-4 bg-bg shadow-sm xl:sticky top-24">

      <div>
        <Input.Search placeholder={t('search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={() => {
            setMultipleSearchParam([{ key: SEARCH_PARAMS_NAMES.search, value: search }, { key: SEARCH_PARAMS_NAMES.page, value: '1' }])
          }}
        />
      </div>
      <div className="mt-4">
        <Collapse
          style={{
            background: 'transparent !important',
          }}
          defaultActiveKey={['1']}
          ghost
          items={items}
          expandIcon={({ isActive, collapsible }) => <>
            <ArrowLeft2 size={18} className={` ${isActive ? '-rotate-90' : 'rotate-0'} ltr:hidden rtl:inline-block`} />
            <ArrowRight2 size={18} className={` ${isActive ? 'rotate-90' : 'rotate-0'} rtl:hidden ltr:inline-block`} />
          </>}
          expandIconPosition="end"
        />
      </div>

    </div>
  )
}

export default CategSidebar