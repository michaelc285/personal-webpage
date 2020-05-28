import React from "react";
import { EMAIL_ADDRESS, LINKEDIN_LINK } from "../../../../path";

const SubContent = () => {
  return (
    <div className="container mx-auto">
      <div className="py-24 px-16 ">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl  lg:text-4xl font-semibold mb-5">
            How Can I Reach Michael ?
          </h1>
          <p className="text-2xl sm:text-3xl mb-10">
            Thank you for your time. Now you have a basic understanding of
            Michael Cheng. If you think I am a good fit for your business.
            Contact Me Today.
          </p>

          <a
            className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-5"
            href={`mailto:${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubContent;
