"use client"
import { ImageProps, Image } from "antd"
import React, { useState } from 'react'
import placeholderImg from '@/assets/images/landing/placeholder.jpg'

const NextImage: React.FC<ImageProps> = ({ src, alt, className = '', ...props }) => {

  const [imgBg, setImgBg] = useState(src)
  return (
    <Image
      {...props}
      alt={alt || 'image'}
      src={imgBg}
      fallback={placeholderImg.src}
      preview={false}
      className={"[&_*]:max-w-full [&_*]:max-h-full " + className}
    />
  )
}

export default NextImage