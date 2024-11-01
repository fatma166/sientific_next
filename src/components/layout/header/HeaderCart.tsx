import { ClientLink } from "@/components/shared"
import { ButtonGhost } from "@/components/ui"
import { useGetCartItemsQuery } from "@/services/api"
import { errorMessageLog } from "@/utils"
import { Badge, Skeleton } from "antd"
import { ShoppingCart } from "iconsax-react"
import React, { useEffect } from 'react'


const CartBtn = ({ isDrawer = false, isScrolled = false }) => {




  return (
    <ClientLink href="/cart" className={`  ${isDrawer ? 'w-full' : ''}`} >
      <button className="!px-2 bg-transparent">

        <ShoppingCart variant="Bulk" size={22} className={`${isScrolled ? 'text-white  ' : 'dark:text-white !text-text'}`} />
      </button>
    </ClientLink>
  )
}


const HeaderCart = ({ isDrawer = false, isScrolled = false }) => {



  const { data, isLoading, error, refetch } = useGetCartItemsQuery({})


  useEffect(() => {
    if (error) {
      errorMessageLog(error)
    }
  }, [error])



  if (isLoading) return <Skeleton.Button active shape="square" size="small"
  />


  return (
    <Badge count={data?.data?.items?.length || 0} showZero={false}
      styles={{
        indicator: {
          insetInlineEnd: 'unset',
        }
      }}

    >
      <CartBtn isDrawer={isDrawer} isScrolled={isScrolled} />
    </Badge>
  )
}

export default HeaderCart