import Project from "@/components/projects/Project";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectDuo from "@/components/projects/ProjectDuo";
import {
  ExpressIcon,
  FramerMotionIcon,
  MongoIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TsIcon,
  FirebaseIcon,
  StripeIcon,
} from "@/assets/Icons";
import linkUpImage from "/public/images/projects/link-up.webp";
import workoutBalancerImage from "/public/images/projects/workoutBalancer.webp";
import lifeOSImage from "/public/images/projects/lifeOS.webp";
import portfolioImage from "/public/images/projects/portfolio.webp";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 sm:gap-x-0">
      {/* Project 1 */}
      <div className="col-span-12">
        <FeaturedProject
          title="Life Management Web App"
          summary="This ever-evolving life & goal management app allows users to track their progress toward their ideal identity. PWA compatibility gives users the ability to download the web app for improved performance and offline mode."
          link="https://life-os.netlify.app/"
          type="Featured Project"
          tools={[
            { name: "NextJS", icon: <NextJsIcon className="!w-5" /> },
            {
              name: "Tailwind",
              icon: <TailwindIcon className={"!w-6 pl-1 mr-1"} />,
            },
            {
              name: "Typescript",
              icon: <TsIcon className={"!w-4 !-ml-1"} />,
            },
            {
              name: "Firebase",
              icon: <FirebaseIcon className={"!w-4 !-ml-1"} />,
            },
            { name: "Stripe", icon: <StripeIcon /> },
          ]}
          image={lifeOSImage}
        />
      </div>
      {/* Project 2 */}
      <div className="col-span-12">
        <FeaturedProject
          title="Full-Stack Social Media App"
          summary="This project harnesses the power of React and Redux to ensure state management efficiency, complemented by Tailwind CSS for a polished design. The backend leverages Express and MongoDB, with the added functionality of an integrated image storage system."
          link="https://linkup-js.netlify.app/"
          github="https://github.com/Jaron-S/LinkUp"
          type="Featured Project"
          tools={[
            {
              name: "React",
              icon: <ReactIcon className={"w-10 pl-1 mr-0"} />,
            },
            {
              name: "Tailwind",
              icon: <TailwindIcon className={"!w-6"} />,
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
          image={linkUpImage}
        />
      </div>

      {/* Project 3 + 4 */}
      <ProjectDuo
        project1={
          <Project
            title="Workout Planner"
            link="https://workout-balancer.netlify.app/"
            github="https://github.com/Jaron-S/workout-planner"
            type="NextJS Web App"
            tools={[
              { name: "NextJS", icon: <NextJsIcon className="!w-5" /> },
              {
                name: "Tailwind",
                icon: <TailwindIcon className={"!w-6"} />,
              },
              {
                name: "Typescript",
                icon: <TsIcon className={"!w-4 !-ml-1"} />,
              },
              {
                name: "Firebase",
                icon: <FirebaseIcon className={"!w-4 !-ml-1"} />,
              },
            ]}
            image={workoutBalancerImage}
          />
        }
        project2={
          <Project
            title="Immersive Portfolio"
            link="https://jaron-s.netlify.app"
            github="https://github.com/Jaron-S/nextjs-portfolio"
            type="This Website!"
            tools={[
              { name: "NextJS", icon: <NextJsIcon className="!w-5" /> },
              {
                name: "Tailwind",
                icon: <TailwindIcon className={"!w-6"} />,
              },
              {
                name: "Framer-Motion",
                icon: <FramerMotionIcon className={"!w-3 !py-1"} />,
              },
            ]}
            image={portfolioImage}
          />
        }
      />
    </div>
  );
};

export default ProjectsGrid;
