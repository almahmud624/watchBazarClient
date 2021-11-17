import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, shortDescription, img, cost } = product;
    return (
        <Col>
            <div className="py-6">
                <div className="flex max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${img})` }}>
                    </div>
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
                        <p className="mt-2 truncate text-gray-600 text-sm">{shortDescription}</p>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">${cost}</h1>
                            <button className="bg-blue-200 text-gray-900 text-xs font-bold uppercase rounded"><Link to={`/orderProduct/${id}`} className="text-gray-900 px-3 inline-block py-2">Purchase Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Product;