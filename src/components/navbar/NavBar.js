"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import React from "react";
import { useEffect, useRef, useState } from "react";

import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "../../assets/Icons";
import { CustomLink, CustomMobileLink } from "./CustomLink";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

import TransitionEffect from "../global/TransitionEffect";

const NavBar = () => {
  const [theme, setTheme] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const switchThemeWithDelay = () => {
    setTransitionKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 500); // timer 1 -- switch theme
  };

  return (
    <>
      <header className="w-full top-0 left-0 fixed px-32 py-8 z-10 lg:px-16 md:px-12 sm:px-8 font-medium flex justify-between items-center dark:text-light">
        {/* Mobile Menu Button */}
        <button
          className="hidden lg:flex flex-col justify-center items-center h-4"
          onClick={toggleNavbar}
          id="menuButton"
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
            id="menuButtonSpan1"
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100 my-0.5"
            }`}
            id="menuButtonSpan2"
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45" : "translate-y-0.5"
            }`}
            id="menuButtonSpan3"
          ></span>
        </button>
        <MobileNavbar
          theme={theme}
          switchTheme={switchThemeWithDelay}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleNavbar={toggleNavbar}
        />
        <DesktopNavbar theme={theme} switchTheme={switchThemeWithDelay} />
      </header>
      <div className="absolute hidden items-center left-[50%] transform z-10 -translate-x-1/2 lg:block">
        <Logo />
      </div>
      <AnimatePresence mode="wait">
        <TransitionEffect key={transitionKey} theme={theme} />
      </AnimatePresence>
    </>
  );
};

const MobileNavbar = ({
  isOpen,
  setIsOpen,
  toggleNavbar,
  theme,
  switchTheme,
}) => {
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (event.target.id?.startsWith("menuButton")) {
      console.log("Do nothing");
      return; // Do nothing when the close button is clicked
    } else if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      console.log("handling click outside");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isOpen ? (
        <motion.div
          ref={navbarRef}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggleMenu={toggleNavbar} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggleMenu={toggleNavbar}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggleMenu={toggleNavbar}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 xs:mx-1 bg-light dark:bg-dark rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 xs:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.button
              onClick={() => switchTheme()}
              className={`ml-3 xs:mx-1 flex items-center justify-center rounded-full p-1 transition duration-500 ${
                theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 6000,
                damping: 200,
              }}
            >
              {theme === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </motion.button>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
};

const DesktopNavbar = ({ theme, switchTheme }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="w-full h-full flex justify-between items-center lg:hidden"
    >
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.button
          onClick={() => switchTheme()}
          className={`ml-3 flex items-center justify-center rounded-full p-1 transition duration-500 ${
            theme === "light"
              ? "hover:bg-dark hover:text-light"
              : "hover:bg-light hover:text-dark"
          }`}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 6000,
            damping: 200,
          }}
        >
          {theme === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </motion.button>
      </nav>
      <div className="absolute items-center left-[50%] transform -translate-x-1/2">
        <Logo />
      </div>
    </motion.nav>
  );
};

export default NavBar;
