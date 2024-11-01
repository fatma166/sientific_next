'use client'
import { SCREEN_SIZES } from "@/services/theme";
import { WindowSize } from "@/services/types";
import { useState, useEffect } from 'react';


function useWindowSize(): WindowSize {
  // render on server as lg screens
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: SCREEN_SIZES.lg,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        //
        width: window.innerWidth || SCREEN_SIZES.lg,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
