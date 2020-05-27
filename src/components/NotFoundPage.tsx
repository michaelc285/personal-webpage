import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="text-center mt-32 uppercase flex flex-col items-center mx-0 px-0"
      style={{ border: "1px solid red" }}
    >
      <div className="text-5xl font-black">404 Not Found</div>
      <div className="mt-10">
        <NavLink to="/home">
          <div className="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded  w-48">
            Back To Home
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
