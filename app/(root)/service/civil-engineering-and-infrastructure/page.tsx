import Image from "next/image";
import Link from "next/link";
import {
  Hammer,
  Shield,
  Building,
  Truck,
  Layers,
//   Toolbox,
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

export default function CivilEngineeringInfrastructure() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Civil Engineering Infrastructure.jpg'} title={"Civil Engineering & Infrastructure"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Building the Foundations for Tomorrow
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Delano, we specialize in civil engineering
                infrastructure projects that are the backbone of modern
                development. From transportation networks to utilities, our
                expertise ensures the successful completion of large-scale
                projects that meet safety, functionality, and sustainability
                standards.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src='/about/02.jpg'
                alt="Civil Engineering Infrastructure"
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
                icon: Hammer,
                title: "Detailed Planning",
                description:
                  "We begin each project with thorough planning and precise execution strategies to ensure project success.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Our commitment to safety ensures that every phase of construction meets the highest safety standards.",
              },
              {
                icon: Building,
                title: "Project Management",
                description:
                  "From concept to completion, we manage every aspect of the infrastructure development process.",
              },
              {
                icon: Truck,
                title: "Logistics & Transport",
                description:
                  "We handle the logistical challenges to ensure materials and equipment are delivered on time and within budget.",
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
                icon: Layers,
                title: "Road & Highway Construction",
                description:
                  "Design and construction of roads, highways, and bridges for seamless transportation.",
              },
              {
                icon: Building,
                title: "Structural Engineering",
                description:
                  "We offer structural solutions for buildings, foundations, and other infrastructure projects.",
              },
              {
                icon: Layers,
                title: "Utility Systems",
                description:
                  "We design and implement utility infrastructure, including water, sewage, and power systems.",
              },
              {
                icon: Hammer,
                title: "Land Development",
                description:
                  "Transform raw land into usable, accessible spaces for construction, commercial use, and more.",
              },
              {
                icon: Shield,
                title: "Environmental Engineering",
                description:
                  "We integrate environmental considerations into every project, ensuring sustainability and minimal impact.",
              },
              {
                icon: Truck,
                title: "Construction Logistics",
                description:
                  "We handle transportation, material procurement, and on-site logistics for large-scale infrastructure projects.",
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
                title: "Experienced Engineers",
                description:
                  "Our engineers have decades of combined experience in delivering large-scale infrastructure projects.",
              },
              {
                title: "On-Time Delivery",
                description:
                  "We pride ourselves on our ability to deliver projects on time, with meticulous attention to deadlines.",
              },
              {
                title: "Sustainability & Innovation",
                description:
                  "We incorporate the latest sustainable technologies and practices to ensure environmentally friendly solutions.",
              },
              {
                title: "Full Project Lifecycle",
                description:
                  "We manage projects from start to finish, including design, construction, and maintenance phases.",
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
            Ready to Build the Future?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us bring your infrastructure project to life! Contact us today
            to schedule a consultation and learn how our civil engineering
            services can help you build for tomorrow.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
