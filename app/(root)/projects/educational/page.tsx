"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function EducationalProjects() {
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
    },
    {
      name: "NU’N ACADEMY",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:
        "NU'N Academy offers a modern educational environment with state-of-the-art classrooms and recreational spaces. The facility also includes a dedicated play area, providing students with opportunities for outdoor activities and physical development, enhancing their learning experience.",
      images: [
        "/Educational/NUNACADEMY/Picture1.png",
        "/Educational/NUNACADEMY/Picture5.png",
        "/Educational/NUNACADEMY/Picture7.png",
        "/Educational/NUNACADEMY/Picture2.png",
        "/Educational/NUNACADEMY/Picture6.png",
        "/Educational/NUNACADEMY/Picture3.png",
        "/Educational/NUNACADEMY/Picture4.png",
        "/Educational/NUNACADEMY/Picture8.png",
        "/Educational/NUNACADEMY/Picture9.png",
        "/Educational/NUNACADEMY/Picture10.png",
      ],
    },
    {
      name: "SAE INSTITUTE",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:"This project features state-of-the-art facilities designed for creative media education. It includes advanced studios, modern classrooms, and collaborative spaces to support aspiring professionals. The exterior incorporates extensive glass elements, creating a bright and inviting atmosphere while seamlessly blending with the surrounding environment.",
      images: [
        "/Educational/SaeInstitute/Picture1.png",
        "/Educational/SaeInstitute/Picture5.png",
        "/Educational/SaeInstitute/Picture3.png",
        "/Educational/SaeInstitute/Picture2.png",
      
      ],
    },
    {
      name: "TWA ACADEMY Structural works with IHCC",
      work: "Design & Built Projects",
      place: "KAEC, SAUDI ARABIA ",
      details:"This project encompasses the structural design and construction of TWA Academy, focusing on modern educational facilities. The design prioritizes functionality and aesthetics, creating spacious learning environments. The academy is equipped with advanced infrastructure and features sustainable materials, ensuring durability and energy efficiency in its construction.",
      images: [
        "/Educational/TWA/Picture1.png",
        "/Educational/TWA/Picture2.png",
      
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
