import React from "react";

const Home1 = () => {
  return (
    <>
      <div className="relative h-[80vh] w-full">
        <img
          src="/bg2.jpg"
          className="h-[80vh] w-full object-cover"
          alt="Industrial Background"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center ">
          <div className=" px-10 md:px-20 ">
            <div className="text-left text-white">
              <div className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 text-sm mb-4 md:text-xl">
                BEST INDUSTRIAL SERVICES PROVIDER
              </div>
              <h1 className="text-6xl font-bold">
                INDUSTRY <span className="text-yellow-400">PRESS</span>
              </h1>
              <p className="mt-4 text-lg max-w-xl">
                We provides always our best industrial solution for our clients
                and always try to achieve our client&apos;s trust and
                satisfaction.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded">
                  Our Service
                </button>
                <button className="border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-black transition">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
