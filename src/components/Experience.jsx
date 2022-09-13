import React from "react";
import html from "../assets/Technologies/html.png";
import Git from "../assets/Technologies/Git.png";
import css from "../assets/Technologies/css.png";
import github from "../assets/Technologies/github.png";
import laravel from "../assets/Technologies/laravel.png";
import javascipt from "../assets/Technologies/javascript.png";
import postman from "../assets/Technologies/postman.png";
import react from "../assets/Technologies/react.png";
import tailwind from "../assets/Technologies/tailwind.png";
import node from "../assets/Technologies/node.png";
import reactImage from "../assets/Technologies/react.png";
import npm from "../assets/Technologies/npm.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black  w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-150 py-2 rounded-lg">
            <img src={html} alt="html" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
