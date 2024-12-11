import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";
import React from "react";
const projects = [
  {
    name: "King Abdul-Aziz International Airport Mosque",
    work: " Detailed Design Projects",
    place: "Jeddah,Saudi Arabia",
    details: "We collaborated with Zuhair Fayez Partnership, Architect Loai Mattar, ADPI, and GACA to create the King Abdul-Aziz International Airport Mosque, a landmark in Jeddah, Saudi Arabia. Our team worked meticulously to blend traditional Islamic patterns with modern construction techniques, ensuring the mosque reflects its cultural and spiritual significance. Strategically located as a gateway to Makkah and Madinah, the mosque stands as an iconic representation of Islamic architecture, embodying both tradition and innovation.",
    images: [
      "/projects/mosque-projects/king-abdul-aziz/Picture1.jpeg",
      "/projects/mosque-projects/king-abdul-aziz/Picture2.jpeg",
      "/projects/mosque-projects/king-abdul-aziz/Picture3.jpeg",
      "/projects/mosque-projects/king-abdul-aziz/Picture4.jpeg",
      "/projects/mosque-projects/king-abdul-aziz/Picture6.jpeg",
      "/projects/mosque-projects/king-abdul-aziz/Picture7.jpeg",
    ],
  },
  {
    name: "King Abdullah Civic Center Mosque",
    work: " Detailed Design Projects",
    place: "Dammam,Saudi Arabia",
    details: "We partnered with Zuhair Fayez Partnership, AI Architecture LLC USA, and the Dammam Municipality to deliver the detailed design for the King Abdullah Civic Center Mosque. Located in Dammam, Saudi Arabia, this mosque exemplifies a fusion of traditional Islamic architecture with modern design elements. Our collaborative effort ensured a structure that reflects cultural identity while embracing innovation.",
    images: [
      "/projects/mosque-projects/king-abdulla/Picture1.jpeg",

    ],
  },
  {
    name: "slamic Center in Argentina",
    work: " Detailed Design Projects",
    place: "Dammam,Saudi Arabia",
    details: "We undertook the detailed design of the Islamic Center in Argentina, focusing on creating a space that embodies the essence of Islamic architecture while harmonizing with its surroundings. The design integrates traditional Islamic motifs with modern functionality, providing a cultural and spiritual hub for the community. This project reflects our commitment to crafting meaningful and iconic structures that resonate with cultural and religious significance.",
    images: [
      "/projects/mosque-projects/Islamic-center-argentina/Picture1.jpeg",
      "/projects/mosque-projects/Islamic-center-argentina/Picture2.jpeg",
      "/projects/mosque-projects/Islamic-center-argentina/Picture3.jpeg",
      "/projects/mosque-projects/Islamic-center-argentina/Picture4.jpeg",
      "/projects/mosque-projects/Islamic-center-argentina/Picture5.jpeg",
    ],
  },
];
const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/projects/Mosque.jpg"} title={"Mosque Projects"} />
      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
            <ProjectSection project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
