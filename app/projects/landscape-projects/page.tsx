import HeaderWithTitle from '@/components/HeaderWithTitle'
import ProjectSection from '@/components/ProjectSection'
import React from 'react'
const projects = [
    {
      name: " Bahamas Resorts Projects",
      work: " Design & Built Projects",
      place: "Saudi Arabia",
      details:"Bahamas Resorts Projects is proud to have designed and built this stunning landscape project in Saudi Arabia. Our team meticulously crafted every element, from the lush gardens and serene water features to the intricate pathways and outdoor living spaces. This project is a testament to our commitment to creating beautiful and functional outdoor environments.",
      images: [
        "/projects/landscape-projects/Bahamas/Picture1.jpeg",
        "/projects/landscape-projects/Bahamas/Picture2.jpeg",
        "/projects/landscape-projects/Bahamas/Picture3.jpeg",
        "/projects/landscape-projects/Bahamas/Picture4.jpeg",
      ],
    }
  ];
const page = () => {
  return (
<div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/project/Landscape-Projects.jpg"} title={"Landscape  Projects"} />
      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
           <ProjectSection project={project} key={index} index={index}/>
          ))}
        </div>
      </div>
    </div>  )
}

export default page