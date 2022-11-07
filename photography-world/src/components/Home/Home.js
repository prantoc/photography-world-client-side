import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
const Home = () => {
    return (
        <Container fluid className='home-top-banner'>
            <Row className='bg-layer'>
                <Col className='slider-text m-4 p-5' lg={6} md={6} sm={12}>
                    <h1 className='text-white p-4 lh-base animate__animated animate__backInLeft'>Read reviews. Write reviews.
                        <br /> Find better services you can <span style={{ color: '#00a0ff', fontWeight: 'bold' }}>trust</span>.</h1>
                    <Form className="d-flex shadow-md p-2 mb-5 ms-4 bg-body rounded-pill col-12 animate__animated animate__backInLeft">
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
    );
};

export default Home;