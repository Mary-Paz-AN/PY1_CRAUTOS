import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, Container } from 'react-bootstrap';
import carrusel1 from "./imagenes/Carrusel1.png"
import carrusel2 from "./imagenes/Carrusel2.png"
import carrusel3 from "./imagenes/Carrusel3.png"
import sedan from "./imagenes/CarroceriaSedan.png"
import pickup from "./imagenes/CarroceriaPickup.png"
import coupe from "./imagenes/CarroceriaCoupe.png"
import hatchback from "./imagenes/CarroceriaHatchback.png"
import convertible from "./imagenes/CarroceriaConvertible.png"
import suv from "./imagenes/CarroceriaSUV.png"
import { Typography, Container as MuiContainer, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {
  return (
    <div>
      {/* Barra de navegación superior */}
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-brand">
            CRAUTOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#autos-nuevos" className="nav-link">Autos Nuevos</Nav.Link>
              <Nav.Link href="#autos-usados" className="nav-link">Autos Usados</Nav.Link>
              <Nav.Link href="#usados-premium" className="nav-link">Usados Premium</Nav.Link>
              <Nav.Link href="#libro-azul" className="nav-link">Libro Azul</Nav.Link>
              <Nav.Link href="#simular-financiamiento" className="nav-link">Simular Financiamiento</Nav.Link>
              <Nav.Link href="#contactenos" className="nav-link">Contáctenos</Nav.Link>
              <Nav.Link href="#registrarse" className="nav-link">Registrarse</Nav.Link>
              <Nav.Link href="#ingresar" className="nav-link">Ingresar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carrusel de fotos de vehículos */}
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel1}
            alt="Primera Imagen"
          />
          <Carousel.Caption className="carousel-caption-custom">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel2}
            alt="Segunda Imagen"
          />
          <Carousel.Caption className="carousel-caption-custom">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel3}
            alt="Tercera Imagen"
          />
          <Carousel.Caption className="carousel-caption-custom">
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Grid para tipos de carrocería */}
      <Container>
        <h2 className="text-center">Tipos de Carrocería</h2>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={sedan} alt="Sedán" className="img-fluid custom-image" />
              <p>Sedán</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={suv} alt="SUV" className="img-fluid custom-image" />
              <p>SUV</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={pickup} alt="Pick-up" className="img-fluid custom-image" />
              <p>Pick-up</p>
            </button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={coupe} alt="Coupe" className="img-fluid custom-image" />
              <p>Coupe</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={convertible} alt="Convertible" className="img-fluid custom-image" />
              <p>Convertible</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button>
              <img src={hatchback} alt="Hatchback" className="img-fluid custom-image" />
              <p>Hatchback</p>
            </button>
          </Col>
        </Row>
      </Container>

      {/* Menú inferior */}
      <footer style={{ backgroundColor: '#424242', padding: '20px 0' }}>
        <MuiContainer>
          <Typography variant="body2" color="#FFFFFF" align="center">
            {'© '} CRAUTOS {new Date().getFullYear()} {' '}
          </Typography>
          <Typography variant="body2" color="#B0BEC5" align="center" style={{ marginTop: '10px' }}>
            Contáctenos: <Link href="mailto:info@crautos.com" color="#FFFFFF">info@crautos.com</Link>
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Link href="https://www.facebook.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
              <FacebookIcon style={{ color: '#FFFFFF' }} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
              <TwitterIcon style={{ color: '#FFFFFF' }} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
              <InstagramIcon style={{ color: '#FFFFFF' }} />
            </Link>
          </div>
        </MuiContainer>
      </footer>
    </div>
  );
}

export default App;
