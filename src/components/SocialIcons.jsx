import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import useIsMobile from "../hooks/useIsMobile"; // Import the custom hook

const SocialIcons = () => {
  const isMobile = useIsMobile(); // Check if it's a mobile device

  if (!isMobile) return null; // Render nothing if not mobile

  return (
    <div className="fixed bottom-0 w-full py-0 bg-[#0a192f]">
      <ul className="flex justify-center">
        {/* LinkedIn */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-0 duration-300 bg-blue-600">
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
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-2 duration-300 bg-[#333333]">
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
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-2 duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="mailto:rishiagrawal200319@gmail.com"
          >
            Email <HiOutlineMail size={0} />
          </a>
        </li>

        {/* Resume */}
        <li className="w-[160px] h-[60px] flex justify-between items-center mx-1  duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://drive.google.com/file/d/1OIsu0hel8Prx6WxProZbl02uVPux4EnO/view?usp=drive_link"
            download="Rishi_Agrawal_CSE_2025_.pdf"
            type="application/pdf"
            rel="noopener noreferrer"
          >
            Resume <BsFillPersonLinesFill size={0} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
