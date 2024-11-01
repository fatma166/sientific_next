import { Form as AntForm, FormItemProps as AntFormItemProps } from "antd"

import React, { FC, ReactNode } from 'react'


interface FormItemProps extends AntFormItemProps {

}

export const FormItem: FC<FormItemProps> = ({ children, ...props }) => {
    return <AntForm.Item {...props}>
        <div>{children as ReactNode}</div>
    </AntForm.Item>
} 