"use client";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

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
      <HeaderWithTitle image={"/project/Medical-Projects.jpg"} title={"Medical projects"} />

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
