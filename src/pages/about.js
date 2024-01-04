import Head from "next/head";

import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import AboutGrid from "@/components/about/AboutGrid";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";

const pageTitle = "Jaron S | About Page";
const pageDescription = "Learn about my journey through web & mobile development.";
const animatedTextContent = "Intuition Meets Innovation";

const about = ({ setIsContactOpen }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 !mt-0 lg:pt-8">
          <AnimatedText text={animatedTextContent} className="my-16" />
          <AboutGrid setIsContactOpen={setIsContactOpen} />
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
