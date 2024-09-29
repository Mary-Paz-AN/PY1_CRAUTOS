import './BarraSuperior.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function BarraSuperior() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 987);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const irInicio = () => {
    navigate('/');
  };

  const irAutosNuevos = () => {
    navigate('/AutosNuevos');
  };

  const irAutosPremium = () => {
    navigate('/AutosPremium');
  };

  const irContactenos = () => {
    navigate('/Contactenos');
  };

  const irRegistrarse = () => {
    navigate('/Registrarse');
  };

  const Ingresar = () => {
    navigate('/Ingresar');
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="navbar-brand" onClick={irInicio}>
        <img 
           src={isSmallScreen ? '/logosMarcas/logoMovil.png' : '/logosMarcas/logo.png'} 
           alt='Logo de CRAUTOS' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={irAutosNuevos} className="nav-link">Autos Nuevos</Nav.Link>
            <Nav.Link href="#autos-usados" className="nav-link">Autos Usados</Nav.Link>
            <Nav.Link onClick={irAutosPremium} className="nav-link">Usados Premium</Nav.Link>
            <Nav.Link href="#libro-azul" className="nav-link">Libro Azul</Nav.Link>
            <p className="nav-link">{isSmallScreen ? '⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯' : '|'}</p> {/* Aquí cambia el símbolo */}
            <Nav.Link onClick={irContactenos} className="nav-link">Contáctenos</Nav.Link>
            <Nav.Link onClick={irRegistrarse} className="nav-link">Registrarse</Nav.Link>
            <Nav.Link onClick={Ingresar} className="nav-link">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraSuperior;
