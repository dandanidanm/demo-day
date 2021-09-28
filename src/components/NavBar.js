import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbarTitle: {
    flexGrow: '1',
    color: '#fff',
    
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  
}));

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
  const classes = useStyles();
  return (
    <>
      <Navbar collapseOnSelect bg=" mx-auto" expand="sm" style={{ backgroundColor: "transparent", width: "100%" }}>
        <Navbar.Brand href="/">
          <h1 className={classes.appbarTitle} >
            Histo<span className={classes.colorText}>Vet.</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="linknav">Inicio</NavLink>
            <NavLink to="/user" className="linknav">Perfil</NavLink>
            <NavLink to="/form/patient" className="linknav">Paciente</NavLink>
            <NavLink to="/form/historia" className="linknav">Historial Clinico</NavLink>
            <NavLink to="/meds" className="linknav">Meds</NavLink>
            <NavLink to="/calculator" className="linknav">Calculadora</NavLink>
            {name ? (
              <NavLink to="/" onClick={() => dispatch(startLogout())} className="linknav">
                Logout
              </NavLink> 
            ) : (
              <NavLink to="/auth/login" className="linknav">login</NavLink>
            )}

            <p className="p-2 text-dark" style={{color: "white"}}>{name}</p>
            {
              name ?
              <img src={`${imagen}`} alt={name} style={{borderRadius: "50%", width: "80px", height: "80px"}} />
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
