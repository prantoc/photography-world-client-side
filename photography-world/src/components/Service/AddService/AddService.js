import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';

const AddService = () => {
    const { loading, user } = useContext(AuthContext)
    const handleAddService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const img = form.img.value
        const price = form.price.value
        const desc = form.desc.value
        const userId = user.uid;
        const createdAT = new Date()

        const service = {
            service_name: name,
            img_url: img,
            price,
            desc,
            userId,
            createdAT
        }

        fetch(`http://localhost:5000/add-service`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(service),

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successToast('successfully added service')
                    form.reset()
                }
            })
            .catch(err => errorToast(err))

    }
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col md={4} sm={10} className='mx-auto border p-5 rounded text-white auth-card'>
                        <form onSubmit={handleAddService}>
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