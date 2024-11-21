"use client";

import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function Electromechanical() {
  const projects = [
    {
      name: "Islamic Development Bank With DMC",
      work: "Design & Built Projects",
      place: "Saudi Arabia  ",
      details:
        "This project, developed in partnership with DMC, focuses on modern functionality and efficient workspaces. It offers spacious interiors and sustainable design elements, creating a sophisticated environment that supports the bank’s operations while promoting comfort and productivity.",
      images: [
        "/Electromechanical/IslamicBank/Picture1.png",
        "/Electromechanical/IslamicBank/Picture2.png",
        "/Electromechanical/IslamicBank/Picture3.png",
      ],
    },
    {
      name: "Electromechanical Project with DMC",
      work: "Design & Built Projects",
      place: "Saudi Arabia  ",
      details:
        "This project integrates advanced electromechanical systems to ensure operational efficiency and sustainability. Developed with DMC, it focuses on high-performance infrastructure, featuring state-of-the-art mechanical, electrical, and plumbing (MEP) solutions tailored for seamless functionality.",
      images: [
        "/Electromechanical/ElectroWithDmc/Picture1.png",
        "/Electromechanical/ElectroWithDmc/Picture2.png",
        "/Electromechanical/ElectroWithDmc/Picture3.png",
        "/Electromechanical/ElectroWithDmc/Picture4.png",
        "/Electromechanical/ElectroWithDmc/Picture5.png",
        "/Electromechanical/ElectroWithDmc/Picture6.png",
        "/Electromechanical/ElectroWithDmc/Picture7.png",
        "/Electromechanical/ElectroWithDmc/Picture8.png",
        "/Electromechanical/ElectroWithDmc/Picture9.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/project/Electromechanical-1.jpg"} title={"Electromechanical projects"} />

      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
        {projects.map((project, index) => (
           <ProjectSection project={project} key={index} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
