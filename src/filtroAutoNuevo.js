import React, { useState } from 'react';
import './autoNuevoStyle.css';

const FiltroAutosNuevos = () => {
  // Estados para cada opción seleccionada
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [combustible, setCombustible] = useState('');
  const [transmision, setTransmision] = useState('');
  const [puertas, setPuertas] = useState('');
  const [año, setAño] = useState('');

  // Datos de ejemplo para los ComboBox (puedes cargarlos dinámicamente si lo necesitas)
  const marcas = ['Toyota', 'Honda', 'Ford'];
  const modelos = ['Corolla', 'Civic', 'Mustang'];
  const combustibles = ['Gasolina', 'Diesel', 'Eléctrico'];
  const transmisiones = ['Manual', 'Automática'];
  const puertasOptions = [2, 4];
  const años = [2022, 2023, 2024];

  // Función para manejar los cambios en los select
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="filterContainer">
      <h2 className='title'>Filtrar Autos</h2>
      <form>
        {/* Marca */}
        <label>
          Marca:
          <select value={marca} onChange={handleChange(setMarca)}>
            <option value="">Selecciona una marca</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Modelo */}
        <label>
          Modelo:
          <select value={modelo} onChange={handleChange(setModelo)}>
            <option value="">Selecciona un modelo</option>
            {modelos.map((modelo) => (
              <option key={modelo} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Combustible */}
        <label>
          Combustible:
          <select value={combustible} onChange={handleChange(setCombustible)}>
            <option value="">Selecciona un combustible</option>
            {combustibles.map((combustible) => (
              <option key={combustible} value={combustible}>
                {combustible}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Transmisión */}
        <label>
          Transmisión:
          <select value={transmision} onChange={handleChange(setTransmision)}>
            <option value="">Selecciona una transmisión</option>
            {transmisiones.map((transmision) => (
              <option key={transmision} value={transmision}>
                {transmision}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Número de puertas */}
        <label>
          Puertas:
          <select value={puertas} onChange={handleChange(setPuertas)}>
            <option value="">Selecciona el número de puertas</option>
            {puertasOptions.map((puertas) => (
              <option key={puertas} value={puertas}>
                {puertas}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Año */}
        <label>
          Año:
          <select value={año} onChange={handleChange(setAño)}>
            <option value="">Selecciona el año</option>
            {años.map((año) => (
              <option key={año} value={año}>
                {año}
              </option>
            ))}
          </select>
        </label>
        <br />

        {/* Botón para aplicar el filtro */}
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default FiltroAutosNuevos;
