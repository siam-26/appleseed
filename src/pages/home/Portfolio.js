import React from 'react';
import './Portfolio.css';
import { GoArrowUpRight } from "react-icons/go";


const Portfolio = () => {
    return (
        <div className="mt-20 md:mt-0 lg:mt-20 px-2 md:px-4 overflow-hidden">
            {/* 1 */}
            <div className="p-5 rounded-xl md:px-20 zoom my-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591051270770-b268b0189078?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbGFwdG9wfGVufDB8fDB8fHww)'}}>
                 <div className="hero-overlay bg-opacity-10 rounded-lg "></div>
                 <div className="hero-content text-center text-neutral-content">
                  <div className="flex justify-between items-center pt-10">
                    {/* moving text */}
                    <marquee className="text-xl w-8/12 md:w-3/12 bg-gray-800 opacity-40" scrollamount="1" behavior="scroll" direction="left">
                    Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 .
                      </marquee>
                  <div><GoArrowUpRight className="text-4xl hover:text-[#c7ee01]"/></div>
                  </div>


                </div>
                    {/* content */}
                  <div className="mt-72 md:mt-96 ">
                    <h2 className="text-3xl text-xl text-white mb-3">BizzBuzz</h2>
                    <p className="text-gray-500 font-semibold">In publishing and graphic design, Lorem ipsum is a placeholder text commonly use</p>
                  </div>
            </div>

            {/* 2 */}
            <div className="p-5 rounded-xl md:px-20 zoom my-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591051270770-b268b0189078?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbGFwdG9wfGVufDB8fDB8fHww)'}}>
                 <div className="hero-overlay bg-opacity-10 rounded-lg "></div>
                 <div className="hero-content text-center text-neutral-content">
                  <div className="flex justify-between items-center pt-10">
                    {/* moving text */}
                    <marquee className="text-xl w-8/12 md:w-3/12 bg-gray-800 opacity-40" scrollamount="1" behavior="scroll" direction="left">
                    Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 . Personal Project . 2023 .
                      </marquee>
                  <div><GoArrowUpRight className="text-4xl hover:text-[#c7ee01]"/></div>
                  </div>


                </div>
                    {/* content */}
                  <div className="mt-72 md:mt-96 ">
                    <h2 className="text-3xl text-xl text-white mb-3">BizzBuzz</h2>
                    <p className="text-gray-500 font-semibold">In publishing and graphic design, Lorem ipsum is a placeholder text commonly use</p>
                  </div>
            </div>
        </div>
    );
};

export default Portfolio;