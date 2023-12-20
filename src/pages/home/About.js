import React from 'react';

const About = () => {
    return (
        <div className="my-20 px-5 md:px-10 lg:px-28">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
               <h2 className="text-[27px] mb-5 md:text-[43px] text-gray-900">Results, not pixels</h2>
               
               <div className="">
                    <div className=" border border-gray-400 text-gray-600 px-10 py-3 text-center rounded-full font-semibold">
                        More about me
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col md:flex-row items-end gap-10 md:gap-20 mt-10">
                <div className="md:w-6/12 shadow-[11px_10px_1px_0px_#dddddd] rounded-xl">
                    <img className="rounded-xl" src="https://img.freepik.com/premium-photo/owl-sits-right-tree-branch-looks-camera_812426-2385.jpg"/>
                </div>
                <div className="md:w-6/12 text-gray-400">
                    <p>
                    We're focused on diving into your problems and goals to find the most optimal way of execution. Our philosophy is based on "Why?" question which prevents our clients from getting a monkey job and unnecessary spendings.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;