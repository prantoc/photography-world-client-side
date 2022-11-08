import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
const Services = () => {
    return (
        <Container className='py-5 d-flex justify-content-center'>
            <Row>
                <h1 className='text-center py-5' style={{ color: '#00a0ff', fontWeight: 'bold' }}>All Services</h1>
                {
                    [...Array(30).keys()].map(service =>
                        <ServiceCard key={service} service={service}></ServiceCard>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;