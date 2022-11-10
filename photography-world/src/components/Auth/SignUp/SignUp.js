import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import google from '../../../assets/imgs/login/google.png'
import facebook from '../../../assets/imgs/login/facebook.png'
import github from '../../../assets/imgs/login/github.png'
import { errorToast, successToast } from '../../../toast/Toaster';
import { FaArrowRight } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';
const SignUp = () => {
    useTitle('SignUp')
    const { emPasSignUp, logoutUser, signInByGoogle } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userSignup = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const isValidEmail = /\S+@\S+\.\S+/;
        if (!isValidEmail.test(email)) {
            return errorToast('Please Provide a Valid Email Address')
        }

        if (password.length < 6) {
            return errorToast("Your password should be at least 6 charachters!");
        }
        if (password !== confirmPassword) {
            return errorToast("password and confirm password doesn't match!");
        }
        emPasSignUp(email, password)
            .then(() => {
                successToast('successfully created an account')
                logoutUser();
                form.reset();
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                errorToast(errorMessage);
                setLoading(false)
            });
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
                    <form onSubmit={userSignup}>
                        <h1 className='text-center pb-2'>SignUp</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required placeholder='Enter your email ' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' required placeholder='Enter your password' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' required placeholder='Enter your confir passowrd' />
                        </div>
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">
                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <div>
                                    SignUp <FaArrowRight></FaArrowRight>
                                </div>}
                        </button>
                    </form>
                    <div className="form-text text-center p-2 mt-3">Have an account? <Link to="/login">Login</Link></div>
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

export default SignUp;