import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <Container className="pb-5">
            <h1 className="my-4 text-5xl font-bold"><span className="text-blue-500">Best Watch</span></h1>
            <p className="text-lg text-gray-600 mb-4">We try harder to provide you best.</p>
            <Row xs sm={2} md={2} lg={3} className="blogs g-4">
                {
                    products?.slice(0, 6).map(product =>
                        <Product
                            key={Math.random()}
                            product={product}
                        ></Product>
                    )
                }
            </Row>
        </Container>
    );
};

export default Products;