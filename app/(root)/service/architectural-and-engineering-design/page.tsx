import Image from "next/image";
import Link from "next/link";
import { Building, Pencil, Layers, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function ArchitecturalEngineeringDesign() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Architectural & Engineering Design.jpg'} title={"Architectural & Engineering Design"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Bringing Vision to Life
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our architectural engineering design services blend creativity
                with technical expertise to create functional and aesthetically
                pleasing structures. Whether you&apos;re developing residential,
                commercial, or industrial spaces, we provide designs that stand
                the test of time.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/design/architectural-engineering.jpg"
                alt="Architectural Engineering Design"
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
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building,
                title: "Innovative Design",
                description:
                  "We craft creative, functional, and sustainable architectural designs tailored to your needs.",
              },
              {
                icon: Pencil,
                title: "Customized Solutions",
                description:
                  "Every project is unique, and we provide tailored solutions that meet specific project requirements.",
              },
              {
                icon: Layers,
                title: "Seamless Integration",
                description:
                  "Our designs integrate seamlessly with engineering, construction, and environmental factors.",
              },
              {
                icon: HardHat,
                title: "Safety & Compliance",
                description:
                  "We ensure that every design complies with the highest safety standards and regulations.",
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
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Residential Design",
                description:
                  "From family homes to high-end residences, we design spaces that feel like home.",
              },
              {
                icon: Pencil,
                title: "Commercial Architecture",
                description:
                  "Innovative, functional spaces for offices, retail, and hospitality.",
              },
              {
                icon: Layers,
                title: "Industrial Design",
                description:
                  "Custom designs for warehouses, factories, and industrial spaces.",
              },
              {
                icon: HardHat,
                title: "Sustainable Design",
                description:
                  "Eco-friendly designs that meet environmental goals without compromising on style.",
              },
              {
                icon: Pencil,
                title: "Interior Design",
                description:
                  "Designing interiors that optimize function while creating a welcoming atmosphere.",
              },
              {
                icon: Building,
                title: "Urban Design",
                description:
                  "Master planning for cities and urban areas that foster connectivity and growth.",
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
            Let’s Build Your Dream Project
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Reach out to us and let&apos;s
            start planning your architectural masterpiece today.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
