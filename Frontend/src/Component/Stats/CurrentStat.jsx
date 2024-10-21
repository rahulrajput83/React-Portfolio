import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CurrentStat({ value, title }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const count = useMotionValue(0);
  const [currentValue, setCurrentValue] = useState(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      count.set(0);
      const controls = animate(count, value, {
        duration: 2,
        onUpdate: (latest) => {
          setCurrentValue(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, count]);

  return (
    <motion.div
      className="flex flex-col w-full justify-center gap-2 items-center text-white"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-2xl sm:text-4xl font-medium md:text-4xl">{currentValue}+</span>
      <span className="text-lg font-medium text-center">{title}</span>
    </motion.div>
  );
}
