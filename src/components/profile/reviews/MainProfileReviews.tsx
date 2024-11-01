"use client"
import React, { useMemo } from 'react'
import img1 from '@/assets/images/landing/1.jpg'
import img2 from '@/assets/images/landing/2.jpg'
import { Rate, Table } from "antd"
import { useGetBookRatingQuery } from "@/services/api/books"
import { ErrorMessage } from "@/components/shared"


const sdata = [{
  id: 1,
  img: img1.src,
  product: "كتاب سياسة و اقتصاد",
  date: '27-11-2020',
  rate: 4.5,
  review: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي'
}, {
  id: 2,
  img: img2.src,
  product: "كتاب 2",
  date: '27-11-2020',
  rate: 4,
  review: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة أو الخط دون الاعتماد على محتوى معنوي'
}]

export default function MainProfileOrders() {


  const { data, error, isLoading, refetch } = useGetBookRatingQuery({})


  const tableData = useMemo(() => {
    if (!data?.data?.data) return []

    return data.data?.data
  }, [data])

  if (error) return <ErrorMessage error={error} refetch={refetch} />


  return (
    <div>
      <Table
        bordered
        pagination={false}
        dataSource={tableData}
        loading={isLoading}
        columns={[
          {
            title: 'الصورة',
            dataIndex: 'image',
            key: 'image',
            render: (src) => <img src={src} alt="book" className="  object-contain h-28 w-28  " />
          },
          {
            title: 'المنتج',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'التاريخ',
            dataIndex: 'create_at',
            key: 'create_at',
          },
          {
            title: 'التعليق',
            dataIndex: 'review',
            key: 'review',
            render: (text, record) => <div>
              <p className=" mb-2">
                {text}
              </p>
              <div className="flex items-center gap-2">
                <Rate
                  allowHalf
                  value={record?.rating}
                  className="text-base !text-primary  "
                  disabled
                />
                ({record?.rating})
              </div>
            </div>
          },
        ]}
      />
    </div>
  )
}
