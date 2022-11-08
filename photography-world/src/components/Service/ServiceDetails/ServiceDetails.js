import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaPlus, FaStar } from 'react-icons/fa';
import banar from '../../../assets/imgs/banner/banner.png'
const ServiceDetails = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="my-5" >
                        <Card className='shadow rounded border-0 text-white service-details-card'>
                            <Card.Header className='border-0' as="h3">loren ipsum is the best for default word</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={banar} className="img-fluid mb-4 service-details-img" />
                                <Card.Text className='lh-base'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio recusandae consequatur illum, asperiores ad accusamus est ipsam fuga reprehenderit aliquid, veniam nam quia voluptates suscipit voluptate velit saepe! Ex.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio recusandae consequatur illum, asperiores ad accusamus est ipsam fuga reprehenderit aliquid, veniam nam quia voluptates suscipit voluptate velit saepe! Ex.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio recusandae consequatur illum, asperiores ad accusamus est ipsam fuga reprehenderit aliquid, veniam nam quia voluptates suscipit voluptate velit saepe! Ex.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <span className="badge bg-primary text-wrap" style={{ width: "12rem" }}>
                                    Total Reviews
                                    <FaStar className='text-warning mx-1' />
                                    <small>4000</small>
                                </span>
                            </Card.Footer>
                        </Card>
                        <div className="card service-details-card mt-2">
                            <div className="card-body">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h1 className=' text-white'>Uers Reviews</h1>
                                    <Button className='py-1' variant='primary'><FaPlus></FaPlus>Add Review</Button>
                                </div>
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

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ServiceDetails;