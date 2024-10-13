"use client";
import React, { useEffect } from "react";
import {
  FaBuilding,
  FaCouch,
  FaTree,
  FaChair,
  FaKey,
  FaCogs,
  FaHardHat,
  FaCity,
  FaLeaf,
  FaRoad,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const services = [
  {
    icon: <FaBuilding />,
    name: "Architectural & Engineering Design",
    description:
      "Comprehensive design services integrating architectural creativity with engineering precision.",
  },
  {
    icon: <FaCouch />,
    name: "Interior Design",
    description:
      "Crafting unique interiors that reflect style, functionality, and comfort.",
  },
  {
    icon: <FaTree />,
    name: "Landscape Architecture",
    description:
      "Designing sustainable outdoor spaces that blend nature with functionality.",
  },
  {
    icon: <FaChair />,
    name: "Furniture Manufacturing",
    description:
      "High-quality, custom furniture built to meet client-specific needs and aesthetics.",
  },
  {
    icon: <FaKey />,
    name: "Turnkey Projects",
    description:
      "End-to-end solutions, delivering fully operational spaces ready for immediate use.",
  },
  {
    icon: <FaCogs />,
    name: "Building Information Modeling (BIM)",
    description:
      "Advanced 3D modeling solutions to enhance construction efficiency and accuracy.",
  },
  {
    icon: <FaCogs />,
    name: "Structural & Mechanical Engineering",
    description:
      "Robust engineering solutions ensuring safety, performance, and durability.",
  },
  {
    icon: <FaRoad />,
    name: "Civil Engineering & Infrastructure",
    description:
      "Developing essential infrastructure to support communities and businesses.",
  },
  {
    icon: <FaLeaf />,
    name: "Sustainable & Green Building Design",
    description:
      "Eco-friendly designs focusing on energy efficiency and sustainability.",
  },
  {
    icon: <FaHardHat />,
    name: "Construction Management",
    description:
      "Professional management services ensuring projects stay on time and within budget.",
  },
  {
    icon: <FaCity />,
    name: "Master & Urban Planning",
    description:
      "Strategic planning to create well-designed, sustainable communities.",
  },
  {
    icon: <FaChartLine />,
    name: "Topographical & Geotechnical Surveys",
    description:
      "Accurate surveys to guide construction and infrastructure projects.",
  },
  {
    icon: <FaGlobe />,
    name: "Environmental & Traffic Impact Assessments",
    description:
      "Detailed studies assessing project impact on environment and traffic.",
  },
];

const ServicesList = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);
  return (
    <section className=" py-12 pt-28  px-6">
      <div className=" mx-36 max-md:mx-4 text-center">
        <h2
          className="text-4xl font-bold text-gray-800 mb-10"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-gray-700 hover:text-white hover:cursor-pointer transition-all duration-500"
            >
              <div className="text-gray-800 text-5xl mb-4 transform transition-transform duration-300 group-hover:text-white group-hover:scale-x-[-1]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-center group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
