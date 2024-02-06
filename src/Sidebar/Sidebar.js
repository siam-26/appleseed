import React, { useState } from "react";
import "./Sidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LuBook } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { useRef } from "react";

const Sidebar = ({ setExpanded, expanded }) => {
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  // const click = () => {
  //   setExpanded((curr) => !curr);
  //   showNavbar();
  // };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="flex justify-between">
      <nav ref={navRef} className="">
        <div className="bg-indigo-300 w-full relative">
          <span className="text-gray-500 absolute text-3xl top-[25%] left-[7%] absolute ">
            LOGO
          </span>
          <button
            className="nav-btn nav-close-btn bg-[#c7ee01] text-black px-6 py-5 border-t-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300"
            onClick={showNavbar}>
            <BsThreeDotsVertical className="text-3xl icons" />
          </button>
        </div>
        <div className=" w-full">
          <ul className="flex flex-col justify-start gap-y-5 top-[60px] relative  w-full px-14">
            <div className="pl-5 pr-[10%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
              <div className="text-lg font-semibold ">
                <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
                <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
              </div>
              <p className="text-xl ml-16">Home</p>
            </div>

            <div className="pl-5 pr-[10%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
              <div className="text-lg font-semibold ">
                <IoBriefcaseOutline className="text-2xl side-icons" />
                <IoBriefcaseOutline className="text-2xl side-icons" />
              </div>
              <p className="text-xl ml-16">Projects</p>
            </div>

            <div className="pl-5 pr-[10%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
              <div className="text-lg font-semibold ">
                <BsPerson className="text-2xl side-icons" />
                <BsPerson className="text-2xl side-icons" />
              </div>
              <p className="text-xl ml-16">About</p>
            </div>

            <div className="pl-5 pr-[10%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
              <div className="text-lg font-semibold ">
                <LuBook className="text-2xl side-icons" />
                <LuBook className="text-2xl side-icons" />
              </div>
              <p className="text-xl ml-16">Blogs</p>
            </div>

            <div className="pl-5 pr-[10%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
              <div className="text-lg font-semibold ">
                <SlEnvolope className="text-2xl side-icons" />
                <SlEnvolope className="text-2xl side-icons" />
              </div>
              <p className="text-xl ml-16">Contact</p>
            </div>
          </ul>
        </div>
      </nav>

      <ul className="flex flex-row justify-start gap-y-5 relative w-5/12">
        <div className=" w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icons">
          <div className="text-lg font-semibold ">
            <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
            <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
          </div>
        </div>

        <div className=" w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icons">
          <div className="text-lg font-semibold ">
            <IoBriefcaseOutline className="text-2xl side-icons" />
            <IoBriefcaseOutline className="text-2xl side-icons" />
          </div>
        </div>

        <div className=" w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icons">
          <div className="text-lg font-semibold ">
            <BsPerson className="text-2xl side-icons" />
            <BsPerson className="text-2xl side-icons" />
          </div>
        </div>

        <div className=" w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icons">
          <div className="text-lg font-semibold ">
            <LuBook className="text-2xl side-icons" />
            <LuBook className="text-2xl side-icons" />
          </div>
        </div>

        <div className=" w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icons">
          <div className="text-lg font-semibold ">
            <SlEnvolope className="text-2xl side-icons" />
            <SlEnvolope className="text-2xl side-icons" />
          </div>
        </div>
      </ul>

      <button
        className="nav-btn bg-[#c7ee01] text-black px-6 py-5 border-t-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 ml-auto"
        onClick={showNavbar}>
        <RxHamburgerMenu className="text-3xl icons" />
        ds
      </button>
    </header>

    // <div
    //   className={` lg:h-screen  bg-[#0a0a0a] ${
    //     expanded ? "w-[310px]" : "w-[100px]"
    //   } `}>
    //     {/* ${expanded ? "h-20" : "h-[750px]"} */}
    //   <nav ref={navRef} className="nav-style">
    //   <div className={`grid  lg:hidden `}>
    //     <div className="flex justify-between">
    //       {expanded ? (
    //         <div className="w-full">
    //           <div className="flex justify-between items-center pl-10">
    //             <p className="text-gray-500 text-4xl font-light">LOGO</p>
    //             <button
    //               onClick={click}
    //               className="bg-[#c7ee01] text-black pr-6 py-5 border-t-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 sidebar-buttons">
    //               {expanded ? (
    //                 <>
    //                   <RxHamburgerMenu className="text-3xl icons text-red-700" />
    //                   {/* <BsThreeDotsVertical className="text-3xl icons" /> */}
    //                 </>
    //               ) : (
    //                 <>
    //                   <BsThreeDotsVertical className="text-3xl icons" />
    //                   {/* <RxHamburgerMenu className="text-3xl icons" /> */}
    //                 </>
    //               )}
    //             </button>
    //           </div>
    //           <div className="w-full mt-20">
    //             <ul className="flex flex-col w-4/12 justify-start relative">
    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons absolute top-[15%]">
    //                 <div className="text-lg font-semibold ">
    //                   <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
    //                   <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
    //                 </div>
    //                 <p className="text-xl ml-16">Home</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons absolute top-[15%]">
    //                 <div className="text-lg font-semibold ">
    //                   <IoBriefcaseOutline className="text-2xl side-icons" />
    //                   <IoBriefcaseOutline className="text-2xl side-icons" />
    //                 </div>
    //                 <p className="text-xl ml-16">Projects</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons absolute top-[15%]">
    //                 <div className="text-lg font-semibold ">
    //                   <BsPerson className="text-2xl side-icons" />
    //                   <BsPerson className="text-2xl side-icons" />
    //                 </div>
    //                 <p className="text-xl ml-16">About</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons absolute top-[15%]">
    //                 <div className="text-lg font-semibold ">
    //                   <LuBook className="text-2xl side-icons" />
    //                   <LuBook className="text-2xl side-icons" />
    //                 </div>
    //                 <p className="text-xl ml-16">Blogs</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons absolute top-[15%]">
    //                 <div className="text-lg font-semibold ">
    //                   <SlEnvolope className="text-2xl side-icons" />
    //                   <SlEnvolope className="text-2xl side-icons" />
    //                 </div>
    //                 <p className="text-xl ml-16">Contact</p>
    //               </div>
    //             </ul>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="flex justify-between w-full">
    //           <ul className="flex items-center">
    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
    //               <div className="text-lg font-semibold ">
    //                 <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
    //                 <IoHomeOutline className="text-2xl side-icons text-[#c7ee01]" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
    //               <div className="text-lg font-semibold ">
    //                 <IoBriefcaseOutline className="text-2xl side-icons" />
    //                 <IoBriefcaseOutline className="text-2xl side-icons" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
    //               <div className="text-lg font-semibold ">
    //                 <BsPerson className="text-2xl side-icons" />
    //                 <BsPerson className="text-2xl side-icons" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
    //               <div className="text-lg font-semibold ">
    //                 <LuBook className="text-2xl side-icons" />
    //                 <LuBook className="text-2xl side-icons" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icons">
    //               <div className="text-lg font-semibold ">
    //                 <SlEnvolope className="text-2xl side-icons" />
    //                 <SlEnvolope className="text-2xl side-icons" />
    //               </div>
    //             </div>
    //           </ul>
    //           <button
    //             onClick={() => setExpanded((curr) => !curr)}
    //             className="bg-[#c7ee01] text-black pr-6 py-5 border-t-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 sidebar-buttons">
    //             {expanded ? (
    //               <>
    //                 <RxHamburgerMenu className="text-3xl icon" />
    //                 <BsThreeDotsVertical className="text-3xl icon" />
    //               </>
    //             ) : (
    //               <>
    //                 <BsThreeDotsVertical className="text-3xl icon" />
    //                 <RxHamburgerMenu className="text-3xl icon" />
    //               </>
    //             )}
    //           </button>
    //         </div>
    //       )}
    //     </div>

    //     {expanded && (
    //       <div className="leading-4 px-6 mx-auto mt-20 w-full">
    //         <div className="flex justify-between">
    //           <p className="font-semibold text-[#c7ee01] text-xs">
    //             Buy Template
    //           </p>
    //           <p className="text-xs text-gray-500">@2023</p>
    //         </div>
    //         <div className="flex justify-between text-gray-400 mt-7">
    //           <MdOutlineAlternateEmail className="text-2xl text-gray-600" />
    //           <SlSocialYoutube className="text-2xl" />
    //           <FaInstagram className="text-2xl" />
    //           <FiTwitter className="text-2xl" />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   </nav>

    //   {/* ${expanded ? "h-20" : "h-[750px]"} */}
    //   {/* <div className="">
    //     <div className="flex justify-between mt-8">
    //       {expanded ? (
    //         <div className="">
    //           <div className="flex justify-between items-center gap-[107px] pl-5">
    //             <p className="text-gray-500 text-4xl font-light">LOGO</p>
    //             <button
    //               onClick={() => setExpanded((curr) => !curr)}
    //               className="bg-[#c7ee01] text-black pr-6 py-5 border-r-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 sidebar-button">
    //               {expanded ? (
    //                 <>
    //                   <RxHamburgerMenu className="text-3xl icon" />
    //                   <BsThreeDotsVertical className="text-3xl icon" />
    //                 </>
    //               ) : (
    //                 <>
    //                   <BsThreeDotsVertical className="text-3xl icon" />
    //                   <RxHamburgerMenu className="text-3xl icon" />
    //                 </>
    //               )}
    //             </button>
    //           </div>
    //           <div className="w-full mt-20">
    //             <ul className="flex flex-col w-full justify-start ">
    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01]  transition duration-300 text-center rounded-xl sidebar-icon">
    //                 <div className="text-lg font-semibold text-gray-600">
    //                   <IoHomeOutline className="text-2xl side-icon text-[#c7ee01]" />
    //                   <IoHomeOutline className="text-2xl side-icon text-[#c7ee01]" />
    //                 </div>
    //                 <p className="text-xl ml-16 text-gray-400 ">Home</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01]  transition duration-300 text-center rounded-xl sidebar-icon">
    //                 <div className="text-lg font-semibold text-gray-600">
    //                   <IoBriefcaseOutline className="text-2xl side-icon" />
    //                   <IoBriefcaseOutline className="text-2xl side-icon" />
    //                 </div>
    //                 <p className="text-xl text-gray-400 ml-16">Projects</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01]  transition duration-300 text-center rounded-xl sidebar-icon">
    //                 <div className="text-lg font-semibold text-gray-600">
    //                   <BsPerson className="text-2xl side-icon" />
    //                   <BsPerson className="text-2xl side-icon" />
    //                 </div>
    //                 <p className="text-xl text-gray-400 ml-16">About</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01]  transition duration-300 text-center rounded-xl sidebar-icon">
    //                 <div className="text-lg font-semibold text-gray-600">
    //                   <LuBook className="text-2xl side-icon" />
    //                   <LuBook className="text-2xl side-icon" />
    //                 </div>
    //                 <p className="text-xl text-gray-400 ml-16">Blogs</p>
    //               </div>

    //               <div className="pl-5 pr-[160%] w-full py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01]  transition duration-300 text-center rounded-xl sidebar-icon">
    //                 <div className="text-lg font-semibold text-gray-600">
    //                   <SlEnvolope className="text-2xl side-icon" />
    //                   <SlEnvolope className="text-2xl side-icon" />
    //                 </div>
    //                 <p className="text-xl text-gray-400 ml-16">Contact</p>
    //               </div>
    //             </ul>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="flex flex-col justify-between ">
    //           <button
    //             onClick={() => setExpanded((curr) => !curr)}
    //             className="bg-[#c7ee01] text-black pr-6 py-5 border-r-8 border-[#93b400] hover:bg-white hover:border-[#bbbbbb] transition duration-300 sidebar-button">
    //             {expanded ? (
    //               <>
    //                 <RxHamburgerMenu className="text-3xl icon" />
    //                 <BsThreeDotsVertical className="text-3xl icon" />
    //               </>
    //             ) : (
    //               <>
    //                 <BsThreeDotsVertical className="text-3xl icon" />
    //                 <RxHamburgerMenu className="text-3xl icon" />
    //               </>
    //             )}
    //           </button>

    //           <ul className="flex flex-col items-center mt-10">
    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-400 transition duration-300 text-center rounded-xl sidebar-icon">
    //               <div className="text-lg font-semibold ">
    //                 <IoHomeOutline className="text-2xl side-icon text-[#c7ee01]" />
    //                 <IoHomeOutline className="text-2xl side-icon text-[#c7ee01]" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icon">
    //               <div className="text-lg font-semibold ">
    //                 <IoBriefcaseOutline className="text-2xl side-icon" />
    //                 <IoBriefcaseOutline className="text-2xl side-icon" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icon">
    //               <div className="text-lg font-semibold ">
    //                 <BsPerson className="text-2xl side-icon" />
    //                 <BsPerson className="text-2xl side-icon" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icon">
    //               <div className="text-lg font-semibold ">
    //                 <LuBook className="text-2xl side-icon" />
    //                 <LuBook className="text-2xl side-icon" />
    //               </div>
    //             </div>

    //             <div className="pl-3 md:pl-5 pr-9 md:pr-12 py-7 border border-black hover:border-gray-800 hover:bg-[#7c8f9e21] hover:text-[#c7ee01] text-gray-600 transition duration-300 text-center rounded-xl sidebar-icon">
    //               <div className="text-lg font-semibold ">
    //                 <SlEnvolope className="text-2xl side-icon" />
    //                 <SlEnvolope className="text-2xl side-icon" />
    //               </div>
    //             </div>
    //           </ul>
    //         </div>
    //       )}
    //     </div>

    //     {expanded && (
    //       <div className="leading-4 px-6 mx-auto mt-20 w-full">
    //         <div className="flex justify-between">
    //           <p className="font-semibold text-[#c7ee01] text-xs">
    //             Buy Template
    //           </p>
    //           <p className="text-xs text-gray-500">@2023</p>
    //         </div>
    //         <div className="flex justify-between text-gray-400 mt-7">
    //           <MdOutlineAlternateEmail className="text-2xl text-gray-600" />
    //           <SlSocialYoutube className="text-2xl" />
    //           <FaInstagram className="text-2xl" />
    //           <FiTwitter className="text-2xl" />
    //         </div>
    //       </div>
    //     )}
    //   </div> */}
    // </div>
  );
};

export default Sidebar;
