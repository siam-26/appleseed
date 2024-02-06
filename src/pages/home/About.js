import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./About.css";

const About = ({ expanded }) => {
  return (
    <div className="my-20 px-5 md:px-10 lg:px-20 ">
      <div className="flex flex-col lg:flex-row justify-between md:items-center">
        <h2 className="text-[27px] mb-8 md:mb-5 md:text-[43px] text-gray-900">
          Results, not pixels
        </h2>

        <div className="md:w-full lg:w-auto"> 
        <a href="/">
          <div className="">
            <div className=" border border-gray-400 hover:border-gray-700 text-gray-600 pl-10 pr-16  py-3 text-center rounded-full font-semibold flex items-center justify-center lg:justify-between about-icon hover:text-gray-800 ">
              More about me
              <div className="">
                <GoArrowRight className="text-2xl about-icon-btn" />
                <GoArrowRight className="text-2xl about-icon-btn" />
              </div>
            </div>
          </div>
        </a>

        </div>

      </div>

      {/* content */}
      <div className="flex flex-col lg:flex-row items-end gap-10 md:gap-20 mt-10 relative ">
        <div className=" lg:w-6/12 shadow-[11px_10px_1px_0px_#dddddd] rounded-xl">
          <img
            className="rounded-xl"
            src="https://img.freepik.com/premium-photo/owl-sits-right-tree-branch-looks-camera_812426-2385.jpg"
          />
        </div>
        <div className="lg:w-6/12 text-gray-400 ">
          {/* dotted line */}

        {
          expanded ?
          <div class="containerDots mb-2 mr-auto w-[360px] md:w-[650px] lg:absolute top-0">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        :
        <div class="containerDots mb-2 mr-auto w-[360px] md:w-[650px] lg:w-[445px] lg:absolute top-0">
          <div class="scroll">
            <div class="RightToLeftDot">
              <div className="border-dotted w-[1000px] tracking-widest border-gray-300 border-t-2"></div>
            </div>
          </div>
        </div>
        }
          <p className="leading-relaxed">
            We're focused on diving into your problems and goals to find the
            most optimal way of execution. Our philosophy is based on "Why?"
            question which prevents our clients from getting a monkey job and
            unnecessary spendings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
