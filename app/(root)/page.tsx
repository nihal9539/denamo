import ExperienceGrid from "@/components/ExperienceGrid";
import ExperienceSection from "@/components/ExperienceSection";
import OurPartners from "@/components/OurPartners";
import OurProjects from "@/components/OurProjects";
import Swiper from "@/components/Swiper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fox | Innovative Design & Architectural Excellence</title>
        <meta
          name="description"
          content="Discover Fox's expertise in architectural design, interior design, and engineering solutions. Explore our portfolio, including residential, commercial, and hospitality projects."
        />
        <meta
          name="keywords"
          content="Architectural Design, Interior Design, Engineering Solutions, Residential Projects, Commercial Projects, Hospitality Projects, Innovative Design"
        />
        <meta name="author" content="Fox Design Team" />
        <meta
          property="og:title"
          content="Fox | Innovative Design & Architectural Excellence"
        />
        <meta
          property="og:description"
          content="Explore Fox's design solutions and experience in delivering excellence across architecture, engineering, and hospitality."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fox | Innovative Design & Architectural Excellence"
        />
        <meta
          name="twitter:description"
          content="Discover Fox's architectural design and engineering expertise. Explore our projects today."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <main>
        <Swiper />
        <ExperienceGrid />
        <OurProjects />
        <ExperienceSection />
        <OurPartners />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.224807672578!2d39.1108884!3d21.7634567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c163a98f31594f%3A0xb3d72c703f61002!2z2K3ZiiwgSkhVQTg4MTksIDg4MTkg2LnZhNmKINio2YYg2KPYqNmKINin2YTYqNmC2KfYodiMIDM0MjQsIE9iaHVyIEFsLVNoYW1hbGl5YWgsIEplZGRhaCAyMzgxNSwgU2F1ZGkgQXJhYmlh!5e1!3m2!1sen!2sin!4v1733455658218!5m2!1sen!2sin"
          className="w-full"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
      </main>
    </>
  );
}
