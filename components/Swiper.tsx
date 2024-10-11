"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import Framer Motion

const Swiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array with slides, titles, and subtitles
  const slides = [
    {
      img: "./swiper/img-1.jpeg",
      title: "First Slide Title",
      subtitle: "This is the subtitle for the first slide"
    },
    {
      img: "/swiper/img-2.jpg",
      title: "Second Slide Title",
      subtitle: "This is the subtitle for the second slide"
    },
    {
      img: "/swiper/img-3.jpg",
      title: "Third Slide Title",
      subtitle: "This is the subtitle for the third slide"
    }
  ];

  const changeSlide = (index: number) => {
    setTimeout(() => {
      setCurrentIndex(index);
    }, 300); // Match this duration with the fade-out effect
  };

  const nextSlide = () => {
    changeSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative h-[90vh] max-md:h-[50vh]">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full flex justify-center items-center transition-opacity duration-300 ease-in ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image */}
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15 z-10"></div>

              {/* Title and Subtitle with animation */}
              {currentIndex === index && (
                <motion.div
                  className="absolute bottom-16 left-16 max-md:left-5 max-md:bottom-10 text-left text-white z-20"
                  initial={{ y: 100, opacity: 0 }}  // Start position (below)
                  animate={{ y: 0, opacity: 1 }}    // End position (normal)
                  exit={{ y: 50, opacity: 0 }}       // Exit animation (back below)
                  transition={{ duration: 1.5 }}     // Animation duration
                >
                  <h2 className="text-lg max-md:text-base mb-5 max-md:mb-0">{slide.title}</h2>
                  <p className=" text-4xl tracking-tight max-md:text-xl font-bold">{slide.subtitle}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 p-2 rounded-full z-30"
        onClick={prevSlide}
      >
        <ChevronLeft size={45} />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 p-2 rounded-full z-30"
        onClick={nextSlide}
      >
        <ChevronRight size={45} />
      </button>

     
    </div>
  );
};

export default Swiper;
