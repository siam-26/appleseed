import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LuBook } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";


const Sidebar = () => {
    return (
        <div className="bg-[#0a0a0a] relative ">
            <div className="text-white flex items-center justify-between  pt-5 mb-8 ">
                {/* <p className="text-3xl  text-gray-600">Logo</p> */}
                <div className="bg-[#c7ee01] text-black ml-2 pl-4 pr-6 py-5 border-r-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 ">
                <RxHamburgerMenu className="text-3xl "/>
                {/* <BsThreeDotsVertical className="text-3xl "/> */}
                </div>
            </div>

            {/* menu */}
            <div className="absolute pl-5">
            <div className=" pr-3">
                <div className=" px-3 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] text-[#c7ee01]  transition duration-300 text-center rounded-xl">
                    <p className="text-lg font-semibold flex items-center gap-8">
                    <IoHomeOutline className="text-2xl" />
                        Home
                        </p>
                </div>
            </div>

            <div className=" pr-3">
                <div className=" px-3 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl">
                    <p className="text-lg font-semibold flex items-center gap-8">
                    <IoBriefcaseOutline className="text-2xl" />
                        Projects
                        </p>
                </div>
            </div>

            <div className=" pr-3">
                <div className=" px-3 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl">
                    <p className="text-lg font-semibold flex items-center gap-8">
                    <BsPerson className="text-2xl" />
                        About
                        </p>
                </div>
            </div>

            <div className=" pr-3">
                <div className=" px-3 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl">
                    <p className="text-lg font-semibold flex items-center gap-8">
                    <LuBook className="text-2xl" />
                        Blog
                        </p>
                </div>
            </div>

            <div className=" pr-3">
                <div className=" px-3 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl">
                    <p className="text-lg font-semibold flex items-center gap-8">
                    <SlEnvolope className="text-2xl" />
                        Contact
                        </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;