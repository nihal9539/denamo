"use client";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const ExperienceGrid = () => {
  return (
    <div className="grid grid-cols-3 text-white max-md:grid-cols-2 gap-5 max-md:gap-2 max-md:px-2.5 p-10">
      <div className="relative h-56 max-md:h-32 rounded-2xl  overflow-hidden">
        <div className="absolute inset-0 bg-black/15 z-10"></div>

        <img
          src="/grid-image/01.jpg"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-50 inset-0 flex flex-col justify-center items-start p-4">
          <h3 className="text-4xl max-md:text-3xl font-bold">
            {/* <CountUp start={0} end={1500} />+ */}
            <CountUp start={1000} end={1500} duration={2} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h3>
          <h3 className="text-2xl max-md:text-base font-semibold mt-2">
            Completed Projects
          </h3>
        </div>
      </div>
      <div className="h-56 max-md:h-32 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-black/15 z-10"></div>

        <img
          src="/grid-image/2.jpg"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-start p-4">
          <h3 className="text-4xl max-md:text-3xl font-bold">
            <CountUp start={500} end={1000} duration={2} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>{" "}
            +
          </h3>
          <h3 className="text-2xl max-md:text-base font-semibold mt-2">
            Happy Customers
          </h3>
        </div>
      </div>
      <div className="h-56 max-md:h-32 relative overflow-hidden rounded-2xl max-md:col-span-2">
        <div className="absolute inset-0 bg-black/15 z-10"></div>

        <img
          src="/grid-image/3.jpg"
          alt="Image 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-start p-4">
          <h3 className="text-4xl max-md:text-3xl font-bold">
            <CountUp end={24} duration={2} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>{" "}
            +
          </h3>
          <h3 className="text-2xl max-md:text-base font-semibold mt-2">
            Years of Experience
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExperienceGrid;
