import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projectCategories = [
  {
    name: "Residential Projects",
    image: "/projects/residential-projects.jpg",
    featured: true,
    link: "/projects/residential-project",
  },
  {
    name: "Commercial Projects",
    image: "/projects/commercial-projects.jpg",
    featured: true,
    link: "/projects/commercial-project",
  },

  {
    name: "Industrial Projects",
    image: "/projects/Industrial.jpg",
    featured: true,
    link: "/projects/industrial-projects",
  },
  {
    name: "Electromechanical Projects",
    image: "/projects/Electromechanical-1.jpg",
    featured: false,
    link: "/projects/electromechanical",
  },
  {
    name: "Educational Projects",
    image: "/projects/educational-Projects.jpg",
    featured: false,
    link: "/projects/educational",
  },
  {
    name: "Office Projects",
    image: "/projects/Office.jpg",
    featured: false,
    link: "/projects/office",
  },
  {
    name: "Medical Projects",
    image: "/projects/Medical-Projects.jpg",
    featured: false,
    link: "/projects/medical",
  },
  {
    name: "Hotels & Restaurants Projects",
    image: "/projects/hotel.jpg",
    featured: false,
    link: "/projects/hotels-restaurants",
  },
  {
    name: "Airports Projects",
    image: "/projects/Airports.jpg",
    featured: false,
    link: "/projects/airports",
  },
  {
    name: "Mosque Projects",
    image: "/projects/Mosque.jpg",
    featured: false,
    link: "/projects/mosque-projects",
  },
  {
    name: "Gym & Spa Projects",
    image: "/projects/spa-gym.jpg",
    featured: false,
    link: "/projects/gym-and-spa",
  },
  {
    name: "Shopping Mall Projects",
    image: "/projects/mall-1.jpg",
    featured: false,
    link: "/projects/shopping-mall",
  },
  {
    name: "Landscape Projects",
    image: "/projects/Landscape-Projects.jpg",
    featured: false,
    link: "/projects/landscape-projects",
  },
];

export default function ProjectCategories() {
  const featuredCategories = projectCategories.filter(
    (category) => category.featured
  );
  const regularCategories = projectCategories.filter(
    (category) => !category.featured
  );

  return (
    <div className="flex flex-col items-center bg-gray-50">
      <div className="w-full relative bg-gradient-to-r from-primary to-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Project Categories
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore our diverse range of projects across various industries and
            sectors.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 col-span-1 md:col-span-2 lg:col-span-1"
            >
              <Link href={category.link}>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/path-to-low-resolution-version-of-image.jpg" // Add low-res version
                  />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white text-center px-4">
                      {category.name}
                    </h2>
                  </div>
                </div>
                <CardContent className="flex-grow flex items-end justify-center p-6">
                  <Button className="group">
                    Explore {category.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {regularCategories.map((category, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={category.link}>
                <div className="relative h-32">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="/path-to-low-resolution-version-of-image.jpg" // Add low-res version
                  />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm text-center">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <Button
                    variant="link"
                    className="w-full p-0 h-auto text-xs group"
                  >
                    View Projects
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
