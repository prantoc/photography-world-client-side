import React from 'react';
import { Col, Container, Row, Form, Button, Card, Image } from 'react-bootstrap';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import banar from '../../assets/imgs/banner/banner.png'
const Home = () => {
    return (
        <>
            {/* banner-section  */}
            <Container fluid className='home-top-banner'>
                <Row className='bg-layer'>
                    <Col className='slider-text m-lg-4 p-5' lg={6} md={10} sm={12}>
                        <h1 className='text-white p-lg-4 lh-base animate__animated animate__backInLeft'>Read reviews. Write reviews.
                            <br /> Find better services you can <span style={{ color: '#00a0ff', fontWeight: 'bold' }}>trust</span>.</h1>
                        <Form className="d-flex shadow-md p-2 mb-5 ms-lg-4 bg-body rounded-pill col-12 animate__animated animate__backInLeft">
                            <Form.Control
                                type="search"
                                placeholder="Search Services"
                                className="me-2 border-0"
                                aria-label="Search"
                            />
                            <Button variant="primary px-5 py-2 rounded-pill">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {/* service-section  */}
            <Container className='py-5 d-flex justify-content-center'>
                <Row>
                    {
                        [...Array(3).keys()].map(service =>
                            <Col key={service} md={4} className="animate__animated animate__pulse px-lg-5 mb-lg-5">
                                {/* <Link to={`/category/${_id}`} className='nav-link p-3'> */}
                                <Card >
                                    <Card.Img variant="top" src={banar} style={{ height: '100%' }} />
                                    <Card.Body>
                                        <Card.Title>Some quick example text</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <span className='fw-bold' style={{ color: "#00a0ff" }}>$200</span>
                                    </Card.Body>
                                </Card>
                                {/* </Link> */}
                            </Col>
                        )
                    }
                    <Button variant="primary px-5 py-2 rounded-pill col-2 text-center mx-auto">See All <FaArrowRight></FaArrowRight></Button>
                </Row>
            </Container>
            {/* pictures-preview */}
            <Container fluid>
                <Row>
                    <Col md={12} className='py-5'>
                        <h1 className='text-center' style={{ color: '#00a0ff', fontWeight: 'bold' }}>Recent Customer Reviews</h1>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={false}
                            modules={[Autoplay, EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            {
                                [...Array(90).keys()].map(items =>
                                    <SwiperSlide key={items}>
                                        <Card className='card-bg rounded'>
                                            <Card.Header className='d-flex justify-content-between align-items-center'>
                                                <div className='d-flex'>
                                                    <Image roundedCircle style={{ height: '56px' }} src={banar} />
                                                    <div className='ms-3'>
                                                        <span className='fw-bold d-block'>Pranto</span>
                                                        <span className='text-secondary'>10/11/2022</span>
                                                    </div>

                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Text className='mt-2 text-secondary'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa minima saepe explicabo, distinctio esse et possimus quidem
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                                                <div>
                                                    <FaStar className='text-warning me-1' />
                                                    <small>4.5</small>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>

            {/* signup-section  */}
            <Container fluid className='home-bottom-banner'>
                <Row className='bg-layer'>
                    <Col className='text-center py-5' md={12} sm={12}>
                        <h1 className='text-white p-lg-4 lh-base animate__animated animate__backInLeft'>Read reviews. Write reviews today.
                            <br />Just click and <span style={{ color: '#00a0ff', fontWeight: 'bold' }}>signup</span> and post your review.</h1>
                        <Button variant="primary px-5 py-2 rounded-pill">Sign Up</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;