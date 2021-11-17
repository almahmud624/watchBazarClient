import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useProducts from '../../hooks/useProducts';

const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { orderId } = useParams();
    const [products] = useProducts();
    const [singleProduct, setProduct] = useState({});
    useEffect(() => {
        const foundProduct = products?.find(product => product.id === Number(orderId));
        setProduct(foundProduct)
    }, [products]);
    const onSubmit = data => {
        data = { data, singleProduct };
        fetch("http://localhost:5000/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    window.confirm('Your order has been placed.Press OK to see your Order List');
                    reset();
                };
            })
    };
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                    <div className="flex flex-col justify-start items-start w-full space-y-9">

                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                            <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center border-gray-800 border-2 rounded text-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                    <img src={singleProduct?.img} alt="" className=" rounded-sm" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-full space-y-4">
                                    <p className="text-xl md:text-5xl font-bold text-gray-800">{singleProduct?.name}</p>
                                    <p className=" font-normal text-base leading-6 text-gray-800 mt-7">{singleProduct?.shortDescription}</p>
                                    <p className="text-xl font-semibold text-gray-800">$ {singleProduct?.cost}</p>
                                </div>
                            </div>

                            <div className="p-8 border-2 border-gray-800 rounded flex flex-col lg:w-full justify-center xl:w-3/5">
                                <form className="max-w-xl m-0 p-3 py-5 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                                    <p className=" font-bold text-2xl mb-3 text-blue-500">Customer information</p>
                                    <div className="">
                                        <input className="w-full pl-5 py-2 my-2 text-gray-700 border-gray-800 border-2 rounded" type="text" required="" defaultValue={user.displayName} {...register("name")} placeholder="Your Name" aria-label="Name" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full pl-5 py-2 my-2 text-gray-700 border-gray-800 border-2 rounded" type="text" required="" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" aria-label="Email" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 border-gray-800 border-2 rounded" defaultValue="" {...register("address", { required: true })} type="text" required="" placeholder="Street" aria-label="Email" />
                                    </div>
                                    <div className="mt-2">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 border-gray-800 border-2 rounded" defaultValue="" {...register("city", { required: true })} type="text" required="" placeholder="City" aria-label="Email" />
                                    </div>
                                    <div className="block mt-2 pr-1">
                                        <input className="w-full px-2 py-2 my-2 text-gray-700 border-gray-800 border-2 rounded" defaultValue="" {...register("country", { required: true })} type="text" required="" placeholder="Country" aria-label="Email" />
                                    </div>
                                    <div className="mt-4">
                                        <button class="px-4 py-2 bg-blue-200 text-gray-800 text-md font-bold uppercase rounded" type="submit">Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;