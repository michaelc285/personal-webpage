import React, { useEffect } from "react";
import { ScrollToTop } from "../../../utils/WindowUtils";
import MainContent from "./section/MainContent";
import SubContent from "./section/SubContent";

const Resume = () => {
  useEffect(() => {
    ScrollToTop();
  }, []);
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
