import React from "react";

const Whoweare = () => {
  return (
    <>
      <div className="bg-[#f7f7f7]  p-10 md:py-20 md:px-20 gap-10 flex flex-col md:flex-row">
        <div className="flex-row md:w-[50%]">
          <h1 className="text-2xl text-black font-medium">Who We Are?</h1>
          <p className="text-gray-700 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis
            repudiandae nostrum quibusdam! elit Perferendis repudiandae
          </p>
          <p className="text-gray-400 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut minus
            commodi, illo, enim nemo illum repellendus accusantium maiores
            delectus doloribus alias ea quisquam cum nulla a volupta delectus
            doloribus alias ea quisquam cum nulla a voluptatum nobis eius,
            deleniti dicta molestiae atque. Exercitationem odit dolor cumque
            facilis natus recusandae id, dolorum modi ducimus minus.
          </p>
          <div className="flex gap-4 mt-5">
            <button className="w-32 h-8 bg-orange-400 text-white text-center">
              Read More
            </button>
            <button className="w-32 h-8 bg-white text-black text-center">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <img src="/ab1.jpg" className="w-full"></img>
            <h1 className="text-black font-medium mt-2">Our Mission</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <button className="text-orange-400 text-xs">View Details→</button>
          </div>
          <div>
            <img src="/ab2.jpg" className="w-full"></img>
            <h1 className="text-black font-medium mt-2">Our Mission</h1>
            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <button className="text-orange-400 text-xs">View Details→</button>
          </div>
          <div>
            <img src="/ab3.jpg" className="w-full"></img>
            <h1 className="text-black font-medium mt-2">Our Mission</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <button className="text-orange-400 text-xs">View Details→</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whoweare;
