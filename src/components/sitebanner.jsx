import React from "react";

const Sitebanner = ({ title }) => {
  return (
    <>
      <div className=" relative ">
        <img src="/bg11.jpg" className="h-[50vh] w-full"></img>
        <div className="absolute inset-0 bg-black bg-opacity-50  ">
          <h1 className="text-white text-5xl px-8 mt-52">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Sitebanner;
