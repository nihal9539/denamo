"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const OurPartners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const partners = [
    { name: "Logoipsum", logo: "/client/img-1.jpeg" },
    { name: "IPSUM", logo: "/client/img-2.jpeg" },
    { name: "LQGO", logo: "/client/img-3.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-4.jpeg" },
    { name: "Logo Ipsum", logo: "/client/img-5.jpeg" },
    { name: "logo ipsum", logo: "/client/img-6.jpeg" },
    { name: "LQGO", logo: "/client/img-7.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-8.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-9.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-10.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-11.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-12.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-13.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-14.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-15.jpeg" },
    { name: "Logoipsum Shield", logo: "/client/img-16.jpeg" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 md:px-6 lg:px-10">
      <div className="flex max-md:flex-col max-md:gap-5 items-center justify-center">
        <div className="w-1/3 max-md:w-full" data-aos="fade-up"> {/* Add AOS effect to the text container */}
          <h2 className="text-4xl max-md:text-center font-bold mb-4">Our Clients</h2>
          <p className="text-xl max-md:text-center font-semibold text-gray-600">
            Dynamic Teams, Trusted Partnerships,<br /> Lasting Impact
          </p>
        </div>
        <div className="w-2/3 max-md:w-full max-md:px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
            {partners.map((partner, index) => (
              // data-aos-delay={index * 150}
              <div key={partner.name} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md" data-aos="zoom-in" > {/* Add AOS effect to each logo */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-[100px] max-md:h-[50px] h-[70px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
