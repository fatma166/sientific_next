
'use client'

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
interface Props {
  children: ReactNode
  width?: 'fit-content' | '100%'
  className?: string
  forceStart?: boolean
  hide?: boolean
  duration?: number
  delay?: number
  initial?: "hidden" | "visible",
  direction?: 'up' | 'down'
}

const variants: Variants = {
  hidden: { opacity: 0, y: 75, },
  visible: { opacity: 1, y: 0, }
}

const RevealAnimation: FC<Props> = ({ children, width = '100%', className = '', forceStart = false, hide = false,
  duration = 0.5,
  delay = 0.25,
  initial = "hidden",
  direction = "up"

}) => {


  const defaultMargin = direction === 'up' ? '0px 0px -100px 0px' : '0px 0px 100px 0px'
  const mainControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: defaultMargin })


  useEffect(() => {

    if (isInView || forceStart) {
      if (hide) {
        mainControls.start('hidden')
      } else {
        mainControls.start('visible')
      }
    }
  }, [isInView, forceStart, hide])



  return (
    <div
      ref={ref}
      className={"relative overflow-hidden " + className}
      style={{ width }}
    >
      <motion.div
        variants={variants}
        initial={initial}
        animate={mainControls}
        transition={{
          duration,
          ease: 'easeOut',
          type: 'tween',
          delay
        }}

      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealAnimation