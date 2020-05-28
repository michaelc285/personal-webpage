import React from "react";
import MainContent from "./content/MainContent";
import SubContent from "./content/SubContent";

const Resume = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 min-w-full">
        <MainContent />
      </div>
      <div className="bg-white w-full">
        <SubContent />
      </div>
    </div>
  );
};

export default Resume;
