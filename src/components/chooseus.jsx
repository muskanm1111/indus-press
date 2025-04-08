import { Building, Pickaxe, Trophy } from "lucide-react";
import React from "react";

const Chooseus = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 px-10 bg-[#f6f8fa] md:py-14 py-7 gap-8">
        <div>
          <h1 className="text-2xl text-black">Why Choose Us?</h1>
          <div className="mt-5">
            <h1 className="text-black bg-yellow-400 py-1 px-2">
              Why this company is best ?
            </h1>
            <p className="text-black/50 py-3 px-2 bg-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              impedit quae repellendus provident dolor iure poss imusven am
              aliquam. Officiis totam ea laborum deser unt vonsess. iure poss
              imusven am aliquamLorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-black bg-yellow-400 py-1 px-2">
              Why this company is best ?
            </h1>
            <p className="text-black/50 py-3 px-2 bg-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              impedit quae repellendus provident dolor iure poss imusven am
              aliquam. Officiis totam ea laborum deser unt vonsess. iure poss
              imusven am aliquamLorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-black font-thin text-2xl ">Our client say </h1>
          <div className="bg-white flex flex-col md:flex-row gap-5 py-3 mt-5">
            <img
              src="/C1.jpg"
              className="rounded-full py-4 w-28 h-28 mx-auto"
            ></img>
            <div className=" py-1 md:py-3">
              <p className="px-4 md:px-0 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                sint, quas, ipsum, exercitationem repellat distinctio
                reprehenderit beatae tempore provident nostrum vitae totam.
              </p>
              <span className="flex px-4 md:px-0 text-orange-400 gap-2 mt-2">
                - Catherine Grace,<h1 className="text-black"> CEO apple.inc</h1>
              </span>
            </div>
          </div>
          <div className="bg-white flex flex-col md:flex-row gap-5 py-3 mt-5">
            <img
              src="/C1.jpg"
              className="rounded-full py-4 w-28 h-28 mx-auto"
            ></img>
            <div className="py-1 md:py-3">
              <p className="px-4 md:px-0 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                sint, quas, ipsum, exercitationem repellat distinctio
                reprehenderit beatae tempore provident nostrum vitae totam.
              </p>
              <span className="flex px-4 md:px-0 text-orange-400 gap-2 mt-2">
                - Catherine Grace,<h1 className="text-black"> CEO apple.inc</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eeeeee] md:px-20 px-10 py-5 gap-28 flex flex-col md:flex-row">
        <img src="/c2.webp"></img>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28 py-8 md:py-32">
          <div>
            <Pickaxe size={40} className=" ml-32 md:ml-14 text-black/70" />
            <h1 className="text-yellow-400 py-4 text-center text-4xl">86</h1>
            <p className="text-black/50 text-center">Workers Employed</p>
          </div>
          <div>
            <Building size={40} className="ml-32 md:ml-11 text-black/70" />
            <h1 className="text-yellow-400 py-4 text-center text-4xl">1452</h1>
            <p className="text-black/50 text-center">Projects Done</p>
          </div>
          <div>
            <Trophy size={40} className="ml-32 md:ml-11 text-black/70" />

            <h1 className="text-yellow-400 py-4 text-center text-4xl">868</h1>
            <p className="text-black/50 text-center">Awards Won</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
