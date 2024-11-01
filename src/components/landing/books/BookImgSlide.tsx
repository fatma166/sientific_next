
"use client"
import { SliderContainer, SliderOptions } from "@/libs/slider"
import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';

import img1 from '@/assets/images/landing/book-1.jpeg'
import img2 from '@/assets/images/landing/book-2.jpeg'
import img3 from '@/assets/images/landing/book-3.jpeg'
import img4 from '@/assets/images/landing/book-4.jpeg'
import img5 from '@/assets/images/landing/book-5.jpeg'

import { NextImage } from "@/components/shared";

// const images = [img1, img2, img3, img4, img5]

const mainSliderOptions: SliderOptions = {
  slidesPerView: 1,
};

const subSliderOptions: SliderOptions = {
  slidesPerView: 4,
  spaceBetween: 10,
};


const BookImgSlide = ({ images, productTitle = 'product images' }: { images: string[], productTitle?: string }) => {

  const [activeSlide, setActiveSlide] = useState(0);



  if (!images.length) return <NextImage />

  return (
    <div   >
      {/* upper slider  */}
      <div>
        <SliderContainer
          sliderOptions={mainSliderOptions}
          navigationOptions={{
            navTypes: ['arrows'],
          }}
          activeSlideIdex={activeSlide}
          setActiveSlideIdex={setActiveSlide}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-96 xl:h-96 rounded-lg max-w-screen-sm px-1 [&>div]:!w-full [&>div]:!h-full py-5 imageOne"
              dir="ltr"
            >
              {/* <NextImage className="w-full aspect-[1/1.5] object-contain" src="https://ahmedyousry74.github.io/st-website/assets/images/book-1.jpeg" alt="img alt" /> */}


              <NextImage
                alt={productTitle}
                src="https://ahmedyousry74.github.io/st-website/assets/images/book-1.jpeg"
                className={`!w-full !h-[500px] !object-contain rounded-lg border border-solid border-border shadow transition-all duration-300 ${index === activeSlide ? 'border-primary' : 'border-border'
                  } `}
              />

              {/* <ReactImageMagnify
                {...{
                  imageClassName:
                    'w-full aspect-square object-contain rounded-lg border border-solid border-border shadow',
                  smallImage: {
                    alt: 'product image',
                    isFluidWidth: true,
                    src: image.src,
                    // onError: handleImageError,
                  },
                  largeImage: {
                    src: image.src,
                    width: 1200,
                    height: 1200,
                    // onError: handleImageError,
                  },
                  lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },

                  // shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: 'over',
                  
                }} 
              />
              */}
            </div>
          ))}
        </SliderContainer>
      </div>
      {/* lower slider  */}
      <div className="mt-4 ">
        <SliderContainer
          sliderOptions={subSliderOptions}
          navigationOptions={{
            navTypes: ['outside-arrows'],
          }}
          activeSlideIdex={activeSlide}

        >
          {images?.map((image, index) => (
            <div
              className={`  !w-16 !h-20   `}
              onClick={() => setActiveSlide(index)}
              key={index}
            >
              <NextImage
                alt={productTitle}
                src={image}

                className={`!w-full !h-full  object-cover rounded-lg border-2 border-solid cursor-pointer shadow ${index === activeSlide ? 'border-primary' : 'border-border'
                  } `}
              />
            </div>
          ))}
        </SliderContainer>
      </div>
    </div>
  )
}

export default BookImgSlide