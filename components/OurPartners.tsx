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
        { name: "LQGO", logo: "/client/icon-3.png" },
        { name: "Logoipsum Shield", logo: "/client/icon-4.png" },
    
      ]
  return (
    <section className="py-12 px-4 bg-gray-100 md:px-6  lg:px-10">
      <div className="flex max-md:flex-col max-md:gap-5 items-center justify-center">
        <div className="w-1/3 max-md:w-full">
        <h2 className="text-4xl max-md:text-center font-bold mb-4">Our Clients</h2>
            <p className="text-xl  max-md:text-center   font-semibold text-gray-600">
              Dynamic Teams, Trusted Partnerships,<br/> Lasting Impact
            </p>
        </div>
        <div className="w-2/3 max-md:w-full max-md:px-2 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    // width={150}
                    // height={60}
                    className=" w-[100px] max-md:h-[60px] h-[100px]"
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
