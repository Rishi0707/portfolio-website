import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="lg:fixed lg:top-[35%] lg:left-0 sm:absolute sm:bottom-0 sm:w-full sm:py-4 bg-[#0a192f]">
      <ul className="flex lg:flex-col sm:flex-row sm:justify-center">
        {/* LinkedIn */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/rishi-agrawal-136780230"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <FaLinkedin size={0} />
          </a>
        </li>

        {/* GitHub */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/Rishi0707"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaGithub size={0} />
          </a>
        </li>

        {/* Email */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="mailto:rishiagrawal200319@gmail.com"
          >
            Email <HiOutlineMail size={0} />
          </a>
        </li>

        {/* Resume */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-auto lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="src/assets/Rishi_Agrawal_CSE_2025_.pdf"
            download="Rishi_Agrawal_CSE_2025_.pdf"
          >
            Resume <BsFillPersonLinesFill size={0} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
