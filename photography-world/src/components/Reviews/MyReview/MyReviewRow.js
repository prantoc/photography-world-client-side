import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { FaCheck, FaEdit, FaRegWindowClose, FaStar, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyReviewRow = ({ allReviews, deleteReview, updateReview }) => {
    const [editShow, setEditShow] = useState(false);



    const { setLoading, loading } = useContext(AuthContext)
    const { _id, rate, review, createdAT } = allReviews
    const [service, setService] = useState();
    const [editRate, setEditRate] = useState();
    const [editReview, setEditReview] = useState();

    // get-reviews 
    useEffect(() => {
        const url = `http://localhost:5000/services-by-id?id=${allReviews?.serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [allReviews?.serviceId, setLoading])
    return (
        <>
            {
                loading ?
                    <Spinner animation="border" role="status" className='text-white'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :

                    <tr>
                        <td>{service && service.map(s => s.service_name)}</td>
                        <td>{createdAT}</td>
                        <td>
                            {editShow ?
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" onChange={(e) => setEditRate(e.target.value)} value="5" />
                                    <label htmlFor="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" onChange={(e) => setEditRate(e.target.value)} value="4" />
                                    <label htmlFor="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" onChange={(e) => setEditRate(e.target.value)} value="3" />
                                    <label htmlFor="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" onChange={(e) => setEditRate(e.target.value)} value="2" />
                                    <label htmlFor="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" onChange={(e) => setEditRate(e.target.value)} value="1" />
                                    <label htmlFor="star1" title="text">1 star</label>
                                </div>
                                :
                                <><FaStar className='text-warning mx-1' />{rate}</>

                            }
                        </td>
                        <td>{editShow ? <textarea placeholder='put your review' name="review" className="form-control" id="" cols="10" rows="1" required onChange={(e) => setEditReview(e.target.value)}></textarea> : review}</td>
                        <td>

                            {
                                editShow ?
                                    <>
                                        <Button onClick={() => updateReview(_id, editRate, editReview)} variant='primary' className='me-2'><FaCheck></FaCheck> </Button>
                                        <Button onClick={() => setEditShow(!editShow)} variant='warning' className='me-2'><FaRegWindowClose></FaRegWindowClose> </Button>
                                    </>
                                    :
                                    <Button onClick={() => setEditShow(!editShow)} variant='primary' className='me-2'><FaEdit></FaEdit> </Button>
                            }

                            <Button onClick={() => deleteReview(_id)} variant='danger'><FaTrash></FaTrash></Button>
                        </td>
                    </tr>
            }
        </>
    );
};

export default MyReviewRow;