import { useLayoutEffect, useState } from 'react';

export function useScrollPosition() {
  const [scroll, setScroll] = useState(0);

  useLayoutEffect(() => {
    function updateScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return { scroll };
}
