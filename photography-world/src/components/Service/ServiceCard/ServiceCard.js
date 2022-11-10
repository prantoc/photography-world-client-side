import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, service_name, img_url, price, desc } = service;
    return (
        <>
            <Col md={4} className="animate__animated animate__pulse px-lg-5 mb-lg-5">
                <Link to={`/service/${_id}`} className='nav-link p-3'>
                    <Card className='custom-card'>
                        <PhotoProvider>
                            <PhotoView src={img_url}>
                                <Card.Img variant="top" src={img_url} style={{ height: '200px' }} />
                            </PhotoView>
                        </PhotoProvider>
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
                            <span className='fw-bold' style={{ color: "#00a0ff" }}>${price}</span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    );
};

export default ServiceCard;