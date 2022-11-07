import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/logo/logo.png'
const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='fw-bold logo'><img src={logo} alt='Logo' width={40} /></Navbar.Brand>
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
                            <LinkContainer to="categories">
                                <Nav.Link>Categories</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/faq">
                                <Nav.Link>FAQ</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="blog">
                                <Nav.Link>Blog</Nav.Link>
                            </LinkContainer>
                        </Nav>

                        <Nav className='py-1'>
                            <LinkContainer to="/login" >
                                <Link className="nav-link">Login</Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Link className="nav-link">SignUp</Link>
                            </LinkContainer>
                        </Nav>

                        {/* {
                            user
                                ?
                                <Navbar.Text className='d-flex' title={user.displayName}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='border border-1 py-1' variant="outline-light" id="dropdown-basic">
                                            <Image roundedCircle style={{ height: '28px' }} src={user.photoURL ? user.photoURL : avatar} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='position-absolute end-100 translate-middle-x' style={{ zIndex: '9999' }}>
                                            <Dropdown.Item >{user?.displayName}</Dropdown.Item>
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
                        } */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;