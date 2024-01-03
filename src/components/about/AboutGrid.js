import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import profilePic from "/public/images/profile/profile-me-1.png";

const aboutMeParagraphs = [
  "Hi, I'm Jaron, a full-stack web developer and UI/UX designer based in Alberta, Canada. With over 2 years of development experience, I specialize in crafting visually stunning and user-focused digital solutions. My approach combines front-end aesthetics with back-end functionality, ensuring each project is both beautiful and robust.",
  "My skill set is rooted in a deep understanding of various programming languages, frameworks and cutting-edge industry trends. I deliver end-to-end development services tailored to your specific needs, ensuring each project prioritizes user engagement and robust functionality.",
  "If you're seeking a developer who consistently delivers quality, innovation and client satisfaction, let's discuss your next project. Feel free to ",
];

const AboutGrid = ({ setIsContactOpen }) => {
  return (
    <div className="grid w-full grid-cols-8 gap-16 justify-items-center sm:mb-8 sm:gap-8">
      <AboutMe setIsContactOpen={setIsContactOpen} />
      <ProfilePicture />
      <Stats />
    </div>
  );
};

const AboutMe = ({ setIsContactOpen }) => {
  return (
    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        About Me
      </h2>
      {aboutMeParagraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`font-medium ${
            index < aboutMeParagraphs.length - 1 ? "mb-4" : ""
          }`}
        >
          {paragraph}
          {index === aboutMeParagraphs.length - 1 && (
            <>
              <button
                className="underline"
                onClick={() => setIsContactOpen(true)}
              >
                contact me
              </button>
              <span>.</span>
            </>
          )}
        </p>
      ))}
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className="col-span-3 relative h-max w-max rounded-2xl rounded-r-xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
      <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark dark:bg-light" />
      <Image
        src={profilePic}
        alt="Jaron Schoorlemmer"
        className="lg:w-[225px] h-auto rounded-2xl"
        priority
        sizes="(max-width: 768) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: 5, label: "Satisfied Clients" },
    { value: 10, label: "Projects Completed" },
    { value: 2, label: "Years of Experience" },
  ];

  return (
    <div className="col-span-2 flex flex-col items-end justify-between w-3/4 md:w-full sm:w-1/2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 sm:flex-col sm:justify-center">
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-end justify-center xl:items-center lg:mx-8 sm:py-4">
    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
      <AnimatedNumber value={value} />+
    </span>
    <h2 className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
      {label}
    </h2>
  </div>
);

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

export default AboutGrid;
