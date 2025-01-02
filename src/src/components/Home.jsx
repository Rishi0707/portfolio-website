import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full min-h-[80vh] bg-[#0a192f] flex items-center">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <p className="text-pink-600 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          RISHI AGRAWAL
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Computer Science Engineer.
        </h2>
        <p className="text-[#8892b0] py-2 max-w-[700px] leading-relaxed">
          I’m a passionate developer with expertise in React, Python, and cloud computing. 
          I thrive on solving complex problems, crafting intuitive user interfaces, 
          and building impactful projects. Let's collaborate and create something amazing together!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              aria-label="View my work"
              className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 ease-in-out"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;