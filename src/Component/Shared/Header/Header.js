import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-gray-800" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Watch<span className="text-blue-200 py-0 px-1 ">Bazar</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/home" activeStyle={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/about" activeStyle={{ color: 'white' }}>About</Nav.Link>
                        <Nav.Link as={NavHashLink} className="text-blue-200 font-medium transform hover:text-white transition duration-500" to="/dashboard" activeStyle={{ color: 'white' }}>Dashboard</Nav.Link>
                        {user?.email ? <Nav.Link onClick={logOut} className="border-0 text-blue-200 font-medium hover:text-white transition duration-500"><button className="px-3 py-2 bg-blue-200 text-gray-800 text-xs font-bold uppercase rounded">Log Out</button></Nav.Link> : <Nav.Link as={NavHashLink} to="/login" className="text-blue-200 font-medium transform hover:text-white transition duration-500" activeStyle={{ color: 'white' }}><button className="px-3 py-2 bg-blue-200 text-gray-800 text-xs font-bold uppercase rounded">Log In</button></Nav.Link>}
                        <Navbar.Text className="text-green-400 font-medium">
                            <Link to="/login" className="text-blue-200 font-medium"> {user?.email && <div className="h-9 w-9 lg:mb-0 mr-4 mx-auto">
                                <img src={user?.photoURL} className="h-full w-full rounded-full overflow-hidden shadow" alt="" />
                            </div>}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;