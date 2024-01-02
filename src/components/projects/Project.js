import Image from "next/image";
import Link from "next/link";

import Tool from "./Tool";
import { GithubIcon } from "@/assets/Icons";

const Project = ({ type, title, image, link, github, tools }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between relative rounded-3xl rounded-r-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-8 xs:p-4">
      <div className="absolute -top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-3xl bg-dark dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-2xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg border shadow-sm"
      >
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ml-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold lg:text-2xl">
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
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg shadow-md bg-gradient-to-r from-primary to-primaryDark dark:from-primaryDark dark:to-primary text-light dark:linear-gradient(to right, #54c3cd 0%, #b2529b 100%) dark:text-light p-2 px-6 text-lg font-bold sm:px-4 sm:text-base"
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8 md:w-6 md:mr-2">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
