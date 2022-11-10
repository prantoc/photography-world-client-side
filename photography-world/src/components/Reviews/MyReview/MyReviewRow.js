import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyReviewRow = ({ allReviews, deleteReview }) => {
    const { setLoading, loading } = useContext(AuthContext)
    const { _id, rate, review, createdAT } = allReviews
    const [service, setService] = useState();

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
                    : <tr>
                        <td>{service && service.map(s => s.service_name)}</td>
                        <td><FaStar className='text-warning mx-1' />{rate}</td>
                        <td>{review}</td>
                        <td>{createdAT}</td>
                        <td><Button variant='primary' className='me-2'><FaEdit></FaEdit></Button><Button onClick={() => deleteReview(_id)} variant='danger'><FaTrash></FaTrash></Button></td>
                    </tr>}
        </>
    );
};

export default MyReviewRow;