import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode | React.ReactNode[] | null;
  isWidthFull?: boolean;
  delay?: number;
}

const Reveal = (props: RevealProps) => {
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
      // className={`relative overflow-hidden ${
      //   props.isWidthFull ? "w-full" : "w-fit"
      // }`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={slideAnimate}
        transition={{
          delay: props.delay,
          duration: 0.75,
          ease: "easeInOut",
        }}
        // className="text-[220px] text-[#FF5353] font-bold leading-[170px]"
      >
        {props.children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: "-100%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideAnimate}
        transition={{
          delay: props.delay,
          duration: 0.5,
          ease: "easeOut",
        }}
        // className=" absolute w-full h-full bg-black top-0"
      ></motion.div>
    </div>
  );
};

export default Reveal;
