
import { Button } from "antd";
import type { FC } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface VerticalArrowsPros {
  isEnd: boolean;
  isBeginning: boolean;
  goNext: () => void;
  goPrev: () => void;
}
const VerticalArrows: FC<VerticalArrowsPros> = ({
  isEnd,
  isBeginning,
  goNext,
  goPrev,
}) => {
  return (
    <div className="w-full flex items-center justify-center   py-4">
      <Button type="text" disabled={!!isBeginning} onClick={goPrev} className="px-1">
        <div className="flex items-center gap-1">
          <MdKeyboardArrowUp
            size={22}
          />
        </div>
      </Button>
      <Button type="text" disabled={!!isEnd} onClick={goNext} className="px-1">
        <div className="flex items-center gap-1 ">
          <MdKeyboardArrowDown
            size={22}

          />

        </div>
      </Button>
    </div>
  );
};

export default VerticalArrows;
