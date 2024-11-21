import Image from "next/image";
import Link from "next/link";
import { Map, Building, Globe, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function MasterUrbanPlanning() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Urban Planning.jpg'} title={"Master & Urban Planning"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Strategic Planning for Modern Cities and Communities
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We provide comprehensive master planning and urban design
                solutions tailored to create livable, sustainable, and
                efficient communities. Our expertise ensures harmonious growth
                that respects culture, environment, and future needs.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Vision</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Urban Planning-2.jpg"
                alt="Master & Urban Planning"
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
            A Visionary Approach to Urban Planning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Map,
                title: "Strategic Master Plans",
                description:
                  "We develop detailed master plans that balance development with community needs and environmental considerations.",
              },
              {
                icon: Building,
                title: "Sustainable Urban Growth",
                description:
                  "Our plans prioritize sustainable practices, ensuring efficient land use and minimal environmental impact.",
              },
              {
                icon: Globe,
                title: "Smart City Integration",
                description:
                  "Incorporating technology and data analytics, we design smart cities that enhance urban life and governance.",
              },
              {
                icon: Compass,
                title: "Cultural Sensitivity",
                description:
                  "We respect the local culture and heritage, seamlessly integrating it into modern urban designs.",
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
            Comprehensive Urban Planning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: "Urban Development Plans",
                description:
                  "Designing frameworks for efficient infrastructure, transportation, and zoning.",
              },
              {
                icon: Building,
                title: "Land Use Analysis",
                description:
                  "Optimizing land allocation for residential, commercial, and green spaces.",
              },
              {
                icon: Globe,
                title: "Environmental Assessments",
                description:
                  "Ensuring developments comply with environmental sustainability standards.",
              },
              {
                icon: Compass,
                title: "Community Engagement",
                description:
                  "Involving stakeholders to ensure plans align with the community's vision and needs.",
              },
              {
                icon: Building,
                title: "Smart City Planning",
                description:
                  "Incorporating technology-driven solutions for urban challenges.",
              },
              {
                icon: Map,
                title: "Transport & Mobility Planning",
                description:
                  "Developing efficient public transit and road networks for seamless connectivity.",
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
            Let’s Shape the Cities of Tomorrow
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to bring your urban vision to life. Partner with
            us for innovative and sustainable master planning solutions that
            cater to today’s and tomorrow’s needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
