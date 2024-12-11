"use client";
import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";

export default function ShoppingMallProjects() {
  const projects = [
    {
        name: "Al- Mokhtar Shopping Center",
        work: "Design & Built Projects",
        place: "Jeddah, Saudi Arabia  ",
        details:
          "This project involves the design and construction of the Al-Mokhtar Shopping Center, located in Jeddah, KSA. The center spans an area of 15,000 square meters, featuring modern retail spaces, entertainment options, and dining facilities to enhance the shopping experience.",
        images: [
          "/projects/public/shopping-mall/Al-Mokhtar/Picture33.png",
          "/projects/public/shopping-mall/Al-Mokhtar/Picture34.png",
          "/projects/public/shopping-mall/Al-Mokhtar/Picture35.png",
          "/projects/public/shopping-mall/Al-Mokhtar/Picture36.png",
          "/projects/public/shopping-mall/Al-Mokhtar/Picture37.png",
        ],
      },
    {
        name: "NASAMAT AL-RIYADH Shopping Mall",
        work: " Detailed Design Project",
        place: "Riyadh, Saudi Arabia  ",
        details: "This project involved the detailed design of the NASAMAT AL-RIYADH Shopping Mall in collaboration with Zuhair Fayez Partnership. The scope of work focused on creating comprehensive designs for a sprawling project area exceeding 100,000 square meters, ensuring functionality and precision.",
        images: [
          "/projects/public/shopping-mall/NASAMAT/Picture1.jpeg",

        ],
      },
    {
        name: "Granada Shopping Mall",
        work: " Detailed Design Project",
        place: "Riyadh, Saudi Arabia  ",
        details: "This project involved the detailed design of the Granada Shopping Mall in collaboration with Zuhair Fayez Partnership and Tom Balluski USA. The scope of work included delivering comprehensive and meticulous designs for a project area spanning over 200,000 square meters.",
        images: [
          "/projects/public/shopping-mall/Granada/Picture1.jpeg",
          "/projects/public/shopping-mall/Granada/Picture5.jpeg",
          "/projects/public/shopping-mall/Granada/Picture8.jpeg",        
          "/projects/public/shopping-mall/Granada/Picture2.jpeg",
          "/projects/public/shopping-mall/Granada/Picture3.jpeg",
          "/projects/public/shopping-mall/Granada/Picture4.jpeg",
          "/projects/public/shopping-mall/Granada/Picture6.jpeg",
          "/projects/public/shopping-mall/Granada/Picture7.jpeg",
          "/projects/public/shopping-mall/Granada/Picture9.jpeg",
          "/projects/public/shopping-mall/Granada/Picture10.jpeg",

        ],
      },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/projects/mall-1.jpg"} title={"Shopping Mall projects"} />

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
