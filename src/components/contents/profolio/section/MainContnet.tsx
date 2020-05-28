import React from "react";

const MainContnet = () => {
  return (
    <div className="font-mono container mx-auto px-5 py-24">
      {/* Title */}
      <div className="flex flex-col text-center w-full mb-10 ">
        <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900  uppercase">
          Projects
        </h1>
      </div>
      {/* Project Items' Boxes */}
      <div className="flex flex-wrap -m-4">
        {/* Project  */}
        <div className="lg:w-1/3 md:w-1/2 p-4 ">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-400 ">
              <span className=" text-4xl text text-red-500 select-none">
                Java
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                crud_system
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project Management Application
              </h1>
              <p className="leading-relaxed">
                Java / MySQL application to imitate project management system.
                Implemented graphical user interface for CRUD functions to
                manage project and authorization
              </p>
              <div className="py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Java
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #J Swing
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
                  #MySQL
                </span>
              </div>
              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="https://github.com/michaelc285/crud_system"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
        {/* Project  */}
        <div className="lg:w-1/3 md:w-1/2 p-4">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-blue-400">
              <span className=" text-4xl text text-white select-none">
                React
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                mern-ecommerce
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                MERN E-commerce Web App
              </h1>
              <p className="leading-relaxed">
                A modern e-commerce web app in React / Redux / TypeScript /
                Express / MongoDB. Implemented OAuth 2.0, RESTful API, MVC
                Design Pattern
              </p>
              <div className="py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #MERN Stack
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Redux
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ">
                  #TypeScript
                </span>
              </div>
              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="https://github.com/michaelc285/mern-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
        {/* Project  */}

        <div className="lg:w-1/3 md:w-1/2 p-4">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center justify-center bg-yellow-200 text-center">
              <span className=" text-4xl text text-blue-600 select-none">
                Machine Learning
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Final year project / EcoSta2019 Conference Poster
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Identification of Pairs trading opportunities using copula-based
                conditional probabilities and machine learning models
              </h1>
              <p className="leading-relaxed">
                Copula is a multivariate probability distribution function that
                allows a separate estimation of marginal ...
              </p>
              <div className="py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #Pairs Trading
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #ML
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2 ">
                  #Python
                </span>
              </div>
              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="https://drive.google.com/file/d/1Zjn5tasXamyLQhpKrlykpn-Hm10Rzypi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
        {/* Project  */}
        <div className="lg:w-1/3 md:w-1/2 p-4">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-indigo-600">
              <span className=" text-4xl text text-gray-200 select-none">
                PHP
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                WebBlogProject
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Blog
              </h1>
              <p className="leading-relaxed">
                A traditional blog website with PHP and MySQL. Implemented both
                user and admin stages.
              </p>
              <div className="py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #PHP
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #MySQL
                </span>
              </div>
              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="https://github.com/michaelc285/WebBlogProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
        {/* Project  */}
        <div className="lg:w-1/3 md:w-1/2 p-4">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-green-400">
              <span className=" text-4xl text text-gray-200 select-none">
                Coming Soon
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0 select-none">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Title
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit
              </p>
              <div className="py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #
                </span>
              </div>
              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
        {/* Project  */}
        <div className="lg:w-1/3 md:w-1/2 p-4">
          <div className="flex relative" style={{ height: "30rem" }}>
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-pink-400">
              <span className=" text-4xl text text-gray-200 select-none">
                Coming Soon
              </span>
            </div>
            {/* Under */}
            <div className="font-sans px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0 select-none">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Sub Title
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Title
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit
              </p>

              <a
                className="mt-3 text-indigo-500 inline-flex items-center"
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project  End */}
      </div>
    </div>
  );
};

export default MainContnet;
