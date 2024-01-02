import { motion } from "framer-motion";

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

export default ProjectDuo