import React from 'react';
import { GoArrowRight } from "react-icons/go";
import img from "../../Assets/offer.jpg";

const Offer = () => {
    return (
        <div className="text-center bg-[#c7ee01] pt-20 mx-2 md:mx-5 border border-black rounded-xl"> 
            <img className="w-full" src={img}/>

            <div className="bg-[#c7ee01] py-10 px-5">
                <h1 className="text-[40px] md:text-[55px] text-black mb-5">Get 4 templates and save $107</h1>
                <p className="text-gray-600">Get Uno, Pager, Appleseed, Nitro, and every next template with 57% discount</p>
                <div className="mt-10 mb-20 w-8/12 md:w-4/12 lg:w-2/12 text-center mx-auto">
                    <a href="/">
                    <div className="bg-[#c7ee01] border border-black px-5 py-3 text-center rounded-full shadow-[0px_5px_1px_0px_#93b400] text-lg font-semibold hover:bg-black hover:text-white transition duration-300 text-lg font-semibold cursor:pointer flex items-center gap-3 text-center justify-center">
                        Learn More <GoArrowRight className="text-2xl"/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Offer;