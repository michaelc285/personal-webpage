import React from "react";

/**
 * Navbar with img bg
 * quote with img bg
 *
 * About me summary with profile pic
 *
 *
 */
const About = () => {
  const quote = (
    <div className="bg-blue p-10">
      <section className="mx-auto font-extrabold text-teal-100 text-4xl">
        <p>
          “To become really good at anything, you have to practice and repeat,
          practice and repeat, until the technique becomes intuitive.”
        </p>
        <span>- Paulo Coelho</span>
      </section>
    </div>
  );

  return <div>{quote}</div>;
};

export default About;
