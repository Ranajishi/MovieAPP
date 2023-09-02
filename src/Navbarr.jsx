import React, { useContext, useEffect, useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css'
import Banner from './Banner'
import { samplecontext } from './App'



const Navbarr = () => {
  const sample1=useContext(samplecontext)
  const { keyword, setkeyword  } = sample1

  
  
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundImage: `url("https://cdn2.vectorstock.com/i/1000x1000/43/21/geometric-abstract-grey-background-for-business-vector-21474321.jpg")`}}>
      <Container>
        <Navbar.Brand href="#home"><h3>Movie App</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mt-2"
              style={{height: "40px"}}
              aria-label="Search"
              onChange={(e) => setkeyword(e.target.value)}
              name='title'
            />
            <Nav.Link href="#home" ><Link className='linknav nav text-decoration-none text-dark ' to='/popular'><h6>Popular movies</h6></Link></Nav.Link>
            <Nav.Link  href="#link" ><Link className='linknav nav text-decoration-none text-dark ' to='/latest'><h6>Latest Movies</h6></Link></Nav.Link>
            <Nav.Link  href="#link" ><Link className='linknav nav text-decoration-none text-dark ' to='/comedy'><h6>Comedy Movies</h6></Link></Nav.Link>
            {/* <Nav.Link  href="#link" className='linknav'><Link className='nav text-decoration-none text-dark ' to='/banner'><h6>Banner</h6></Link></Nav.Link> */}

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Banner /> */}
      
    </div>
  )
}

export default Navbarr
