"use client"

import { Button as AntButton } from "antd"
import { ButtonProps as AntButtonProps } from "antd/es/button/button"
import { stagger, useAnimate } from "framer-motion"
import React, { FC, useEffect, useMemo, useState } from 'react'

export interface ButtonProps extends AntButtonProps {
  isTextGradient?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onMouseEnter, isTextGradient, ...props }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [scope, animate] = useAnimate()

  const childrenArr = useMemo(() => children ? React.Children.toArray(children) : [], [children])

  const handleAnimate = async (y: number, r: number) => {
    if (isHovering) return
    setIsHovering(true)
    await animate([
      [".letters-down", { y: 0, rotate: r, ease: 'circInOut' }, { duration: 0.6 }],
      [".letters", { y: -y, rotate: r, ease: 'circInOut' }, { duration: 0.5, at: "<" }],
      [".btn-more", { x: 3, scale: 1.1, ease: 'circInOut' }, { duration: 0.5, at: "<" }],
  
      [".letters", { y: 0, rotate: 0, ease: 'circInOut' }, { duration: 0.000001, at: 0.6 }],
      [".letters-down", { y: y, rotate: 0, ease: 'circInOut' }, { duration: 0.000001, at: "<" }],
      [".btn-more", { x: 0, scale: 1, ease: 'circInOut' }, { duration: 0.3, at: "<" }],
    ])
    setIsHovering(false)
  }

  const handleBtnHover = () => {
    handleAnimate(32, 3)
  }

  useEffect(() => {
    handleAnimate(32, 0)
  }, [])


  return (
    <AntButton  {...props} ref={scope}
      onMouseEnter={e => {
        onMouseEnter && onMouseEnter(e)
        handleBtnHover()
      }}

    >
      <div className={`overflow-hidden btn-div !flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 relative   ${isTextGradient && !isHovering ? 'text-gradient text-base' : ''} `}

      >
        {childrenArr?.map((child, ix) => {
          if (typeof child === 'string') {
            return <span key={ix} className="inline-block  letters-block   ">
              <span className="sr-only"> {child} </span>
              <span className="inline-block letters  " aria-hidden style={{ transform: 'none' }}> {child} </span>
              <span className="inline-block letters-down absolute left-0    " aria-hidden
                style={{ transform: 'translateY(40px) translateZ(0px)' }}
              > {child} </span>
            </span>
          }
          else if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...child.props, key: ix, className: `${child.props.className} btn-more` })
          } else {
            return child
          }
        })}
      </div>
      {/* <span className="absolute bg-red-500 w-40 h-20"></span> */}
    </AntButton>
  )
}

