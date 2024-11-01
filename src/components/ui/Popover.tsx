import React, { FC } from 'react'
import { Popover as AntPopover, PopoverProps as AntPopoverProps } from 'antd'

export interface PopoverProps extends AntPopoverProps { }

export const Popover: FC<PopoverProps> = ({ className, children, ...props }) => {
  return (
    <AntPopover className={` ${className}`} {...props} >
      {children}
    </AntPopover>
  )
}

