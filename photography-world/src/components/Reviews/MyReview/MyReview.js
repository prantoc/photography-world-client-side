import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { errorToast, successToast } from '../../../toast/Toaster';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    useTitle('My-Reviews')
    const { user, setLoading, loading, userLogout } = useContext(AuthContext)
    const [reviews, setReviews] = useState();
    // get-reviews 
    useEffect(() => {
        const url = `https://b6a11-service-review-server-side-prantoc.vercel.app/user-review?id=${user?.uid}`;

        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('ph')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    userLogout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [user?.uid, setLoading, userLogout])

    //?delete-review

    const deleteReview = (id) => {
        const proceed = window.confirm('Are your sure you want to cancel this order')
        if (proceed) {
            setLoading(true)
            fetch(`https://b6a11-service-review-server-side-prantoc.vercel.app/review-delete/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ph')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    successToast('The review deleted successfully')
                    setReviews(data)
                    setLoading(false)
                })
                .catch(err => errorToast(err))
        }
    }
    //? edit-review 

    const updateReview = (id, rate, review) => {
        setLoading(true)
        if (!rate) {
            setLoading(false)
            return errorToast("You must set a rating!");
        }
        if (!review) {
            setLoading(false)
            return errorToast("You must set a review!");

        }
        fetch(`https://b6a11-service-review-server-side-prantoc.vercel.app/review-update/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('ph')}`
            },
            body: JSON.stringify({ rate: rate, review: review })
        })
            .then(res => res.json())
            .then(data => {
                successToast('The review updated successfully')
                setReviews(data)
                setLoading(false)
            })
            .catch(err => errorToast(err))
    }


    return (
        <Container>
            <Row>
                <Col md={12} sm={12}>
                    <Table className='border-0 text-white'>
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Rating</th>
                                <th>Review</th>
                                <th>Reviewd At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {loading ?
                            <Spinner animation="border" role="status" className='text-white'>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            loading === false && <tbody>

                                {
                                    reviews &&
                                        reviews.length > 0 ?
                                        reviews.map(review => <MyReviewRow key={review._id} allReviews={review} deleteReview={deleteReview} updateReview={updateReview}></MyReviewRow>)
                                        :

                                        <h5 className='text-center text-white py-5'>No reviews found!</h5>

                                }

                            </tbody>
                        }
                    </Table>
                </Col>
            </Row>

        </Container>
    );
};

export default MyReview;