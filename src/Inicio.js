import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container } from 'react-bootstrap';
import carrusel1 from "./imagenes/Carrusel1.png"
import carrusel2 from "./imagenes/Carrusel2.png"
import carrusel3 from "./imagenes/Carrusel3.png"
import sedan from "./imagenes/CarroceriaSedan.png"
import pickup from "./imagenes/CarroceriaPickup.png"
import coupe from "./imagenes/CarroceriaCoupe.png"
import hatchback from "./imagenes/CarroceriaHatchback.png"
import convertible from "./imagenes/CarroceriaConvertible.png"
import suv from "./imagenes/CarroceriaSUV.png"
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';
import './Inicio.css';

function Inicio() {
  return (
    <div>
      {/* Barra de navegación superior */}
      <BarraSuperior/>

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
            <button className='buttonGrid'>
              <img src={sedan} alt="Sedán" className="img-fluid custom-image" />
              <p className='textGrid'>Sedán</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button className='buttonGrid'>
              <img src={suv} alt="SUV" className="img-fluid custom-image" />
              <p className='textGrid'>SUV</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button className='buttonGrid'>
              <img src={pickup} alt="Pick-up" className="img-fluid custom-image" />
              <p  className='textGrid'>Pick-up</p>
            </button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button className='buttonGrid'>
              <img src={coupe} alt="Coupe" className="img-fluid custom-image" />
              <p className='textGrid'>Coupe</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button className='buttonGrid'>
              <img src={convertible} alt="Convertible" className="img-fluid custom-image" />
              <p className='textGrid'>Convertible</p>
            </button>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center mb-4">
            <button className='buttonGrid'>
              <img src={hatchback} alt="Hatchback" className="img-fluid custom-image" />
              <p className='textGrid'>Hatchback</p>
            </button>
          </Col>
        </Row>
      </Container>
      <BarraInferior/>
    </div>
  );
}

export default Inicio;
