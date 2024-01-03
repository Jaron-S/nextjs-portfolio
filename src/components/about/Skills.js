import { motion, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  FlutterIcon,
  HtmlIcon,
  JsIcon,
  NextJsIcon,
  ReactIcon,
  SqlIcon,
  TailwindIcon,
  TsIcon,
  UiIcon,
  WebDevIcon,
} from "../../assets/Icons";
import { useWindowSize } from "@uidotdev/usehooks";

const Skill = ({ name, x, y, icon, dragConstraints }) => {
  const dragControls = useDragControls();
  const size = useWindowSize();
  const [constraints, setConstraints] = useState(null);

  const vwToPixel = (vw) => {
    return (parseFloat(vw) / 100) * window.innerWidth;
  };
  const vhToPixel = (vh) => {
    return (parseFloat(vh) / 100) * window.innerHeight;
  };

  useEffect(() => {
    // Convert animated x, y to pixels
    const xPixel = vwToPixel(x);
    const yPixel = vwToPixel(y);

    // Update constraints to account for animated position
    setConstraints({
      top: dragConstraints.top - yPixel,
      left: dragConstraints.left - xPixel,
      right: dragConstraints.right - xPixel,
      bottom: dragConstraints.bottom - yPixel,
    });
  }, [x, y, dragConstraints, size]);

  return (
    constraints && (
      <motion.div
        className="flex items-center justify-center absolute"
        onPointerDown={(e) => dragControls.start(e, { snapToCursor: false })}
        dragControls={dragControls}
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={constraints}
        style={{ touchAction: "none" }}
      >
        <motion.div
          key={JSON.stringify(size)}
          className="flex flex-center items-center justify-start rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-5 md:text-sm sm:text-xs"
          whileHover={{ scale: 1.05 }}
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          whileTap={{
            boxShadow: "1px 1px 15px rgba(0,0,0,0.2)",
            cursor: "grabbing",
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 20,
          }}
        >
          {icon}
          {name}
        </motion.div>
      </motion.div>
    )
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (containerRef.current) {
      const boundingBox = containerRef.current.getBoundingClientRect();
      const extraXPadding = 35;
      const extraYPadding = 20;
      setConstraints({
        top: (-extraYPadding - boundingBox.height) / 2 + 25,
        left: (-extraXPadding - boundingBox.width) / 2 + 50,
        right: (extraXPadding + boundingBox.width) / 2 - 50,
        bottom: (extraYPadding + boundingBox.height) / 2 - 25,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const adjustPosition = (originalValue) => {
    const value = parseFloat(originalValue);
    const unit = originalValue.replace(value, "");

    const minWidth = 320;
    const maxWidth = 2200;

    // Clamp width to be within the defined range
    const clampedWidth = Math.min(Math.max(width, minWidth), maxWidth);

    // Linearly interpolate the factor based on the width
    const factor =
      1 + (clampedWidth - minWidth) * (1.5 / (maxWidth - minWidth));

    return `${value / factor}${unit}`;
  };

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="flex items-center justify-center">
        <div
          ref={containerRef}
          className="w-screen aspect-square flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm xs:bg-circularLightXs xs:dark:bg-circularDarkXs"
        >
          <motion.div
            className="flex flex-items-center items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-6 shadow-dark cursor-pointer lg:py-4 lg:px-5 sm:py-3"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 1.09 }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 20,
            }}
          >
            {<WebDevIcon />}
            Web & Mobile
          </motion.div>

          {constraints && (
            <>
              <Skill
                name="HTML"
                x="-27vw"
                y={adjustPosition("-20vw")}
                icon={<HtmlIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="CSS"
                x="-35vw"
                y={adjustPosition("-6vw")}
                icon={<CssIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Javascript"
                z
                x="30vw"
                y={adjustPosition("-15vw")}
                icon={<JsIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="React"
                x="0vw"
                y={adjustPosition("-17vw")}
                icon={<ReactIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="NextJS"
                x="-10vw"
                y={adjustPosition("-32vw")}
                icon={<NextJsIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="UI/UX Design"
                x="-25vw"
                y={adjustPosition("25vw")}
                icon={<UiIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="SQL"
                x="27vw"
                y={adjustPosition("24vw")}
                icon={<SqlIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Firebase"
                x="2vw"
                y={adjustPosition("16vw")}
                icon={<FirebaseIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Tailwind CSS"
                x="-33vw"
                y={adjustPosition("11vw")}
                icon={<TailwindIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Flutter"
                x="3vw"
                y={adjustPosition("33vw")}
                icon={<FlutterIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Typescript"
                x="22vw"
                y={adjustPosition("-30vw")}
                icon={<TsIcon />}
                dragConstraints={constraints}
              />
              <Skill
                name="Express"
                x="32vw"
                y={adjustPosition("11vw")}
                icon={<ExpressIcon />}
                dragConstraints={constraints}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
