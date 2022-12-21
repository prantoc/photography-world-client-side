import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, service_name, img_url, price, desc } = service;
    return (
        <>
            <Col md={4} className="animate__animated animate__pulse px-lg-5 mb-lg-5">
                <Card className='custom-card h-100'>
                    <PhotoProvider>
                        <PhotoView src={img_url}>
                            <Card.Img variant="top" src={img_url} onError={(e) => e.target.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADcQAAICAQIDAwgJBQEAAAAAAAECAAMEBRESITEGE0EUIlFhcYGRoRUjMlJicrHB4TM2QqKyJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIEGVkpjIGcE7nbYSFNTx26l19qyrrtm3cr7TJ69Mx3pQsGDFQSQfGBZTMx36XJ7ztJVdW+ywPsMzn0hP8LnHqI3lbI02yitrRapCjfpsYG5Ey9Dd7EtLMzAEAbneakBERAREQEREBERA+MQo3JAHrkD5tKf5cR/DPWUnHQ48dtxMpBxOq+k7QIdZs73UKqxy81R8TNfKzcfE2W1wCeijmZhWMLe0m2/JbB8h/Ep3YufxGy2i5mPVti0DrrciqmvvLLFVOoJPWZOZqa5ODk90hCqVUMfHc/xOfsexQotFgC8hx78pZLhNHU+Nl5+AH8wOg0BdsEt95yf2/aaUpaOnBptAPiu/x5y7AREQEREBERAREQEyq6+HNCehpqzOzg1WQtiHYkQOPzLS+Xc53Baxjt755TIurP1drp+ViJ2A76/+pRXaPS6CevojDtH12HQD+AbQOVTVs1eXlDMPQ3nfrI8rPvy1RLeDZN+EIoHMzprOzeA/2BbWfwvv+sgHZepbUdcl+FWBKso5+qBuY6d3RWn3VA+UkiICIiAiIgIiICIlevNxrabLq8ipqq9+Nw4IXbrufCBYnwgHqJE2TQlAyHurWkjfvCwC7eneMbKoy6+8xrq7k6cVbhh8oE0SJ76q7a6rLUWyzcIpOxbbrtPKZeO+S+Mt1bXoN2rDDiUekj3iBPEhqyqLbrKKrq3tq/qIrAlfaPCfFy8d8hsdbqzeg3asMCyj1iBPEhycrHxE7zKvqpT71jhR854+kMM4pyhlUHHHW3jHCPfAsxKuJqGHmMy4mVRey82FbhtvhLUBERAREQE/PMQ2afotuQD/AOXUK8mi0eCWhnCN7wOH4T9DMoDSML6MfTTTvivxEoWJ6txHn16mBz6ImRn9nMfLAbF8iNiI32XtCjbceOwluquvG7ZivCVUW3DLZCINhuG80kema2RpOFk4dWJdSGqpAFe5O6bdCD1BnrT9MxNOD+S1cLWHd3ZizN7SecDN1n+49A/Nf/wJjW3jB7R5WrOdqkzPJ7j+A1Db/YD4zrr8GjIysfJtUm3HLGpuIjh3Gx5eMgt0bBtoyqbaeKvKs720Fj5zcufq6CBgdmEfH1m6zJ82zJwVybSfAs7H5Age6Z+nZoXU8LVjXkK2Xl2LbY9TBDW/JAG22O3CvznZXaXi3XWXOh47KDjsVcj6v0er2z5dpWJfpyafZWfJkVVVQxBHDttz6+EDGprrzO1GqHMqW+/GqQYlNm23CRuSN+XM+Mq6tlrldlNUQYSYjUXip60II4gy7nkJ0Wfo+DnvXZk0721jZLVcq4H5hzkY0LTxgW4IoPk9zcdg7xt2PLmTvv4CA0irKQucrCw8bcDhOM2/F7fNHqmnKGnaRiadY1mN33Ey8J47ncbewmX4CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z'} style={{ height: '200px' }} />
                        </PhotoView>
                    </PhotoProvider>
                    <Link to={`/service/${_id}`} className='nav-link'>
                        <Card.Body>
                            <Card.Title>{service_name}</Card.Title>
                            <Card.Text>
                                {
                                    desc.length > 80
                                        ?
                                        desc.slice(0, 80)
                                        :
                                        desc
                                }
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className='fw-bold' style={{ color: "#00a0ff" }}>${price}</span>
                                <span className='fw-bold' style={{ color: "#00a0ff" }}><FaStar className='text-warning me-1' />3</span>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>

            </Col>
        </>
    );
};

export default ServiceCard;