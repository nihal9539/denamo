import Image from "next/image";
import Link from "next/link";
import { HardHat, Hammer, Building, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function StructuralMechanicalEngineering() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Mechanical.jpg'} title={"Structural & Mechanical Engineering"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Expert Engineering Solutions for Strong Foundations & Systems
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our structural and mechanical engineering services provide
                cutting-edge solutions for building systems and foundations. We
                combine technical expertise with innovative designs to deliver
                reliable, sustainable, and cost-effective results.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Mechanical-2.jpg"
                alt="Structural and Mechanical Engineering"
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
            Our Structural & Mechanical Engineering Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HardHat,
                title: "Structural Integrity",
                description:
                  "We ensure that all structures are designed to be robust, reliable, and safe, using modern materials and construction methods.",
              },
              {
                icon: Hammer,
                title: "Mechanical Systems Design",
                description:
                  "Our team designs energy-efficient and functional mechanical systems for buildings, from HVAC to plumbing and fire protection.",
              },
              {
                icon: Building,
                title: "Innovative Solutions",
                description:
                  "By leveraging the latest technology and engineering software, we create solutions that optimize performance and minimize costs.",
              },
              {
                icon: ShieldCheck,
                title: "Sustainability & Safety",
                description:
                  "We prioritize sustainability and safety in every project, ensuring that structures and systems meet industry standards and regulatory requirements.",
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
            Our Structural & Mechanical Engineering Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                title: "Structural Design & Analysis",
                description:
                  "We offer detailed structural analysis and design, ensuring buildings are stable and can withstand environmental pressures.",
              },
              {
                icon: Hammer,
                title: "Mechanical Systems Installation",
                description:
                  "We install mechanical systems like HVAC, fire safety, and plumbing, focusing on energy efficiency and durability.",
              },
              {
                icon: Building,
                title: "Construction & Project Management",
                description:
                  "Our experienced engineers oversee the entire construction phase to ensure smooth execution and on-time project delivery.",
              },
              {
                icon: ShieldCheck,
                title: "Maintenance & Inspection",
                description:
                  "We provide ongoing maintenance services and inspections for structural and mechanical systems to prolong their life and ensure safety.",
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
            Start Your Structural & Mechanical Engineering Project Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of engineers is ready to deliver top-tier structural and
            mechanical engineering solutions for your next project. Get in touch
            with us to discuss your needs and take the first step toward
            innovation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
