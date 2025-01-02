import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Logo */}
      <Link onclick={handleClick} to='home' smooth={true} duration={500}><div className='flex items-center'>
        <img
          src={Logo}
          alt='Logo'
          className='w-[50px] h-[50px] object-cover rounded-full'
        />
        {/* Optionally, add a name or brand next to the logo */}
        <span className='ml-3 text-xl font-bold text-white'>
          Rishi
        </span>
      </div></Link>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}

<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    {/* LinkedIn */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://www.linkedin.com/in/rishi-agrawal-136780230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' // Replace with your LinkedIn profile link
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn <FaLinkedin size={30} />
      </a>
    </li>

    {/* GitHub */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='https://github.com/Rishi0707' // Replace with your GitHub profile link
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub <FaGithub size={30} />
      </a>
    </li>

    {/* Email */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='mailto:rishiagrawal200319@gmail.com' // Replace with your email address
      >
        Email <HiOutlineMail size={30} />
      </a>
    </li>

    {/* Resume */}
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href='src\assets\Rishi_Agrawal_CSE_2025_.pdf' // Replace with the path to your resume PDF
        download='Rishi_Agrawal_CSE_2025_.pdf' // The file will be downloaded with this name
      >
        Resume <BsFillPersonLinesFill size={30} />
      </a>
    </li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
