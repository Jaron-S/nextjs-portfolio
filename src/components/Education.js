import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ListIcon from "./ListIcon";

const Details = ({ degree, major, time, place, info, listItems }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} className="pl-1" />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
        viewport={{ amount: 0.0001, once: true }}
      >
        <h3 className="font-bold text-2xl pb-2 sm:text-xl xs:text-lg">
          {degree} in{" "}
          <span className="text-primary dark:text-primaryDark">{major}</span>
          &nbsp;
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full py-2 sm:text-sm">{info}</p>
        <ul className="list-inside space-y-2 text-small sm:text-xs">
          {listItems.map((item, index) => (
            <li key={index}>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ amount: 0.00001, once: true }}
              >
                <article className="w-full flex-col items-center justify-between relative rounded-2xl border border-solid border-dark bg-light text-dark dark:bg-mediumDark dark:text-light shadow-md p-4 sm:p-3 sm:py-2">
                  <span className="font-semibold">{item.title}: </span>
                  {item.description}
                </article>
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64  lg:my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[3px] xs:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            degree="Bachelor of Science"
            major="Computer Science"
            time="2021-2023"
            place="Oregon State University"
            info="My background in Computer Science provides me with the robust technical skills essential for web development. The coursework was comprehensive, covering everything from coding fundamentals to complex software design. Relevant coursework included:
            "
            listItems={[
              {
                title: "Web Development",
                description:
                  "Covered the fundamentals of front-end and back-end development, including HTML, CSS, JavaScript, Express and MongoDB.",
              },
              {
                title: "Mobile development",
                description:
                  "Enhanced my full-stack skills by mastering mobile UI/UX and learning cross-platform development with Flutter.",
              },
              {
                title: "Database Systems",
                description:
                  "Gave me the skills to design and manage robust relational databases, crucial for web and app development.",
              },
              {
                title: "User Interface Design",
                description:
                  "Taught me the principles of UI/UX design, focusing on user-centric design solutions.",
              },
              {
                title: "Software Engineering I & II",
                description:
                  "Introduced me to Agile methodologies, version control, and best practices in team-based software projects.",
              },
              {
                title: "Capstone Project",
                description:
                  "Led a team in developing a production-grade, full-stack website, overseeing design and applying theory to practice throughout the process.",
              },
            ]}
          />
          <Details
            degree="Bachelor of Science"
            major="Biological Sciences"
            time="2015-2020"
            place="University of Calgary"
            info="While my primary focus today is web development, my educational journey began with a degree in Biological Sciences. This field taught me to approach problems with a scientific mindset, emphasizing research and data-driven solutions. Relevant coursework included:"
            listItems={[
              {
                title: "Statistics and Data Analysis",
                description:
                  "Provided me with a foundation for understanding data, which I now apply to web analytics and SEO.",
              },
              {
                title: "Bioinformatics",
                description:
                  "Introduced me to programming in a scientific context, including data manipulation and computational problem-solving.",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
