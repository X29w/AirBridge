import type { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface AnimatedContentProps extends HTMLAttributes<HTMLDivElement> {
  duration?: number;
}

const AnimatedContent: FC<AnimatedContentProps> = ({
  children,
  duration = 0.5,
}) => {
  return (
    <motion.div
      className="animated-content"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
