import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="lg:h-screen py-7 w-screen flex items-center">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
                    <div className="flex-1">
                        <div className="text-6xl font-dark hidden md:block font-bold text-indigo-800">404</div>
                        <p
                            className="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-indigo-800 transition-colors duration-150 rounded-lg focus:outline-none focus:shadow-outline-blue border-indigo-800 border-2 hover:bg-blue-600 hover:text-white"><Link to="/" className="hover:text-white">back to homepage</Link></button>
                    </div>
                    <div className="flex-1">
                        <img src="https://image.freepik.com/free-vector/tourist-man-looking-navigation-confusing-choose-way-with-road-sign-cartoon-illustration-traveller-backpacker_1150-39714.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;