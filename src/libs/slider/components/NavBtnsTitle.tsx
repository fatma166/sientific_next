
import { Button } from "antd";
import type { FC } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SliderNavBtnsTitlePros {
  title?: string;
  subTitle?: string;
  nextText?: string;
  prevText?: string;
  isEnd: boolean;
  isBeginning: boolean;
  goNext: () => void;
  goPrev: () => void;
}

const SliderNavBtnsTitle: FC<SliderNavBtnsTitlePros> = ({
  title,
  subTitle,
  nextText,
  prevText,
  isEnd,
  isBeginning,
  goNext,
  goPrev,
}) => {
  return (
    <div className="w-full flex flex-wrap items-start justify-between gap-4 mb-6">
      <div>
        {title ? (
          <h2 className="text-lg xl:text-xl font-bold ">{title}</h2>
        ) : null}
        {subTitle ? <p className="mt-1"> {subTitle} </p> : null}
      </div>
      <div className="hidden md:flex items-center gap-2 ">
        {prevText ? (
          <Button
            type="primary"
            ghost
            disabled={!!isBeginning}
            onClick={goPrev}
          >
            <div className="flex items-center gap-1">
              <MdKeyboardArrowLeft className="rtl:hidden ltr:inline-block" />
              <MdKeyboardArrowRight className="ltr:hidden rtl:inline-block" />
              {prevText}
            </div>
          </Button>
        ) : null}
        {nextText ? (
          <Button type="primary" ghost disabled={!!isEnd} onClick={goNext}>
            <div className="flex items-center gap-1">
              {nextText}
              <MdKeyboardArrowLeft className="ltr:hidden rtl:inline-block" />
              <MdKeyboardArrowRight className="rtl:hidden ltr:inline-block" />
            </div>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default SliderNavBtnsTitle;
