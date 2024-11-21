"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";

const services = [
  {
    title: "Architectural",
    description: "Creative designs merging beauty and functionality to support future growth.",
    image: "/service/1.jpg",
    path: "/service/architectural-and-engineering-design",
  },
  {
    title: "Interior Design",
    description: "Elegant interiors crafted for comfort, style, and seamless living experiences.",
    image: "/service/6.jpg",
    path: "/service/interior-design",
  },
  {
    title: "BIM",
    description: "Data-driven solutions for efficient building planning, design, and management.",
    image: "/service/4.jpg",
    path: "/service/building-information-modeling",
  },
  {
    title: "Constriction",
    description: "Expert management of construction projects from start to finish, ensuring efficiency, cost-effectiveness, and quality control.",
    image: "/service/2.jpg",
    path: "/service/construction-management",
  },
];


const ServiceGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section>
      <div className="grid grid-cols-4 max-md:grid-cols-2 text-white h-[75vh] max-md:h-auto overflow-hidden">
        {services.map((service, index) => (
          <Link
          href={service.path}
            key={index}
            className="relative h-[75vh] max-md:h-80 w-full group"
            data-aos="fade-in" // AOS animation effect
            data-aos-delay={index * 100} // Stagger animation
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/45 transition-all"></div>

            {/* Content */}
            <div className="absolute z-20 space-y-3 bottom-10 max-md:left-5 max-md:bottom-5 left-10">
              <h1 className="uppercase text-2xl max-md:text-lg font-semibold">
                {service.title}
              </h1>
              <p className="pb-4 max-md:text-sm">{service.description}</p>

              {/* Button */}
              <button className="border-2 border-white text-base max-md:text-xs bg-transparent p-3 px-5 font-semibold max-md:w-[7.5rem] hover:bg-white hover:text-black transition-all">
                View Details
              </button>
            </div>

            {/* Image */}
            <img src={service.image} className="h-full w-full object-cover" alt={service.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
