
import { Button } from "antd";
import type { FC } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SliderInsideArrowsProps {
  isBeginning: boolean;
  isEnd: boolean;
  isOutside: boolean;
  hideArrow?: boolean;
  goNext: () => void;
  goPrev: () => void;
}

const SliderInsideArrows: FC<SliderInsideArrowsProps> = ({
  isEnd,
  isBeginning,
  isOutside,
  hideArrow,
  goNext,
  goPrev,
}) => {
  return (
    <div className="absolute w-full h-full pointer-events-none left-0 right-0 z-10">
      <div className="w-full h-full pointer-events-none flex items-center justify-between px-3">
        {hideArrow && isBeginning ? (
          <span></span>
        ) : (
          <Button
            type="link"
            disabled={!!isBeginning}
            onClick={goPrev}
            className={`hover:bg-bg px-2 pointer-events-auto !h-auto !p-1 !text-primary hover:!opacity-50 ${isOutside ? 'bg-transparent' : '!bg-bg'
              }`}
          >
            <div className="flex items-center gap-1">
              <MdKeyboardArrowLeft
                size={22}
                className="rtl:hidden ltr:inline-block"
              />
              <MdKeyboardArrowRight
                size={22}
                className="ltr:hidden rtl:inline-block"
              />
            </div>
          </Button>
        )}

        {hideArrow && isEnd ? (
          <span></span>
        ) : (
          <Button
            type="link"
            disabled={!!isEnd}
            onClick={goNext}
            className={`hover:bg-bg px-2  !h-auto !p-1 !text-primary hover:!opacity-50 pointer-events-auto ${isOutside ? 'bg-transparent' : '!bg-bg'
              }`}
          >
            <div className="flex items-center gap-1 ">
              <MdKeyboardArrowLeft
                size={22}
                className="ltr:hidden rtl:inline-block"
              />
              <MdKeyboardArrowRight
                size={22}
                className="rtl:hidden ltr:inline-block"
              />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default SliderInsideArrows;
