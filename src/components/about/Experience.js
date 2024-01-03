import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ListIcon from "./ListIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
  listItems,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 75 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
        viewport={{ amount: 0.0001, once: true }}
      >
        <h3 className="font-bold text-2xl pb-2 sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full py-2 sm:text-sm">{description}</p>
        <ul className="list-inside space-y-2 text-small sm:text-xs py-2">
          {listItems.map((item, index) => (
            <li key={index}>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ amount: 0.00001, once: true }}
              >
                <article className="w-full flex-col items-center justify-between relative rounded-2xl border border-solid border-dark bg-light text-dark dark:bg-mediumDark dark:text-light shadow-md p-4  sm:p-3 sm:py-2">
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

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64  lg:my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[3px] xs:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Co-Founder and Web Developer"
            company="Neolite"
            companyLink="www.neolite.ca"
            time="2023-Present"
            address="Calgary, AB"
            description={`As a co-founder and web developer at my own company, I've had the opportunity to wear multiple hats, 
            ranging from project management to hands-on coding. Alongside a small but dedicated team, I work on performant websites, 
            custom web solutions and web app development for a diverse clientele. 
            My key contributions include:`}
            listItems={[
              {
                title: "End-to-End Development",
                description:
                  "Involved in every aspect of web development, from concept to fully functional product.",
              },
              {
                title: "Collaborative Teamwork",
                description:
                  "Collaborating with team members to ensure smooth project execution and quality results.",
              },
              {
                title: "Client Relations",
                description:
                  "Serving as a client liaison, providing tailored solutions that meet and exceed expectations.",
              },
              {
                title: "Technical Expertise",
                description:
                  "Utilizing advanced web development tools for efficient, modern, and appealing solutions.",
              },
              {
                title: "Business Strategy",
                description:
                  "Leading business strategy, focusing on technology adoption and mobile app development.",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
