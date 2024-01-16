import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return <motion.div style={{ scaleX }} className="scroll-progress" />;
}

export default ScrollProgress;
