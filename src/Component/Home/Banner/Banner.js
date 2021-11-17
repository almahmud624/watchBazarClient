import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div>
                    <div className="hero">
                        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                                <div className="hero-text col-span-6 sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                                    <h1 className="font-bold text-5xl md:text-7xl max-w-xl text-blue-500 leading-tight">Live the moment</h1>
                                    <p className="text-gray-800 text-base leading-relaxed mt-8 font-medium">Where you only wear your extraordinary touch.The happiest place for your wish list watch.</p>
                                    <button className="mt-3  bg-blue-200 text-gray-800 text-sm font-bold uppercase rounded"><Link to="/all-products" className="px-4 inline-block py-3">Explore Now</Link></button>
                                </div>
                                <div className="hero-image col-span-6 order-first sm:order-first md:order-last">
                                    <img src='https://image.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg' className="rounded-sm" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    );
};

export default Banner;