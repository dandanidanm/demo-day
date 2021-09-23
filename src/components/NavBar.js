import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import vetApp from "../styles/vetApp.jpeg";

const NavBar = () => {
  const dispatch = useDispatch();

  const { imagen, name } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("buscando...");
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log("handleChange");
  };

  return (
    <>
      <Navbar collapseOnSelect bg="light mx-auto" expand="sm">
        <Navbar.Brand href="/">
          <img
            src={vetApp}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/user">Perfil</NavLink>
            <NavLink to="/form/patient">Paciente</NavLink>
            <NavLink to="/form/historia">Historial Clinico</NavLink>

            {name ? (
              <NavLink to="/" onClick={() => dispatch(startLogout())}>
                Logout
              </NavLink> 
            ) : (
              <NavLink to="/auth/login">login</NavLink>
            )}

            <p className="p-2 text-dark">{name}</p>
            {
              name ?
              <img src={`${imagen}`} alt={name} />
              :
              <img src={`${imagen}`} alt={name} style={{display: "none"}} />

            }
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
