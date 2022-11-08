import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const { loading } = useContext(AuthContext)
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col md={4} sm={10} className='mx-auto border p-5 rounded text-white auth-card'>
                        <form >
                            <h3 className='text-center pb-4'>Add Service</h3>
                            <div className="mb-4">
                                <label htmlFor="exampleInputNAME" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputNAME" aria-describedby="emailHelp" name='name' required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputURL" className="form-label">Image URL</label>
                                <input type="text" className="form-control" id="exampleInputURL" name="img" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                                <input type="number" className="form-control" id="exampleInputPrice" name="price" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputDesc" className="form-label">Description</label>
                                <textarea name="desc" className="form-control" id="" cols="45" rows="4"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary text-center col-12  rounded">

                                {loading
                                    ?
                                    <div className="spinner-border text-dark" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    :
                                    <div>
                                        Add Service <FaPlus></FaPlus>
                                    </div>}
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default AddService;