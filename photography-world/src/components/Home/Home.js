import React from 'react';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';
import banar from '../../assets/imgs/banner/banner.png'
const Home = () => {
    return (
        <>
            <Container fluid className='home-top-banner'>
                <Row className='bg-layer'>
                    <Col className='slider-text m-lg-4 p-5' lg={6} md={6} sm={12}>
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
                            <Col key={service} md={4} className="animate__animated animate__pulse px-5 mb-5">
                                {/* <Link to={`/category/${_id}`} className='nav-link p-3'> */}
                                <Card style={{ width: '18rem' }}>
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
                </Row>
            </Container>

            {/* signup-button  */}
        </>
    );
};

export default Home;