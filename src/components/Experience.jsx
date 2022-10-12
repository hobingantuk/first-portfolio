import React from "react";
import html from "../assets/Technologies/html.png";
import Git from "../assets/Technologies/Git.png";
import css from "../assets/Technologies/css.png";
import github from "../assets/Technologies/github.png";
import laravel from "../assets/Technologies/laravel.png";
import javascript from "../assets/Technologies/javascript.png";
import postman from "../assets/Technologies/postman.png";
import tailwind from "../assets/Technologies/tailwind.png";
import node from "../assets/Technologies/node.png";
import reactImage from "../assets/Technologies/react.png";
import npm from "../assets/Technologies/npm.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascipt",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: node,
      title: "Node.JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "tailwind",
      style: "shadow-cyan-500",
    },
    {
      id: 8,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: npm,
      title: "NPM",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: Git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];

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
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-150 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
