import React, { useState } from "react";
import InfoHandler from './InfoHandler';
import "./Handler.css";

function AskForm({ message, show, close, type }) {
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState(false);

  if (!show) return null;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) { 
      setWarning(true);
      setInputValue("");
    } else {
      alert("Por favor, completa el campo."); 
    }
  };

  return (
    <div className="hideEstilo">
      <div className="showEstilo">
        <h2>{type}</h2>
        <p style={{ color: 'black' }}>{message}</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Escribe aquí..." 
            className="inputStyle" 
          />
          <button type="submit" className="btnHandler">Enviar</button>
        </form>

        <button onClick={close} className="btnHandler">Cerrar</button>
      </div>
      <InfoHandler
        message="El reporte fue enviado exitosamente."
        show={warning}
        close={() => setWarning(false)}
        type="¡GRACIAS!"
     />
    </div>
  );
}

export default AskForm;
