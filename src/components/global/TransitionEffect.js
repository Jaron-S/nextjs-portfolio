import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = ({ theme }) => {
  const colors = {
    dark: "#1b1b1b",
    light: "#f5f5f5",
    primary: "#b2529b",
    primaryDark: "#54c3cd",
  };

  return (
    <>
      {/* Bottom to Top */}
      {/* -- switch initial & animate for T -> B */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen shadow-xl z-40"
        initial={{
          y: "0",
          backgroundColor:
            theme === "dark" ? colors.primary : colors.primaryDark,
        }}
        animate={{
          y: "100vh",
          backgroundColor:
            theme === "dark" ? colors.primaryDark : colors.primary,
        }}
        exit={{
          y: "0",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          backgroundColor: { delay: 1, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-dark dark:bg-light"
        initial={{ y: "0" }}
        animate={{ y: "100vh", transition: { delay: 0.2, duration: 0.6 } }}
        exit={{ y: "0", transition: { delay: 0.2, duration: 0.5 } }}
        transition={{
          delay: 0.1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 w-screen h-screen z-20 bg-primary dark:bg-primaryDark"
        initial={{ y: "0" }}
        animate={{ y: "100vh", transition: { delay: 0.3, duration: 0.7 } }}
        exit={{ y: "0" }}
        transition={{
          delay: 0.1,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default TransitionEffect;
