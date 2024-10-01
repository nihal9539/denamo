import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <h2 className="text-xl text-black mb-4">ABOUT DENAMO</h2>
          <h3 className="text-5xl max-md:text-4xl text-gray-600 font-bold mb-6">
            We're Experienced in This Field
          </h3>
          <p className="text-gray-600 mb-6">
            Emporium tortor vel orci efficitur, in venenatis felis molestie. In
            lobortis odio augue, id vulputate erat egestas sed. Ut euismod ipsum
            ut dolor hendrerit, non ultricies urna accumsan.
          </p>
          <p className="text-gray-600 mb-8">
            Donec vitae risus eget nisi molestie vehicula quis vel magna. Donec
            tristique mauris eu fermentum dignissim.
          </p>
          <div className="flex justify-between mb-8">
            <div>
              <h4 className="text-4xl font-bold text-gray-600">28+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-600">894+</h4>
              <p className="text-gray-600">Project Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gray-600">42+</h4>
              <p className="text-gray-600">Best Partners</p>
            </div>
          </div>
          <Button className="bg-gray-600 hover:bg-gray-700 text-white">
            READ MORE
          </Button>
        </div>
        <div className="flex flex-col items-start h-full  overflow-hidden  gap-3.5">
          <div className="flex gap-3.5 w-full  justify-center">
            <div className="relative w-1/3  h-full">
              <img
                src="/service/1.jpg"
                alt="Modern house exterior"
                className="absolute   bottom-0 right-0 z-30 w-32 h-32  object-cover"
              />
            </div>
            <div className="w-2/3">
              <img
                src="/service/3.jpg"
                alt="Modern house with pool"
                className="w-full h-48  object-cover"
              />
            </div>
          </div>
          <div className="flex w-full gap-3.5">
            <div className="w-1/2">
              <img
                src="/service/4.jpg"
                alt="Office interior"
                className="w-full h-48  object-cover"
              />
            </div>
            <div className="w-1/2 h-80 relative">
              <img
                src="/service/2.jpg"
                alt="Modern building exterior"
                className="w-56 h-full absolute left-0 top-0   object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
