"use client"
import React, { FC, ReactNode } from 'react'
import heroArtwork from '@/assets/images/sections/home/hero-artwork.svg'
// import video from '@/assets/images/video.mp4'
import Image from "next/image"
import { motion, Variants } from 'framer-motion'
import { NextImage } from "@/components/shared"



const variants: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, }
}

interface Props {
  children?: ReactNode
  title: string | ReactNode
  subTitle: string
  preTitle?: string
  img?: any
  imgNode?: ReactNode
  imgBg?: any
  isReverse?: boolean
  titleClassName?: string
  secondTitle?: string
}

const SingleHero: FC<Props> = ({ img, subTitle, title, children, preTitle, imgBg, isReverse, titleClassName = '', imgNode, secondTitle }) => {



  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        type: 'tween',
        delay: 0.3
      }}

      className="text-center md:text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center  "

    >

      <div


        className={`lg:col-span-7 relative z-10 header__hero__desc  ${isReverse ? 'md:order-last' : ' '}`}>

        <motion.div
          initial={{
            opacity: 0, scale: 1, y: -300
          }}
          animate={{
            opacity: 1, scale: 1, y: 0
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.4
          }}
        >

          {!!preTitle && (
            <div className="text-lg ">
              <span className="  py-2 px-6 bg-white text-primary rounded-full font-bold inline-block ">
                {preTitle}
              </span>
            </div>
          )}


          <h1 className={`font-bold text-2xl md:text-5xl text-primary  lg:text-5xl !leading-[1.4] ${titleClassName}`}>
            {title}
          </h1>
          {!!secondTitle && (
            <h3 className="text-secondary font-bold text-lg md:text-2xl  lg:text-3xl !leading-[1.4]">
              {secondTitle}
            </h3>
          )}
        </motion.div>
        {!!subTitle && (
          <div className="my-5 lg:my-6 text-xl text-text text-justify lg:!w-[640px] w-full"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        )}

        {!!children && (
          <div>
            {children}
          </div>
        )}
      </div>

      <motion.div
        initial={{
          opacity: 0, scale: 3, x: 100
        }}
        animate={{
          opacity: 1, scale: 1, x: 0
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          delay: 0.4
        }}
        className="lg:col-span-5 hidden md:block relative  ">
        <div className="w-full flex items-center justify-center  ">
          {!!img && (
            <NextImage src={img} alt='guard art image' className="relative rtl:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[80vh]" />
          )}
          {!!imgNode && imgNode}
        </div>
        {/* {!!imgBg && (
          <Image
            src={imgBg}
            alt='hero Artwork '
            className={`absolute -top-0 ${isReverse ? '-start-10' : 'start-10'}  w-[120%] object-contain`}
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
        )} */}
        {/* <Image src={heroArtwork} alt='hero Artwork ' className="absolute -top-40 -start-32  w-[120%] object-contain opacity-20  " /> */}

      </motion.div>
    </motion.div>
  )
}

export default SingleHero