import Chooseus from "@/components/chooseus";
import Sitebanner from "@/components/sitebanner";
import Whoweare from "@/components/whoweare";
import React from "react";

const About = () => {
  return (
    <>
      <Sitebanner title={"About"} />
      <Whoweare />
      <Chooseus />
    </>
  );
};

export default About;
