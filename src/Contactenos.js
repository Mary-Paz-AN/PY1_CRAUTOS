import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./Contactenos.css"; // Importamos el CSS

function Contactenos() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateTelefono = (phone) => {
    const regex = /^[0-9]+$/;
    return regex.test(phone);
  };

  const validateMessageLength = (message) => {
    const words = message.trim().split(/\s+/).length;
    return words <= 2000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setError("El nombre es obligatorio");
      return;
    }

    if (!validateEmail(correo)) {
      setError("Correo electrónico no es válido, necesita un dominio");
      return;
    }

    if (!validateTelefono(telefono)) {
      setError("El número de teléfono solo debe contener dígitos");
      return;
    }

    if (!validateMessageLength(mensaje)) {
      setError("El mensaje no puede exceder las 2000 palabras");
      return;
    }

    setError("");
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="screen">
      <BarraSuperior />

      <div className="container-contact">
        {/* Información de contacto */}
        <div className="info-contacto">
          <h2 className="title-estilo ">Información de contacto</h2>
          <p>Si desea contactarnos, ya sea porque necesita ayuda utilizando nuestro sitio, o necesita cualquier otra información, por favor no dude en llamarnos o enviarnos un mensaje. Nuestras ejecutivas de soporte están disponibles y capacitadas para asistir a nuestros usuarios en lo que sea necesario.</p>
          <p><strong>Email:</strong> soporte@crautos.com</p>
          <p><strong>Telefono:</strong> 2291-4141</p>
        </div>

        <div className="divider"></div>

        {/* Formulario de contacto */}
        <form className="form-contact" onSubmit={handleSubmit}>
          <h2 className="title-estilo ">Contáctenos</h2>

          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Número de teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mensaje:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </div>

      <BarraInferior />
    </div>
  );
}

export default Contactenos;
