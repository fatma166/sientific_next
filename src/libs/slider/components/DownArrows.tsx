
import { Button } from "antd";
import type { FC } from 'react';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
interface Props {
  slideIndexes: number[];
  activeIndex: number;
  isEnd: boolean;
  isBeginning: boolean;
  position?: 'start' | 'end' | 'center';
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
}
const SliderDownArrows: FC<Props> = ({
  slideIndexes,
  activeIndex,
  isEnd,
  isBeginning,
  position = 'center',
  goTo,
  goNext,
  goPrev,
}) => {
  return (
    <div className={`w-full flex items-center  gap-1 py-4    `}

      style={{
        justifyContent: position,
      }}
    >

      <Button type="text" disabled={!!isBeginning} onClick={goPrev}>
        <div className="flex items-center gap-1">
          {/* <MdKeyboardArrowLeft
            size={22}
            className="rtl:hidden ltr:inline-block"
          />
          <MdKeyboardArrowRight
            size={22}
            className="ltr:hidden rtl:inline-block"
          /> */}
          <BsArrowLeft size={22} />
        </div>
      </Button>


      <Button type="text" disabled={!!isEnd} onClick={goNext}>
        <div className="flex items-center gap-1 ">
          {/* <MdKeyboardArrowLeft
            size={22}
            className="ltr:hidden rtl:inline-block"
          />
          <MdKeyboardArrowRight
            size={22}
            className="rtl:hidden ltr:inline-block"
          /> */}
          <BsArrowRight size={22} />
        </div>
      </Button>
    </div>
  );
};

export default SliderDownArrows;
