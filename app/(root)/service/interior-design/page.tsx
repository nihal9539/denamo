import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Cog,
  Eye,
  Wrench,
  Home,
  Building,
  Lightbulb,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function InteriorDesign() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle title={"interior design"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Transform Your Space
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At [Your Company Name], we believe that every space has the
                potential to inspire and reflect individuality. Our interior
                design services are tailored to transform residential and
                commercial environments into functional, aesthetic havens that
                enhance your lifestyle and meet your needs.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/community/img.jpg"
                alt="Elegant interior design"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ClipboardList,
                title: "Personalized Consultation",
                description:
                  "We start with a comprehensive consultation to understand your vision, preferences, and requirements.",
              },
              {
                icon: Eye,
                title: "Concept Development",
                description:
                  "We create customized design concepts that include color palettes, furniture selection, and spatial layouts.",
              },
              {
                icon: Cog,
                title: "3D Visualization",
                description:
                  "We provide stunning 3D renderings of your space to help you envision the final outcome.",
              },
              {
                icon: Wrench,
                title: "Project Management",
                description:
                  "We oversee every aspect of the design process, ensuring smooth execution and timely completion.",
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

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Design",
                description:
                  "Transform your home into a personalized sanctuary.",
              },
              {
                icon: Building,
                title: "Commercial Design",
                description:
                  "Create inspiring workspaces for productivity and brand representation.",
              },
              {
                icon: ClipboardList,
                title: "Space Planning",
                description:
                  "Optimize your layout for maximum functionality and flow.",
              },
              {
                icon: Wrench,
                title: "Furniture & Decor",
                description:
                  "Select and arrange furnishings that complement your style and space.",
              },
              {
                icon: Lightbulb,
                title: "Lighting Design",
                description:
                  "Enhance ambiance and functionality with strategic lighting solutions.",
              },
              {
                icon: Leaf,
                title: "Sustainable Design",
                description:
                  "Incorporate eco-friendly practices and materials in your space.",
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

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Experienced Designers",
                description:
                  "Our team of skilled professionals brings years of expertise to every project.",
              },
              {
                title: "Client-Centric Approach",
                description:
                  "We prioritize your vision and work closely with you throughout the design process.",
              },
              {
                title: "Quality Assurance",
                description:
                  "We maintain high standards in every aspect of our design and execution.",
              },
              {
                title: "Sustainability Focus",
                description:
                  "We incorporate eco-friendly practices and materials in our designs.",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-50">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life! Contact us today to schedule your
            consultation and explore how our interior design services can
            elevate your environment.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
