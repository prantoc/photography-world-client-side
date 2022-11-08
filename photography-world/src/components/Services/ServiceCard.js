import React from 'react';
import { Card, Col } from 'react-bootstrap';
import banar from '../../assets/imgs/banner/banner.png'
const ServiceCard = ({ service }) => {
    return (
        <>
            <Col key={service} md={4} className="animate__animated animate__pulse px-lg-5 mb-lg-5">
                {/* <Link to={`/category/${_id}`} className='nav-link p-3'> */}
                <Card>
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
        </>
    );
};

export default ServiceCard;