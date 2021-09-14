import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth'
import vetApp from "../styles/vetApp.jpeg"

const NavBar = () => {
  const dispatch = useDispatch()

  const { name } = useSelector(state => state.auth)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("buscando...")
  };
  const handleClick = () => {
    console.log("click");
  };
  const handleChange = (e) => {
   console.log('handleChange')
  }

  return (
    <div>
      <Navbar collapseOnSelect bg="light mx-auto" expand="sm">
        <Navbar.Brand href="/"><img src={vetApp} alt="logo" style={{ width: "50px", height: "50px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/">Inicio</Nav.Link>
            <Nav.Link to="/">nav</Nav.Link>
            <Nav.Link to="/auth/Login" onClick={() => dispatch(startLogout())}>Logout</Nav.Link>           
            <p className="p-2 text-dark">{name}</p>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit} >
            <FormControl
              type="search"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={handleClick}>
              Search
            </Button>
          </Form>
     
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
