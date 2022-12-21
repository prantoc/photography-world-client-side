import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaPlus, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';
import ReviewCard from '../../Reviews/Reviews/ReviewCard';
import { errorToast, successToast } from '../../../toast/Toaster';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
const ServiceDetails = () => {
    const { loading, user, setLoading } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, service_name, img_url, price, desc } = service;
    useTitle(`${service_name}`)
    const [newReview, setNewReview] = useState(false);
    const [reviews, setReviews] = useState();

    // get-reviews 
    useEffect(() => {
        const url = `https://b6a11-service-review-server-side-prantoc.vercel.app/reviews?id=${service?._id}`;
        if (newReview) {
            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ph')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setReviews(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        } else {
            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ph')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setReviews(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }

    }, [service?._id, newReview, setLoading])


    //? add-review 
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
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const createdAT = new Date()

        const addReview = {
            rate,
            review,
            serviceId,
            userId,
            userName,
            userPhoto,
            createdAT
        }

        fetch(`https://b6a11-service-review-server-side-prantoc.vercel.app/add-review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('ph')}`
            },
            body: JSON.stringify(addReview),

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successToast('successfully added review')
                    form.reset()
                    setShow(false)
                    setNewReview(true)
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
                    {
                        loading ?
                            <Spinner animation="border" role="status" className='text-white'>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :

                            loading === false && <Col md={12} className="my-5">
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
                                            <small>{reviews && reviews.length}</small>
                                        </span>
                                        <span>
                                            <h4 className='text-white'>${price}</h4>
                                        </span>
                                    </Card.Footer>
                                </Card>
                                <div className="card  main-review-card review-card-boxShadow mt-2">
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h1 className=' text-white'>Uers Reviews</h1>
                                            {
                                                loading &&
                                                <Spinner animation="border" role="status" className='text-white'>
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>

                                            }
                                            {
                                                user &&
                                                    user.uid ?
                                                    <Button className='py-1' variant='primary' onClick={handleShow}><FaPlus></FaPlus>Add Review</Button>
                                                    :
                                                    <Button className='py-1' variant='primary'><Link to="/login" className='nav-link'><FaPlus></FaPlus>Add Review</Link></Button>
                                            }
                                        </div>
                                        {
                                            reviews &&
                                                reviews.length > 0 ?
                                                reviews.map(review => <ReviewCard key={review._id} getReview={review}></ReviewCard>)
                                                :

                                                <h5 className='text-center text-white'>No reviews found!</h5>
                                        }
                                        <ReviewModal show={show} service={service_name} handleClose={handleClose} handleAddReview={handleAddReview} id={_id} loading={loading}></ReviewModal>
                                    </div>
                                </div>
                            </Col>}
                </Row>
            </Container>
        </>
    );
};

export default ServiceDetails;