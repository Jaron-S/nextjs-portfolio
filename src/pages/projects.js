import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import {
  ExpressIcon,
  FramerMotionIcon,
  GithubIcon,
  MongoIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  StrapiIcon,
  TailwindIcon,
  TsIcon,
} from "@/components/Icons";
import Layout from "@/components/Layout";
import image1 from "../../public/images/projects/link-up.webp";
import image2 from "../../public/images/projects/portfolio.webp";
import image3 from "../../public/images/projects/ecommerce.webp";
import image4 from "../../public/images/projects/car-showcase.webp";
import TransitionEffect from "@/components/TransitionEffect";

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
              <Tool key={tool.id} name={tool.name} icon={tool.icon} />
            ))}
          </div>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
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
            <Tool key={tool.id} name={tool.name} icon={tool.icon} />
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
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectDuo = ({ project1, project2 }) => {
  return (
    <>
      <div className="col-span-6 sm:col-span-12">
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          viewport={{ amount: 0.001, once: true }}
        >
          {project1}
        </motion.div>
      </div>
      <div className="col-span-6 sm:col-span-12">
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
          viewport={{ amount: 0.001, once: true }}
        >
          {project2}
        </motion.div>
      </div>
    </>
  );
};

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

const projects = () => {
  return (
    <>
      <Head>
        <title>Jaron S | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      {/* <TransitionEffect /> */}
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 !mt-16">
          <AnimatedText text="Turning Concept Into Code" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 sm:gap-x-0">
            {/* Project 1 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Full-Stack Social Media App"
                summary="This project harnesses the power of React and Redux to ensure state management efficiency, complemented by Tailwind CSS for a polished design. The backend leverages Express and MongoDB, with the added functionality of an integrated image storage system."
                link="/"
                github="https://github.com"
                type="Featured Project"
                tools={[
                  {
                    name: "React",
                    icon: <ReactIcon className={"w-10 pl-1 mr-0"} />,
                  },
                  {
                    name: "Tailwind",
                    icon: <TailwindIcon className={"w-4 pl-1 mr-1"} />,
                  },
                  {
                    name: "Redux",
                    icon: <ReduxIcon className={"w-6 pl-2 mr-1"} />,
                  },
                  {
                    name: "Express",
                    icon: <ExpressIcon className={"!w-5 mr-1"} />,
                  },
                  {
                    name: "MongoDB",
                    icon: <MongoIcon className={"pl-2 mr-2"} />,
                  },
                ]}
                image={image1}
              />
            </div>
            {/* Project 2 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Car Search App"
                summary="Utilizing Next.js for efficiency and TypeScript for type-safety, this car search app offers a straightforward user experience. The use of two distinct APIs ensures consistent data retrieval and image display, while Tailwind provides a neat visual layout."
                link="/"
                github="https://github.com"
                type="Featured Project"
                tools={[
                  { name: "NextJS", icon: <NextJsIcon /> },
                  {
                    name: "Tailwind",
                    icon: <TailwindIcon className={"w-5 pl-1 mr-1"} />,
                  },
                  { name: "Typescript", icon: <TsIcon className={"ml-0"} /> },
                ]}
                image={image4}
              />
            </div>
            {/* Project 3 + 4 */}
            <ProjectDuo
              project1={
                <Project
                  title="NextJS Portfolio Website"
                  link="/"
                  github="https://github.com"
                  type="This Website!"
                  tools={[
                    { name: "NextJS", icon: <NextJsIcon /> },
                    {
                      name: "Tailwind",
                      icon: <TailwindIcon className={"w-5 pl-1 mr-1"} />,
                    },
                    { name: "Framer-Motion", icon: <FramerMotionIcon /> },
                  ]}
                  image={image2}
                />
              }
              project2={
                <Project
                  title="E-Commerce Website w/ CMS"
                  link="/"
                  github="https://github.com"
                  type="React Storefront"
                  tools={[
                    {
                      name: "React",
                      icon: <ReactIcon className={"w-10 pl-1 mr-0"} />,
                    },
                    {
                      name: "Redux",
                      icon: <ReduxIcon className={"w-6 pl-2 mr-1"} />,
                    },
                    {
                      name: "Strapi",
                      icon: <StrapiIcon className={"pl-2 mr-1"} />,
                    },
                  ]}
                  image={image3}
                />
              }
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
