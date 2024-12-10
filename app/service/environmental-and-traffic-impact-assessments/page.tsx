import Image from "next/image";
import Link from "next/link";
import { Leaf,  ShieldCheck, TrafficCone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function EnvironmentalTrafficAssessments() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Environmental & Traffic Impact Assessments.jpg'} title={"Environmental & Traffic Impact Assessments"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Evaluating Environmental and Traffic Impacts for Sustainable Development
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our detailed assessments help developers and policymakers
                understand the environmental and traffic implications of their
                projects. By identifying potential impacts early, we support
                sustainable and responsible growth.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Request an Assessment</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src='/service/Environmental & Traffic Impact Assessments.jpg'
                alt="Environmental & Traffic Assessments"
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
            Our Impact Assessment Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Environmental Impact Studies",
                description:
                  "Comprehensive analysis of project effects on ecosystems, air, and water quality.",
              },
              {
                icon: TrafficCone,
                title: "Traffic Flow Analysis",
                description:
                  "In-depth evaluation of how new developments affect existing traffic patterns.",
              },
              {
                icon: TrafficCone,
                title: "Infrastructure Compatibility",
                description:
                  "Ensuring seamless integration with current transportation and environmental infrastructure.",
              },
              {
                icon: ShieldCheck,
                title: "Regulatory Compliance",
                description:
                  "Aligning assessments with local and international environmental standards.",
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
                icon: Leaf,
                title: "Air Quality Assessments",
                description:
                  "Measuring and mitigating potential air pollution from projects.",
              },
              {
                icon: TrafficCone,
                title: "Road Network Analysis",
                description:
                  "Identifying necessary upgrades to support increased traffic demands.",
              },
              {
                icon: ShieldCheck,
                title: "Noise & Vibration Studies",
                description:
                  "Evaluating and managing noise levels for residential and commercial zones.",
              },
              {
                icon: TrafficCone,
                title: "Biodiversity Protection",
                description:
                  "Ensuring development projects do not harm critical habitats or wildlife.",
              },
              {
                icon: TrafficCone,
                title: "Intersection Modeling",
                description:
                  "Simulating traffic impacts at major intersections for optimized flow.",
              },
              {
                icon: ShieldCheck,
                title: "Mitigation Planning",
                description:
                  "Developing strategies to address identified environmental and traffic challenges.",
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
            Partner with Us for Accurate Impact Assessments
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is dedicated to helping you achieve responsible project
            outcomes that benefit communities and the environment. Let’s work
            together to build sustainable futures.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
