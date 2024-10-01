"use client"




import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function ConstructionProjects() {
    const projects = [
        { id: 1, title: "Modern Office Complex", image: "/const/1.jpg" },
        { id: 2, title: "Luxury Apartment Tower", image: "/const/2.jpg" },
        { id: 3, title: "Sustainable Green Building", image: "/const/3.jpg" },
        { id: 4, title: "Historic Building Renovation", image: "/const/4.jpg" },
        { id: 5, title: "Industrial Warehouse", image: "/const/5.jpg" },
        { id: 6, title: "Shopping Mall Complex", image: "/const/6.jpg" },
      ]
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side and during initial client-side render
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                {/* <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.75 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence> */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ opacity: 0, x: "50%" ,y:"80%"}}
                      animate={{ opacity: 0.4, x: "0%",y:"0%" }}
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
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">Click to view project details</p>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* <motion.div
                className="absolute top-4 right-4 z-10"
                animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div> */}
            </motion.div>
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
  )
}