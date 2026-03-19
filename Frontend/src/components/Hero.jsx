import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">

      {/* Left Content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0">
        <div className="text-[#414141] px-6 sm:px-12">

          {/* Bestseller Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 md:w-11 h-0.5 bg-[#414141]"></span>
            <p className="font-medium text-sm md:text-base">
              OUR BESTSELLER
            </p>
          </div>

          {/* Heading */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          {/* Shop Now */}
          <div className="flex items-center gap-2 mt-6 cursor-pointer group">
            <p className="font-semibold text-sm md:text-base group-hover:tracking-widest transition-all duration-300">
              SHOP NOW
            </p>
            <span className="w-8 md:w-11 h-1px bg-[#414141] group-hover:w-14 transition-all duration-300"></span>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="hero-img"
      />

    </div>
  );
};

export default Hero;