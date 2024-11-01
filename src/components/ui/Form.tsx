import { Form as AntForm } from "antd"
import { FormProps as AntFormProps } from "antd/lib/form/Form"
import React, { FC, ReactNode } from 'react'


interface FormProps extends AntFormProps {

}

export const Form: FC<FormProps> = ({ children, ...props }) => {
    return <AntForm {...props}>
        <div>{children as ReactNode}</div>
        </AntForm>
} 