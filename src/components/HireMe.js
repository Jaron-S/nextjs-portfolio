import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed md:absolute -left-10 bottom-0 flex items-center justify-center overflow-hidden lg:-right-8 md:-right-0 md:-top-2 lg:left-auto lg:top-0 lg:bottom-auto z-10">
      <div className="w-72 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:jaronschoor@gmail.com"
          className="flex text-center font-semibold items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:text-xs bg-dark text-light dark:bg-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-20 h-20 md:w-11 md:h-11 rounded-full transition-all ease-out hover:text-dark hover:scale-105 hover:bg-light hover:dark:text-light hover:dark:bg-dark duration-300 z-20"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
