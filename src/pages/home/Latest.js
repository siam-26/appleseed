import React from "react";
import { GoArrowRight } from "react-icons/go";

const Latest = ({ expanded }) => {
  return (
    <div className="mt-32 md:mt-40 mb-20 px-5 md:px-10 lg:px-28">
      <div className="flex flex-col lg:flex-row justify-between md:items-center">
        <h2 className="text-[27px] md:text-[43px] mb-10 md:mb-0 text-gray-900">
          Results, not pixels
        </h2>

        <div className="md:w-full lg:w-auto mt-10 mb-20">
        <a href="/">
          <div className=" border border-gray-400 hover:border-gray-700 text-gray-600 pl-10 pr-16 py-3 text-center rounded-full font-semibold flex items-center justify-center lg:justify-between about-icon hover:text-gray-800 ">
            Visit Blog
            <div className="">
              <GoArrowRight className="text-2xl about-icon-btn" />
              <GoArrowRight className="text-2xl about-icon-btn" />
            </div>
          </div>
        </a>
        </div>

        {/* <div className="">
                    <div className=" border border-gray-400 text-gray-600 px-10 py-3 text-center rounded-full font-semibold">
                        More about me
                    </div>
                </div> */}
      </div>

      {/* Content */}

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-7">
        

        <div className="opacity-80 hover:opacity-100 transition-all duration-300 mb-5">
          <div className="flex items-center gap-3">
            <img
              className="w-3/12 md:w-[90px] lg:w-3/12 rounded-full"
              src="https://garden.spoonflower.com/c/11358508/p/f/m/1Yl_aEI5kgSCyY7tpkB_bXaMOd_vjs1A6lTlN8m7X11J9Wsfhb7MM9sk70lC/Black%20marble%20texture.jpg"
            />
            {/* dotted line */}

            {expanded ? (
              <div class="containerDots w-[300px] md:w-[130px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="containerDots w-[300px] md:w-[180px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-xl my-2 text-gray-600 my-6">
            Starting and Growing a Career in Web Design
          </p>
          <p className="text-gray-400">Apr 8, 2022</p>
        </div>

        <div className="opacity-80 hover:opacity-100 transition-all duration-300 mb-5">
          <div className="flex items-center gap-3">
            <img
              className="w-3/12 md:w-[90px] lg:w-3/12 rounded-full"
              src="https://garden.spoonflower.com/c/11358508/p/f/m/1Yl_aEI5kgSCyY7tpkB_bXaMOd_vjs1A6lTlN8m7X11J9Wsfhb7MM9sk70lC/Black%20marble%20texture.jpg"
            />
            {/* dotted line */}

            {expanded ? (
              <div class="containerDots w-[300px] md:w-[130px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="containerDots w-[300px] md:w-[180px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-xl my-2 text-gray-600 my-6">
            Starting and Growing a Career in Web Design
          </p>
          <p className="text-gray-400">Apr 8, 2022</p>
        </div>

        <div className="opacity-80 hover:opacity-100 transition-all duration-300 mb-5">
          <div className="flex items-center gap-3">
            <img
              className="w-3/12 md:w-[90px] lg:w-3/12 rounded-full"
              src="https://garden.spoonflower.com/c/11358508/p/f/m/1Yl_aEI5kgSCyY7tpkB_bXaMOd_vjs1A6lTlN8m7X11J9Wsfhb7MM9sk70lC/Black%20marble%20texture.jpg"
            />
            {/* dotted line */}

            {expanded ? (
              <div class="containerDots w-[300px] md:w-[130px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="containerDots w-[300px] md:w-[180px]">
                <div class="scroll">
                  <div class="RightToLeftDot">
                    <div className="border-dotted w-[1000px] tracking-widest  border-t-2 border-gray-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-xl my-2 text-gray-600 my-6">
            Starting and Growing a Career in Web Design
          </p>
          <p className="text-gray-400">Apr 8, 2022</p>
        </div>
        
      </div>
    </div>
  );
};

export default Latest;
