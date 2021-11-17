import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Newsletter from '../Newsletter/Newsletter';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <CustomerReview></CustomerReview>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;