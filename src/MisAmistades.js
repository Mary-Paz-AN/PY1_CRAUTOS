import React, { useState } from "react";
import "./MisAmistades.css"

const MisAmistades = () => {
  // Lista inicial de amigos
  const [amigos, setAmigos] = useState([
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Juan" },
    { id: 4, nombre: "María" },
    { id: 5, nombre: "Luis" },
    { id: 6, nombre: "Sofía" },
  ]);

  // Estado para el valor del buscador
  const [busqueda, setBusqueda] = useState("");

  // Función para manejar el cambio en el buscador
  const handleSearchChange = (event) => {
    setBusqueda(event.target.value);
  };

  // Filtrar amigos con base en el texto del buscador
  const amigosFiltrados = amigos.filter((amigo) =>
    amigo.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="div-principal">
      <div className="mis-amistades">
        <h2 className="title-estilo">Mis Amistades</h2>

        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar amigos..."
          value={busqueda}
          onChange={handleSearchChange}
          className="buscador-amigos"
        />

        {/* Lista de amigos */}
        <ul className="lista-amigos">
          {amigosFiltrados.length > 0 ? (
            amigosFiltrados.map((amigo) => (
              <li key={amigo.id} className="amigo">
                {amigo.nombre}
              </li>
            ))
          ) : (
            <li>No se encontraron amigos</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MisAmistades;
