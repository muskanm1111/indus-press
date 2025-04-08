import React from "react";

const Engineers = () => {
  return (
    <>
      <div className="md:px-20 md:py-16 p-10  bg-white">
        <h1 className="text-black ">How Can We Help You</h1>
        <span className="text-orange-400 flex font-bold text-3xl gap-1 uppercase">
          Our<h1 className="font-bold text-3xl text-black"> Engineers</h1>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 md:mt-10">
          <div className="relative ">
            <img src="/E1.jpg" className="w-full"></img>
            <div className="absolute bg-[#f6f8fa] border bottom-0 w-full">
              <h1 className="text-black font-thin text-center mt-2">
                Virat kholi
              </h1>
              <p className="text-black text-center py-1 text-xs">
                Civil Engineer
              </p>
            </div>
          </div>
          <div className="relative ">
            <img src="/E2.jpg" className="w-full"></img>
            <div className="absolute bg-[#f6f8fa] border bottom-0 w-full">
              <h1 className="text-black font-thin text-center mt-2">
                Virat kholi
              </h1>
              <p className="text-black text-center py-1 text-xs">
                Civil Engineer
              </p>
            </div>
          </div>
          <div className="relative ">
            <img src="/E3.jpg" className="w-full"></img>
            <div className="absolute bg-[#f6f8fa] border bottom-0 w-full">
              <h1 className="text-black font-thin text-center mt-2">
                Virat kholi
              </h1>
              <p className="text-black text-center py-1 text-xs">
                Civil Engineer
              </p>
            </div>
          </div>
          <div className="relative ">
            <img src="/E4.jpg" className="w-full"></img>
            <div className="absolute bg-[#f6f8fa] border bottom-0 w-full">
              <h1 className="text-black font-thin text-center mt-2">
                Virat kholi
              </h1>
              <p className="text-black text-center py-1 text-xs">
                Civil Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineers;
