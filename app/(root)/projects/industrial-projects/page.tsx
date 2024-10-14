"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function IndustrialProjects() {
  const projects = [
    {
      name: "AACC Company",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:"This industrial project reflects the expertise and precision required to support AACC's operations. The design seamlessly integrates functional architecture with operational efficiency, providing customized spaces for industrial processes. The project includes robust infrastructure tailored to meet industry standards, ensuring optimal performance. From planning to execution, our team managed the entire project lifecycle to deliver a high-quality industrial facility.",
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
      details:"This renovation project transforms the existing warehouse for the Batterjee Group, incorporating modern design principles and sustainable solutions in collaboration with Saudi Green Company. The upgrade focuses on enhancing storage capacity, optimizing workflow, and integrating eco-friendly technologies. The project ensures the facility aligns with contemporary operational needs while promoting energy efficiency and sustainability.",
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
            Industrial projects
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
