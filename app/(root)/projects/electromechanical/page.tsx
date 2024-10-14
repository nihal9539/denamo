"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function Electromechanical() {
  const projects = [
    {
      name: "Islamic Development Bank With DMC",
      work: "Design & Built Projects",
      place: "Saudi Arabia  ",
      details:"This project, developed in partnership with DMC, focuses on modern functionality and efficient workspaces. It offers spacious interiors and sustainable design elements, creating a sophisticated environment that supports the bank’s operations while promoting comfort and productivity.",
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
      details:"This project integrates advanced electromechanical systems to ensure operational efficiency and sustainability. Developed with DMC, it focuses on high-performance infrastructure, featuring state-of-the-art mechanical, electrical, and plumbing (MEP) solutions tailored for seamless functionality.",
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
      <div className="w-full relative">
        <Image
          src="/community/img.jpg"
          alt="Projects Banner"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl uppercase lg:text-6xl font-bold text-center text-white shadow-text">
            Electromechanical projects
          </h1>
        </div>
      </div>
      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center p-10 max-md:px-5 py-14 gap-4 ${
                index % 2 === 0
                  ? "md:flex-row text-gray-800"
                  : "md:flex-row-reverse bg-gray-700 !text-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="w-full md:w-1/2">
                <ImageGallery images={project.images} />
              </motion.div>
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h2
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <div className="text-2xl  font-bold flex max-md:text-sm  justify-between items-center max-md:items-start  ">
                    <span className="w-2/3">{project.name}</span>
                    <span className="w-1/3 text-center text-base max-md:text-xs  ">
                      - {project.work}
                    </span>
                  </div>
                  <span>{project.place}</span>
                </motion.h2>
                <motion.p
                  className=" text-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {project.details}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
