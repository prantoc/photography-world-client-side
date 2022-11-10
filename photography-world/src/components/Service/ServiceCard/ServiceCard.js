import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, service_name, img_url, price, desc } = service;
    return (
        <>
            <Col md={4} className="animate__animated animate__pulse px-lg-5 mb-lg-5">
                <Card className='custom-card h-100'>
                    <PhotoProvider>
                        <PhotoView src={img_url}>
                            <Card.Img variant="top" src={img_url} style={{ height: '200px' }} />
                        </PhotoView>
                    </PhotoProvider>
                    <Link to={`/service/${_id}`} className='nav-link'>
                        <Card.Body>
                            <Card.Title>{service_name}</Card.Title>
                            <Card.Text>
                                {
                                    desc.length > 80
                                        ?
                                        desc.slice(0, 80)
                                        :
                                        desc
                                }
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className='fw-bold' style={{ color: "#00a0ff" }}>${price}</span>
                                <span className='fw-bold' style={{ color: "#00a0ff" }}><FaStar className='text-warning me-1' />3</span>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>

            </Col>
        </>
    );
};

export default ServiceCard;