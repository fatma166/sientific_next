"use client"
import { Form, Input } from "antd"
import React, { useState } from 'react'
import InputMask from "react-input-mask";

const PayForm = () => {


  const [date, setDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardNum, setCardNum] = useState("")

  return (
    <div>

      <Form
        layout="vertical"
        className="relative "

      >

        <Form.Item
          label="اسم صاحب الكارت"
          className="!mb-4 font-semibold"
        // {...handleErrorsMsg('name')}
        >
          <Input
            className="!placeholder-text-60  !rounded-lg !h-[55px] "
            size="middle"
            placeholder="اسم صاحب الكارت"
            name="name"
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          />
        </Form.Item>
        <div className="flex flex-wrap items-center gap-4">

          <Form.Item
            label="رقم الكارت"
            className="!mb-4 font-semibold flex-1"
          // {...handleErrorsMsg('name')}
          >

            <InputMask
              dir="ltr"
              mask="9999 9999 9999 9999"
              // maskPlaceholder="#"
              placeholder="رقم الكارت"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
              className="py-3 px-3 bg-input rounded-lg text-base text-text-85 border border-text-10 text-center w-full " />

          </Form.Item>

          <Form.Item
            label="تاريخ الانتهاء"
            className="!mb-4 font-semibold"
          // {...handleErrorsMsg('name')}
          >

            <InputMask
              mask="99/99"
              maskPlaceholder="MM/YY"
              placeholder="MM/YY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="py-3 px-3 bg-input rounded-lg text-base text-text-85 border border-text-10 max-w-24 " />

          </Form.Item>

          <Form.Item
            label="CVV"
            className="!mb-4 font-semibold"
          // {...handleErrorsMsg('name')}
          >

            <InputMask
              mask="999"
              // maskPlaceholder="MM/YY"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="py-3 px-3 bg-input rounded-lg text-base text-text-85 border border-text-10 max-w-20 " />

          </Form.Item>

        </div>

      </Form>
    </div>
  )
}

export default PayForm