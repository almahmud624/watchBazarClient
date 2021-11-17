import React, { useRef } from 'react';

const AddReview = () => {
    const nameRef = useRef();
    const commentRef = useRef();
    const handleAddPackage = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const comment = commentRef.current.value;

        const newPackage = { name, comment };
        fetch('https://protected-crag-59826.herokuapp.com/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package added succesfully!');
                    e.target.reset();
                }
            })
    }
    return (
        <>
            <div className="flex justify-center py-12">
                <div className="px-8 py-6 w-3/4 md:w-1/2 bg-white rounded-lg shadow-sm border border-gray-8000">
                    <form onSubmit={handleAddPackage}>
                        <p className="text-gray-800 font-bold text-3xl mb-3">Leave a Comment</p>
                        <div className="mb-2">
                            <input type="text" placeholder="Your Name" ref={nameRef} className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" />
                        </div>
                        <div className="mb-2">
                            <textarea type="text" ref={commentRef} placeholder="Your Comment" className="w-full border border-gray-300 py-2 pl-3 rounded  outline-none focus:ring-indigo-600 :ring-indigo-600" required="required" maxLength="250" />
                        </div>
                        <button className="px-3 py-2 bg-blue-200 text-gray-800 text-sm mr-auto d-block font-bold uppercase rounded">Log In</button>
                    </form>
                </div>
            </div >
        </>
    );
};

export default AddReview;