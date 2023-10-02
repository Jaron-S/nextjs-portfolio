import { motion, useScroll } from "framer-motion";

const ListIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  // Calculate the circumference of the circle
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke-dashoffset based on the scroll progress
  const offset = (1 - scrollYProgress) * circumference;

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light xs:pt-0.5">
      <svg
        className="-rotate-90 md:w-[63.5px] md:h-[63.5px] xs:w-[42px] xs:h-[42px]"
        width="76"
        height="76"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          strokeLinecap="round"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 dark:stroke-0 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default ListIcon;
