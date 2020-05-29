import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_PATH } from "../../../../path";

const NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="py-24 px-16 text-center  flex flex-col items-center">
        <span className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-5">
          Who Are You?
        </span>
        <p className="text-2xl sm:text-3xl mb-10">
          To know more about Michael Cheng.
        </p>

        <NavLink to={ABOUT_PATH}>
          <div className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View More
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NextPage;
