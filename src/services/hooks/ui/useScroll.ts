import { useState, useEffect } from 'react';

const useScroll = () => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {

    const currentPosition = document?.documentElement?.scrollTop || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setScrollPosition(currentPosition);
    setIsTop(currentPosition === 0);
    setIsBottom(currentPosition >= maxScroll);
  };

  const scrollToTop = () => {

    document?.documentElement?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {

    document?.documentElement?.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isTop, scrollPosition, isBottom, scrollToTop, scrollToBottom };
};

export default useScroll;
