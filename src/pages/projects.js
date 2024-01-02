import Head from "next/head";

import Layout from "@/components/global/Layout";
import AnimatedText from "@/components/global/AnimatedText";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

const pageTitle = "Jaron S | Projects Page";
const pageDescription = "any description";
const animatedText = "Turning Concept Into Code";

const projects = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 !mt-16">
          <AnimatedText text={animatedText} className="mb-16" />
          <ProjectsGrid />
        </Layout>
      </main>
    </>
  );
};

export default projects;
