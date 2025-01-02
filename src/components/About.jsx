import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rishi Agrawal, nice to meet you.</p>
            </div>
            <div>
              <p>I am Computer Science and Engineering student with a knack for developing efficient and scalable solutions. With hands-on experience in React, MERN stack, and Python, I specialize in crafting seamless user interfaces and robust systems. Passionate about problem-solving and innovation, I aim to deliver impactful digital experiences.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
