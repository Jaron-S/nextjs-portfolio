import { motion } from "framer-motion";

const Tool = ({ name, icon }) => {
  return (
    <motion.div
      className="flex flex-row items-center justify-start rounded-full text-xs font-semibold text-dark bg-extraLight border-[2px] dark:bg-mediumDark dark:text-light dark:border-mediumLight dark:border-[1px] py-1 px-4 m-1 shadow-dark cursor-pointer"
      whileHover={{ boxShadow: "1px 1px 1px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 2000,
        damping: 100,
      }}
    >
      {icon}
      {name}
    </motion.div>
  );
};

export default Tool;
