import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

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

        <Component toggleContact={toggleContact} {...pageProps} />
        <Footer />
        <ContactMe isOpen={isContactOpen} toggleContact={toggleContact} />
      </main>
    </>
  );
}
