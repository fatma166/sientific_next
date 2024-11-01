"use client"
import { Skeleton } from "antd"
import React, { FC } from 'react'

interface Props {
  inputNumber?: number
}
const FormLoader: FC<Props> = ({ inputNumber = 1 }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {Array(inputNumber).fill('').map((_, ix) => (
          <div key={ix} className="flex flex-col gap-2">
            <Skeleton paragraph={false} active className="max-w-[150px]" />
            <Skeleton.Input active className="!w-full " />
          </div>
        ))}
      </div>

      <Skeleton.Button active size="large" className="mt-4" block />

    </div>
  )
}

export default FormLoader