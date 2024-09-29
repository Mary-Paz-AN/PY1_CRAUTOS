import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import BarraInferior from "./BarraInferior";
import "./CrearAnuncioParteUno.css";
import { useNavigate } from 'react-router-dom';

function CrearAnuncioParteUno() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindrada, setCilindrada] = useState("");
  const [estilo, setEstilo] = useState("");
  const [pasajeros, setPasajeros] = useState("");
  const [anio, setAnio] = useState("");
  const [estado, setEstado] = useState("");
  const [precio, setPrecio] = useState("");
  const [negociable, setNegociable] = useState("NO");
  const [colorExterior, setColorExterior] = useState("");
  const [colorInterior, setColorInterior] = useState("");
  const [combustible, setCombustible] = useState("Gasolina");
  const [transmision, setTransmision] = useState("Manual");
  const [kilometraje, setKilometraje] = useState("");
  const [impuestosPagados, setImpuestosPagados] = useState("SI");
  const [recibeVehiculo, setRecibeVehiculo] = useState("NO");
  const [placa, setPlaca] = useState("");
  const [puertas, setPuertas] = useState("");
  const [provincia, setProvincia] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, tal vez conectándolo con un backend o servicio API.
    alert("Anuncio creado correctamente");
  };

  const navigate = useNavigate();

  const irSiguientePaginaCrearAnuncio = () => {
    navigate('/CrearAnuncioParteDos');
  };

  return (
    <div className="screen">
      <BarraSuperior />

      <div className="container-anuncio">
        <h2>Crear Anuncio - Datos Generales</h2>
        <form onSubmit={handleSubmit} className="form-create-add">
          <div className="form-group">
            <label className="label-create1">Marca:</label>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Modelo:</label>
            <input
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Cilindrada (c.c.):</label>
            <input
              type="number"
              value={cilindrada}
              onChange={(e) => setCilindrada(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Estilo:</label>
            <select value={estilo} onChange={(e) => setEstilo(e.target.value)} className="inputs-create-add1">
              <option>Seleccione el Estilo</option>
              <option>Sedán</option>
              <option>SUV</option>
              <option>Pick-up</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Número de pasajeros:</label>
            <input
              type="number"
              value={pasajeros}
              onChange={(e) => setPasajeros(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Año:</label>
            <input
              type="number"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Estado:</label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="Excelente">Excelente</option>
              <option value="Bueno">Bueno</option>
              <option value="Regular">Regular</option>
              <option value="Deplorable">Deplorable</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Precio (¢):</label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Precio es Negociable:</label>
            <select
              value={negociable}
              onChange={(e) => setNegociable(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Color Exterior:</label>
            <input
              type="text"
              value={colorExterior}
              onChange={(e) => setColorExterior(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Color Interior:</label>
            <input
              type="text"
              value={colorInterior}
              onChange={(e) => setColorInterior(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Combustible:</label>
            <select
              value={combustible}
              onChange={(e) => setCombustible(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="Gasolina">Gasolina</option>
              <option value="Diesel">Diesel</option>
              <option value="Eléctrico">Eléctrico</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Transmisión:</label>
            <select
              value={transmision}
              onChange={(e) => setTransmision(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="Manual">Manual</option>
              <option value="Automática">Automática</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Kilometraje:</label>
            <input
              type="number"
              value={kilometraje}
              onChange={(e) => setKilometraje(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">¿Ya pagó impuestos?:</label>
            <select
              value={impuestosPagados}
              onChange={(e) => setImpuestosPagados(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">¿Se recibe vehículo?:</label>
            <select
              value={recibeVehiculo}
              onChange={(e) => setRecibeVehiculo(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Placa:</label>
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Número de puertas:</label>
            <input
              type="number"
              value={puertas}
              onChange={(e) => setPuertas(e.target.value)}
              required
              className="inputs-create-add1"
            />
          </div>

          <div className="form-group">
            <label className="label-create1">Provincia:</label>
            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              className="inputs-create-add1"
            >
              <option value="">Seleccione</option>
              <option value="San José">San José</option>
              <option value="Alajuela">Alajuela</option>
              <option value="Cartago">Cartago</option>
              <option value="Heredia">Heredia</option>
              <option value="Guanacaste">Guanacaste</option>
              <option value="Puntarenas">Puntarenas</option>
              <option value="Limón">Limón</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-create1">Comentario adicional:</label>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              className="inputs-create-add1"
            />
          </div>

          <button type="submit" className="btn-enviar-create-ad1" onClick={irSiguientePaginaCrearAnuncio}>
            Siguiente página
          </button>
        </form>
      </div>

      <BarraInferior />
    </div>
  );
}

export default CrearAnuncioParteUno;
