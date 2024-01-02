import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import ContactMe from "@/components/contact/ContactMe";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-sans bg-light dark:bg-dark flex flex-col w-full overflow-hidden`}
      >
        <NavBar />
        <Component setIsContactOpen={setIsContactOpen} {...pageProps} />
        <Footer setIsContactOpen={setIsContactOpen} />
        <ContactMe isOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
      </main>
    </>
  );
}
