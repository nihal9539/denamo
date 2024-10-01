import ExperienceGrid from "@/components/ExperienceGrid";
import OurProjects from "@/components/OurProjects";
import Swiper from "@/components/Swiper";

export default function Home() {
  return (
    <main className="">
      <Swiper />
      <ExperienceGrid />
      <OurProjects />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.881461702763!2d39.13918247760859!3d21.563279718235894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbb91a65ca0f%3A0x9b82b3edc6a8a3ac!2sDelano%20Designs%20Corporations!5e1!3m2!1sen!2sin!4v1727765921629!5m2!1sen!2sin" className="w-full" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>    </main>
  );
}
