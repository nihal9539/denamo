"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function OfficeProjects() {
  const projects = [
    {
      name: "Swedish International School",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details: "This project delivers a thoughtfully designed educational facility, blending Scandinavian simplicity with functional learning spaces. The school features modern classrooms, interactive learning areas, and a student play area, fostering a dynamic and engaging environment for students.",
      images: [
        "/Educational/Swedish/Picture1.png",
        "/Educational/Swedish/Picture2.png",
        "/Educational/Swedish/Picture3.png",
        "/Educational/Swedish/Picture4.png",
        "/Educational/Swedish/Picture5.png",
        "/Educational/Swedish/Picture6.png",
        "/Educational/Swedish/Picture7.png",
        "/Educational/Swedish/Picture8.png",
        "/Educational/Swedish/Picture9.png",
        "/Educational/Swedish/Picture10.png",
      ],
    }
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
            Educational projects
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
