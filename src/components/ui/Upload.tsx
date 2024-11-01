import { Upload as AntUpload } from "antd";
import { UploadProps as AntUploadProps } from "antd";
import React, { FC } from 'react'

interface UploadProps extends AntUploadProps {

}

export const Upload: FC<UploadProps> = ({ children, ...props }) => {
    return <AntUpload {...props}>
        <div>{children}</div>
    </AntUpload>
}