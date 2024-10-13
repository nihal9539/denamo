"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBuilding, FaCouch, FaTree, FaChair, FaKey, FaCogs, FaHardHat, FaCity, FaLeaf, FaRoad, FaChartLine, FaGlobe, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  { 
    icon: <FaBuilding className="h-8 w-8" />, 
    name: "Architectural & Engineering Design", 
    description: "Comprehensive design services integrating architectural creativity with engineering precision." 
  },
  { 
    icon: <FaCouch className="h-8 w-8" />, 
    name: "Interior Design", 
    description: "Crafting unique interiors that reflect style, functionality, and comfort." 
  },
  { 
    icon: <FaTree className="h-8 w-8" />, 
    name: "Landscape Architecture", 
    description: "Designing sustainable outdoor spaces that blend nature with functionality." 
  },
  { 
    icon: <FaChair className="h-8 w-8" />, 
    name: "Furniture Manufacturing", 
    description: "High-quality, custom furniture built to meet client-specific needs and aesthetics." 
  },
  { 
    icon: <FaKey className="h-8 w-8" />, 
    name: "Turnkey Projects", 
    description: "End-to-end solutions, delivering fully operational spaces ready for immediate use." 
  },
  { 
    icon: <FaCogs className="h-8 w-8" />, 
    name: "Building Information Modeling (BIM)", 
    description: "Advanced 3D modeling solutions to enhance construction efficiency and accuracy." 
  },
  { 
    icon: <FaCogs className="h-8 w-8" />, 
    name: "Structural & Mechanical Engineering", 
    description: "Robust engineering solutions ensuring safety, performance, and durability." 
  },
  { 
    icon: <FaRoad className="h-8 w-8" />, 
    name: "Civil Engineering & Infrastructure", 
    description: "Developing essential infrastructure to support communities and businesses." 
  },
  { 
    icon: <FaLeaf className="h-8 w-8" />, 
    name: "Sustainable & Green Building Design", 
    description: "Eco-friendly designs focusing on energy efficiency and sustainability." 
  },
  { 
    icon: <FaHardHat className="h-8 w-8" />, 
    name: "Construction Management", 
    description: "Professional management services ensuring projects stay on time and within budget." 
  },
  { 
    icon: <FaCity className="h-8 w-8" />, 
    name: "Master & Urban Planning", 
    description: "Strategic planning to create well-designed, sustainable communities." 
  },
  { 
    icon: <FaChartLine className="h-8 w-8" />, 
    name: "Topographical & Geotechnical Surveys", 
    description: "Accurate surveys to guide construction and infrastructure projects." 
  },
  { 
    icon: <FaGlobe className="h-8 w-8" />, 
    name: "Environmental & Traffic Impact Assessments", 
    description: "Detailed studies assessing project impact on environment and traffic." 
  }
]

export default function Component() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="container mx-auto pt-28 py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardHeader className="p-6 bg-primary/5">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => toggleService(index)}
                >
                  <span className="mr-2">
                    {expandedService === index ? "Less Info" : "More Info"}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="text-sm text-muted-foreground">
                        Additional information about {service.name} would go here. This could include details about the process, benefits, or examples of past projects.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}