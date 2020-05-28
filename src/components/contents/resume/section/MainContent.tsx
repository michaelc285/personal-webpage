import React from "react";

const MainContent = () => {
  return (
    <div className="container mx-auto ">
      <div className="px-12 sm:px-6  py-12 flex flex-col items-center">
        <div className="mb-10 grid grid-cols-3 w-full">
          {/* Technologies */}
          <div className=" col-span-3 sm:col-span-1 text-4xl font-thin mb-5">
            Technologies
          </div>
          <div className=" col-span-3 sm:col-span-2">
            <span className="text-base uppercase font-semibold">
              Experience with
            </span>
            <ul className="ml-6 text-lg list-disc">
              <li>HTML5 / CSS3</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Express.js</li>
              <li>Version Contorl ( Git )</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>C</li>
              <li>PHP</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Material-UI</li>
              <li>Base SAS</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
        {/* Technologies */}
        <div className="mb-10 grid grid-cols-3 w-full">
          <div className=" col-span-3 sm:col-span-1 text-4xl font-thin">
            Languages
          </div>
          <div className=" col-span-3 sm:col-span-2">
            <div className="mt-5 text-xl font-normal">
              Chinese ( Cantonese, Mandarin ) , English , Japanese{" "}
              <span className="text-gray-500">( Limited )</span>
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="mb-10 grid grid-cols-3 w-full">
          <div className=" col-span-3 sm:col-span-1 text-4xl font-thin mb-5">
            Work Experience
          </div>
          <div className=" col-span-3 sm:col-span-2">
            {/* Company Info*/}
            {/* AXA */}
            <div className="text-base uppercase font-semibold">
              Data Entry Clerk, part-time
            </div>
            <div className="text-xl  font-semibold">
              AXA China Region Insurance Company Limited, HK, May 2017 - July
              2017
            </div>
            <p className="text-lg font-light">
              This allowed me to get hands-on experience to work with the team.
              During my time there, I successfully assisted the company to
              migrate the data from the old system to a new one before the
              deadline. Besides I had also allocated claim forms to colleagues
              based on the supervisor’s guideline.
            </p>
          </div>
        </div>
        {/* Activites */}
        <div className="mb-10 grid grid-cols-3 w-full">
          <div className=" col-span-3 sm:col-span-1 text-4xl font-thin mb-5">
            Activites
          </div>
          <div className=" col-span-3 sm:col-span-2">
            {/* Company Info*/}
            {/* EcoSta 2019 Conference */}
            <div className="text-xl uppercase font-semibold">
              The 3rd International Conference on Econometrics and Statistics
            </div>
            <div className="text-xl font-light">
              Poster Presentation ({" "}
              <a
                href="http://cmstatistics.org/EcoSta2019/BoA.php"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ref. EP0840
              </a>{" "}
              ), TW, June 2019
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="grid grid-cols-3 w-full">
          <div className=" col-span-3 sm:col-span-1 text-4xl font-thin mb-5">
            Education
          </div>
          <div className=" col-span-3 sm:col-span-2">
            {/* University */}
            <section className="mb-5">
              <span className="text-lg uppercase font-semibold">
                Bachelor of Science with Honours in Statistical Analysis and
                Data Science
              </span>
              <p className="text-xl font-light">
                The Open University of Hong Kong, September 2017 - August 2019
              </p>
            </section>
            {/* Associate Degree */}
            <section>
              <span className="text-lg uppercase font-semibold">
                Associate of Engineering Computer Science Theme
              </span>
              <p className="text-xl font-light">
                HKU SPACE Community College, September 2015 - August 2017
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
