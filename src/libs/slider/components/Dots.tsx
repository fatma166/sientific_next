import type { FC } from 'react';


interface SliderDotsPros {
  slideIndexes: number[];
  goTo: (index: number) => void;
  activeIndex: number;
}
const SliderDots: FC<SliderDotsPros> = ({
  slideIndexes,
  goTo,
  activeIndex,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-2 py-4">
      {slideIndexes.map((index, ix) => (
        <span
          key={ix}
          onClick={() => goTo(ix || index)}
          className={`w-4 h-2 rounded-full cursor-pointer inline-block 
          ${(activeIndex === ix)
              ? 'bg-gradient'
              : 'bg-primary-15'
            }`}
        >

        </span>
      ))}
    </div>
  );
};

export default SliderDots;
