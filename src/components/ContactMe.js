import { motion, AnimatePresence } from "framer-motion";

export default function ContactMe({ isOpen, toggleContact }) {
  const variants = {
    open: { y: 0 },
    closed: { y: "100%" },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 w-full h-3/4 p-4 justify-start items-start rounded-t-2xl border-t border-x border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light z-50"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <button
          className="focus:outline-none text-dark dark:text-light"
          onClick={toggleContact}
        >
          x
        </button>

        {isOpen && (
          <div className="mt-4">
            {/* Your contact form or contact details here */}
            <p>Email: jaronschoor@gmail.com</p>
            <p>Phone: +1 403-805-4894</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
