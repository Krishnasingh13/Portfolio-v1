import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode | React.ReactNode[] | null;
  isWidthFull?: boolean;
}

const RevealDown = (props: RevealProps) => {
  const slideRef = useRef(null);
  const isSlideInView = useInView(slideRef, {
    once: true,
    margin: "-10% 0px -20% 0px",
  });
  const slideAnimate = useAnimation();

  useEffect(() => {
    if (isSlideInView) {
      slideAnimate.start("visible");
    }
  }, [isSlideInView]);

  return (
    <div
      ref={slideRef}
      className={`relative overflow-hidden ${
        props.isWidthFull ? "w-full" : "w-fit"
      }`}
    >
      <motion.div
        variants={{
          hidden: { y: 50, opacity: 0},
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={slideAnimate}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default RevealDown;
