import Image from "next/image";
import Link from "next/link";
import { TreePalm, Globe, Paintbrush, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function LandscapeArchitecture() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Landscape Architecture.jpg'} title={"Landscape Architecture"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Designing Outdoor Spaces with Beauty and Function
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our landscape architecture services transform outdoor areas into
                stunning, functional spaces. From urban parks to private gardens,
                we integrate natural elements with human-made environments to
                enhance your surroundings and the experience of those who use them.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Landscape Architecture-2.jpg"
                alt="Landscape Architecture"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Approach to Landscape Architecture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TreePalm,
                title: "Sustainability Focused",
                description:
                  "We prioritize eco-friendly designs, using native plants and sustainable materials.",
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description:
                  "Our designs are inspired by natural landscapes around the world and adapt to local climates.",
              },
              {
                icon: Paintbrush,
                title: "Creative Vision",
                description:
                  "We create aesthetically pleasing outdoor environments that engage the senses and emotions.",
              },
              {
                icon: Leaf,
                title: "Environmental Harmony",
                description:
                  "Our landscapes blend seamlessly with the environment, creating spaces that feel natural and tranquil.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center">
            Our Landscape Architecture Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePalm,
                title: "Park and Urban Design",
                description:
                  "Transform public spaces into vibrant, functional parks that engage communities.",
              },
              {
                icon: Paintbrush,
                title: "Garden Design",
                description:
                  "Create beautiful private gardens that blend nature with design aesthetics.",
              },
              {
                icon: Globe,
                title: "Sustainable Landscaping",
                description:
                  "Design outdoor spaces that minimize water usage and support local ecosystems.",
              },
              {
                icon: Leaf,
                title: "Hardscape Design",
                description:
                  "Integrate stone, wood, and other materials into outdoor spaces to create beautiful and durable structures.",
              },
              {
                icon: TreePalm,
                title: "Green Roofs & Walls",
                description:
                  "Incorporate greenery into urban environments with green roofs and living walls that improve air quality.",
              },
              {
                icon: Paintbrush,
                title: "Commercial Landscaping",
                description:
                  "Design landscapes for businesses, enhancing curb appeal and creating functional outdoor spaces.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <service.icon className="h-16 w-16 text-gray-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Let’s Create Your Perfect Outdoor Space
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you’re looking to transform a park, garden, or commercial
            space, we bring the beauty of nature to your doorstep. Contact us to
            discuss your vision and how we can help make it a reality.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
