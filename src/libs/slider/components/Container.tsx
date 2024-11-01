'use client'
import './swiper.css'

import type {
  FC,
  ReactNode
} from 'react';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

export interface SwiperClientType extends SwiperType { }

import SliderNavBtnsTitle from './NavBtnsTitle';
import SliderDots from './Dots';
import SliderNumsArrows from './NumsArrows';
import SliderDownArrows from './DownArrows';
import SliderInsideArrows from './InsideArrows';
import type { SliderNavigationOptions, SliderOptions } from '../types';
import {
  getSlidesActiveIndexes,
  handleGoNext,
  handleGoPrev,
  handleGoTo,
  isNavOptionsIncludes,
} from '../utils';

import VerticalArrows from "./VerticalArrows";
import { useWindowSize } from "@/services/hooks";

interface SliderContainerProps {
  children: ReactNode;
  sliderOptions?: SliderOptions;
  navigationOptions?: SliderNavigationOptions;
  activeSlideIdex?: number; // to update active slide from outside
  sliderClasses?: string;
  slideClasses?: string;
  swiperClasses?: string;
  setActiveSlideIdex?: (index: number) => void;
  setSwiperClient?: (swiper: SwiperType) => void
}

const SliderContainer: FC<SliderContainerProps> = ({
  children,
  sliderOptions = {},
  navigationOptions = {},
  activeSlideIdex = 0,
  sliderClasses = '',
  slideClasses = '',
  swiperClasses = '',
  setActiveSlideIdex,
  setSwiperClient
}) => {
  // swiperData will updated on every slide change | but swiper is a ref
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [swiperData, setSwiperData] = useState<SwiperType | null>(null);

  const defaultSliderOptions: SliderOptions = useMemo(() => {
    return {
      spaceBetween: 30,
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      ...sliderOptions,
    };
  }, [sliderOptions]);


  const dir = 'ltr'
  const { width } = useWindowSize();
  // uniqueId is used to force re-render the slider when the direction or the width of the window changes
  const uniqueId = `${dir}-${width}}`;

  const goNext = useCallback(() => {
    handleGoNext(swiper);
  }, [swiper]);

  const goPrev = useCallback(() => {
    handleGoPrev(swiper);
  }, [swiper]);

  const goTo = useCallback(
    (index: number) => {
      handleGoTo(swiper, index);
    },
    [swiper]
  );

  useEffect(() => {
    if (swiper && setSwiperClient) {
      setSwiperClient(swiper)
    }
  }, [swiper])

  useEffect(() => {
    if (swiper && activeSlideIdex !== undefined) {
      handleGoTo(swiper, activeSlideIdex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlideIdex]);

  const handleSwiperChange = (swiper: SwiperType) => {
    setSwiper(swiper);
    setSwiperData({ ...swiper });
    if (setActiveSlideIdex) setActiveSlideIdex(swiper.activeIndex);
  };

  const slideIndexes = useMemo(() => {
    return getSlidesActiveIndexes(swiperData, defaultSliderOptions);
  }, [defaultSliderOptions, swiperData]);

  const isEnd = useMemo(() => {
    return !!swiperData?.isEnd;
  }, [swiperData]);

  const isBeginning = useMemo(() => {
    return !!swiperData?.isBeginning;
  }, [swiperData]);

  const isOutside = useMemo(() => {
    return isNavOptionsIncludes(navigationOptions, 'outside-arrows');
  }, [navigationOptions]);

  const showInsideArrowsComp = useMemo(() => {
    return (
      swiperData &&
      (isNavOptionsIncludes(navigationOptions, 'arrows') ||
        isNavOptionsIncludes(navigationOptions, 'outside-arrows'))
    );
  }, [swiperData, navigationOptions]);

  return (
    <div className="w-full" key={uniqueId}  >
      {/* next and prev btns with titles  */}
      {swiperData && isNavOptionsIncludes(navigationOptions, 'btns-title') ? (
        <SliderNavBtnsTitle
          {...navigationOptions}
          isEnd={isEnd}
          isBeginning={isBeginning}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}

      <div className={`w-full relative ${sliderClasses}`}>
        {showInsideArrowsComp ? (
          <SliderInsideArrows
            isEnd={isEnd}
            isBeginning={isBeginning}
            isOutside={isOutside}
            hideArrow={!!navigationOptions.hideArrow}
            goNext={goNext}
            goPrev={goPrev}
          />
        ) : null}
        <div
          className={` ${isNavOptionsIncludes(navigationOptions, 'outside-arrows')
            ? 'w-[calc(100%-100px)] mx-auto'
            : 'w-full'
            }`}
        >
          <Swiper
            onSwiper={handleSwiperChange}
            onSlideChange={handleSwiperChange}
            {...defaultSliderOptions}
            className={`  ${swiperClasses}`}
            modules={[Autoplay]}

          >
            {Array.isArray(children) &&
              children.length &&
              children.map((child, ix) => {
                return (
                  <SwiperSlide
                    key={ix + '-key'}
                    className={`inline-block  py-1 ${slideClasses} ${defaultSliderOptions.slidesPerView === 'auto'
                      ? ' w-auto '
                      : ''
                      }`}
                  >
                    {child || ix}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>

      {swiperData && isNavOptionsIncludes(navigationOptions, 'arrows-nums') ? (
        <SliderNumsArrows
          slideIndexes={slideIndexes}
          activeIndex={swiperData?.realIndex}
          isEnd={!!swiperData?.isEnd}
          isBeginning={!!swiperData?.isBeginning}
          goTo={goTo}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}

      {swiperData && isNavOptionsIncludes(navigationOptions, 'arrows-down') ? (
        <SliderDownArrows
          slideIndexes={slideIndexes}
          activeIndex={swiperData?.realIndex}
          isEnd={!!swiperData?.isEnd}
          isBeginning={!!swiperData?.isBeginning}
          goTo={goTo}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}

      {swiperData && isNavOptionsIncludes(navigationOptions, 'arrows-down-start') ? (
        <SliderDownArrows
          position="start"
          slideIndexes={slideIndexes}
          activeIndex={swiperData?.realIndex}
          isEnd={!!swiperData?.isEnd}
          isBeginning={!!swiperData?.isBeginning}
          goTo={goTo}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}

      {swiperData && isNavOptionsIncludes(navigationOptions, 'arrows-down-end') ? (
        <SliderDownArrows
          position="end"
          slideIndexes={slideIndexes}
          activeIndex={swiperData?.realIndex}
          isEnd={!!swiperData?.isEnd}
          isBeginning={!!swiperData?.isBeginning}
          goTo={goTo}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}

      {swiperData && isNavOptionsIncludes(navigationOptions, 'dots') ? (
        <SliderDots
          slideIndexes={slideIndexes}
          goTo={goTo}
          activeIndex={swiperData?.realIndex}
        />
      ) : null}


      {swiperData && isNavOptionsIncludes(navigationOptions, 'arrows-vertical') ? (
        <VerticalArrows
          isEnd={!!swiperData?.isEnd}
          isBeginning={!!swiperData?.isBeginning}
          goNext={goNext}
          goPrev={goPrev}
        />
      ) : null}
    </div>
  );
};

export default SliderContainer;
