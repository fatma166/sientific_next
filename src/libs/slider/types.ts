import type { SwiperOptions } from 'swiper/types';

export type NavType =
  | 'arrows-nums'
  | 'dots'
  | 'btns-title'
  | 'arrows'
  | 'outside-arrows'
  | 'arrows-vertical'
  | 'arrows-down'
  | 'arrows-down-start'
  | 'arrows-down-end'


export type SliderOptions = SwiperOptions;

export interface SliderNavigationOptions {
  navTypes?: NavType[];
  title?: string;
  subTitle?: string;
  nextText?: string; // default: 'Next'
  prevText?: string; // default: 'Prev'
  hideArrow?: boolean; // hide arrow when arrow is disabled
}
