import React, { useEffect, useState } from 'react';
import CardHeader from '@material-tailwind/react/CardHeader';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succussfully');
                        const remainingOrder = orders.filter(order => order?._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }
    const handleStatusUpdate = (id) => {
        const foundOrder = orders?.find(order => order?._id === id);
        const newData = { ...foundOrder, status: 'Shipped' }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    window.confirm('Order Status has been updated successfully');
                };
            })
    }
    return (
        <div>
            <div>
                <div className="antialiased font-sans">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">

                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                                    <CardHeader className="bg-gray-900 pt-5" contentPosition="left">
                                        <h2 className="text-white text-2xl">Manage Orders</h2>
                                    </CardHeader>
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th className="px-2 text-gray-800 font-semibold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Image
                                                </th>
                                                <th className="px-2 text-gray-800 font-semibold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Product Name
                                                </th>
                                                <th className="px-2 text-gray-800 font-semibold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Email
                                                </th>
                                                <th className="px-2 text-gray-800 font-semibold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 text-gray-800 font-semibold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Cancel Order
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders?.map(order => <tr key={Math.random()}>
                                                <th className="border-b border-gray-200 align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <img src={order.singleProduct?.img} alt="" width="80" height="80" />
                                                </th>
                                                <th className="border-b border-gray-200 align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    {order.singleProduct?.name}
                                                </th>
                                                <th className="border-b border-gray-200 align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    {order.data?.email}
                                                </th>
                                                <th className="border-b border-gray-200 align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <button onClick={() => handleStatusUpdate(order?._id)} className="text-sm leading-3 py-2 px-2 rounded border-blue-200 text-gray-800 border-2 hover:bg-blue-500 hover:text-white transition-all duration-500 pl-5 cursor-pointer">Approved</button>
                                                </th>
                                                <th className="border-b border-gray-200 align-middle font-normal text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <button onClick={() => handleDeleteOrder(order?._id)} className="text-sm leading-3 py-2 px-3 rounded ml-5 text-red-500 border-red-400 border-2 hover:bg-red-600 hover:text-white transition-all duration-500 pl-5 cursor-pointer">Cancel</button>
                                                </th>
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;