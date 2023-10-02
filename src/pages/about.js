import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profile-me-1.png";
import Link from "next/link";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef("second");
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Jaron S | About Page</title>
        <meta
          name="description"
          content="A description of the about page"
        ></meta>
      </Head>
      {/* <TransitionEffect /> */}
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 !mt-0 lg:pt-8">
          <AnimatedText
            text="Intuition Meets Innovation"
            className="my-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 justify-items-center sm:mb-8 sm:gap-8">
            {/* ABOUT ME */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                {
                  "Hi, I'm Jaron, a full-stack web developer and UI/UX designer based in Alberta, Canada. With over 2 years of industry experience, I specialize in crafting visually stunning and user-focused digital solutions. My approach combines front-end aesthetics with back-end functionality, ensuring each project is both beautiful and robust."
                }
              </p>

              <p className="my-4 font-medium">
                {
                  "My skill set is rooted in a deep understanding of various programming languages, frameworks and cutting-edge industry trends. I deliver end-to-end development services tailored to your specific needs, ensuring each project prioritizes user engagement and robust functionality."
                }
              </p>
              <p className="font-medium">
                {
                  "If you're seeking a developer who consistently delivers quality, innovation and client satisfaction, let's discuss your next project. Feel free to "
                }
                <Link className="underline" href={"/contact"}>
                  contact me
                </Link>
                {
                  " to explore how we can create exceptional and tailored solutions together."
                }
              </p>
            </div>
            {/* PROFILE PIC */}
            <div className="col-span-3 relative h-max w-max rounded-2xl rounded-r-xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Jaron Schoorlemmer"
                className="lg:w-[225px] h-auto rounded-2xl"
                priority
                sizes="(max-width: 768) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            {/* STATS */}
            <div className="col-span-2 flex flex-col items-end justify-between w-3/4 md:w-full sm:w-1/2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 sm:flex-col sm:justify-center">
              {/* stat 1 */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              {/* stat 2 */}
              <div className="flex flex-col items-end justify-center xl:items-center lg:mx-8 sm:py-4">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              {/* stat 3 */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
