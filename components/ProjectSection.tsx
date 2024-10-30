"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
const ProjectSection = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      className={`flex flex-col md:flex-row items-center p-10 max-md:px-5 py-14 gap-4 ${
        index % 2 === 0
          ? "md:flex-row text-gray-800"
          : "md:flex-row-reverse bg-gray-700 !text-white"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div className="w-full md:w-1/2">
        <ImageGallery images={project.images} />
      </motion.div>
      <div className="w-full md:w-1/2 space-y-4">
        <motion.h2
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <div className="text-2xl  font-bold flex max-md:text-sm  justify-between items-center max-md:items-start  ">
            <span className="w-2/3">{project.name}</span>
            <span className="w-1/3 text-center text-base max-md:text-xs  ">
              - {project.work}
            </span>
          </div>
          <span>{project.place}</span>
        </motion.h2>
        <motion.p
          className=" text-lg"
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          {project.details}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
