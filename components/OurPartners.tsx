import Image from "next/image";
import React from "react";

const OurPartners = () => {
    const partners = [
        { name: "Logoipsum", logo: "/client/icon-1.png" },
        { name: "IPSUM", logo: "/client/icon-2.png" },
        { name: "LQGO", logo: "/client/icon-3.png" },
        { name: "Logoipsum Shield", logo: "/client/icon-4.png" },
        { name: "Logo Ipsum", logo: "/client/icon-5.png" },
        { name: "logo ipsum", logo: "/client/icon-6.jpeg" },
      ]
  return (
    <section className="py-12 px-4 bg-gray-100 md:px-6  lg:px-8">
      <div className="flex max-md:flex-col items-center justify-center">
        <div className="w-1/3">
        <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600">
              Dynamic Teams, Trusted Partnerships, Lasting Impact
            </p>
        </div>
        <div className="w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={150}
                    height={60}
                    className="max-w-full h-auto"
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
