
import { Button } from "antd";
import type { FC } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SliderNumsArrowsPros {
  slideIndexes: number[];
  activeIndex: number;
  isEnd: boolean;
  isBeginning: boolean;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}
const SliderNumsArrows: FC<SliderNumsArrowsPros> = ({
  slideIndexes,
  activeIndex,
  isEnd,
  isBeginning,
  goTo,
  goNext,
  goPrev,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-2 py-4">
      <Button type="text" disabled={!!isBeginning} onClick={goPrev}>
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

      {slideIndexes.map((index, ix) => (
        <span
          key={index}
          onClick={() => goTo(index)}
          className={` w-8 h-8 rounded-full cursor-pointer  flex items-center justify-center px-4 text-sm ${(activeIndex <= index &&
            activeIndex > (slideIndexes[ix - 1] || 0)) ||
            (activeIndex === index && activeIndex === 0)
            ? 'bg-secondary text-bg'
            : ' '
            }`}
        >
          {ix + 1}
        </span>
      ))}

      <Button type="text" disabled={!!isEnd} onClick={goNext}>
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
    </div>
  );
};

export default SliderNumsArrows;
