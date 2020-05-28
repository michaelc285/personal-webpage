import React, { useEffect } from "react";
import { ScrollToTop } from "../../../utils/WindowUtils";
import Quote from "./section/Quote";
import MainContnet from "./section/MainContnet";
import NextPage from "./section/NextPage";

const Profolio = () => {
  useEffect(() => {
    ScrollToTop();
  }, []);
  return (
    <div className="w-full">
      <section className="py-40 ">
        <Quote />
      </section>
      <section className=" bg-gray-100 min-h-screen">
        <MainContnet />
      </section>
      <section>
        <NextPage />
      </section>
    </div>
  );
};

export default Profolio;
