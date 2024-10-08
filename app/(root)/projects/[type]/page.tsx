"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HotelsRestaurantsProjects() {
  const projects = [
    {
      name: "Seaside Resort & Spa",
      details:
        "A luxurious beachfront resort featuring 200 rooms, 3 restaurants, and a world-class spa. The design incorporates sustainable materials and energy-efficient systems.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Urban Bistro",
      details:
        "A modern bistro in the heart of the city, serving farm-to-table cuisine. The space includes an open kitchen concept and a rooftop dining area with panoramic city views.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Mountain Lodge Retreat",
      details:
        "A cozy mountain lodge with 50 cabins, a main lodge, and an award-winning restaurant. The project focused on blending rustic charm with modern amenities.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Fusion Eats Food Hall",
      details:
        "A vibrant food hall featuring 15 unique food stalls, communal seating, and a central bar. The design emphasizes flexibility and a lively atmosphere.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Boutique Hotel & Rooftop Lounge",
      details:
        "A 30-room boutique hotel in a renovated historic building, crowned with a stylish rooftop lounge. The project preserved original architectural elements while adding contemporary touches.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Farm-to-Table Restaurant & Cooking School",
      details:
        "An innovative restaurant concept with an attached cooking school and on-site garden. The space includes demonstration kitchens and indoor/outdoor dining areas.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
            <div className="w-full relative">
          <Image
            src="/swiper/img-2.jpg"
            alt="Projects Banner"
            width={1920}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white shadow-text">
              Hotels & Restaurants Projects
            </h1>
          </div>
        </div>
      <div className="container mx-auto px-4 py-16">
    
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </motion.div>
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h2
                  className="text-3xl font-semibold text-primary"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  {project.name}
                </motion.h2>
                <motion.p
                  className="text-muted-foreground text-lg"
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
