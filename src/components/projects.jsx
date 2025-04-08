import React from "react";

const Projects = () => {
  return (
    <>
      <div className="relative ">
        <img src="/bg1.jpg" className="h-[80vh] w-full"></img>
        <div className="absolute inset-0 bg-black bg-opacity-50 ">
          <div className=" px-10 md:px-20  py-7 md:py-10">
            <h1 className="text-white ">See Our Latest Project</h1>
            <span className="text-4xl font-bold text-orange-400 gap-1 flex">
              Latest<h1 className="text-4xl font-bold text-white">Projects</h1>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-4 md:mt-10 mt-6 gap-5">
              <div className="bg-white">
                <img src="/p1.jpg" className="w-full"></img>
                <div className="py-3 px-3">
                  <p className="text-black font-light">Enter Subtitle here</p>
                  <h1 className="text-black font-bold text-xl">
                    Enter Project Title
                  </h1>
                </div>
              </div>
              <div className="bg-white hidden md:block">
                <img src="/p2.jpg" className="w-full "></img>
                <div className="py-3 px-3">
                  <p className="text-black font-light">Enter Subtitle here</p>
                  <h1 className="text-black font-bold text-xl">
                    Enter Project Title
                  </h1>
                </div>
              </div>
              <div className="bg-white hidden md:block">
                <img src="/p3.jpg" className="w-full"></img>
                <div className="py-3 px-3">
                  <p className="text-black font-light">Enter Subtitle here</p>
                  <h1 className="text-black font-bold text-xl">
                    Enter Project Title
                  </h1>
                </div>
              </div>
              <div className="bg-white hidden md:block">
                <img src="/p5.jpg" className="w-full"></img>
                <div className="py-3 px-3">
                  <p className="text-black font-light">Enter Subtitle here</p>
                  <h1 className="text-black font-bold text-xl">
                    Enter Project Title
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
