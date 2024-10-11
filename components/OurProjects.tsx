"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

export default function ConstructionProjects() {
  const projects = [
    {
      title: "Residential Projects",
      image: "/project/Residential-Projects.jpg",
    },
    {
      title: "Hotels & Restaurants Projects",
      image: "/project/Residential-Projects.jpg",
    },
    {
      title: "Commercial Projects",
      image: "/project/Commercial-Projects.jpg",
    },
    {
      title: "Educational Projects",
      image: "/project/Educational-Projects.jpg",
    },
    {
      title: "Training Facility Projects",
      image: "/project/Training-Facility-Projects.jpg",
    },
    {
      title: "Medical Projects",
      image: "/project/Medical-Projects.jpg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side and during initial client-side render
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1   max-sm:hidden md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative cursor-pointer overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ opacity: 0, x: "50%", y: "80%" }}
                      animate={{ opacity: 0.4, x: "0%", y: "0%" }}
                      exit={{ opacity: 0, x: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 text-white"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm">Click to view project details</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute top-4 right-4 z-10"
                animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" grid-cols-1 hidden  max-md:grid  gap-5"
        >
          {projects.map((project, index) => (
            <div key={index}>
              <Card>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <CardContent className=" mt-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm">Click to view project details</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
