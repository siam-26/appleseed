import React from "react";
import "./Portfolio.css";
import { GoArrowUpRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const Portfolio = () => {
  return (
    //     <div className="wrapper">
    //   <div className="parent">
    //     <div className="child">

    //     </div>
    //   </div>
    // </div>
    <div className="lg:mt-20 md:mt-0 lg:mt-20 px-2 md:px-4 overflow-hidden">
      {/* 0 */}

      <div className="wrapper">
        <div className="parent">
        
          <div className="child">
            <img
              className="h-[570px] w-[100%]"
              src="https://images.unsplash.com/photo-1591051270770-b268b0189078?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbGFwdG9wfGVufDB8fDB8fHww"
            />
          </div>

          <div className="arrow-parent">
            <GoArrowUpRight className="text-4xl mb-5 arrow" />
            <GoArrowUpRight className="text-4xl arrow" />
          </div>

          
          <div className=" top-0 left-8">
            
            {/* content */}
            <div className="mt-72 md:mt-96 ml-7 absolute content-style top-[160px]">
              <h2 className="text-3xl text-2xl mb-5 text-white">BizzBuzz</h2>
              <p className="content-style-text font-semibold">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly use
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-0  mr-auto top-[-550px] left-14 bg-teal-300">
          <div className="text-center text-neutral-content">
            <div className="flex justify-between gap-40 items-center pt-10  w-full mx-auto">
              {/* moving text */}

              <div className="">
                <div class="container w-32 md:w-[48%]">
                  <div class="scroll">
                    <div class="RightToLeft">
                      <p>Personal Project</p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                      <p>2023 </p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                      <p>Personal Project</p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                      <p>2023 </p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                      <p>Personal Project</p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                      <p>2023 </p>
                      <span className="text-xs">
                        <GoDotFill className="text-[7px]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute right-[-100px] arrow-style">
                    <div className="bg-red-200 h-10 overflow-hidden another">
                    <GoArrowUpRight className="text-4xl text-[#999] mb-5 arrow-1" />
                    <GoArrowUpRight className="text-4xl text-[#c7ee01] arrow-2" />
                    </div>
                  </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
