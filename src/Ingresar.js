import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Autos.css';
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./Ingresar.css"; // Importamos el CSS
import logoGoogle from "./imagenes/LogoGoogle.png"

function Ingresar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const irInicio = () => {
    navigate('/');
  };

  const handleGoogleSignIn = () => {
    // Lógica para iniciar sesión con Google
    alert("Iniciar sesión con Google");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión con correo y contraseña
    alert(`Iniciando sesión con ${email}`);
  };

  return (
    <div className="screen">
      <BarraSuperior />

      <h2 className='flecha' onClick={irInicio}>&lt; Volver</h2>
      
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="title-font" >Iniciar Sesión</h2>
          
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className="btn-login">Iniciar Sesión</button>

          <button onClick={handleGoogleSignIn} className="btn-google">
            <img src={logoGoogle} alt="Google Logo" className="google-logo" />
            Iniciar sesión con Google
          </button>
        </form>
      </div>
      
      <BarraInferior />
    </div>
  );
}

export default Ingresar;
