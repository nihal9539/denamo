import Image from "next/image";
import Link from "next/link";
import {
//   ClipboardCheck,
  Briefcase,
  HardHat,
  ClipboardCheck,
  Ruler,
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

export default function ConstructionManagement() {
  return (
    <div className="bg-white min-h-screen">
      <HeaderWithTitle image={'/service/Construction Management.jpg'} title={"Construction Management"} />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Managing Projects, Building Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Delano, we offer end-to-end construction
                management services to ensure your project is completed on time,
                within budget, and to the highest standards of quality. Our
                team coordinates every phase of construction with efficiency and
                transparency.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src='/service/Construction Management.jpg'
                alt="Construction Management"
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
                icon: ClipboardCheck,
                title: "Comprehensive Planning",
                description:
                  "We provide detailed planning and feasibility studies to align project goals with your vision.",
              },
              {
                icon: Briefcase,
                title: "Contract Administration",
                description:
                  "Our team handles contracts, ensuring compliance and smooth operations at every step.",
              },
              {
                icon: HardHat,
                title: "On-Site Coordination",
                description:
                  "We oversee construction activities, resolving issues and ensuring seamless execution.",
              },
              {
                icon: Ruler,
                title: "Quality Control",
                description:
                  "Strict adherence to quality standards ensures your project is built to last.",
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
                icon: ClipboardCheck,
                title: "Pre-Construction Planning",
                description:
                  "We assist with budgeting, scheduling, and risk management during the pre-construction phase.",
              },
              {
                icon: ClipboardCheck,
                title: "Construction Supervision",
                description:
                  "Continuous monitoring ensures projects adhere to timelines and budgets.",
              },
              {
                icon: HardHat,
                title: "Safety Management",
                description:
                  "We prioritize safety to create secure environments for workers and stakeholders.",
              },
              {
                icon: Briefcase,
                title: "Procurement Management",
                description:
                  "Our procurement team ensures timely delivery of high-quality materials and equipment.",
              },
              {
                icon: Ruler,
                title: "Cost Control",
                description:
                  "Effective cost management ensures financial efficiency throughout the project lifecycle.",
              },
              {
                icon: ClipboardCheck,
                title: "Post-Construction Services",
                description:
                  "We provide inspection, commissioning, and project handover services.",
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
                title: "Expert Team",
                description:
                  "Our experienced professionals excel in all facets of construction management.",
              },
              {
                title: "Transparent Process",
                description:
                  "We maintain open communication with clients for seamless collaboration.",
              },
              {
                title: "Efficient Execution",
                description:
                  "We ensure projects are completed on time without compromising quality.",
              },
              {
                title: "Cutting-Edge Tools",
                description:
                  "We leverage modern tools and technology to optimize every construction phase.",
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
            Build Your Dream Project Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us to learn more about
            our construction management services and how we can assist in
            delivering your project successfully.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
