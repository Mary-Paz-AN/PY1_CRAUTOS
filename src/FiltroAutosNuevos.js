import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Filtro.css';
import InfoHandler from './InfoHandler';

const FiltroAutosNuevos = () => {
  // Estados para cada opción seleccionada
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [combustible, setCombustible] = useState('');
  const [transmision, setTransmision] = useState('');
  const [puertas, setPuertas] = useState('');
  const [año, setAño] = useState('');
  const [warning, setWarning] = useState(false);

  const navigate = useNavigate();
  
  const irModelos = () => {
    navigate('/AutosNuevosModelos');
  }

  const marcas = [
      'AION',
      'Audi',
      'BMW',
      'BYD',
      'Changan',
      'Chery',
      'Chevrolet',
      'Citroën',
      'Dodge',
      'Fiat',
      'Ford',
      'Fuso',
      'Geely',
      'Hino',
      'Honda',
      'Hyundai',
      'JAC',
      'Jaguar',
      'Jeep',
      'JMC',
      'Kia',
      'Land Rover',
      'Mazda',
      'Mercedes-Benz',
      'MG',
      'Mitsubishi',
      'Nissan',
      'Peugeot',
      'Porsche',
      'RAM',
      'Renault',
      'Ssang Yong',
      'Suzuki',
      'VGV',
      'Volkswagen',
      'Volvo',
      'ZNA (Dong Feng)'
  ]
  const modelos = ['Corolla', 'Civic', 'Mustang'];
  const combustibles = ['Gasolina', 'Diesel', 'Eléctrico','Hibrido'];
  const transmisiones = ['Manual', 'Automática'];
  const puertasOptions = [2, 3, 4];
  const años = [2020, 2021, 2022, 2023, 2024];

  // Función para manejar los cambios en los select
  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const funFiltro = (event) => {
    event.preventDefault(); 
    if (marca === 'Audi') {
      irModelos();
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="filterContainer">
      <h2 className='title'>Filtrar Autos</h2>
      <form onSubmit={funFiltro}>
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

      <InfoHandler
          message="No se encontraron autos que coincidan con las características seleccionadas."
          show={warning}
          close={() => setWarning(false)}
          type="LO SENTIMOS"
        />
    </div>
  );
};

export default FiltroAutosNuevos;
