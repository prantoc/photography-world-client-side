import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
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
                                    reviews.map(review => <MyReviewRow key={review._id} allReviews={review}></MyReviewRow>)
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