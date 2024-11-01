"use client"
import React from 'react'

import img1 from '@/assets/images/landing/1.jpg'
import img2 from '@/assets/images/landing/2.jpg'
import { Table } from "antd"


const data = [{
  id: 1,
  img: img1.src,
  product: "كتاب سياسة و اقتصاد",
  price: '150 ر.س',
  count: 4,
  total: '600 ر.س',
  status: "تم التوصيل",
}, {
  id: 2,
  img: img2.src,
  product: "كتاب سياسة و اقتصاد",
  price: '160 ر.س',
  count: 10,
  total: '1600 ر.س',
  status: "تم التوصيل",
}]

export default function MainProfileReviews() {
  return (
    <div>
      <Table
        bordered
        pagination={false}
        dataSource={data}
        columns={[
          {
            title: 'الصورة',
            dataIndex: 'img',
            key: 'img',
            render: (src) => <img src={src} alt="book" className=" rounded-full  object-contain h-28  " />
          },
          {
            title: 'المنتج',
            dataIndex: 'product',
            key: 'product',
          },
          {
            title: 'السعر',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'الكمية',
            dataIndex: 'count',
            key: 'count',
          },
          {
            title: 'الأجمالي',
            dataIndex: 'total',
            key: 'total',
          },
          {
            title: 'الحالة',
            dataIndex: 'status',
            key: 'status',
          },
        ]}
      />
    </div>
  )
}
