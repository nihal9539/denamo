"use client";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function EducationalProjects() {
  const projects = [
    {
      name: "Swedish International School",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "This project delivers a thoughtfully designed educational facility, blending Scandinavian simplicity with functional learning spaces. The school features modern classrooms, interactive learning areas, and a student play area, fostering a dynamic and engaging environment for students.",
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
      name: "King Khalid University in BISHA",
      work: "Design & Built Projects",
      place: "BISHA, Saudi Arabia  ",
      details:"",
      images: [
        "/Educational/king-khalid/Picture1.jpeg",
        "/Educational/king-khalid/Picture2.jpeg",
        "/Educational/king-khalid/Picture3.jpeg",
        "/Educational/king-khalid/Picture4.jpeg",
        "/Educational/king-khalid/Picture5.jpeg",
        "/Educational/king-khalid/Picture6.jpeg",
        "/Educational/king-khalid/Picture7.jpeg",
        "/Educational/king-khalid/Picture8.jpeg",
        "/Educational/king-khalid/Picture9.jpeg",
        "/Educational/king-khalid/Picture10jpegg",
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
      details:
        "This project features state-of-the-art facilities designed for creative media education. It includes advanced studios, modern classrooms, and collaborative spaces to support aspiring professionals. The exterior incorporates extensive glass elements, creating a bright and inviting atmosphere while seamlessly blending with the surrounding environment.",
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
      details:
        "This project encompasses the structural design and construction of TWA Academy, focusing on modern educational facilities. The design prioritizes functionality and aesthetics, creating spacious learning environments. The academy is equipped with advanced infrastructure and features sustainable materials, ensuring durability and energy efficiency in its construction.",
      images: [
        "/Educational/TWA/Picture1.png",
        "/Educational/TWA/Picture2.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/project/Educational-Projects.jpg"} title={"Educational projects"} />

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
