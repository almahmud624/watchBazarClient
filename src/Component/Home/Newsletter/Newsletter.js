import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="mx-auto container py-16 px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
                    <div>
                        <img src="https://i.ibb.co/BTKD74c/business-woman-pointing-alarm-clock-white-wall-removebg-preview.png" alt="" />
                    </div>
                    <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
                        <div className="xl:mt-4 mt-2">
                            <p className="text-4xl font-semibold leading-9 text-blue-500">Join Our Newsletter</p>
                        </div>
                        <div className="xl:mt-6 mt-4">
                            <p className="text-base leading-6 text-gray-600">Subscribe to your newsletter to stay in to get latest news and updates.</p>
                        </div>
                        <div className="xl:mt-12 mt-6 w-full">
                            <input className="focus:outline-none focus:ring-2 focus:ring-indigo rounded focus:ring-offset-2 pb-1 border border-gray-900 bg-transparent w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-900" placeholder="Email address" type="email" name="input" />
                        </div>
                        <div className="xl:mt-4 mt-2 w-full">
                            <button className="h-12 w-full sm:w-96 md:w-full lg:w-72 border-2 leading-4 px-3 py-2 bg-blue-200 text-gray-900 text-xs font-bold uppercase rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;