import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user, setLoading, loading } = useContext(AuthContext)
    // console.log(user);
    const [reviews, setReviews] = useState();
    console.log(reviews);

    // get-reviews 
    useEffect(() => {
        const url = `http://localhost:5000/user-review?id=${user?.uid}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [user?.uid, setLoading])

    const deleteReview = (id) => {
        const proceed = window.confirm('Are your sure you want to cancel this order')
        if (proceed) {
            setLoading(true)
            fetch(`http://localhost:5000/review-delete/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
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
                                        reviews.map(review => <MyReviewRow key={review._id} allReviews={review} deleteReview={deleteReview}></MyReviewRow>)
                                        :
                                        <tr>
                                            <h5 className='text-center text-white py-5'>No reviews found!</h5>
                                        </tr>
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