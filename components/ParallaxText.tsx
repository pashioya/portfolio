'use client';
import React, { type ReactElement, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  type MotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

type ParallaxProps = {
  children: ReactElement[];
  baseVelocity: number;
};

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity: MotionValue<number> = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const childWidthPercentage = 100 / children.length;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const x = useTransform(baseX, v => `${wrap(-childWidthPercentage, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex w-full">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {children.map((child, index) => (
          <span key={index} className="inline-block mx-4">
            {child}
          </span>
        ))}
        {children.map((child, index) => (
          <span key={`duplicate-${index}`} className="inline-block mx-4">
            {child}
          </span>
        ))}
        {children.map((child, index) => (
          <span key={`duplicate-2-${index}`} className="inline-block mx-4">
            {child}
          </span>
        ))}
        {children.map((child, index) => (
          <span key={`duplicate-3-${index}`} className="inline-block mx-4">
            {child}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
