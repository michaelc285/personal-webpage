import React from "react";
import { NavLink } from "react-router-dom";
import { PROFOLIO_PATH } from "../path";

const NotFoundPage = () => {
  return (
    <div className="h-screen">
      <div className="cotainer mx-auto">
        <div className="text-center py-64 uppercase flex flex-col items-center mx-0 px-0">
          <div className="text-5xl font-black">404 Not Found</div>
          <div className="mt-10">
            <NavLink to={PROFOLIO_PATH}>
              <div className="bg-transparent hover:bg-gray-800 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded  w-48">
                Back To Profolio
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
