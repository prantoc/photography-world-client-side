import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaPlus, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';
import ReviewCard from '../../Reviews/Reviews/ReviewCard';
import { errorToast, successToast } from '../../../toast/Toaster';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const ServiceDetails = () => {
    const { loading, user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, service_name, img_url, price, desc } = service;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target
        const rate = form.rate.value
        const review = form.review.value
        const serviceId = _id
        const userId = user.uid;
        const createdAT = new Date()

        const reviews = {
            rate,
            review,
            serviceId,
            userId,
            createdAT
        }

        fetch(`http://localhost:5000/add-review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(reviews),

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successToast('successfully added review')
                    form.reset()
                    setShow(false)
                }
            })
            .catch(err => {
                errorToast(err)
                setShow(false)
            })

    }
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
                                <ReviewModal show={show} service={service_name} handleClose={handleClose} handleAddReview={handleAddReview} id={_id} loading={loading}></ReviewModal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ServiceDetails;