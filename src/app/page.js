import Chooseus from "@/components/chooseus";
import Engineers from "@/components/engineers";

import Home1 from "@/components/home1";
import Projects from "@/components/projects";
import Service from "@/components/service";
import Whoweare from "@/components/whoweare";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Home1 />
      <Service />
      <Whoweare />
      <Projects />
      <Engineers />
      <Chooseus />
      
    </>
  );
}
