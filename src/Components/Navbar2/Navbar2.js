
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState } from 'react';
const Navbar2 = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="container p-2" style={{ backgroundColor: "black" }}>
            <div className="row">

                <div className="col">

                    <img className="img-fluid" src="./logosaas.png" alt="data"></img>
                    <span className="me-2 d-none d-sm-inline" style={{ color: "white" }}>made by</span>
                    <img className="img-fluid me-2 d-none d-sm-inline" src="./piguin.png" alt="data"></img>
                    <span style={{ color: "white" }} className='d-none d-sm-inline'>Framer</span>
                </div>


                <div className='col' style={{ display: 'contents' }}>
                    <Navbar expand="lg" expanded={expanded}>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} style={{backgroundColor:"gray"}}/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">About</Nav.Link>
                                    <Nav.Link href="#link">Features</Nav.Link>
                                    <Nav.Link href="#about">customers</Nav.Link>
                                    <Nav.Link href="#contact">Update</Nav.Link>
                                    <Nav.Link href="#contact">Help</Nav.Link>
                                    <button style={{ backgroundColor: 'white', color: 'black' }} className='rounded-4'>get for free</button>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>


            </div>


        </div>
    )
}

export default Navbar2;