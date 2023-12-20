import React from 'react';

const Latest = () => {
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

            {/* Content */}

            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
                <div className="opacity-80 hover:opacity-100 transition-all duration-300">
                    <div >
                    <img className="rounded-full h-[87px] w-3/12 md:h-[83px]  md:w-5/12 lg:h-[70px] lg:w-3/12" src="https://as2.ftcdn.net/v2/jpg/02/43/25/41/1000_F_243254183_qJZ1dazialx8NmCPxNjpOE3qRJeNEeFu.jpg" />
                    </div>
                    <p className="text-xl my-2 text-gray-600 my-6">Starting and Growing a Career in Web Design</p>
                    <p className="text-gray-400">Apr 8, 2022</p>
                </div>

                <div className="opacity-80 hover:opacity-100 transition-all duration-300">
                    <div >
                    <img className="rounded-full h-[87px] w-3/12 md:h-[83px]  md:w-5/12 lg:h-[70px] lg:w-3/12" src="https://as2.ftcdn.net/v2/jpg/02/43/25/41/1000_F_243254183_qJZ1dazialx8NmCPxNjpOE3qRJeNEeFu.jpg" />
                    </div>
                    <p className="text-xl my-2 text-gray-600 my-6">Starting and Growing a Career in Web Design</p>
                    <p className="text-gray-400">Apr 8, 2022</p>
                </div>

                <div className="opacity-80 hover:opacity-100 transition-all duration-300">
                    <div >
                    <img className="rounded-full h-[87px] w-3/12 md:h-[83px]  md:w-5/12 lg:h-[70px] lg:w-3/12" src="https://as2.ftcdn.net/v2/jpg/02/43/25/41/1000_F_243254183_qJZ1dazialx8NmCPxNjpOE3qRJeNEeFu.jpg" />
                    </div>
                    <p className="text-xl my-2 text-gray-600 my-6">Starting and Growing a Career in Web Design</p>
                    <p className="text-gray-400">Apr 8, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Latest;