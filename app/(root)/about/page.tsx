import Ourmission from "@/components/Ourmission";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <section className="py-36 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover max-md:h-60 max-md:w-full"
                  // src="https://pagedone.io/asset/uploads/1717741205.png"
                  src="/about/01.jpg"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover max-md:w-full max-md:h-60"
                //   src="https://pagedone.io/asset/uploads/1717741215.png"
                src="/about/02.jpg"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  {/* <h2 className="text-gray-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2> */}
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    {/* Every project we&apos;ve undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we&apos;ve not only constructed buildings but also
                    built enduring connections that define our success story. */}
                    Since its inception, Delano Company Limited has established
                    itself as a global leader in Architectural Design, Interior
                    Design, Engineering, Hospitality Management, Hotel
                    Operation, and Real Estate Development. With operations
                    spanning Saudi Arabia, the USA, the Russian Federation, and
                    Egypt, we draw on the expertise of over 250 architects,
                    engineers, project managers, and developers. Our team
                    delivers innovative ideas, solutions, and technology,
                    guiding projects from concept to completion. At Delano, we
                    specialize in diverse sectors including residential and
                    commercial developments, hospitality projects, educational
                    institutions, mega malls, healthcare facilities, and office
                    spaces. As an independent, employee-owned consortium, we
                    focus solely on the needs of our clients, offering unbiased
                    advice and solutions tailored to their unique challenges and
                    budgets.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-600 text-4xl font-bold font-manrope leading-normal">
                      24+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-600 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-600 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ourmission />
    </div>
  );
};

export default AboutPage;
