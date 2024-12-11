import Image from 'next/image';
import React from 'react';

const Mainsection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 mx-auto">
      <div className="bg-slate-200 text-black flex flex-col md:flex-row justify-center items-center h-auto md:h-[550px] overflow-hidden py-8 sm:py-12 md:py-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-8 text-center md:text-left mb-6 md:mb-0 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium mb-2">
            WELCOME TO CHAIRY
          </h1>
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Best Furniture Collection For Your Interior.
          </p>
          <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <Image
            src="/chairhome.png"
            alt="Chair"
            width={400}
            height={400}
            className="w-full max-w-[250px] md:max-w-lg md:h-96 lg:max-w-[500px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
