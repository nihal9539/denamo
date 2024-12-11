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
        "/projects/educational/Swedish/Picture1.png",
        "/projects/educational/Swedish/Picture2.png",
        "/projects/educational/Swedish/Picture3.png",
        "/projects/educational/Swedish/Picture4.png",
        "/projects/educational/Swedish/Picture5.png",
        "/projects/educational/Swedish/Picture6.png",
        "/projects/educational/Swedish/Picture7.png",
        "/projects/educational/Swedish/Picture8.png",
        "/projects/educational/Swedish/Picture9.png",
        "/projects/educational/Swedish/Picture10.png",
      ],
    },
    {
      name: "King Khalid University in BISHA",
      work: "Design & Built Projects",
      place: "BISHA, Saudi Arabia  ",
      details:"King Khalid University in Bisha is a prominent educational institution in Saudi Arabia. This project showcases our expertise in designing and constructing high-quality, functional spaces tailored for academic excellence. Located in Bisha, the facility integrates modern architectural elements with traditional Saudi aesthetics, providing a conducive environment for learning and development. Our work involved end-to-end project execution, including planning, design, and construction, ensuring the campus meets international standards for educational institutions.",
      images: [
        "/projects/educational/king-khalid/Picture1.jpeg",
        "/projects/educational/king-khalid/Picture2.jpeg",
        "/projects/educational/king-khalid/Picture3.jpeg",
        "/projects/educational/king-khalid/Picture4.jpeg",
        "/projects/educational/king-khalid/Picture5.jpeg",
        "/projects/educational/king-khalid/Picture6.jpeg",
        "/projects/educational/king-khalid/Picture7.jpeg",
        "/projects/educational/king-khalid/Picture8.jpeg",
        "/projects/educational/king-khalid/Picture9.jpeg",
        "/projects/educational/king-khalid/Picture10jpegg",
      ],
    },
    {
      name: "NU’N ACADEMY",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:
        "NU'N Academy offers a modern educational environment with state-of-the-art classrooms and recreational spaces. The facility also includes a dedicated play area, providing students with opportunities for outdoor activities and physical development, enhancing their learning experience.",
      images: [
        "/projects/educational/NUNACADEMY/Picture1.png",
        "/projects/educational/NUNACADEMY/Picture5.png",
        "/projects/educational/NUNACADEMY/Picture7.png",
        "/projects/educational/NUNACADEMY/Picture2.png",
        "/projects/educational/NUNACADEMY/Picture6.png",
        "/projects/educational/NUNACADEMY/Picture3.png",
        "/projects/educational/NUNACADEMY/Picture4.png",
        "/projects/educational/NUNACADEMY/Picture8.png",
        "/projects/educational/NUNACADEMY/Picture9.png",
        "/projects/educational/NUNACADEMY/Picture10.png",
      ],
    },
    {
      name: "SAE INSTITUTE",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia",
      details:
        "This project features state-of-the-art facilities designed for creative media education. It includes advanced studios, modern classrooms, and collaborative spaces to support aspiring professionals. The exterior incorporates extensive glass elements, creating a bright and inviting atmosphere while seamlessly blending with the surrounding environment.",
      images: [
        "/projects/educational/SaeInstitute/Picture1.png",
        "/projects/educational/SaeInstitute/Picture5.png",
        "/projects/educational/SaeInstitute/Picture3.png",
        "/projects/educational/SaeInstitute/Picture2.png",
      ],
    },
    {
      name: "TWA ACADEMY Structural works with IHCC",
      work: "Design & Built Projects",
      place: "KAEC, SAUDI ARABIA ",
      details:
        "This project encompasses the structural design and construction of TWA Academy, focusing on modern educational facilities. The design prioritizes functionality and aesthetics, creating spacious learning environments. The academy is equipped with advanced infrastructure and features sustainable materials, ensuring durability and energy efficiency in its construction.",
      images: [
        "/projects/educational/TWA/Picture1.png",
        "/projects/educational/TWA/Picture2.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/projects/Educational-Projects.jpg"} title={"Educational projects"} />

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
