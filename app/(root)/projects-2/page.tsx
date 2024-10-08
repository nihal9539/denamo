import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projectCategories = [
  { name: "Residential Projects", image: "/project/Residential-Projects.jpg" },
  { name: "Commercial Projects", image: "/project/Commercial-Projects.jpg" },
  { name: "Educational Projects", image: "/project/Educational-Projects.jpg" },
  { name: "Training Facility Projects", image: "/project/Training-Facility-Projects.jpg" },
  { name: "Medical Projects", image: "/project/Medical-Projects.jpg" },
  { name: "Airports Projects", image: "/project/Airports.jpg" },
  { name: "Mosque Design Projects", image: "/project/Mosque.jpg" },
  { name: "Office Projects", image: "/project/Office.jpg" },
  { name: "Gym & Spa Projects", image: "/project/spa-gym.jpg" },
  { name: "Shopping Mall Projects", image: "/project/mall-1.jpg" },
  { name: "Landscape Projects", image: "/project/Landscape-Projects.jpg" },
  { name: "Electromechanical Projects", image: "/project/Electromechanical-1.jpg" },
  { name: "Industrial Projects", image: "/project/Industrial.jpg" }
]

export default function ProjectCategories() {
  return (
    <div className="flex flex-col items-center">
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
            Our Project Categories
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories.map((category, index) => (
            <Card key={index} className="flex cursor-pointer flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center text-muted-foreground">Click to view projects</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


