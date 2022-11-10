import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container className='py-5 d-flex justify-content-center'>
            <Row>
                <h1 className='text-center py-5' style={{ color: '#00a0ff', fontWeight: 'bold' }}>All Services</h1>
                {
                    services.map(service =>
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;