
import { ButtonProps } from "antd/es/button/button"
import React, { FC } from 'react'
import { Button } from "."

export const ButtonGhost: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button className={`!bg-primary !text-white !border-transparent hover:!border-primary-45      ${className}`}  {...props}>
      {children}
    </Button>
  )
}
