import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import devIcon from "/public/images/svgs/website-codes.svg";
import Layout from "../global/Layout";

const GradientAnimation = (children) => {
  return (
    <>
      <motion.div
        className="relative flex items-center text-3xl font-bold"
        initial={{ "--gradientPos": "0%" }}
        whileHover={{
          "--gradientPos": "100%",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(to right, #2cc6d7 0%, #b2529b 100%)",
          backgroundSize: "150% 100%",
          backgroundPositionX: "var(--gradientPos)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          "--gradientPos": "100%",
        }}
      >
        <div className="inline-block pr-2 w-8 ">
          <Image
            src={devIcon}
            alt="Web Development"
            className="w-full h-auto"
          />
        </div>
        {children}
      </motion.div>
    </>
  );
};

const Footer = ({ setIsContactOpen }) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base">
      <Layout className="!py-8 !mt-0 flex items-center justify-between lg:flex-col lg:py-6 lg:text-center">
        <div className="w-1/3 flex justify-center lg:w-1/2 sm:w-full">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </div>
        <div className="flex flex-col items-center lg:py-4">
          Looking to hire a team? <span className="px-1"></span>
          <div className="flex items-center pt-1 lg:pt-0">
            <Link
              href="https://neolite.ca"
              target={"_blank"}
              className={"relative group"}
            >
              {GradientAnimation("Neolite.ca")}
            </Link>
          </div>
        </div>
        <button
          className="w-1/3 flex justify-center"
          onClick={() => setIsContactOpen(true)}
        >
          Say Hello {"\u{1F44B}\u{1F3FB}"}
        </button>
      </Layout>
    </footer>
  );
};

export default Footer;
