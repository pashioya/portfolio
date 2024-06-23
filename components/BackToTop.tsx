import { useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function BackToTop() {
  const progressWheelRef = useRef<SVGCircleElement>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.on('change', progress => {
      if (progressWheelRef.current) {
        progressWheelRef.current.style.strokeDasharray = `${progress} 1`;
      }
    });
  }, [scrollYProgress]);

  function scrollToHome() {
    const e = document.getElementById('home');
    e?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'center',
    });
  }

  return (
    <div className="fixed top-28 right-0 rounded-full z-10">
      <svg
        onClick={scrollToHome}
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="-rotate-90 cursor-pointer fill-transparent rounded-full"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          strokeWidth="5"
          className="stroke-primary opacity-20"
        />
        <circle
          ref={progressWheelRef}
          cx="50"
          cy="50"
          r="30"
          strokeDasharray={`0 1`}
          pathLength="1"
          strokeWidth="5"
          className="stroke-primary"
        />
      </svg>
    </div>
  );
}
