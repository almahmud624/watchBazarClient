import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-crag-59826.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://protected-crag-59826.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succussfully');
                        const restProduct = products.filter(product => product?._id !== id);
                        setProducts(restProduct);
                    }
                });
        }
    }
    return (
        <div>
            <div className="w-full h-full bg-white bg-opacity-90">
                <div className="w-full h-full">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white">
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3 pb-14">Manage Products</p>
                            {
                                products.map(product => <div key={Math.random()} className="md:flex items-center  py-4 px-3 border rounded-md mb-3 shadow-md border-gray-800">
                                    <div className="w-24">
                                        <img className="" src={product?.img} alt="" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4">
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-xl font-black leading-none text-gray-800">{product?.name}</p>
                                            <p className="text-base font-black leading-none text-gray-800">$ {product?.cost}</p>
                                        </div>
                                        <div className=" pt-3 pr-6">

                                            <div className="text-left">
                                                <button onClick={() => handleDeleteOrder(product?._id)} className="text-sm leading-3 py-2 px-3 rounded text-red-500 border-red-400 border-2 hover:bg-red-600 hover:text-white transition-all duration-500 pl-5 cursor-pointer">Remove</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;