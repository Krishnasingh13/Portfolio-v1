import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface StaggerAnimationProps {
  children: React.ReactNode | React.ReactNode[] | null;
  customNumber: number;
}

const StaggerAnimation = (props: StaggerAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [isInView]);

  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: props.customNumber * 0.1 + 0.5, // Use customNumber for delay
      },
    }),
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={animate}
        exit="hidden"
        variants={staggerVariants}
        custom={props.customNumber}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default StaggerAnimation;
