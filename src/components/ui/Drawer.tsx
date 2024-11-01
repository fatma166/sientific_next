import React, { FC } from 'react'
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd'

export interface DrawerProps extends AntDrawerProps { }

export const Drawer: FC<DrawerProps> = ({ children, className, ...props }) => {
  return (
    <AntDrawer className={` ${className}`} {...props}>
      {children}
    </AntDrawer>
  )
}
