import { Swiper as SwiperType } from 'swiper/types';
import { SliderOptions, SliderNavigationOptions, NavType } from '../types';

export const handleGoNext = (swiper: SwiperType | null) => {
  if (!swiper) return;
  swiper.slideNext();
};

export const handleGoPrev = (swiper: SwiperType | null) => {
  if (!swiper) return;
  swiper.slidePrev();
};

export const handleGoTo = (swiper: SwiperType | null, index: number) => {
  if (!swiper) return;
  swiper.slideTo(index || 0);
};

export const getSlidesActiveIndexes = (
  swiper: SwiperType | null,
  defaultSliderOptions: SliderOptions
) => {
  if (!swiper || !swiper.slides) return [];

  const slidesLen = swiper.slides.length;
  if (
    defaultSliderOptions.slidesPerView === 'auto' ||
    swiper?.params?.slidesPerView === 1
  ) {
    return [...Array(slidesLen).map((_, k) => k)];
  }
  // const slidesPerGroup = defaultSliderOptions.slidesPerGroup || 1;
  const slidesPerViewNum =
    typeof swiper?.params?.slidesPerView === 'number'
      ? swiper?.params?.slidesPerView
      : 1;

  return Array(Math.ceil(slidesLen / slidesPerViewNum))
    .fill('0')
    .map((_, k) => k * slidesPerViewNum);
};

export const isNavOptionsIncludes = (
  navigationOptions: SliderNavigationOptions,
  element: NavType
) => {
  return !!navigationOptions?.navTypes?.includes(element);
};
