"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShowImage from "./ShowImage";
import FullShowModal from "./FullShowModal";

export default function ModernImageGrid({ images }: { images: string[] }) {
  console.log(images);

  const [showModal, setShowModal] = useState(false); // Toggle to show modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to hold the selected image
  const [showFullModal, setShowFullModal] = useState(false); // Toggle full-image modal

  // Function to handle showing the modal
  const openModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };
  // Function to handle showing the full-image modal
  const openFullModal = () => {
    setShowFullModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setShowFullModal(false);
  };
  return (
    <div className="mx-auto py-16 max-md:py-2 max-md:px-0 px-4">
      {images.length === 1 ? (
        // Render full image if there is only one image
        <motion.div
          className="relative h-96 max-md:h-60 rounded-lg overflow-hidden shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[0]}
            alt="Project Images"
            layout="fill"
            objectFit="cover"
            onClick={() => openModal(images[0])} // Open modal on click
            className="cursor-pointer"
          />
        </motion.div>
      ) : images.length === 2 ? (
        // Render two images side by side if there are two images
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                onClick={() => openModal(image)} // Open modal on click
                className="cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        // Asymmetric Grid Layout for multiple images
        <div className="grid relative h-96 max-md:h-60 grid-cols-3 gap-4">
          {/* First Image (Full height) */}
          <motion.div
            className="relative col-span-1 h-96 max-md:h-60 lg:row-span-2 rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[0]}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              onClick={() => openModal(images[0])} // Open modal on click
              className="cursor-pointer"
            />
          </motion.div>

          {/* Right Side Images (Half height) */}
          <div className="flex flex-col h-96 max-md:h-60 gap-4 col-span-2">
            {images.slice(1, 3).map((image, index) => (
              <motion.div
                key={index + 1}
                className="relative flex-1 h-full rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  onClick={() => openModal(image)} // Open modal on click
                  className="cursor-pointer"
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-5 right-5 text-center mt-8">
            <button
              onClick={openFullModal}
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg !bg-white/70 text-gray-800 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Show All Photos
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showModal &&
        selectedImage && ( // Ensure selectedImage is not null before rendering
          <ShowImage selectedImage={selectedImage} closeModal={closeModal} />
        )}
      {showFullModal &&
        ( // Ensure selectedImage is not null before rendering
          <FullShowModal images={images} closeModal={closeModal} />
        )}
    </div>
  );
}
