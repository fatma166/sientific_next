import React, { FC } from 'react'
import { Segmented as AntSegmented, SegmentedProps as AntSegmentedProps } from 'antd'

export interface SegmentedProps extends AntSegmentedProps { }

export const Segmented: FC<SegmentedProps> = ({ className, ...props }) => {
  return (
    <AntSegmented className={` [&>.ant-segmented-group]:gap-2 [&_.ant-segmented-item-label]:!px-5 ${className}`} {...props} />
  )
}
