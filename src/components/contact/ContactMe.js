import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

export default function ContactMe({ isOpen, setIsContactOpen }) {
  const ref = useRef(null);

  const variants = {
    open: { y: 0 },
    closed: { y: "100%" },
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsContactOpen(false);
    }
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          className="fixed bottom-0 left-0 w-full h-3/4 p-8 justify-start items-start rounded-t-2xl border-t-2 border-x-2 border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light z-10"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <button
            className="absolute top-0 right-0 mx-4 my-2 focus:outline-none text-dark dark:text-light font-semibold"
            onClick={() => setIsContactOpen(false)}
          >
            x
          </button>

          <ContactForm />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
