import ContactForm from "@/components/contact/ContactForm";
import AnimatedText from "@/components/global/AnimatedText";
import Layout from "@/components/global/Layout";
import React from "react";
import Head from "next/head";

const pageTitle = "Jaron S | Contact Page";
const pageDescription = "You can contact me here.";
const animatedTextContent = "Contact Me";

const contact = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 !mt-0 lg:pt-8">
          <AnimatedText text={animatedTextContent} className="my-16" />
          <ContactForm />
        </Layout>
      </main>
    </>
  );
};

export default contact;
