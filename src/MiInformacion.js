import React, { useState } from "react";
import "./MiInformacion.css"

const MiInformacion = () => {
  // Estado inicial con la información del usuario
  const [usuario, setUsuario] = useState({
    nombre: "Andrew López Herrera",
    edad: 22,
    email: "andrew@example.com",
    direccion: "Limón Valle La Estrella",
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para guardar los cambios
    alert("Cambios guardados");
  };

  return (
    <div className="div-principal">
      <div className="mi-informacion">
        <h2 className="title-estilo">Mi Información</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={usuario.edad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={usuario.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="guardar-cambios">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default MiInformacion;
