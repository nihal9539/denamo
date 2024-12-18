import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";
import React from "react";
const projects = [
  {
    name: "King Abdul Aziz  International Airport Jeddah",
    work: " Detailed Design Projects",
    place: "Jeddah,Saudi Arabia",
    details:
      "We collaborated with Zuhair Fayez Partnership and ADPI to design the King Abdul Aziz International Airport, an iconic gateway serving the cities of Jeddah and Mecca. Located 19 kilometers (12 mi) north of Jeddah, the airport spans a massive area of 105 square kilometers (41 sq mi) and covers a project area of 1,630,000 square meters.The project reflects modern architectural excellence.",
    images: [
      "/projects/airport/Madain/Picture1.jpeg",
      "/projects/airport/Madain/Picture2.jpeg",
      "/projects/airport/Madain/Picture3.jpeg",
    ],
  },
  {
    name: "Madain Saleh International Airport, Al-Ula, Saudi Arabia",
    work: " Detailed Design Projects",
    place: "Al-Ula, Saudi Arabia",
    details:
      "We collaborated with Zuhair Fayez Partnership and ADPI to design the King Abdul Aziz International Airport, an iconic gateway serving the cities of Jeddah and Mecca. Located 19 kilometers (12 mi) north of Jeddah, the airport spans a massive area of 105 square kilometers (41 sq mi) and covers a project area of 1,630,000 square meters.The project reflects modern architectural excellence.",
    images: [
      "/projects/airport/king-abdul-aziz-airport/Picture1.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture2.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture3.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture5.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture6.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture7.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture8.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture10.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture11.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture12.jpeg",
      "/projects/airport/king-abdul-aziz-airport/Picture13.jpeg",
    ],
  },
];
const page = async() => {
  await new Promise(resolve => setTimeout(resolve,2000))

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={'/projects/Airports.jpg'} title={"Airport Projects"} />
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
