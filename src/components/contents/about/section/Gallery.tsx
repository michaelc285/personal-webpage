import React from "react";

//  Images
import jp1 from "../../../../images/japan/jp1.jpg";
import jp3 from "../../../../images/japan/jp3.jpg";
import jp6 from "../../../../images/japan/jp6.jpg";
import jp4 from "../../../../images/japan/jp4.jpg";

const Gallery = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-10 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-2 ">
          Kyoto {""}, Japan ,{" "}
          <span className="inline-block">November 2019</span>
        </h1>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery-japan1"
              className="w-full object-cover h-full object-center block"
              src={jp3}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery-japan2"
              className="w-full object-cover h-full object-center block"
              src={jp1}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery-japan3"
              className="w-full h-full object-cover object-center block"
              src={jp6}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery-japan4"
              className="w-full h-full object-cover object-center block"
              src={jp4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
