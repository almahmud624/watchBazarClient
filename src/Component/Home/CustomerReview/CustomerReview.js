import React, { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://protected-crag-59826.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div className="container mx-auto px-4 flex py-4 flex-col lg:items-center justify-between lg:flex-col">
                <div className="mb-14 xl:mb-0">
                    <h1 className="text-4xl leading-tight md:text-4xl xl:text-5xl mx-auto md:py-5 sm:py-0 font-bold text-blue-500 xl:w-2/3 lg:pr-0">What our Customers are saying</h1>
                </div>
                <div role="list" aria-label="Testimonials" className="xl:w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-wrap justify-center items-start py-4 ">
                    {reviews?.map(review => <div key={Math.random()} role="listitem" className="bg-white shadow-sm p-4 xl:p-8 border-2 rounded-lg border-gray-800">
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose text-gray-600">{review.comment}</p>
                                <p className="mt-4 text-base font-semibold leading-none text-gray-800">{review.name}</p>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </div>
    );
};

export default CustomerReview;