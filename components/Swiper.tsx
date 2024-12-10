import React from "react";

const Swiper: React.FC = () => {
  return (
    <div className="relative h-[90vh] max-md:h-[50vh]">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={"profile.jpeg"}
            alt={`Slide `}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Swiper;
