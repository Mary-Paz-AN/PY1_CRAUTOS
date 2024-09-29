import React from "react";
import "./MisFavoritos.css";

function MisFavoritos() {
  const autosFavoritos = [
    {
      modelo: "A3 Sportback 2024",
      imagen: "/autos/a1.jpg",
    },
    {
      modelo: "A3 Sedán 2024",
      imagen: "/autos/a2.jpg",
    },
    {
      modelo: "A4 2024",
      imagen: "/autos/a3.jpg",
    },
  ];

  return (
    <div className="mis-favoritos-container">
      <h1 className="mis-favoritos-title">Mis Autos Favoritos</h1>
      <div className="mis-favoritos-list">
        {autosFavoritos.map((auto, index) => (
          <div key={index} className="mis-favoritos-item">
            <img src={auto.imagen} alt={auto.modelo} className="mis-favoritos-imagen" />
            <p className="mis-favoritos-modelo">{auto.modelo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisFavoritos;
