"use client"
import { ClientLink, NextImage, RevealAnimation } from "@/components/shared"
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Button, InputNumber, message, Popconfirm, Spin, Table } from "antd"
import { Add, Minus, Trash } from "iconsax-react"
import { ButtonGhost, ButtonGradient } from "@/components/ui"
import { completeCartProcess, deleteCart, deleteCartItem, updateCartItem, useGetCartItemsQuery } from "@/services/api"
import { useLanguage } from "@/services/hooks"
import { errorMessageLog } from "@/utils"
import debounce from 'lodash.debounce';


interface ITableData {
  id: number;
  key: number;
  book_id: number;
  img: string;
  product: string;
  price: number;
  count: number;
  total: number;
}


const MainCartPage = () => {

  const { t } = useLanguage()
  const { data, isLoading, error, refetch } = useGetCartItemsQuery({})
  const [delId, setDelId] = useState<number | null>(null)
  const [cartClearing, setCartClearing] = useState(false)
  const [completeLoading, setCompleteLoading] = useState(false)


  const tableData: ITableData[] = useMemo(() => {

    if (!data?.data?.items?.length) return []

    return data?.data?.items?.map((item) => ({
      id: item.id,
      key: item.id,
      book_id: item.book_id,
      img: item?.image,
      product: item?.title || 'n/a',
      price: item?.price,
      count: item?.quantity,
      total: item?.total_price,
    }
    ))
  }, [data?.data])


  const handleDelete = async (id: number) => {
    setDelId(id)
    try {
      await deleteCartItem({ id })
      await refetch()
      message.success(t('deleted_success'))
    } catch (error) {
      errorMessageLog(error)
    }
    setDelId(null)
  }


  const handleClearCart = async () => {
    setCartClearing(true)
    try {
      await deleteCart()
      await refetch()
      message.success(t('deleted_success'))
    } catch (error) {
      errorMessageLog(error)
    }
    setCartClearing(false)
  }

  const handleCompletePurchase = async () => {
    setCompleteLoading(true)
    try {
      await completeCartProcess()
      await refetch()
      // TODO: Invalidate orders api
      message.success(t('purchase_success'))
    } catch (error) {
      errorMessageLog(error)

    }
    setCompleteLoading(false)
  }


  return (
    <section className="py-12 lg:py-14">

      <RevealAnimation>
        <div className="container">

          <div className="text-lg flex justify-center ">
            <span className="  py-2 px-6 bg-primary-10 text-primary rounded-full font-bold inline-block  ">
              {t(`cart`)}
            </span>
          </div>

          <div className="mt-12 lg:mt-16">
            <Table
              bordered
              loading={isLoading || cartClearing}
              pagination={false}
              dataSource={tableData}
              className="!text-center [&_*]:!text-center"
              columns={[
                {
                  title: t('the_image'),
                  dataIndex: 'img',
                  key: 'img',
                  render: (src, record) => <ClientLink href={"/library/" + record.book_id}>
                    <NextImage src={src} alt="book" className=" rounded-lg  !object-contain !h-28 !w-28  " />
                  </ClientLink>
                },
                {
                  title: t('the_product'),
                  dataIndex: 'product',
                  key: 'product',
                },
                {
                  title: t('the_price'),
                  dataIndex: 'price',
                  key: 'price',
                },
                {
                  title: t('the_quantity'),
                  dataIndex: 'count',
                  key: 'count',
                  render: (count, record) => <CartQuantity data={record} />
                },
                {
                  title: t('the_total'),
                  dataIndex: 'total',
                  key: 'total',
                },
                {
                  title: t('actions'),
                  render: (src, record) => <div>
                    <Button size="small" danger type="text"
                      onClick={() => handleDelete(record.id)}
                      loading={delId === record.id}

                    >
                      <Trash variant="Bulk" size={20} className="text-danger flex-shrink-0" />
                    </Button>
                  </div>
                },
              ]}
            />
          </div>

          <div className="py-8 lg:py-10 flex flex-col items-center justify-center md:justify-between md:flex-row border-b border-text-10">
            <ClientLink href="/library">
              <Button type="primary" size="large" className="!px-6">
                {t('continue_shopping')}
              </Button>
            </ClientLink>

            <Popconfirm
              title={t('clear_cart')}
              description={t('confirm_clear_cart')}
              okText={t('clear_cart')}
              cancelText={t('cancel')}
              onConfirm={() => handleClearCart()}
              okButtonProps={{ loading: cartClearing, danger: true }}
            >
              <Button className="!px-6" type="dashed" size="large"
                loading={cartClearing}
                disabled={!tableData?.length}
              >
                {t('clear_cart')}
              </Button>
            </Popconfirm>
          </div>

          <div className="my-8 lg:my-10">
            <div className="max-w-md border border-text-10 rounded-lg p-4 lg:p-5">
              <div className="flex items-center gap-2 justify-between">
                <h3 className="font-bold">
                  {t('total_purchase')}
                </h3>
                <p>
                  {data?.data?.main_request?.final_price} {t('SAR')}
                </p>
              </div>

              <div className="pt-4 lg:pt-5 border-t border-text-10 mt-4 lg:mt-5 flex items-center justify-center">
                {/* <ClientLink href={"/checkout"}>

                </ClientLink> */}
                <ButtonGradient
                  size="large"
                  className="!px-6 md:!px-10 !text-lg font-bold"

                  disabled={!tableData?.length}
                  onClick={() => handleCompletePurchase()}
                  loading={completeLoading}
                >
                  {t('complete_purchase')}
                </ButtonGradient>
              </div>

            </div>
          </div>

        </div>
      </RevealAnimation>

    </section>
  )
}


const CartQuantity = ({ data }: { data: ITableData }) => {

  const { t } = useLanguage()

  const { refetch } = useGetCartItemsQuery({})
  const [count, setCount] = useState(data.count)
  const [isLoading, setIsLoading] = useState(false)




  const handleChangeQuantity = (val: 1 | -1, q: number) => {
    let total = 1
    if (val === 1) {
      total = q + 1

    } else if (val === -1) {
      total = q - 1
    }
    setCount(total)
    handleUpdateQuantity(total)
  }


  const handleUpdateQuantity = useCallback(debounce(async (total) => {

    setIsLoading(true)

    try {
      await updateCartItem({ book_id: data.book_id, quantity: total })
      await refetch()
      message.success(t('updated_success'))
    } catch (error) {
      errorMessageLog(error)
    }

    setIsLoading(false)

  }, 500), [])


  return (
    <Spin spinning={isLoading}>
      <div className="text-primary flex items-center justify-center">
        <div className="inline-block" dir="ltr">
          <InputNumber
            className="[&_input]:!text-center [&_.ant-input-number-handler-wrap]:!hidden max-w-48 [&_.ant-input-number-group-addon]:!p-0 [&_.ant-input-number-group-addon]:overflow-hidden"
            dir='ltr'
            value={count}
            min={1}
            upHandler={<></>}
            downHandler={<></>}
            addonAfter={<div className="w-full h-full px-3 py-2 hover:opacity-50 cursor-pointer select-none"
              onClick={(e) => {
                e.preventDefault()
                handleChangeQuantity(1, count)
              }}
            > <Add /> </div>}
            addonBefore={<div className={`w-full h-full px-3 py-2 hover:opacity-50 select-none  ${count <= 1 ? 'opacity-50' : 'cursor-pointer'}`}
              onClick={(e) => {
                e.preventDefault()
                if (count <= 1) return
                handleChangeQuantity(-1, count)
              }}
            > <Minus /> </div>}

          />
        </div>



      </div>
    </Spin>
  )
}

export default MainCartPage