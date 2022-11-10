import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const ReviewModal = ({ show, handleClose, service, handleAddReview, loading }) => {
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
                            <textarea placeholder='put your review' name="review" className="form-control" id="" cols="45" rows="4" required></textarea>
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