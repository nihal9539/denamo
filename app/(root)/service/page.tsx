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
import "aos/dist/aos.css"; 
import AOS from "aos";
import ServiceComponents from "@/components/ServiceComponents";

const services = [
  {
    icon: <FaBuilding />,
    name: "Architectural & Engineering Design",
    description:
      "Comprehensive design services integrating architectural creativity with engineering precision.",
    path: "/service/architectural-and-engineering-design",
  },
  {
    icon: <FaCouch />,
    name: "Interior Design",
    description:
      "Crafting unique interiors that reflect style, functionality, and comfort.",
    path: "/service/interior-design",
  },
  {
    icon: <FaTree />,
    name: "Landscape Architecture",
    description:
      "Designing sustainable outdoor spaces that blend nature with functionality.",
    path: "/service/landscape-architecture",
  },
  {
    icon: <FaChair />,
    name: "Furniture Manufacturing",
    description:
      "High-quality, custom furniture built to meet client-specific needs and aesthetics.",
    path: "/service/furniture-manufacturing",
  },
  {
    icon: <FaKey />,
    name: "Turnkey Projects",
    description:
      "End-to-end solutions, delivering fully operational spaces ready for immediate use.",
    path: "/service/turnkey-projects",
  },
  {
    icon: <FaCogs />,
    name: "Building Information Modeling (BIM)",
    description:
      "Advanced 3D modeling solutions to enhance construction efficiency and accuracy.",
    path: "/service/building-information-modeling",
  },
  {
    icon: <FaCogs />,
    name: "Structural & Mechanical Engineering",
    description:
      "Robust engineering solutions ensuring safety, performance, and durability.",
    path: "/service/structural-mechanical-engineering",
  },
  {
    icon: <FaRoad />,
    name: "Civil Engineering & Infrastructure",
    description:
      "Developing essential infrastructure to support communities and businesses.",
    path: "/service/civil-engineering-and-infrastructure",
  },
  {
    icon: <FaLeaf />,
    name: "Sustainable & Green Building Design",
    description:
      "Eco-friendly designs focusing on energy efficiency and sustainability.",
    path: "/service/sustainable-green-building-design",
  },
  {
    icon: <FaHardHat />,
    name: "Construction Management",
    description:
      "Professional management services ensuring projects stay on time and within budget.",
    path: "/service/construction-management",
  },
  {
    icon: <FaCity />,
    name: "Master & Urban Planning",
    description:
      "Strategic planning to create well-designed, sustainable communities.",
    path: "/service/master-and-urban-planning",
  },
  {
    icon: <FaChartLine />,
    name: "Topographical & Geotechnical Surveys",
    description:
      "Accurate surveys to guide construction and infrastructure projects.",
    path: "/service/topographical-geotechnical-surveys",
  },
  {
    icon: <FaGlobe />,
    name: "Environmental & Traffic Impact Assessments",
    description:
      "Detailed studies assessing project impact on environment and traffic.",
    path: "/service/environmental-and-traffic-impact-assessments",
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
           <ServiceComponents service={service} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
