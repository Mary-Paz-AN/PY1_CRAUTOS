import React, { useState } from 'react';
import './Filtro.css';

const FiltroAutosPremium = () => {
    // Estados para cada opción seleccionada
    const [origen, setOrigen] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [combustible, setCombustible] = useState('');
    const [transmision, setTransmision] = useState('');
    const [puertas, setPuertas] = useState('');
    const [año, setAño] = useState('');
    const [precioDesde, setPrecioDesde] = useState('');
    const [precioHasta, setPrecioHasta] = useState('');

    // Datos de ejemplo para los ComboBox (puedes cargarlos dinámicamente si lo necesitas)
    const origenes = ['Agencia', 'Particular']
    const marcas = ['Toyota', 'Honda', 'Ford'];
    const modelos = ['Corolla', 'Civic', 'Mustang'];
    const combustibles = ['Gasolina', 'Diesel', 'Eléctrico'];
    const transmisiones = ['Manual', 'Automática'];
    const puertasOptions = [2, 4];
    const años = [2022, 2023, 2024];

    // Función para manejar los cambios en los select y input
    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

  return (
    <div className="filterContainer">
      <h2 className='title'>Filtrar Autos</h2>
      <form>
        {/* Origen */}
        <label className='labelStyle'>
          Origen:
          <select className='selectStyle' value={origen} onChange={handleChange(setOrigen)}>
            <option value="">Selecciona el origen</option>
            {origenes.map((origen) => (
              <option key={origen} value={origen}>
                {origen}
              </option>
            ))}
          </select>
        </label>
        <br />

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

        {/* Precio */}
        <label className='labelStyle' style={{fontSize: '16px'}}> 
            Precio
        </label>
        {/* Desde */}
        <label className='labelStyle'>
            Desde:
            <input 
                type="number" 
                className='inputStyle' 
                value={precioDesde} 
                onChange={handleChange(setPrecioDesde)} 
                placeholder="Precio desde"
            />
        </label>

        {/* Hasta */}
        <label className='labelStyle'>
            Hasta:
            <input 
                type="number" 
                className='inputStyle' 
                value={precioHasta} 
                onChange={handleChange(setPrecioHasta)} 
                placeholder="Precio hasta"
            />
        </label>
        <br />

        {/* Botón para aplicar el filtro */}
        <button className='buttonStyle' type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default FiltroAutosPremium;
