import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import MisAmistades from "./MisAmistades";
import MiInformacion from "./MiInformacion";
import MisAnuncios from "./GestionAnuncios";
import MisFavoritos from "./MisFavoritos";
import EliminarCuenta from "./EliminarCuenta";
import "./MiCuenta.css"

function MiCuenta() {
  const [selectedSection, setSelectedSection] = useState("misAmistades");

  const renderSection = () => {
    switch (selectedSection) {
      case "misAmistades":
        return <MisAmistades />;
      case "miInformacion":
        return <MiInformacion />;
      case "misAnuncios":
        return <MisAnuncios />;
      case "misFavoritos":
        return <MisFavoritos />;
      case "eliminarCuenta":
        return <EliminarCuenta />;
      default:
        return <MisAmistades />;
    }
  };

  return (
    <div className="screen">
      <BarraSuperior />

      <div className="content">
        {/* Sección izquierda con los botones */}
        <div className="sidebar">
          <div className="tittle-option">Opciones de Mi Cuenta</div>
          <button onClick={() => setSelectedSection("misAmistades")}>Mis Amistades</button>
          <button onClick={() => setSelectedSection("miInformacion")}>Mi Información</button>
          <button onClick={() => setSelectedSection("misAnuncios")}>Mis Anuncios</button>
          <button onClick={() => setSelectedSection("misFavoritos")}>Mis Favoritos</button>
          <button onClick={() => setSelectedSection("eliminarCuenta")}>Eliminar Cuenta</button>
        </div>

        {/* Sección derecha con el contenido dinámico */}
        <div className="main-content">
          {renderSection()}
        </div>
      </div>

      <BarraInferior />
    </div>
  );
}

export default MiCuenta;
