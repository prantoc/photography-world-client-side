import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaPlus, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';
import ReviewCard from '../../Reviews/Reviews/ReviewCard';
const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, service_name, img_url, price, desc } = service;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="my-5">
                        <Card className='shadow rounded border-0 text-white service-details-card'>
                            <Card.Header className='border-0' as="h3">{service_name}</Card.Header>
                            <Card.Body>
                                <PhotoProvider>
                                    <PhotoView src={img_url}>
                                        <Card.Img variant="top" src={img_url} className="mb-4 service-details-img " />
                                    </PhotoView>
                                </PhotoProvider>
                                <Card.Text className='lh-base'>
                                    {desc}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                                <span className="badge bg-primary text-wrap" style={{ width: "12rem" }}>
                                    Total Reviews
                                    <FaStar className='text-warning mx-1' />
                                    <small>4000</small>
                                </span>
                                <span>
                                    <h4 className='text-white'>${price}</h4>
                                </span>
                            </Card.Footer>
                        </Card>
                        <div className="card service-details-card mt-2">
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h1 className=' text-white'>Uers Reviews</h1>
                                    <Button className='py-1' variant='primary' onClick={handleShow}><FaPlus></FaPlus>Add Review</Button>
                                </div>
                                <ReviewCard></ReviewCard>
                                <ReviewModal show={show} handleClose={handleClose}></ReviewModal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ServiceDetails;