

import { Sizes } from "@/services/types";
import useWindowSize from './useWindowSize';
import { SCREEN_SIZES } from "@/services/theme";



const useIsScreen = (): Sizes => {
  const { width } = useWindowSize();

  return {
    xs: width >= 0,
    sm: width >= SCREEN_SIZES.sm,
    md: width >= SCREEN_SIZES.md,
    lg: width >= SCREEN_SIZES.lg,
    xl: width >= SCREEN_SIZES.xl,
    xxl: width >= SCREEN_SIZES.xxl,
  };
};

export default useIsScreen;
