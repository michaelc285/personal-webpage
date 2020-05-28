import React, { useEffect } from "react";
import { ScrollToTop } from "../../../utils/WindowUtils";
import MainContent from "./section/MainContent";
import Gallery from "./section/Gallery";
import NextPage from "./section/NextPage";

/**
 * Navbar with img bg
 * quote with img bg
 *
 * About me summary with profile pic
 *
 *
 */
const About = () => {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <div>
      <section className="">
        <MainContent />
      </section>

      <section className="min-h-screen bg-gray-100">
        <Gallery />
      </section>

      <section className="">
        <NextPage />
      </section>
    </div>
  );
};

export default About;
