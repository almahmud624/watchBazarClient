import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row xs={1} sm={1} md={1} lg={2} className="justify-center items-center my-7">
                <Col className="sm:order-last md:order-first md:text-left sm:text-center pt-4 lg:pt-0">
                    <h4 className="text-2xl font-semibold text-blue-500 mb-7">About Us</h4>
                    <p className=" text-md">WATCH BAZAR is a very reputed and popular name for world class watches and writing instruments in Bangladesh. There are 49 WATCH BAZAR strategically located at the entrances of key shopping malls and 5-star hotels. WATCH BAZAR maintains an international standard interior, with uniform looking point of sales with an elegant outlook and ambience. It is operated by trained sales & customer care officers.

                        WATCH BAZAR offers the finest selection of genuine watches of internationally renowned brands with international guarantee cards.
                        WATCH BAZAR is the only point of sale for distribution of authentic and genuine watch, along with after sales service.</p>
                </Col>
                <Col className="order-first sm:order-first md:order-last">
                    <img src="https://image.freepik.com/free-photo/man-holding-clock-white-background_1368-6152.jpg" alt="" style={{ borderRadius: '55% 45% 34% 66% / 56% 63% 37% 44% ' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;