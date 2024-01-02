import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Tool from "./Tool";
import { GithubIcon } from "@/assets/Icons";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
  tools,
}) => {
  return (
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ amount: 0.00001, once: true }}
    >
      <article className="w-full flex items-center justify-between relative rounded-3xl rounded-r-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rouned-br-3xl xs:p-4">
        <div className="absolute -top-0 -right-4 -z-10 w-full h-[103%] rounded-3xl bg-dark dark:bg-light xs:-right-3 sm:h-[102%] xs:rounded-2xl" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg border shadow-sm lg:w-full"
        >
          <FramerImage
            src={image}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="flex flex-wrap -mx-2">
            {tools.map((tool) => (
              <Tool
                key={`${title}-${tool.name}`}
                name={tool.name}
                icon={tool.icon}
              />
            ))}
          </div>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            {github && (
              <Link href={github} target="_blank" className="w-10">
                <GithubIcon />
              </Link>
            )}
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-gradient-to-r from-primary to-primaryDark dark:from-primaryDark dark:to-primary text-light dark:linear-gradient(to right, #54c3cd 0%, #b2529b 100%) dark:text-light p-2 px-6 text-lg font-bold shadow-md sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default FeaturedProject;
