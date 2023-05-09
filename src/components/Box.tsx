import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

export const Box = ({ num }: { num: number }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={{ height: '100vh', background: 'grey' }}
    >
      <h1 style={{ margin: 0, padding: 0 }}>Box {num} </h1>
    </motion.div>
  );
};