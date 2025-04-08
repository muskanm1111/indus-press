import Service from "@/components/service";
import Sitebanner from "@/components/sitebanner";
import React from "react";

const Services = () => {
  return (
    <>
      <Sitebanner title={"Services"} />
      <Service />
      <div className=" flex flex-col md:flex-row py-7 px-10 md:px-20 gap-10 md:py-14 bg-[#f7f7f7]">
        <div className="">
          <h1 className="text-2xl text-black ">Services Details</h1>
          <p className="text-black/50 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            suscipit, inventore aliquid incidunt, quasi error! Natus esse rem
            eaque asperiores eligendi dicta quidem iure, excepturi doloremque
            eius neque autem sint error qui tenetur, modi provident aut, maiores
            laudantium reiciendis expedita. Eligendi
          </p>
          <p className="text-black/50 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            voluptatem officiis quod animi possimus a, iure nam sunt quas
            aperiam non recusandae reprehenderit, nesciunt cumque pariatur totam
            repellendus delectus? Maxime quasi earum nobis, dicta, aliquam
            facere reiciendis, delectus voluptas, ea assumenda blanditiis
            placeat dignissimos quas iusto repellat cumque.
          </p>
          <h1 className="text-black"></h1>
        </div>
        <div className="">
          <h1 className="text-2xl">Why Choose Us?</h1>
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
      </div>
    </>
  );
};

export default Services;
