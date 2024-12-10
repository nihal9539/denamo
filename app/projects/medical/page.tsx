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
        "/Medical/KingRoadHospital/Picture14.png",
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
        "AZAL Medical Clinics and Day Surgery Center is designed to offer advanced medical services with a focus on patient well-being. Our team handled the complete design and construction, ensuring modern healthcare standards, functional spaces, and patient comfort. This project was executed in collaboration with the DDC-LINK Franchise in Jeddah, Saudi Arabia. Project Area: 2,750 Square meters.",
      images: ["/Medical/AZAL/Picture1.jpeg", "/Medical/AZAL/Picture2.jpeg"],
    },
    {
      name: "Cardiac Imaging Center",
      work: "Design Projects",
      place: "Jeddah, Saudi Arabia ",
      details:
        "The Cardiac Imaging Center is a state-of-the-art facility designed and built in collaboration with Zuhair Fayez Partnership. Located in Jeddah, Saudi Arabia, the center features cutting-edge technology and a modern architectural design tailored to support advanced diagnostic and imaging services for cardiac care.",
      images: [
        "/Medical/Cardiac/Picture1.jpeg",
        "/Medical/Cardiac/Picture2.jpeg",
        "/Medical/Cardiac/Picture3.jpeg",
        "/Medical/Cardiac/Picture4.jpeg",
      ],
    },
    {
      name: "Oncology Centre at KFMMC",
      work: "Design Projects",
      place: "Jeddah, Saudi Arabia ",
      details:
        "The Oncology Centre at King Fahd Military Medical Complex (KFMMC) is a comprehensive facility dedicated to cancer care. Designed and built in collaboration with Zuhair Fayez Partnership, the center incorporates advanced medical technology, patient-centered design, and sustainable practices. Located in Jeddah, Saudi Arabia, it provides specialized services to support oncology diagnostics and treatment in a modern and healing environment.",
      images: [
        "/Medical/Oncology/Picture1.jpeg",
        "/Medical/Oncology/Picture2.jpeg",
        "/Medical/Oncology/Picture3.jpeg",
      ],
    },
    {
      name: "Solaris Medical Clinics & Day Surgery Projects",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details:
        "A specialized dental hospital designed to meet modern healthcare needs, offering advanced treatment rooms, surgery units, and patient care facilities. Our team handled both the design and construction, ensuring a functional and patient-friendly environment tailored for dental care.",
      images: [
        "/Medical/solar-medical/Picture3.jpeg",
        "/Medical/solar-medical/Picture1.jpeg",
        "/Medical/solar-medical/Picture2.jpeg",
        "/Medical/solar-medical/Picture4.jpeg",
        "/Medical/solar-medical/Picture5.jpeg",
        "/Medical/solar-medical/Picture6.jpeg",
        "/Medical/solar-medical/Picture7.jpeg",
        "/Medical/solar-medical/Picture8.jpeg",
      ],
    },
    {
      name: "ONSOR ALJAMAL MEDICAL",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details:
        "ONSOR ALJAMAL MEDICAL specializes in designing and building cutting-edge medical facilities in Saudi Arabia. Known for innovative solutions and high-quality standards, they deliver exceptional projects tailored to meet the needs of the healthcare industry.",
      images: [
        "/Medical/onsor/Picture1.jpeg",
        "/Medical/onsor/Picture2.jpeg",
        "/Medical/onsor/Picture3.jpeg",
      ],
    },
    {
      name: "LOTUS MEDICAL CLINICS",
      work: "Design Projects",
      place: "Saudi Arabia",
      details:
        "LOTUS Medical Clinics showcases a modern and luxurious design, blending elegance with functionality. The project emphasizes patient comfort, efficient workflows, and compliance with advanced medical standards. Located in Saudi Arabia, it highlights our expertise in creating high-quality healthcare facilities tailored to contemporary needs.",
      images: [
        "/Medical/lotus-clinic/Picture5.jpeg",
        "/Medical/lotus-clinic/Picture3.jpeg",
        "/Medical/lotus-clinic/Picture1.jpeg",
        "/Medical/lotus-clinic/Picture2.jpeg",
        "/Medical/lotus-clinic/Picture4.jpeg",
      ],
    },
    {
      name: "ROSE BEAUTY CENTER",
      work: "Design Projects",
      place: "Saudi Arabia",
      details:
        "ROSE Beauty Center is designed to reflect elegance and sophistication, offering a luxurious experience for its clients. The project combines modern aesthetics with functional design to create a welcoming and upscale environment. Located in Saudi Arabia, it highlights our commitment to delivering exceptional design solutions tailored to the beauty industry.",

      images: [
        "/Medical/rose-beauty/Picture3.jpeg",
        "/Medical/rose-beauty/Picture1.jpeg",
        "/Medical/rose-beauty/Picture2.jpeg",
        "/Medical/rose-beauty/Picture4.jpeg",
      ],
    },
    // university
    {
      name: "KING FAISAL UNIVERSITY",
      work: "Design Projects",
      place: "Saudi Arabia",
      details:
        "KING FAISAL UNIVERSITY is renowned for its advanced educational facilities and commitment to excellence. Our design projects for the university focus on creating innovative and functional spaces, including lecture halls, libraries, student accommodations, and research labs, supporting the university's mission to provide world-class education and foster academic research.",

      images: ["/Medical/king-faisal/Picture1.jpeg"],
    },
    {
      name: "KING KHALID MEDICAL UNIVERSITY",
      work: "Design Projects",
      place: "Saudi Arabia",
      details:
        "KING KHALID MEDICAL UNIVERSITY is dedicated to advancing medical education and healthcare research. Our design projects for the university focus on creating modern, efficient, and specialized spaces that support medical training, research, and healthcare delivery. This includes designing state-of-the-art classrooms, simulation labs, medical research facilities, and student amenities.",
      images: [
        "/Medical/king-khalid-medical/Picture1.jpeg",
        "/Medical/king-khalid-medical/Picture2.jpeg",
        "/Medical/king-khalid-medical/Picture3.jpeg",
        "/Medical/king-khalid-medical/Picture4.jpeg",
        "/Medical/king-khalid-medical/Picture5.jpeg",
      ],
    },
    {
      name: "King Khalid University in ABHA",
      work: "Interier Projects",
      place: "ABHA,Saudi Arabia",
      details:
        "King Khalid University in ABHA is a distinguished institution focused on excellence in education and student life. Our interior projects for the university emphasize creating comfortable, functional, and inspiring spaces, including lecture halls, libraries, faculty offices, and student lounges. Each design is tailored to enhance the academic environment while promoting collaboration and innovation.",
      images: [
        "/Medical/king-khalid-medical-abha/Picture1.jpeg",
        "/Medical/king-khalid-medical-abha/Picture2.jpeg",
        "/Medical/king-khalid-medical-abha/Picture3.jpeg",
        "/Medical/king-khalid-medical-abha/Picture4.jpeg",
        "/Medical/king-khalid-medical-abha/Picture5.jpeg",
        "/Medical/king-khalid-medical-abha/Picture6.jpeg",
      ],
    },
    {
      name: "King Khalid University in BISHA",
      work: "Interier Projects",
      place: "BISHA,Saudi Arabia",
      details: "Our interior project for King Khalid University in Bisha, Saudi Arabia, exemplifies a perfect blend of functionality and aesthetics. Focused on medical facilities, the design ensures a comfortable, efficient, and welcoming environment for students, staff, and visitors. The interiors are thoughtfully planned, incorporating modern materials and finishes while adhering to international healthcare standards. Each space is optimized for its purpose, reflecting the university’s commitment to excellence in education and healthcare. This project highlights our expertise in delivering tailored interior solutions that inspire productivity and well-being",
      images: [
        "/Medical/king-khalid-medical-bisha/Picture1.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture2.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture3.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture4.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture5.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture6.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture7.jpeg",
        "/Medical/king-khalid-medical-bisha/Picture8.jpeg",
      ],
    },
    {
      name: "Batterjee Medical College ",
      work: "Interier Projects",
      place: "Jeddah, Saudi Arabia ",
      details: "",
      images: [
        "/Medical/batterjee/Picture1.jpeg",
        "/Medical/batterjee/Picture2.jpeg",
        "/Medical/batterjee/Picture3.jpeg",
        "/Medical/batterjee/Picture4.jpeg",
        "/Medical/batterjee/Picture5.jpeg",
        "/Medical/batterjee/Picture6.jpeg",
   
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle
        image={"/project/Medical-Projects.jpg"}
        title={"Medical projects"}
      />

      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
            <ProjectSection project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
