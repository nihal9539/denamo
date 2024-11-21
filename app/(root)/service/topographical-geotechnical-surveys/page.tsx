import Image from "next/image";
import Link from "next/link";
import { Map, Layers, Ruler, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function TopographicalGeotechnicalSurveys() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Topographical & Geotechnical Surveys.jpg'} title={"Topographical & Geotechnical Surveys"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Laying the Groundwork for Success
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our topographical and geotechnical surveys provide the critical
                data required for successful project planning and execution.
                From terrain analysis to soil testing, we deliver precise
                insights to ensure every project begins with a solid foundation.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Topographical & Geotechnical Surveys-2.jpg"
                alt="Topographical & Geotechnical Surveys"
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
                icon: Map,
                title: "Accurate Mapping",
                description:
                  "We use advanced technology to create detailed topographical maps for informed decision-making.",
              },
              {
                icon: Layers,
                title: "Comprehensive Analysis",
                description:
                  "Our geotechnical surveys provide data on soil conditions, water tables, and more for optimal planning.",
              },
              {
                icon: Ruler,
                title: "Precision Measurements",
                description:
                  "From elevation to slope, our measurements ensure every detail is accounted for in project design.",
              },
              {
                icon: Shield,
                title: "Safety & Compliance",
                description:
                  "We adhere to the highest safety standards and regulatory requirements in all survey processes.",
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
                icon: Map,
                title: "Topographical Surveys",
                description:
                  "Comprehensive mapping services for detailed terrain analysis and project design.",
              },
              {
                icon: Layers,
                title: "Geotechnical Investigations",
                description:
                  "Soil testing and analysis to ensure a solid foundation for your projects.",
              },
              {
                icon: Ruler,
                title: "Land Boundary Surveys",
                description:
                  "Accurate boundary identification and legal compliance for all project requirements.",
              },
              {
                icon: Shield,
                title: "Subsurface Exploration",
                description:
                  "Detailed subsurface data collection for risk assessment and planning.",
              },
              {
                icon: Ruler,
                title: "Hydrographic Surveys",
                description:
                  "Mapping water bodies for construction, environmental, or navigational needs.",
              },
              {
                icon: Layers,
                title: "Environmental Assessment",
                description:
                  "Evaluating environmental factors to align projects with sustainability goals.",
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
            Ready to Start Your Survey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with us for precise, reliable topographical and geotechnical
            survey solutions. Contact us today to learn how we can support your
            projects with the insights you need.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
