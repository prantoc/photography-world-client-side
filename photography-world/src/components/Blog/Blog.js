import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col col={12}>
                        <Card className=' main-review-card review-card-boxShadow mb-5 rounded text-white'>
                            <Card.Body>
                                <Card.Title >
                                    Difference between SQL and NoSQL?
                                </Card.Title>
                                <Card.Text>
                                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                                </Card.Text>
                                <Card.Title >
                                    What is JWT, and how does it work?
                                </Card.Title>
                                <Card.Text>
                                    JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.
                                </Card.Text>
                                <Card.Title >
                                    What is the difference between javascript and NodeJS?
                                </Card.Title>
                                <Card.Text>
                                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                                </Card.Text>
                                <Card.Title >
                                    How does NodeJS handle multiple requests at the same time?
                                </Card.Title>
                                <Card.Text>
                                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;