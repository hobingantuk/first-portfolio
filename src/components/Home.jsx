import React from "react";
import Profpic from "../assets/IMG_0876.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen flex w-full bg-gradient-to-b from-black to bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl md:text-8xl sm:text-7xl font-bold text-violet-400 drop-shadow-lg">
            I'm Bagus Nugra
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Currently Studying Web Programming Focusing On Backend using Laravel
            and Node JS. This is my attempt to learn Front End Development.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Profpic}
            alt="My Profile"
            className="rounded-xl  mx-auto w-4/12 md:w-6/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
