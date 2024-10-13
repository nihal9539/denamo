import { FaBuilding, FaCouch, FaTree, FaChair, FaKey, FaCogs, FaHardHat, FaCity, FaLeaf, FaRoad, FaChartLine, FaGlobe } from 'react-icons/fa'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const categories = [
  { name: "Design", services: services.slice(0, 5) },
  { name: "Engineering", services: services.slice(5, 9) },
  { name: "Management & Planning", services: services.slice(9) },
]

export default function Component() {
  return (
    <div className="container mx-auto py-12 pt-28 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our  Services</h1>
      <Tabs defaultValue="Design" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.name} value={category.name} className="text-lg">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">{service.icon}</div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}