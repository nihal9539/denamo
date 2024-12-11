import HeaderWithTitle from '@/components/HeaderWithTitle'
import ProjectSection from '@/components/ProjectSection'
import React from 'react'
const projects = [
    {
      name: " Health Clubs",
      work: " Interior Design Projects",
      place: "Saudi Arabia",
      details:"We have specialized in creating GYM and Spa designs that promote a healthier lifestyle. Our work includes delivering world-class fitness facilities with state-of-the-art equipment and luxurious spa environments, focusing on enhancing both physical health and mental relaxation for a complete wellness experience.",
      images: [
        "/gym-and-spa/gym-spa-1.jpeg",
        "/gym-and-spa/gym-spa-2.jpeg",
        "/gym-and-spa/gym-spa-3.jpeg",
      ],
    }
  ];
const page = () => {
  return (
<div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <HeaderWithTitle image={"/projects/spa-gym.jpg"} title={"GYM & SPA PROJECTS"} />
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