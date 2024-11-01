import React, { FC } from 'react'
import { Collapse as AntCollapse, CollapseProps as AntCollapseProps } from 'antd'

export interface CollapseProps extends AntCollapseProps { }

export const Collapse: FC<CollapseProps> = ({ children, className, ...props }) => {
  return (
    <AntCollapse className={` ${className}`} {...props}>
      {children}
    </AntCollapse>
  )
}
