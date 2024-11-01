import { InputProps as AntInputProps, Input as AntInput } from "antd"
import React, { FC } from 'react'

export interface InputProps extends AntInputProps { }

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <AntInput className={`  ${className}`} {...props} />
  )
}

export const InputTextArea = AntInput.TextArea
