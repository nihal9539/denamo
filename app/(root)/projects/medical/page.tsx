"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function MedicalProjects() {
  const projects = [
    {
      name: "King Road Hospital ",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:
        "Covering 50,000 square meters, King Road Hospital exemplifies cutting-edge healthcare design with modern infrastructure. Our team managed the entire design and construction process, ensuring functionality, patient comfort, and operational efficiency.",
      images: [
        "/Medical/KingRoadHospital/Picture2.png",
        "/Medical/KingRoadHospital/Picture1.png",
        "/Medical/KingRoadHospital/Picture10.png",
        "/Medical/KingRoadHospital/Picture4.png",
        "/Medical/KingRoadHospital/Picture11.png",
        "/Medical/KingRoadHospital/Picture12.png",
        "/Medical/KingRoadHospital/Picture14.png",
        "/Medical/KingRoadHospital/Picture15.png",
        "/Medical/KingRoadHospital/Picture5.png",
        "/Medical/KingRoadHospital/Picture6.png",
        "/Medical/KingRoadHospital/Picture7.png",
        "/Medical/KingRoadHospital/Picture8.png",
        "/Medical/KingRoadHospital/Picture9.png",
      ],
    },
    {
      name: "AZAL Medical Clinics & Day Surgery Projects",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:
        "Spanning 2,750 square meters, AZAL Medical Clinics and Day Surgery Center is designed to offer advanced medical services with a focus on patient well-being. Our team handled the complete design and construction, ensuring modern healthcare standards, functional spaces, and patient comfort.",
      images: [
        "/Medical/SHAHINI/Picture4.png",
        "/Medical/SHAHINI/Picture1.png",
        "/Medical/SHAHINI/Picture2.png",
        "/Medical/SHAHINI/Picture3.png",
        "/Medical/SHAHINI/Picture5.png",
        "/Medical/SHAHINI/Picture6.png",
        "/Medical/SHAHINI/Picture7.png",
        "/Medical/SHAHINI/Picture8.png",
        "/Medical/SHAHINI/Picture9.png",
      ],
    },
    {
      name: "Solaris Medical Clinics & Day Surgery Projects",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details:
        "A specialized dental hospital designed to meet modern healthcare needs, offering advanced treatment rooms, surgery units, and patient care facilities. Our team handled both the design and construction, ensuring a functional and patient-friendly environment tailored for dental care.",
      images: [
        "/Medical/SHAHINI/Picture4.png",
        "/Medical/SHAHINI/Picture1.png",
        "/Medical/SHAHINI/Picture2.png",
        "/Medical/SHAHINI/Picture3.png",
        "/Medical/SHAHINI/Picture5.png",
        "/Medical/SHAHINI/Picture6.png",
        "/Medical/SHAHINI/Picture7.png",
        "/Medical/SHAHINI/Picture8.png",
        "/Medical/SHAHINI/Picture9.png",
      ],
    },
    {
      name: "ONSOR ALJAMAL MEDICAL",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details:
        "A former 600-square-meter commercial showroom was transformed into a modern medical facility. Our team managed the design and construction, delivering functional healthcare spaces optimized for patient care and efficient operations.",
      images: [
        "/Medical/SHAHINI/Picture4.png",
        "/Medical/SHAHINI/Picture1.png",
        "/Medical/SHAHINI/Picture2.png",
        "/Medical/SHAHINI/Picture3.png",
        "/Medical/SHAHINI/Picture5.png",
        "/Medical/SHAHINI/Picture6.png",
        "/Medical/SHAHINI/Picture7.png",
        "/Medical/SHAHINI/Picture8.png",
        "/Medical/SHAHINI/Picture9.png",
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
            Medical projects
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
