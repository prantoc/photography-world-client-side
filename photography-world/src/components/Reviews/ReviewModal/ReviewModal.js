import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';

const ReviewModal = ({ show, handleClose, service, id }) => {
    const { loading, user } = useContext(AuthContext)
    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target
        const rate = form.rate.value
        const review = form.review.value
        const serviceId = id
        const userId = user.uid;
        const createdAT = new Date()

        const reviews = {
            rate,
            review,
            serviceId,
            userId
        }

        fetch(`http://localhost:5000/add-service`, {
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
                }
            })
            .catch(err => errorToast(err))

    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review to <span className='fw-bold' style={{ color: "#00a0ff" }}>({service})</span> </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleAddReview}>
                        <div className="mb-4 d-block">
                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        </div>
                        <div className="mb-4 d-block">
                            <textarea placeholder='put your review' name="review" className="form-control" id="" cols="45" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">

                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <div>
                                    Add Review <FaPlus></FaPlus>
                                </div>}
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ReviewModal;