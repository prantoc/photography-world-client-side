import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaPlus, FaStar } from 'react-icons/fa';
import banar from '../../../assets/imgs/banner/banner.png'
const ReviewCard = () => {
    return (
        <>
            <Card className='mb-5 shadow border-0 bg-body rounded service-details-card'>
                <Card.Header className='bg-light d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image roundedCircle style={{ height: '56px' }} src={banar} />
                        <div className='ms-3'>
                            <span className='fw-bold d-block'>Pranto</span>
                            <span className='text-secondary'>10/11/2022</span>
                        </div>

                    </div>
                    <div className="text-muted">
                        <FaStar className='text-warning me-1' />
                        <small>4.5</small>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='mt-2 text-secondary'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam voluptatum, culpa laborum iure nobis aut optio sapiente fugit dolorem quidem neque qui beatae, impedit sequi tenetur dignissimos deleniti ex.
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    );
};

export default ReviewCard;