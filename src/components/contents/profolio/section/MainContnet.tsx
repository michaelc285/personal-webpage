import React from "react";

const MainContnet = () => {
  return (
    <section className="container mx-auto px-5 py-24">
      {/* Title */}
      <div className="flex flex-col text-center w-full mb-10 ">
        <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900 font-serif">
          Projects
        </h1>
      </div>
      {/* Project Items' Boxes */}
      <div className="flex flex-wrap -m-4">
        {/* Project  */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">
                Java
              </span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">
                React
              </span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">PHP</span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">
                Machine Learning
              </span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">
                Coming Soon
              </span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            {/* Cover */}
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700">
              <span className="font-mono text-4xl text text-gray-200">
                Coming Soon
              </span>
            </div>
            {/* Under */}
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Shooting Stars
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
    </section>
  );
};

export default MainContnet;
