import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./GestionAnuncios.css"; // Asegúrate de agregar estilos adecuados
import CruzMas from "./imagenes/CruzMas.png"
import fortuner from "./imagenes/Fortuner.jpg"
import tercel from "./imagenes/Tercel.jpg"
import beat from "./imagenes/Beat.jpg"
import { useNavigate } from 'react-router-dom';

function GestionAnuncios() {
  const [anuncios, setAnuncios] = useState([
    {
      id: 1,
      titulo: "Toyota Fortuner",
      descripcion: "Vehículo perfecto para la montaña",
      imagen: fortuner,
    },
    {
      id: 2,
      titulo: "Toyota Tercel",
      descripcion: "Económico vehículo para viajar",
      imagen: tercel,
    },
    {
      id: 3,
      titulo: "Chevrolet Beat",
      descripcion: "Pefecto para la ciudad",
      imagen: beat,
    },
  ]);

  const handleEditar = (id) => {
    alert(`Editando anuncio con ID: ${id}`);
    // Aquí se podría agregar lógica para redirigir a una página de edición de anuncio
  };

  const handleEliminar = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este anuncio?");
    if (confirmDelete) {
      setAnuncios(anuncios.filter((anuncio) => anuncio.id !== id));
    }
  };

  const navigate = useNavigate();

  const irCrearAnuncio = () => {
    navigate('/CrearAnuncioParteUno');
  };

  return (
    <div className="screen">
      <BarraSuperior />

      <div className="container-anuncios">
        <h2 className="title-ad">Mis Anuncios</h2>
        <div className="anuncios-lista">
          <button className="anunciar-item" onClick={irCrearAnuncio}>
            <img src={CruzMas} alt="Icono de cruz que significa que se pueden agregar más anuncios" className="anuncio-imagen" />
            <div className="anuncio-info">
              <h3 className="title-ad-button">Agregar nuevo anuncio</h3>
              <p className="texto-boton-crear">En este apartado se le pedirá la información necesaria para que puede anunciar su vehículo, además se le indicarán los precios de su publicación</p>
            </div>
          </button>
          <hr className="linea-divisoria" />
          {anuncios.map((anuncio) => (
            <div key={anuncio.id} className="anuncio-item">
              <img src={anuncio.imagen} alt={anuncio.titulo} className="anuncio-imagen" />
              <div className="anuncio-info">
                <h3 className="title-add">{anuncio.titulo}</h3>
                <p>{anuncio.descripcion}</p>
                <div className="anuncio-actions">
                  <button className="btn-editar" onClick={() => handleEditar(anuncio.id)}>
                    Editar
                  </button>
                  <button className="btn-eliminar" onClick={() => handleEliminar(anuncio.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BarraInferior />
    </div>
  );
}

export default GestionAnuncios;
