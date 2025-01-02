import React from 'react';

const About = () => {
  return (
<div name="about" className="w-full min-h-[80vh] bg-[#0a192f] text-gray-300 flex justify-center items-center">
      <div className="max-w-[1000px] w-full px-4">
        <div className="text-center sm:text-right">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi, I'm Rishi Agrawal. Nice to meet you!</p>
          </div>
        
            
              <p>I am Computer Science and Engineering student with a knack for developing efficient and scalable solutions. With hands-on experience in React, MERN stack, and Python, I specialize in crafting seamless user interfaces and robust systems. Passionate about problem-solving and innovation, I aim to deliver impactful digital experiences.</p>  
            
          </div>
      </div>
    </div>
  );
};

export default About;
