import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import avatar from '../../../assets/imgs/user/man.png'
const ReviewCard = ({ getReview }) => {
    const { rate, review, userName, userPhoto, createdAT } = getReview;
    return (
        <>
            <Card className='mb-5 border-0  rounded service-details-card service-details-card review-card-boxShadow mt-5'>
                <Card.Header className='d-flex justify-content-between align-items-center text-white'>
                    <div className='d-flex'>
                        <Image roundedCircle style={{ height: '56px' }} src={userPhoto} onError={(e) => e.target.src = avatar} />
                        <div className='ms-3'>
                            <span className='fw-bold d-block'>{userName ? userName : 'Anonymous'}</span>
                            <span className='text-secondary'>{createdAT}</span>
                        </div>

                    </div>
                    <div className="text-muted">
                        <FaStar className='text-warning me-1' />
                        <small>{rate}</small>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mt-2 text-secondary'>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    );
};

export default ReviewCard;