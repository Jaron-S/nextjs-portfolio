import { motion } from "framer-motion";

const animateText = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      when: "beforeChildren",
    },
  },
};

const animateWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0`}
    >
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8 ${className}`}
        variants={animateText}
        initial="hidden"
        animate="show"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={animateWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
