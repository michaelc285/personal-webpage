import React from "react";
import Quote from "./section/Quote";
import MainContnet from "./section/MainContnet";

const Profolio = () => {
  return (
    <div className="w-full">
      <section className=" py-24 px-3">
        <Quote />
      </section>
      <section className=" bg-gray-100">
        <MainContnet />
      </section>
    </div>
  );
};

export default Profolio;
