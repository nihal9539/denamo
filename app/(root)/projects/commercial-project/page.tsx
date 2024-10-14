"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

export default function HotelsRestaurantsProjects() {
  const projects = [
    {
      name: "King Abdullah Civic Center",
      work: "Detailed Design & Engineering",
      place: "DAMMAM,KSA",
      details:
        "The King Abdullah Civic Center is a landmark project that enhances community services and engagement. In collaboration with AI Architecture LLC (USA) and Zuhair Fayez Partnership (KSA), our team delivered comprehensive design and engineering services. Spanning 630,000 square meters, the center features modern facilities for community events, promoting inclusivity and connectivity while reflecting the cultural values of Dammam.",
      images: [
        "/community/kingabdulla/Picture2.jpg",
        "/community/kingabdulla/Picture3.jpg",
        "/community/kingabdulla/Picture4.jpg",
        "/community/kingabdulla/Picture5.jpg",
        "/community/kingabdulla/Picture6.jpg",
      ],
    },
    {
      name: "Suliman Al-Habib Hospital",
      work: "Construction Projects",
      place: "Riyad,KSA",
      details:
        "Suliman Al-Habib Hospital is a modern healthcare facility focused on delivering high-quality medical services. Our construction management ensured compliance with international healthcare standards. The hospital features advanced infrastructure and specialized services designed to enhance patient comfort and operational efficiency, serving as a vital resource for the Riyadh community.",
      images: [
        "/community/sulaiman/Picture7.jpg",
        "/community/sulaiman/Picture8.jpg",
        "/community/sulaiman/Picture10.jpg",
        "/community/sulaiman/Picture9.jpg",
        "/community/sulaiman/Picture11.jpg",
      ],
    },
    {
      name: "Obhour City Residential Project with RAZA & OSOOL Company  ",
      work: "Construction Projects",
      place: "KSA",
      details:
        "The Obhour City Residential Project, in partnership with RAZA & OSOOL Company, involves the construction of 23 buildings. Key tasks include exterior building cladding removal to enhance both aesthetics and structural integrity, creating a vibrant and modern residential community in KSA.",
      images: [
        "/community/obhor/picture1.png",
        "/community/obhor/picture6.png",
        "/community/obhor/picture2.png",
        "/community/obhor/picture3.png",
        "/community/obhor/picture4.png",
        "/community/obhor/picture5.png",
      ],
    },
    {
      name: "King Saud University Administration Building ",
      work: "Design & Built Project",
      place: "NAJRAN, Saudi Arabia",
      details:
        "The King Saud University Administration Building is a state-of-the-art project designed to support the university’s administrative operations. Our team managed the project from concept to completion, ensuring both functionality and aesthetic appeal. The building aligns with the university’s vision for growth and innovation, serving as a vital hub for academic and operational activities.",
      images: ["/community/kingsaud/Picture1.png"],
    },
    {
      name: "Al Jouh Plaza Shopping Center",
      work: "Design & Built Project",
      place: "Sakaka - Saudi Arabia",
      details:
        "Al Jouh Plaza, the largest shopping mall in Al Jouf province, is a key Design & Build project by our team. Located at the intersection of Al Arab Street and King Fahad Road, it provides easy access from all sides. Spanning 55,000 square meters with a Gross Leasable Area (GLA) of 34,300 square meters, the mall serves as a high-quality commercial hub.",
      images: ["/community/JouhPlaza/JouhPlaza.png"],
    },
    {
      name: "Rawdah Residential Tower ",
      work: "Design & Built Projects",
      place: "Jeddah, KSA ",
      details:
        "The Rawdah Residential Tower is a project where our team managed both the design and construction phases. This Design & Build endeavor features commercial and residential spaces, strategically located in Jeddah. The tower combines modern architectural aesthetics with functional living environments.",
      images: [
        "/community/Rawdah/Picture26.png",
        "/community/Rawdah/Picture27.png",
        "/community/Rawdah/Picture28.png",
        "/community/Rawdah/Picture29.png",
      ],
    },
    {
      name: "The Dome ",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "This project showcases our expertise in design and construction, focusing on creating a premier venue for commercial and entertainment purposes, featuring innovative architecture and versatile spaces for events, concerts, and exhibitions.",
      images: [
        "/community/dome/Picture30.png",
        "/community/dome/Picture31.png",
        "/community/dome/Picture31.png",
      ],
    },
    {
      name: "Al- Mokhtar Shopping Center",
      work: "Design & Built Projects",
      place: "Jeddah, Saudi Arabia  ",
      details:
        "This project involves the design and construction of the Al-Mokhtar Shopping Center, located in Jeddah, KSA. The center spans an area of 15,000 square meters, featuring modern retail spaces, entertainment options, and dining facilities to enhance the shopping experience.",
      images: [
        "/community/Al- Mokhtar/Picture33.png",
        "/community/Al- Mokhtar/Picture34.png",
        "/community/Al- Mokhtar/Picture35.png",
        "/community/Al- Mokhtar/Picture36.png",
        "/community/Al- Mokhtar/Picture37.png",
      ],
    },
    {
      name: "Commercial Strip Mall",
      work: "Design & Built Projects",
      place: "Saudi Arabia",
      details: "This project entails the design and construction of a Commercial Strip Mall in Saudi Arabia. The mall features a mix of retail spaces, dining options, and community facilities, aimed at enhancing the shopping experience. The design emphasizes accessibility and aesthetics, creating a vibrant destination for shoppers and visitors.",
      images: [
        "/community/CommercialStripMall/Picture38.png",
        "/community/CommercialStripMall/Picture39.png",
        "/community/CommercialStripMall/Picture40.png",
        "/community/CommercialStripMall/Picture41.png",
      ],
    },
    {
      name: "Gloriole Restaurant & Café ",
      work: "Construction Projects",
      place: "Saudi Arabia",
      details: "This project involves the construction of Gloriole Restaurant & Café, designed to offer a cozy and inviting atmosphere for diners. The facility features a contemporary design with outdoor seating and a diverse menu, making it a popular destination for both locals and tourists seeking a memorable dining experience.",
      images: [
        "/community/Gloriole/Picture42.png",
        "/community/Gloriole/Picture43.png",
        "/community/Gloriole/Picture44.png",
        "/community/Gloriole/Picture45.png",
      ],
    },
    {
      name: "Mercedes Benz Showroom",
      work: "Design & Built Projects",
      place: "Riyadh, Saudi Arabia",
      details: "This project encompasses the design and construction of a luxurious Mercedes Benz showroom in Riyadh, Saudi Arabia. Featuring contemporary architecture and high-end finishes, the showroom is designed to provide an exceptional experience for customers",
      images: [
        "/community/benz/Picture1.png",
        "/community/benz/Picture4.png",
        "/community/benz/Picture2.png",
        "/community/benz/Picture3.png",
        "/community/benz/Picture5.png",
      ],
    },
    {
      name: "Coastal Communities Central Fire Station",
      work: "Design & Construction Supervision",
      place: "KAEC,Saudi Arabia",
      details: "This project focuses on the design and construction supervision of a state-of-the-art fire station in KAEC, Saudi Arabia. It is equipped with modern facilities to ensure quick response times and effective firefighting capabilities, serving the needs of the surrounding coastal communities.",
      images: [
        "/community/firestation/Picture1.png",
      ],
    },
    {
      name: "Coastal Communities Central Service Hub, Strip Mall",
      work: "Design & Construction Supervision",
      place: "Saudi Arabia",
      details: "This project involves the design and construction supervision of the Coastal Communities Central Service Hub, a strip mall catering to the needs of residents and visitors. The hub combines essential services, retail outlets, and dining options, offering a convenient and vibrant space for the community. The design focuses on functionality and accessibility, enhancing the coastal lifestyle experience.",
      images: [
        "/community/CoastalStripMall/Picture1.png",
        "/community/CoastalStripMall/Picture2.png",
        "/community/CoastalStripMall/Picture3.png",
        "/community/CoastalStripMall/Picture4.png",
      ],
    },
    {
      name: "Coastal Communities Central Service Hub, Gas Station ",
      work: "Design & Construction Supervision",
      place: "Saudi Arabia",
      details: "This project involves the design and construction supervision of a gas station within the Coastal Communities Central Service Hub. The station is designed to provide essential fueling services alongside convenience retail, ensuring accessibility and efficiency for residents and travelers. The focus is on integrating modern infrastructure with environmental considerations to enhance the coastal community experience.",
      images: [
        "/community/CoastalStripGas/Picture1.png",
      
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="w-full relative">
        <Image
          src="/community/img.jpg"
          alt="Projects Banner"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-center text-white shadow-text">
            COMMERCIAL PROJECTS
          </h1>
        </div>
      </div>
      <div className=" mx-auto  ">
        <div className=" max-md:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center p-10 max-md:px-5 py-14 gap-4 ${
                index % 2 === 0
                  ? "md:flex-row text-gray-800"
                  : "md:flex-row-reverse bg-gray-700 !text-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="w-full md:w-1/2">
                <ImageGallery images={project.images} />
              </motion.div>
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h2
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <div className="text-2xl  font-bold flex max-md:text-sm  justify-between items-center max-md:items-start  ">
                    <span className="w-2/3">{project.name}</span>
                    <span className="w-1/3 text-center text-base max-md:text-xs  ">
                      - {project.work}
                    </span>
                  </div>
                  <span>{project.place}</span>
                </motion.h2>
                <motion.p
                  className=" text-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {project.details}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
