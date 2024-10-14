"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function OfficeProjects() {
  const projects = [
    {
      name: "SHAHINI HQ OFFICE PROJECT ",
      work: "Design & Built Projects",
      place: "Saudi Arabia  ",
      details:
        "The Shahini HQ Office Project features a modern interior design that promotes productivity and collaboration. This state-of-the-art office includes a spacious conference room equipped with the latest technology, fostering an environment for effective communication and meetings. The overall design balances functionality with aesthetics, creating a professional atmosphere tailored for contemporary business needs.",
      images: [
        "/office/SHAHINI/Picture4.png",
        "/office/SHAHINI/Picture1.png",
        "/office/SHAHINI/Picture2.png",
        "/office/SHAHINI/Picture3.png",
        "/office/SHAHINI/Picture5.png",
        "/office/SHAHINI/Picture6.png",
        "/office/SHAHINI/Picture7.png",
        "/office/SHAHINI/Picture8.png",
        "/office/SHAHINI/Picture9.png",
      ],
    },
    {
      name: "Saudi Airline Catering Staff Canteen & Office Spaces",
      work: "Design & Built Projects",
      place: "Saudi Arabia  ",
      details:
        "The Saudi Airline Catering Staff Canteen & Office Spaces project, designed and built by our team, provides a comfortable and functional environment for catering staff. The design includes a spacious canteen area that promotes relaxation and social interaction, complemented by well-equipped office spaces for administrative tasks. With an emphasis on practicality and modern design, this project aims to enhance staff welfare and productivity within the catering service industry.",
      images: [
        "/office/SaudiAirline/Picture1.png",
        "/office/SaudiAirline/Picture5.png",
        "/office/SaudiAirline/Picture3.png",
        "/office/SaudiAirline/Picture2.png",
        "/office/SaudiAirline/Picture4.png",
        "/office/SaudiAirline/Picture6.png",
        "/office/SaudiAirline/Picture7.png",
        "/office/SaudiAirline/Picture8.png",
        "/office/SaudiAirline/Picture9.png",
      ],
    },
    {
      name: "BAKHSH HQ OFFICE PROJECT",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "The BAKHSH HQ Office Project, designed and built by our team, features a modern and dynamic workspace tailored for productivity and collaboration. The office incorporates open-plan layouts, private meeting rooms, and ergonomic workstations, ensuring a comfortable environment for employees. With stylish interiors and state-of-the-art facilities, this project reflects BAKHSH's commitment to fostering innovation and efficiency within the workplace.",
      images: [
        "/office/BAKHSH/Picture4.png",
        "/office/BAKHSH/Picture1.png",
        "/office/BAKHSH/Picture5.png",
        "/office/BAKHSH/Picture2.png",
        "/office/BAKHSH/Picture3.png",  
      ],
    },
    {
      name: "BATTERJEE HQ OFFICE PROJECT",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "The BATTERJEE HQ Office Project, designed and built by our team, showcases a contemporary workspace that emphasizes collaboration and innovation. This modern office features open work areas, a spacious conference room, and dedicated manager rooms, providing both privacy and accessibility for effective teamwork. The vibrant interior design promotes a dynamic work culture, while cutting-edge technology and sustainable practices reflect BATTERJEE's commitment to excellence and employee well-being in a productive environment.",
      images: [
        "/office/Batterjee/Picture4.png",
        "/office/Batterjee/Picture1.png",
        "/office/Batterjee/Picture3.png",   
        "/office/Batterjee/Picture2.png",
      
      ],
    },
    {
      name: "HRH PRINCE OFFICE PROJECT",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "The HRH Prince Office Project exemplifies luxury and sophistication in workspace design. Our team expertly crafted a premium interior that blends elegance with functionality, featuring high-end finishes and state-of-the-art technology. The office includes a spacious conference room designed for high-profile meetings, complete with luxurious furnishings and advanced audiovisual systems. This project reflects the distinguished standards expected in a royal office, providing an inspiring environment that fosters productivity and prestige.",
      images: [
          "/office/HRHPrince/Picture1.png",
          "/office/HRHPrince/Picture2.png",
          "/office/HRHPrince/Picture4.png",
        "/office/HRHPrince/Picture3.png",

      ],
    },
    {
      name: "NATIONAL COMMERCIAL BANK HQ OFFICE PROJECT",
      work: "Design & Built Projects",
      place: "Riyad, Saudi Arabia  ",
      details:
        "The National Commercial Bank HQ Office Project features modern workplace design with spacious conference rooms equipped with advanced technology, inviting dining areas, and a refined manager's office. Our team delivered high-quality design solutions tailored to the needs of this prestigious financial institution.",
      images: [
          "/office/NationalBank/Picture2.png",
          "/office/NationalBank/Picture5.png",
          "/office/NationalBank/Picture3.png",
          "/office/NationalBank/Picture1.png",
          "/office/NationalBank/Picture6.png",
          "/office/NationalBank/Picture7.png",
          "/office/NationalBank/Picture4.png",
        "/office/NationalBank/Picture8.png",
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
