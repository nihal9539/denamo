import React from "react";

const Ourmission = () => {
  return (
    <section className="grid grid-cols-2 text-gray-600 max-md:grid-cols-1 items-center pb-16 px-28 max-md:px-5">
      <div>
        <h1 className="font-bold  text-6xl mb-10 leading-4 max-md:text-5xl">
          Our Mission
        </h1>
        <p>
          We focus on innovation, sustainability, and delivering excellence. By
          adopting advanced technologies and eco-friendly practices, we ensure
          that our projects are efficient and responsible. Our goal is to
          integrate smart building solutions and provide personalized services
          tailored to each client’s needs. Through talent development and strong
          international partnerships, we aim to expand into new markets and set
          higher standards for the industry.
        </p>
      </div>
      <div className="flex gap-5 max-md:mt-5 max-md:px-0  px-10 flex-col">
        <div className="flex gap-5">
          <div className="relative h-44 max-md:h-32 w-1/2 rounded-2xl  overflow-hidden">
            {/* <div className="absolute inset-0 bg-black/15 z-10"></div> */}

            <img
              src="/grid-image/01.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-44 max-md:h-32 w-1/2 relative overflow-hidden rounded-2xl">
            {/* <div className="absolute inset-0 bg-black/15 z-10"></div> */}

            <img
              src="/grid-image/2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="h-44 max-md:h-32 relative overflow-hidden rounded-2xl col-span-2">
          {/* <div className="absolute inset-0 bg-black/15 z-10"></div> */}

          <img
            src="/grid-image/3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Ourmission;
