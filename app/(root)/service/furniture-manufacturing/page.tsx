"use client";
import Image from "next/image";
import Link from "next/link";
import { Hammer, Armchair, Sofa, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function FurnitureManufacturing() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/furniture manufacturing.jpg'} title={"Furniture Manufacturing"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Crafting Furniture for Elegance and Functionality
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in creating high-quality, custom furniture pieces
                designed to complement any space. From initial design to
                meticulous craftsmanship, our team ensures excellence in every
                detail.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Custom Order</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/design/furniture-manufacturing.jpg"
                alt="Furniture Manufacturing"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Why Choose Us for Furniture Manufacturing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Armchair,
                title: "Custom Design",
                description:
                  "Tailored solutions for unique furniture designs that fit your vision.",
              },
              {
                icon: Sofa,
                title: "Premium Materials",
                description:
                  "Using the finest woods, metals, and fabrics for durability and style.",
              },
              {
                icon: Ruler,
                title: "Precision Craftsmanship",
                description:
                  "Attention to detail at every stage, from measurements to finishing touches.",
              },
              {
                icon: Hammer,
                title: "End-to-End Service",
                description:
                  "From concept to delivery, we manage the entire process seamlessly.",
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
            Key Services Offered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Armchair,
                title: "Living Room Furniture",
                description:
                  "Sofas, chairs, and tables crafted for comfort and style.",
              },
              {
                icon: Sofa,
                title: "Bespoke Bedroom Sets",
                description:
                  "Custom beds, wardrobes, and dressers to suit your space.",
              },
              {
                icon: Hammer,
                title: "Office Solutions",
                description:
                  "Desks, chairs, and storage units designed for productivity.",
              },
              {
                icon: Ruler,
                title: "Outdoor Furniture",
                description:
                  "Durable and elegant patio furniture for any weather.",
              },
              {
                icon: Hammer,
                title: "Cabinets & Storage",
                description:
                  "Functional and stylish cabinets tailored to your needs.",
              },
              {
                icon: Sofa,
                title: "Dining Room Furniture",
                description:
                  "Elegant dining sets perfect for gatherings and everyday use.",
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
            Create Furniture That Reflects Your Style
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you bring your furniture ideas to life. Contact our
            expert team today to get started on crafting the perfect pieces for
            your home or business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
