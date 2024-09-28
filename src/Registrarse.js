import React, { useState } from "react"; 
import { useNavigate } from 'react-router-dom';
import './Autos.css';
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./Registrarse.css";
import logoGoogle from "./imagenes/LogoGoogle.png"

function Registrarse() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipoId, setTipoId] = useState("cedula");
  const [idNumero, setIdNumero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("Costa Rica");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [esRegistroCompleto, setEsRegistroCompleto] = useState(true);

  const navigate = useNavigate();

  const irInicio = () => {
    navigate('/');
  };

  const provinciasCR = [
    "San José",
    "Alajuela",
    "Cartago",
    "Guanacaste",
    "Heredia",
    "Puntarenas",
    "Limón",
  ];

  const handleSubmitQuick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("El correo y la contraseña son obligatorios.");
      return;
    }
    setError("");
    alert("Registro rápido exitoso");
  };

  const handleSubmitComplete = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    alert("Registro completo exitoso");
  };

  const handleGoogleSignIn = () => {
    alert("Iniciar sesión con Google (aquí iría la lógica de Google Sign-In)");
  };

  return (
    <div className="screen">
      <BarraSuperior />
      <h2 className='flecha' onClick={irInicio}>&lt; Volver</h2>

      <h1 className="text-tittle">Registrarse</h1>
      <div className="container-register">

        <div className="toggle-register">
          <button 
            className={`btn-toggle-left ${!esRegistroCompleto ? "active" : ""}`} 
            onClick={() => setEsRegistroCompleto(false)}>
            Registro rápido
          </button>
          <button 
            className={`btn-toggle-right ${esRegistroCompleto ? "active" : ""}`} 
            onClick={() => setEsRegistroCompleto(true)}>
            Registro completo
          </button>
        </div>

        <div className="register-forms">
          {esRegistroCompleto ? (
            <div className="full-register">
              <h2 className="text-tittle">Registro Completo</h2>
              <form onSubmit={handleSubmitComplete} className="form-register">
                <div className="form-group-register">
                  <label>Correo electrónico:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Confirmar contraseña:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Nombre:</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Apellidos:</label>
                  <input
                    type="text"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Tipo de identificación:</label>
                  <select value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
                    <option value="cedula">Cédula</option>
                    <option value="pasaporte">Pasaporte</option>
                  </select>
                </div>
                <div className="form-group-register">
                  <label>Número de identificación:</label>
                  <input
                    type="text"
                    value={idNumero}
                    onChange={(e) => setIdNumero(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Fecha de nacimiento:</label>
                  <input
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Sexo:</label>
                  <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="">Seleccione</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group-register">
                  <label>Dirección física:</label>
                  <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Ciudad/Provincia:</label>
                  <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} required>
                    <option value="">Seleccione</option>
                    {provinciasCR.map((provincia) => (
                      <option key={provincia} value={provincia}>
                        {provincia}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group-register">
                  <label>País:</label>
                  <input
                    type="text"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    readOnly
                  />
                </div>
                <div className="form-group-register">
                  <label>Código Postal:</label>
                  <input
                    type="text"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Teléfono celular:</label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn-enviar">Registrar</button>
              </form>
            </div>
          ) : (
            <div className="quick-register">
              <h2 className="text-tittle">Registro Rápido</h2>
              <form onSubmit={handleSubmitQuick} className="form-register">
                <div className="form-group-register">
                  <label>Correo electrónico:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-register">
                  <label>Confirmar contraseña:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn-enviar">Registrar</button>
              </form>
            </div>
          )}
        </div>

        <button onClick={handleGoogleSignIn} className="btn-google">
          <img 
            src={logoGoogle}
            alt="Google logo"
            className="logo-google"
          />
        </button>
      </div>

      <BarraInferior />
    </div>
  );
}

export default Registrarse;
