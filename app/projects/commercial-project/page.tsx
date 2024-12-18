import HeaderWithTitle from "@/components/HeaderWithTitle";
import ProjectSection from "@/components/ProjectSection";
export default function HotelsRestaurantsProjects() {
  const projects = [
   
    {
      name: "Suliman Al-Habib Hospital",
      work: "Construction Projects",
      place: "Riyad,KSA",
      details:
        "Suliman Al-Habib Hospital is a modern healthcare facility focused on delivering high-quality medical services. Our construction management ensured compliance with international healthcare standards. The hospital features advanced infrastructure and specialized services designed to enhance patient comfort and operational efficiency, serving as a vital resource for the Riyadh community.",
      images: [
        "/projects/commercial/sulaiman/Picture7.jpg",
        "/projects/commercial/sulaiman/Picture8.jpg",
        "/projects/commercial/sulaiman/Picture10.jpg",
        "/projects/commercial/sulaiman/Picture9.jpg",
        "/projects/commercial/sulaiman/Picture11.jpg",
      ],
    },
    {
      name: "Obhour City Residential Project with RAZA & OSOOL Company  ",
      work: "Construction Projects",
      place: "KSA",
      details:
        "The Obhour City Residential Project, in partnership with RAZA & OSOOL Company, involves the construction of 23 buildings. Key tasks include exterior building cladding removal to enhance both aesthetics and structural integrity, creating a vibrant and modern residential community in KSA.",
      images: [
        "/projects/commercial/obhor/Picture1.png",
        "/projects/commercial/obhor/Picture6.png",
        "/projects/commercial/obhor/Picture2.png",
        "/projects/commercial/obhor/Picture3.png",
        "/projects/commercial/obhor/Picture4.png",
        "/projects/commercial/obhor/Picture5.png",
      ],
    },
    {
      name: "King Saud University Administration Building ",
      work: "Design & Built Project",
      place: "NAJRAN, Saudi Arabia",
      details:
        "The King Saud University Administration Building is a state-of-the-art project designed to support the university’s administrative operations. Our team managed the project from concept to completion, ensuring both functionality and aesthetic appeal. The building aligns with the university’s vision for growth and innovation, serving as a vital hub for academic and operational activities.",
      images: ["/projects/commercial/kingsaud/Picture1.png"],
    },
    {
      name: "Al Jouh Plaza Shopping Center",
      work: "Design & Built Project",
      place: "Sakaka - Saudi Arabia",
      details:
        "Al Jouh Plaza, the largest shopping mall in Al Jouf province, is a key Design & Build project by our team. Located at the intersection of Al Arab Street and King Fahad Road, it provides easy access from all sides. Spanning 55,000 square meters with a Gross Leasable Area (GLA) of 34,300 square meters, the mall serves as a high-quality commercial hub.",
      images: ["/projects/commercial/JouhPlaza/JouhPlaza.png"],
    },
    {
      name: "Rawdah Residential Tower ",
      work: "Design & Built Projects",
      place: "Jeddah, KSA ",
      details:
        "The Rawdah Residential Tower is a project where our team managed both the design and construction phases. This Design & Build endeavor features commercial and residential spaces, strategically located in Jeddah. The tower combines modern architectural aesthetics with functional living environments.",
      images: [
        "/projects/commercial/Rawdah/Picture26.png",
        "/projects/commercial/Rawdah/Picture27.png",
        "/projects/commercial/Rawdah/Picture28.png",
        "/projects/commercial/Rawdah/Picture29.png",
      ],
    },
    {
      name: "The Dome ",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "This project showcases our expertise in design and construction, focusing on creating a premier venue for commercial and entertainment purposes, featuring innovative architecture and versatile spaces for events, concerts, and exhibitions.",
      images: [
        "/projects/commercial/dome/Picture30.png",
        "/projects/commercial/dome/Picture31.png",
        "/projects/commercial/dome/Picture31.png",
      ],
    },

    {
      name: "Commercial Strip Mall",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details: "This project entails the design and construction of a Commercial Strip Mall in Saudi Arabia. The mall features a mix of retail spaces, dining options, and community facilities, aimed at enhancing the shopping experience. The design emphasizes accessibility and aesthetics, creating a vibrant destination for shoppers and visitors.",
      images: [
        "/projects/commercial/CommercialStripMall/Picture38.png",
        "/projects/commercial/CommercialStripMall/Picture39.png",
        "/projects/commercial/CommercialStripMall/Picture40.png",
        "/projects/commercial/CommercialStripMall/Picture41.png",
      ],
    },
    {
      name: "Gloriole Restaurant & Café ",
      work: "Construction Projects",
      place: "Saudi Arabia",
      details: "This project involves the construction of Gloriole Restaurant & Café, designed to offer a cozy and inviting atmosphere for diners. The facility features a contemporary design with outdoor seating and a diverse menu, making it a popular destination for both locals and tourists seeking a memorable dining experience.",
      images: [
        "/projects/commercial/Gloriole/Picture42.png",
        "/projects/commercial/Gloriole/Picture43.png",
        "/projects/commercial/Gloriole/Picture44.png",
        "/projects/commercial/Gloriole/Picture45.png",
      ],
    },
    {
      name: "Mercedes Benz Showroom",
      work: "Design & Built Projects",
      place: "Riyadh, Saudi Arabia",
      details: "This project encompasses the design and construction of a luxurious Mercedes Benz showroom in Riyadh, Saudi Arabia. Featuring contemporary architecture and high-end finishes, the showroom is designed to provide an exceptional experience for customers",
      images: [
        "/projects/commercial/benz/Picture1.png",
        "/projects/commercial/benz/Picture4.png",
        "/projects/commercial/benz/Picture2.png",
        "/projects/commercial/benz/Picture3.png",
        "/projects/commercial/benz/Picture5.png",
      ],
    },
    {
      name: "Coastal Communities Central Fire Station",
      work: "Design & Construction Supervision",
      place: "KAEC,Saudi Arabia",
      details: "This project focuses on the design and construction supervision of a state-of-the-art fire station in KAEC, Saudi Arabia. It is equipped with modern facilities to ensure quick response times and effective firefighting capabilities, serving the needs of the surrounding coastal communities.",
      images: [
        "/projects/commercial/firestation/Picture1.png",
      ],
    },
    {
      name: "Coastal Communities Central Service Hub, Strip Mall",
      work: "Design & Construction Supervision",
      place: "Saudi Arabia",
      details: "This project involves the design and construction supervision of the Coastal Communities Central Service Hub, a strip mall catering to the needs of residents and visitors. The hub combines essential services, retail outlets, and dining options, offering a convenient and vibrant space for the community. The design focuses on functionality and accessibility, enhancing the coastal lifestyle experience.",
      images: [
        "/projects/commercial/CoastalStripMall/Picture1.png",
        "/projects/commercial/CoastalStripMall/Picture2.png",
        "/projects/commercial/CoastalStripMall/Picture3.png",
        "/projects/commercial/CoastalStripMall/Picture4.png",
      ],
    },
    {
      name: "Coastal Communities Central Service Hub, Gas Station ",
      work: "Design & Construction Supervision",
      place: "Saudi Arabia",
      details: "This project involves the design and construction supervision of a gas station within the Coastal Communities Central Service Hub. The station is designed to provide essential fueling services alongside convenience retail, ensuring accessibility and efficiency for residents and travelers. The focus is on integrating modern infrastructure with environmental considerations to enhance the coastal community experience.",
      images: [
        "/projects/commercial/CoastalStripGas/Picture1.png",
      
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
     <HeaderWithTitle image={"/projects/commercial-projects.jpg"} title={'COMMERCIAL PROJECTS'}/>
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
