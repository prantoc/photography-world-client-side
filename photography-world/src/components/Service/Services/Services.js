import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
    const [services, setServices,] = useState([]);
    useTitle('Services')
    const { setLoading, loading } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [setLoading])
    return (
        <Container className='py-5 d-flex justify-content-center'>
            <Row>
                <h1 className='text-center py-5' style={{ color: '#00a0ff', fontWeight: 'bold' }}>All Services</h1>
                {loading ?
                    <Spinner animation="border" role="status" className='text-white'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    loading === false &&
                    services.map(service =>
                        <ServiceCard key={service._id} service={service}></ServiceCard>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;