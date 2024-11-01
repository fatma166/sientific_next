import React, { FC } from 'react'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

export interface ModalProps extends AntModalProps { }

export const Modal: FC<ModalProps> = ({ children, className, ...props }) => {
  return (
    <AntModal className={` ${className}`} {...props}>
      {children}
    </AntModal>
  )
}
