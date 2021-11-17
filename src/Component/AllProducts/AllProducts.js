import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <Container className="pb-5">
            <h1 className="my-4 text-5xl font-bold"><span className="text-blue-500">Best Watch</span></h1>
            <p className="text-lg text-gray-600 mb-4">We try harder to provide you best.</p>
            <Row xs sm={2} md={2} lg={3} className="blogs g-4">
                {
                    products?.map(product =>
                        <Col key={Math.random()}>
                            <div className="py-6">
                                <div className="flex max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                                    <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${product?.img})` }}>
                                    </div>
                                    <div className="w-2/3 p-4">
                                        <h1 className="text-gray-900 font-bold text-2xl">{product?.name}</h1>
                                        <p className="mt-2 truncate text-gray-600 text-sm">{product?.shortDescription}</p>
                                        <div className="flex item-center justify-between mt-3">
                                            <h1 className="text-gray-700 font-bold text-xl">${product?.cost}</h1>
                                            <button className="px-3 py-2 bg-blue-200 text-gray-900 text-xs font-bold uppercase rounded"><Link to={`/orderProduct/${product?._id}`} className="text-gray-900">Purchase Now</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default AllProducts;