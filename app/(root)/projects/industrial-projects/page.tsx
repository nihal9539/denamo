"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function IndustrialProjects() {
  const projects = [
    {
      name: "AACC Company",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "This industrial project reflects the expertise and precision required to support AACC's operations. The design seamlessly integrates functional architecture with operational efficiency, providing customized spaces for industrial processes. The project includes robust infrastructure tailored to meet industry standards, ensuring optimal performance. From planning to execution, our team managed the entire project lifecycle to deliver a high-quality industrial facility.",
      images: [
        "/Industrial/AACCCompany/Picture1.png",
        "/Industrial/AACCCompany/Picture2.png",
        "/Industrial/AACCCompany/Picture3.png",
      ],
    },
    {
      name: "Batterjee Group Warehouse Renovation with Saudi Green Company",
      work: "Design & Built Projects",
      place: "Riyadh, Saudi Arabia",
      details:
        "This renovation project transforms the existing warehouse for the Batterjee Group, incorporating modern design principles and sustainable solutions in collaboration with Saudi Green Company. The upgrade focuses on enhancing storage capacity, optimizing workflow, and integrating eco-friendly technologies. The project ensures the facility aligns with contemporary operational needs while promoting energy efficiency and sustainability.",
      images: [
        "/Industrial/Batterjee/Picture1.png",
        "/Industrial/Batterjee/Picture2.png",
        "/Industrial/Batterjee/Picture3.png",
        "/Industrial/Batterjee/Picture4.png",
        "/Industrial/Batterjee/Picture5.png",
        "/Industrial/Batterjee/Picture6.png",
        "/Industrial/Batterjee/Picture7.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle title={"Industrial projects"} />

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
