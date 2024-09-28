import React, { useState } from 'react';
import './Filtro.css';

const FiltroAutosNuevos = () => {
  // Estados para cada opción seleccionada
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [combustible, setCombustible] = useState('');
  const [transmision, setTransmision] = useState('');
  const [puertas, setPuertas] = useState('');
  const [año, setAño] = useState('');

  // Datos de ejemplo para los ComboBox (puedes cargarlos dinámicamente si lo necesitas)
  const marcas = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Nissan',
    'Hyundai',
    'Kia',
    'Mazda',
    'Subaru',
    'Jeep',
    'Lexus',
    'Porsche',
    'Ferrari',
    'Lamborghini',
    'Jaguar',
    'Tesla'
  ];
  const modelos = ['Corolla', 'Civic', 'Mustang'];
  const combustibles = ['Gasolina', 'Diesel', 'Eléctrico','Hibrido'];
  const transmisiones = ['Manual', 'Automática'];
  const puertasOptions = [2, 3, 4];
  const años = [2020, 2021, 2022, 2023, 2024];

  // Función para manejar los cambios en los select
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="filterContainer">
      <h2 className='title'>Filtrar Autos</h2>
      <form>
        {/* Marca */}
        <label className='labelStyle'>
          Marca:
          <select className='selectStyle' value={marca} onChange={handleChange(setMarca)}>
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
        <label className='labelStyle'>
          Modelo:
          <select className='selectStyle' value={modelo} onChange={handleChange(setModelo)}>
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
        <label  className='labelStyle'>
          Combustible:
          <select className='selectStyle' value={combustible} onChange={handleChange(setCombustible)}>
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
        <label className='labelStyle'>
          Transmisión:
          <select className='selectStyle' value={transmision} onChange={handleChange(setTransmision)}>
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
        <label className='labelStyle'>
          Puertas:
          <select className='selectStyle' value={puertas} onChange={handleChange(setPuertas)}>
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
        <label className='labelStyle'>
          Año:
          <select className='selectStyle' value={año} onChange={handleChange(setAño)}>
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
        <button className='buttonStyle' type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default FiltroAutosNuevos;
