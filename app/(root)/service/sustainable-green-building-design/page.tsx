import Image from "next/image";
import Link from "next/link";
import { Leaf, Globe, Lightbulb, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeaderWithTitle from "@/components/HeaderWithTitle";

export default function SustainableGreenBuildingDesign() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Green Building.jpg'} title={"Sustainable & Green Building Design"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Environmentally Conscious Solutions for Modern Spaces
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in designing sustainable and green buildings that
                prioritize energy efficiency, environmental harmony, and
                long-term cost savings. Our innovative solutions make
                eco-friendly living and working spaces a reality.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Green Project</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/service/Green Building-2.jpg"
                alt="Sustainable Green Building Design"
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
            Our Green Building Design Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly Materials",
                description:
                  "We use environmentally responsible materials that reduce the carbon footprint while enhancing durability.",
              },
              {
                icon: Lightbulb,
                title: "Energy Efficiency",
                description:
                  "Our designs incorporate energy-saving technologies, like solar panels and smart lighting systems, for sustainable living.",
              },
              {
                icon: Globe,
                title: "Environmental Harmony",
                description:
                  "We integrate building designs into their natural surroundings to preserve and enhance the local ecosystem.",
              },
              {
                icon: Building,
                title: "Innovative Architecture",
                description:
                  "Our green buildings combine cutting-edge technology with elegant design to create sustainable, functional spaces.",
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
            Sustainable Building Design Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "LEED Certification Assistance",
                description:
                  "We guide clients through the process of earning LEED certification, ensuring eco-friendly standards.",
              },
              {
                icon: Lightbulb,
                title: "Energy Modeling & Simulation",
                description:
                  "Our experts use advanced tools to simulate and optimize energy usage for efficient building performance.",
              },
              {
                icon: Globe,
                title: "Passive Design Strategies",
                description:
                  "We implement passive design principles that naturally regulate temperature and light to minimize energy use.",
              },
              {
                icon: Building,
                title: "Water Management Solutions",
                description:
                  "From rainwater harvesting to water-efficient systems, we provide sustainable water management solutions.",
              },
              {
                icon: Lightbulb,
                title: "Green Roof & Vertical Gardens",
                description:
                  "We design green roofs and vertical gardens that enhance air quality and create beautiful urban spaces.",
              },
              {
                icon: Globe,
                title: "Renewable Energy Integration",
                description:
                  "Our designs incorporate renewable energy sources like solar, wind, and geothermal for maximum efficiency.",
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
            Partner with Us for a Greener Tomorrow
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to turn your vision of a sustainable building into reality?
            Contact us today to start designing a space that’s eco-friendly and
            future-proof.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
