import Image from "next/image";
import React from "react";

const ShowImage = ({
  selectedImage,
  closeModal,
}: {
  selectedImage: string;
  closeModal: any;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[9999]">
      <div className="relative w-full h-full max-w-4xl max-h-full">
        <Image
          src={selectedImage}
          alt="Full Size Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times; {/* Close Icon */}
        </button>
    </div>
  );
};

export default ShowImage;
