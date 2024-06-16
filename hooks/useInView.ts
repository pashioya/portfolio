import { useState, useEffect, useRef, MutableRefObject } from 'react';

type UseInViewReturn<T> = [MutableRefObject<T | null>, boolean];

const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
): UseInViewReturn<T> => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
};

export default useInView;
