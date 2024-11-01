"use client"
import { SliderContainer } from "@/libs/slider"
import { SCREEN_SIZES } from "@/services/theme"
import { Profile } from "iconsax-react"
import React, { ReactNode } from 'react'
import { ChildrenIcon, EngIcon, FoodIcon, HealthyIcon, PhotograpyIcon, RomanceIcon } from "./categIcons"
import { ClientLink, NextImage, RevealAnimation } from "@/components/shared"
import { HomeCategory } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"


const SingleCard = ({ icon, title, className = '', color = '#fff', slug }: { icon: string, title: string, className?: string, color?: string, slug: string }) => {

  return (<ClientLink href={`/library/categories?${SEARCH_PARAMS_NAMES.category_slug}=${slug}`} className={`flex flex-col gap-2  rounded-lg ${className}`}

    style={color ? { backgroundColor: color } : {}}
  >
    <div className="category__img h-[150px]">
      <div className="w-full h-full rounded-lg">
        {/* {icon} */}
        {!!icon && <NextImage src={icon} alt={title} />}
      </div>
      <div className="category__title absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50">
        <h3 className="text-base font-bold"> {title} </h3>
      </div>
    </div>


  </ClientLink>)
}

const CategoriesSlider = ({ data }: { data: HomeCategory[] }) => {

  const { t } = useLanguage()

  return (
    <section className="py-12">
      <RevealAnimation>
        <div className="container">
          <div className="text-base text-center ">
            <span className="  py-2 px-6 bg-primary-10 text-primary rounded-full font-bold inline-block  ">
              {t('selected_subjects')}

            </span>
          </div>

          <div className="mt-6 lg:mt-10">

            <SliderContainer
              sliderOptions={{
                slidesPerView: 2,
                spaceBetween: 20,
                // centeredSlides: true,
                // centerInsufficientSlides: true,
                loop: true,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: true,
                },
                breakpoints: {
                  [SCREEN_SIZES.md]: {
                    slidesPerView: 3
                  },
                  [SCREEN_SIZES.lg]: {
                    slidesPerView: 4
                  },
                  [SCREEN_SIZES.xl]: {
                    slidesPerView: 5
                  },
                }
              }}

            // navigationOptions={{
            //   navTypes: ["dots"],

            // }}
            >


              {data?.map(category => <SingleCard
                key={category.id}
                title={category?.name || ''}
                icon={category?.image}
                color={category.bg_color}
                slug={category.id.toString()}
              />)}


              {/* <SingleCard
                title="التصوير"
                icon={<PhotograpyIcon />}
                key={2}
                className="bg-violet-500/10"
              /> */}

              {/*

              <SingleCard
                title=" الطعام و المشروبات"
                icon={<FoodIcon />}
                key={3}
                className="bg-orange-500/10"
              />

              <SingleCard
                title="الصحة"
                icon={<HealthyIcon />}
                key={4}
                className="bg-cyan-500/10"
              />

              <SingleCard
                title="رومانسية"
                icon={<RomanceIcon />}
                key={5}
                className="bg-red-500/10"
              />

              <SingleCard
                title="الهندسة"
                icon={<EngIcon />}
                key={6}
                className="bg-emerald-500/10"
              />

              <SingleCard
                title="الأطفال"
                icon={<ChildrenIcon />}
                key={6}
                className="bg-cyan-500/10"
              /> */}

            </SliderContainer>

          </div>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default CategoriesSlider