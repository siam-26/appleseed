import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
    return (
        <div className="py-10 px-6 md:px-14 lg:px-24">
            {/* profile */}
            <div className="flex items-center gap-4"> 
                <img className="w-12" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" />
                <a href="/">
                    <p className="text-gray-400 hover:text-black">John Appleseed</p>
                </a>
            </div>

            {/* banner */}
            <div className="text mt-24 text-gray-900">
                <h1 className="text-4xl md:text-[42px] lg:text-[55px] lg:w-9/12 leading-tight">
                I am product designer, indie maker, and digital nomad living in internet
                </h1>

                <p className="text-gray-400 text-xl w-9/12 lg:w-7/12 ml-10 lg:ml-28 mt-10">
                I'm a freelance product designer with 12+ years of experience focusing on app interfaces
                </p>
            </div>

            {/* banner bottom */}
            <div className="mt-10 md:mt-20 flex flex-col gap-y-10 md:flex-row md:justify-between md:items-center">
                {/* button */}
                <div className="">
                <a href="/">
                    <div className="bg-[#c7ee01] border border-black px-20 md:px-9 py-3 text-center rounded-full shadow-[0px_5px_1px_0px_#bbbbbb] text-lg font-semibold hover:bg-black hover:text-white transition duration-300 text-lg font-semibold cursor:pointer flex items-center gap-3 text-center">
                        Learn More <GoArrowRight className="text-2xl"/>
                    </div>
                    </a>
                </div>

                

                {/* location */}
                <div className="text-gray-500 pl-3 md:pl-0">
                    <p>Palo Alto, CA (PST)</p>
                </div>

                {/* text */}
                <div className="text-gray-500 flex gap-3 items-center lg:w-3/12 pl-3 md:pl-0">
                    <div className="h-4 w-[16px] md:w-[18px] bg-[#c7ee01] rounded-full border border-black "></div>
                    <p className="w-11/12">Freelance available</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;