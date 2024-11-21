import Image from "next/image";
import Link from "next/link";
import { Briefcase, HardHat, CheckCircle, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function TurnkeyProjects() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Turnkey Projects.jpg'} title={"Turnkey Projects"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Complete Solutions from Concept to Completion
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our turnkey project services offer end-to-end solutions, taking
                your ideas from concept to final execution. We handle all
                phases—design, procurement, construction, and handover—ensuring
                a seamless experience and high-quality results for every project.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Turnkey Projects-2.jpg"
                alt="Turnkey Projects"
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
            Our Turnkey Project Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Comprehensive Services",
                description:
                  "We manage every aspect of your project from planning to execution, offering a full range of services.",
              },
              {
                icon: HardHat,
                title: "Expert Project Management",
                description:
                  "Our experienced project managers ensure that your project is delivered on time, on budget, and to your exact specifications.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "We maintain the highest standards of quality throughout every stage of the project, ensuring exceptional results.",
              },
              {
                icon: ClipboardCheck,
                title: "Seamless Execution",
                description:
                  "From procurement to final handover, we ensure smooth coordination across all project phases.",
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
            Our Turnkey Project Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Design & Planning",
                description:
                  "We offer architectural and engineering design services tailored to your project's needs.",
              },
              {
                icon: HardHat,
                title: "Construction & Execution",
                description:
                  "Our construction team ensures precise and timely execution, adhering to safety standards and quality control.",
              },
              {
                icon: CheckCircle,
                title: "Project Procurement",
                description:
                  "We manage the sourcing and procurement of materials, equipment, and services to keep your project on track.",
              },
              {
                icon: ClipboardCheck,
                title: "Project Handover",
                description:
                  "We ensure a smooth handover process, delivering completed projects that meet your requirements and expectations.",
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
            Start Your Turnkey Project Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;
            re planning a commercial building, residential complex, or infrastructure project, we offer turnkey solutions that streamline every phase. Contact us to discuss your next project.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
