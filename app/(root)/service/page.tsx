import React from "react";
import { 
  FaBuilding, FaCouch, FaTree, FaChair, FaKey, 
  FaCogs, FaHardHat, FaCity, FaLeaf, FaRoad, 
  FaChartLine, FaGlobe 
} from "react-icons/fa";

const services = [
  { 
    icon: <FaBuilding />, 
    name: "Architectural & Engineering Design", 
    description: "Comprehensive design services integrating architectural creativity with engineering precision." 
  },
  { 
    icon: <FaCouch />, 
    name: "Interior Design", 
    description: "Crafting unique interiors that reflect style, functionality, and comfort." 
  },
  { 
    icon: <FaTree />, 
    name: "Landscape Architecture", 
    description: "Designing sustainable outdoor spaces that blend nature with functionality." 
  },
  { 
    icon: <FaChair />, 
    name: "Furniture Manufacturing", 
    description: "High-quality, custom furniture built to meet client-specific needs and aesthetics." 
  },
  { 
    icon: <FaKey />, 
    name: "Turnkey Projects", 
    description: "End-to-end solutions, delivering fully operational spaces ready for immediate use." 
  },
  { 
    icon: <FaCogs />, 
    name: "Building Information Modeling (BIM)", 
    description: "Advanced 3D modeling solutions to enhance construction efficiency and accuracy." 
  },
  { 
    icon: <FaCogs />, 
    name: "Structural & Mechanical Engineering", 
    description: "Robust engineering solutions ensuring safety, performance, and durability." 
  },
  { 
    icon: <FaRoad />, 
    name: "Civil Engineering & Infrastructure", 
    description: "Developing essential infrastructure to support communities and businesses." 
  },
  { 
    icon: <FaLeaf />, 
    name: "Sustainable & Green Building Design", 
    description: "Eco-friendly designs focusing on energy efficiency and sustainability." 
  },
  { 
    icon: <FaHardHat />, 
    name: "Construction Management", 
    description: "Professional management services ensuring projects stay on time and within budget." 
  },
  { 
    icon: <FaCity  />, 
    name: "Master & Urban Planning", 
    description: "Strategic planning to create well-designed, sustainable communities." 
  },
  { 
    icon: <FaChartLine />, 
    name: "Topographical & Geotechnical Surveys", 
    description: "Accurate surveys to guide construction and infrastructure projects." 
  },
  { 
    icon: <FaGlobe />, 
    name: "Environmental & Traffic Impact Assessments", 
    description: "Detailed studies assessing project impact on environment and traffic." 
  }
];

const ServicesList = () => (
  <section className="bg-gray-50 py-12 pt-28 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div 
              className="text-gray-800 text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-x-[-1]"
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesList;
