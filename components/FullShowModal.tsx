import Image from "next/image";
import React from "react";

const FullShowModal = ({
  images,
  closeModal,
}: {
  images: string[];
  closeModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[9999] overflow-auto">
      <button
        onClick={closeModal}
        className="fixed top-4 right-4 text-white text-3xl z-[10000]  bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        aria-label="Close modal"
      >
        &times;
      </button>
      <div className="relative w-full max-w-4xl max-h-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-80">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullShowModal;
