/* eslint-disable @next/next/no-img-element */
import HeaderWithTitle from "@/components/HeaderWithTitle";
import Link from "next/link";
import React from "react";
import {
  LuAlertCircle,
  LuCalculator,
  LuClock,
  LuBuilding2,
} from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
const BIMImage  = "./service/Building-Information-Modeli.png"

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="group relative bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-200 transition duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-500 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-500 transition-colors">
      {description}
    </p>
    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-400 transition duration-300"></div>
  </div>
);

interface CustomButtonProps {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text }) => (
  <button className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium text-lg rounded-full shadow-md hover:shadow-lg transition-all">
    {text}
  </button>
);

const BIMServices: React.FC = () => {
  return (
    <section className="text-gray-900">
      <HeaderWithTitle image={`/service/Building-Information-Modeli.png`} title="Building Information Modeling (BIM) Services" />

      <div className="max-w-7xl mx-auto pt-10">
  <h1 className="text-4xl font-extrabold mb-4">
    Elevate Your Construction with Digital Precision
  </h1>
  <p className="text-base text-gray-600 mb-12">
    Our BIM services transform the way projects are designed, planned, and
    managed. We leverage the power of 3D modeling and real-time data to
    create efficient workflows, reduce risks, and ensure seamless project
    execution. Through collaborative tools and data-driven insights, we
    bridge communication gaps between stakeholders, foster proactive
    planning, and optimize project outcomes from design to completion. Our
    approach ensures on-time delivery, cost efficiency, and sustainability
    throughout the building lifecycle.
  </p>
  
  {/* Image Section */}
  <div className="mb-12">
    <img 
      src="/community/img.jpg"
      alt="Description of the image" // Provide a description for accessibility
      className="w-full h-96 rounded-lg shadow-md" // Adjust classes as needed
    />
  </div>
</div>


      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our BIM Capabilities Include:
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            icon={<IoCubeOutline className="h-8 w-8 text-blue-500" />}
            title="3D Modeling & Visualization"
            description="Create detailed, visual models for better design collaboration and informed decision-making."
          />
          <CapabilityCard
            icon={<LuAlertCircle className="h-8 w-8 text-red-500" />}
            title="Clash Detection & Risk Mitigation"
            description="Identify design conflicts early to minimize delays and budget overruns."
          />
          <CapabilityCard
            icon={<LuCalculator className="h-8 w-8 text-green-500" />}
            title="Quantity Takeoff & Cost Estimation"
            description="Automate material tracking and cost estimation for accurate budgeting."
          />
          <CapabilityCard
            icon={<LuClock className="h-8 w-8 text-yellow-500" />}
            title="Construction Scheduling (4D BIM)"
            description="Integrate timelines with design elements for improved project management."
          />
          <CapabilityCard
            icon={<LuBuilding2 className="h-8 w-8 text-purple-500" />}
            title="Facility Management Integration (6D BIM)"
            description="Provide data-rich models to streamline building maintenance post-construction."
          />
        </div>
      </div>

      <div className="text-center py-12">
        <Link href="/contact">
          <CustomButton text="Contact Us" />
        </Link>
      </div>
    </section>
  );
};

export default BIMServices;
