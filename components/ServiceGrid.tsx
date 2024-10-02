import React from "react";

const ServiceGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-4 max-md:grid-cols-2 text-white h-[75vh] max-md:h-auto  overflow-hidden  ">
        <div className="relative h-[75vh] max-md:h-80 w-full">
          <div className="absolute z-20 space-y-3 bottom-10 max-md:left-5 max-md:bottom-5 left-10">
            <h1 className=" uppercase text-2xl max-md:text-lg font-semibold">architecture</h1>
            <p className="pb-4 max-md:text-sm" >
              Architecture Designed for Growth and Seamless Flexibility
            </p>
            <div className="border-2 flex border-white max-md:text-xs  text-sm bg-transparent  p-3 font-semibold w-36 max-md:w-[7.5rem]">
              VIEW PROJECT
            </div>
          </div>
          <img src="/service/1.jpg" className="h-full w-full" alt="" />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative h-[75vh] max-md:h-80 w-full">
          <div className="absolute z-20 space-y-3 bottom-10 max-md:left-5 max-md:bottom-5 left-10">
            <h1 className=" uppercase text-2xl max-md:text-lg font-semibold">architecture</h1>
            <p className="pb-4 max-md:text-sm" >
              Architecture Designed for Growth and Seamless Flexibility
            </p>
            <div className="border-2 flex border-white max-md:text-xs  text-sm bg-transparent  p-3 font-semibold w-36 max-md:w-[7.5rem]">
              VIEW PROJECT
            </div>
          </div>
          <img src="/service/6.jpg" className="h-full w-full" alt="" />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative h-[75vh] max-md:h-80 w-full">
          <div className="absolute z-20 space-y-3 bottom-10 max-md:left-5 max-md:bottom-5 left-10">
            <h1 className=" uppercase text-2xl max-md:text-lg font-semibold">architecture</h1>
            <p className="pb-4 max-md:text-sm" >
              Architecture Designed for Growth and Seamless Flexibility
            </p>
            <div className="border-2 flex border-white max-md:text-xs  text-sm bg-transparent  p-3 font-semibold w-36 max-md:w-[7.5rem]">
              VIEW PROJECT
            </div>
          </div>
          <img src="/service/4.jpg" className="h-full w-full" alt="" />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
        <div className="relative h-[75vh] max-md:h-80 w-full">
          <div className="absolute z-20 space-y-3 bottom-10 max-md:left-5 max-md:bottom-5 left-10">
            <h1 className=" uppercase text-2xl max-md:text-lg font-semibold">Residential</h1>
            <p className="pb-4 max-md:text-sm" >
            Residential Spaces Tailored for Modern Living
            </p>
            <div className="border-2 flex border-white max-md:text-xs  text-sm bg-transparent  p-3 font-semibold w-36 max-md:w-[7.5rem]">
              VIEW PROJECT
            </div>
          </div>
          <img src="/service/2.jpg" className="h-full w-full" alt="" />
          <div className="absolute inset-0 bg-black/45 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
