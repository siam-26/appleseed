import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import "./Hero.css";
import image from "../../Assets/banner.png";

const Hero = ({ expanded }) => {
  return (
    // <div className="py-10 mx-auto px-6 md:px-14 lg:pl-24 lg:pr-0 hero-style" style={{background:`url(${image})`}}>
    <div className="py-10 mx-auto px-6 md:px-14 lg:pl-24 lg:pr-0 hero-style relative overflow-hidden">
      {
        expanded?
        <img src={image} className="absolute right-[-70%] md:right-[-50%] lg:right-[-38%] w-[950px] md:w-[550px] top-[-4%] md:top-[-20%] lg:top-[-20%] banner-img opacity-60"/>
        :
        <img src={image} className="absolute right-[-70%] md:right-[-50%] lg:right-[-30%] w-[950px] md:w-[550px] top-[-4%] md:top-[-20%] lg:top-[-20%] banner-img opacity-60"/>
      }
      {/* profile */}
      <div className="flex items-center gap-4 overflow-hidden">
        <img
          className="w-12"
          src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
        />
        <a href="/">
          <p className="text-gray-400 hover:text-black">John Appleseed</p>
        </a>
      </div>

      {/* banner */}
      <div className="text mt-24 text-gray-900">
        <h1 className="text-4xl md:text-[42px] lg:text-[55px] lg:w-[737px] leading-tight">
          I am product designer, indie maker, and digital nomad living in
          internet
        </h1>

        <p className="text-gray-400 text-xl w-9/12 lg:w-[625px] ml-10 lg:ml-[80px] mt-10">
          I'm a freelance product designer with 12+ years of experience focusing
          on app interfaces
        </p>
      </div>

      {/* banner bottom */}
      <div className="mt-10 md:mt-20 flex flex-col gap-y-6 lg:flex-row md:justify-between md:items-center w-11/12">
        {/* button */}
        <div className="md:w-full lg:w-auto">
          <a href="/">
            <div className="bg-[#c7ee01] md:w-full border border-black px-20 md:px-9 py-3 text-center rounded-full shadow-[0px_5px_1px_0px_#bbbbbb] text-lg font-semibold hover:bg-black hover:text-white transition duration-300 text-lg font-semibold cursor:pointer flex justify-center items-center gap-3 text-center hero-icon">
              Get Template
              <div className="">
                <GoArrowRight className="text-2xl ml-2 hero-icon-btn" />
                <GoArrowRight className="text-2xl ml-2 hero-icon-btn" />
              </div>
            </div>
          </a>
        </div>

        {/* dotted line */}

        {
          expanded ?
          <div class="containerDots w-[310px] md:w-[590px] lg:w-[80px] mx-auto">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        :
        <div class="containerDots w-[310px]  md:w-[590px] lg:w-[160px] mx-auto">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        }


        {/* location */}
        <div className="text-gray-500 pl-3 md:pl-5 lg:pl-0 flex justify-items-start md:w-full lg:w-auto text-left items-center gap-3 ">
          <FaLocationDot className="text-xl" />
          <p>Palo Alto, CA (PST)</p>
        </div>

        {/* dotted line */}

        {
          expanded ?
          <div class="containerDots w-[310px] md:w-[590px] lg:w-[80px] mx-auto">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        :
        <div class="containerDots w-[310px] md:w-[590px] lg:w-[160px] mx-auto">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        }

        {/* text */}
        <div className="text-gray-500 flex pl-3 md:pl-5 lg:pl-0 flex justify-items-start md:w-full lg:w-auto gap-3 items-center lg:w-3/12 pl-3 md:pl-0 ">
          <div className="h-4 w-[16px] md:w-[18px] bg-[#c7ee01] rounded-full border border-black "></div>
          {/* <GoDotFill className="text-3xl text-[#c7ee01] border border-black rounded-full m-[-20px]"/> */}
          <p className="w-11/12">Freelance available</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
