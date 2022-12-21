import React, { useContext } from 'react';
import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/logo/logo.png'
import avatar from '../../../assets/imgs/user/man.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';
const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const userLogout = () => {
        logoutUser()
            .then(() => {
                successToast(' Sign-out successful');
            }).catch((e) => {
                errorToast(e);
            });
    }
    return (
        <>
            <Navbar expand="lg" className='shadow-lg p-3 dark-nav-bg'>
                <Container fluid>
                    <Navbar.Brand href="/" className='fw-bold logo'><img src={logo} alt='Logo' /> <span style={{ color: "#00a0ff" }}>Photography</span> <span style={{ color: "#64f0ff" }}>World</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="services">
                                <Nav.Link>Services</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                            {user
                                &&
                                <>
                                    <LinkContainer to="add-service">
                                        <Nav.Link>Add Service</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="my-reviews">
                                        <Nav.Link>My Reviews</Nav.Link>
                                    </LinkContainer>
                                </>
                            }
                        </Nav>
                        {
                            user
                                ?
                                <Navbar.Text className='d-flex' title={user.displayName}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='border border-1 py-1' variant="outline-light" id="dropdown-basic">
                                            <Image roundedCircle style={{ height: '28px' }} src={user.photoURL || avatar} onError={(e) => e.target.src = avatar} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='position-absolute end-100 translate-middle-x' style={{ zIndex: '9999' }}>
                                            <Dropdown.Item >{user?.displayName || 'User'}</Dropdown.Item>
                                            <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Navbar.Text>

                                :
                                <Nav className='py-1'>
                                    <LinkContainer to="/login" >
                                        <Link className="nav-link">Login</Link>
                                    </LinkContainer>
                                    <LinkContainer to="/signup">
                                        <Link className="nav-link">SignUp</Link>
                                    </LinkContainer>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;