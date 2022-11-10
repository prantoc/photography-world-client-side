import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import google from '../../../assets/imgs/login/google.png'
import facebook from '../../../assets/imgs/login/facebook.png'
import github from '../../../assets/imgs/login/github.png'
import { errorToast, successToast } from '../../../toast/Toaster';
import { FaArrowRight } from 'react-icons/fa';
const Login = () => {
    const { userSignIn, signInByGoogle } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const userLogin = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                successToast(`Hi,${user.displayName}  You Logged in successfully`);
                setLoading(false)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((e) => {
                const errorMessage = e.message;
                errorToast(errorMessage);
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const googleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                const user = result.user;
                successToast(`Hi,${user.displayName}  You Logged in successfully`);
                navigate('/')
            }).catch((e) => {
                errorToast(e);
            });
    }


    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded text-white auth-card'>
                    <form onSubmit={userLogin}>
                        <h1 className='text-center pb-4'>Login</h1>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
                        </div>
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">

                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <div>
                                    Login <FaArrowRight></FaArrowRight>
                                </div>}
                        </button>
                    </form>
                    <div className="form-text text-center p-2 mt-3">Doesn't have an account? <Link to="/signup">Create new Acoount</Link></div>
                    <hr />
                    <div className='d-flex justify-content-center mt-3'>
                        <img className='m-4' role="button" onClick={googleSignIn} src={google} alt='Logo' width={30} />
                        <img className='m-4' role="button" src={github} alt='Logo' width={30} />
                        <img className='m-4' role="button" onClick={googleSignIn} src={facebook} alt='Logo' width={30} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;