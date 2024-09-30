import React, { useState } from 'react';
import './LibroAzul.css';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

const datosPrueba = {
  marcas: [
    { id: 'audi', nombre: 'Audi', modelos: ['A4', 'A3', 'Q5'] },
    { id: 'bmw', nombre: 'BMW', modelos: ['Serie 3', 'Serie 5', 'X3'] },
    { id: 'toyota', nombre: 'Toyota', modelos: ['Corolla', 'Camry', 'Hilux'] },
    { id: 'honda', nombre: 'Honda', modelos: ['Civic'] },
    { id: 'ford', nombre: 'Ford', modelos: ['Ranger'] },
    { id: 'chevrolet', nombre: 'Chevrolet', modelos: ['Tracker'] },
    { id: 'nissan', nombre: 'Nissan', modelos: ['Versa'] },
    { id: 'kia', nombre: 'Kia', modelos: ['Sportage'] },
    { id: 'hyundai', nombre: 'Hyundai', modelos: ['Tucson'] },
    { id: 'volkswagen', nombre: 'Volkswagen', modelos: ['Jetta'] },
    { id: 'mazda', nombre: 'Mazda', modelos: ['CX-5'] },
    { id: 'peugeot', nombre: 'Peugeot', modelos: ['3008'] },
    { id: 'subaru', nombre: 'Subaru', modelos: ['Outback'] },
    { id: 'fiat', nombre: 'Fiat', modelos: ['Punto'] },
    { id: 'landrover', nombre: 'Land Rover', modelos: ['Evoque'] },
  ],
  estilos: ['Sedán', 'SUV', 'Hatchback', 'Pick-up'],
  combustibles: ['Gasolina', 'Diésel', 'Eléctrico', 'Híbrido'],
  transmisiones: ['Manual', 'Automática'],
  puertas: ['2', '4', '5'],
  años: ['2024', '2023', '2022', '2021', '2020'],
  desviaciones: ['90%', '95%', '100%', '105%', '110%'],
};

const vehiculosDisponibles = [
  { marca: 'Audi', modelo: 'A4', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Automática', puertas: 4, año: 2023, cilindrada: 2000, precio: 25000 },
  { marca: 'Audi', modelo: 'Q5', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Automática', puertas: 5, año: 2022, cilindrada: 3000, precio: 35000 },
  { marca: 'BMW', modelo: 'Serie 3', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Manual', puertas: 4, año: 2024, cilindrada: 2000, precio: 30000 },
  { marca: 'Toyota', modelo: 'Corolla', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Manual', puertas: 4, año: 2024, cilindrada: 1600, precio: 20000 },
  { marca: 'Toyota', modelo: 'Hilux', estilo: 'Pick-up', combustible: 'Diésel', transmision: 'Automática', puertas: 4, año: 2023, cilindrada: 3000, precio: 40000 },
  { marca: 'Audi', modelo: 'A3', estilo: 'Hatchback', combustible: 'Gasolina', transmision: 'Manual', puertas: 2, año: 2021, cilindrada: 1800, precio: 23000 },
  { marca: 'BMW', modelo: 'X3', estilo: 'SUV', combustible: 'Diésel', transmision: 'Automática', puertas: 5, año: 2020, cilindrada: 2500, precio: 45000 },
  { marca: 'Toyota', modelo: 'Camry', estilo: 'Sedán', combustible: 'Híbrido', transmision: 'Automática', puertas: 4, año: 2023, cilindrada: 2400, precio: 28000 },
  { marca: 'Honda', modelo: 'Civic', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Manual', puertas: 4, año: 2022, cilindrada: 2000, precio: 22000 },
  { marca: 'Ford', modelo: 'Ranger', estilo: 'Pick-up', combustible: 'Diésel', transmision: 'Automática', puertas: 4, año: 2021, cilindrada: 3200, precio: 38000 },
  { marca: 'Chevrolet', modelo: 'Tracker', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Automática', puertas: 5, año: 2023, cilindrada: 1500, precio: 26000 },
  { marca: 'Nissan', modelo: 'Versa', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Manual', puertas: 4, año: 2024, cilindrada: 1600, precio: 19000 },
  { marca: 'Kia', modelo: 'Sportage', estilo: 'SUV', combustible: 'Híbrido', transmision: 'Automática', puertas: 5, año: 2022, cilindrada: 2000, precio: 31000 },
  { marca: 'Hyundai', modelo: 'Tucson', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Manual', puertas: 5, año: 2020, cilindrada: 2000, precio: 32000 },
  { marca: 'Volkswagen', modelo: 'Jetta', estilo: 'Sedán', combustible: 'Gasolina', transmision: 'Automática', puertas: 4, año: 2023, cilindrada: 1800, precio: 24000 },
  { marca: 'Mazda', modelo: 'CX-5', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Automática', puertas: 5, año: 2024, cilindrada: 2500, precio: 33000 },
  { marca: 'Peugeot', modelo: '3008', estilo: 'SUV', combustible: 'Diésel', transmision: 'Manual', puertas: 5, año: 2021, cilindrada: 2000, precio: 28000 },
  { marca: 'Subaru', modelo: 'Outback', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Automática', puertas: 5, año: 2020, cilindrada: 2500, precio: 37000 },
  { marca: 'Fiat', modelo: 'Punto', estilo: 'Hatchback', combustible: 'Gasolina', transmision: 'Manual', puertas: 5, año: 2022, cilindrada: 1400, precio: 15000 },
  { marca: 'Land Rover', modelo: 'Evoque', estilo: 'SUV', combustible: 'Gasolina', transmision: 'Automática', puertas: 5, año: 2024, cilindrada: 2000, precio: 60000 },
];



const LibroAzul = () => {
  const [formValues, setFormValues] = useState({
    marca: '',
    modelo: '',
    cilindradaMin: 0,
    cilindradaMax: 10000,
    estilo: '',
    combustible: '',
    transmision: '',
    puertas: '',
    año: '',
    desviacion: '100%', // Desviación por defecto
    captchaChecked: false,
  });

  const [precioPromedio, setPrecioPromedio] = useState(null);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValues.captchaChecked) {
      alert('Por favor, verifica el captcha.');
      return;
    }

    // Filtramos los vehículos disponibles en base a los criterios seleccionados
    const vehiculosFiltrados = vehiculosDisponibles.filter((vehiculo) => {
      return (
        (formValues.marca === '' || vehiculo.marca === formValues.marca) &&
        (formValues.modelo === '' || vehiculo.modelo === formValues.modelo) &&
        vehiculo.cilindrada >= formValues.cilindradaMin &&
        vehiculo.cilindrada <= formValues.cilindradaMax &&
        (formValues.estilo === '' || vehiculo.estilo === formValues.estilo) &&
        (formValues.combustible === '' || vehiculo.combustible === formValues.combustible) &&
        (formValues.transmision === '' || vehiculo.transmision === formValues.transmision) &&
        (formValues.puertas === '' || vehiculo.puertas.toString() === formValues.puertas) &&
        (formValues.año === '' || vehiculo.año.toString() === formValues.año)
      );
    });

    if (vehiculosFiltrados.length === 0) {
      setPrecioPromedio('No se encontraron vehículos que coincidan con los criterios.');
    } else {
      // Calculamos el precio promedio de los vehículos filtrados
      const precioTotal = vehiculosFiltrados.reduce((sum, vehiculo) => sum + vehiculo.precio, 0);
      const promedio = precioTotal / vehiculosFiltrados.length;

      // Aplicamos la desviación seleccionada
      const desviacionSeleccionada = parseFloat(formValues.desviacion) / 100;
      const precioConDesviacion = promedio * desviacionSeleccionada;

      setPrecioPromedio(`El precio promedio ajustado es: $${precioConDesviacion.toFixed(2)}`);
    }
  };

  return (
    <div className='screen'>
      <BarraSuperior/>
      <div className='div-principal'>
        <div className="bluebook-form-container">
          <h2 className="bluebook-form-title">Buscar precio promedio de un vehículo:</h2>
          <form onSubmit={handleSubmit} className="bluebook-form">
            {/* Marca */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="marca">Marca:</label>
              <select id="marca" name="marca" value={formValues.marca} onChange={handleInputChange} className="bluebook-form-select">
                <option value="">No Importa</option>
                {datosPrueba.marcas.map((marca) => (
                  <option key={marca.id} value={marca.nombre}>{marca.nombre}</option>
                ))}
              </select>
            </div>

            {/* Modelo */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="modelo">Modelo:</label>
              <input type="text" id="modelo" name="modelo" value={formValues.modelo} onChange={handleInputChange} placeholder="Corolla, Sentra, etc." className="bluebook-form-input" />
            </div>

            {/* Cilindrada */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="cilindradaMin">Cilindrada Mínima:</label>
              <input type="number" id="cilindradaMin" name="cilindradaMin" value={formValues.cilindradaMin} onChange={handleInputChange} className="bluebook-form-input" />
            </div>

            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="cilindradaMax">Cilindrada Máxima:</label>
              <input type="number" id="cilindradaMax" name="cilindradaMax" value={formValues.cilindradaMax} onChange={handleInputChange} className="bluebook-form-input" />
            </div>

            {/* Estilo */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="estilo">Estilo:</label>
              <select id="estilo" name="estilo" value={formValues.estilo} onChange={handleInputChange} className="bluebook-form-select">
                <option value="">No Importa</option>
                {datosPrueba.estilos.map((estilo) => (
                  <option key={estilo} value={estilo}>{estilo}</option>
                ))}
              </select>
            </div>

            {/* Desviación */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="desviacion">Desviación:</label>
              <select id="desviacion" name="desviacion" value={formValues.desviacion} onChange={handleInputChange} className="bluebook-form-select">
                {datosPrueba.desviaciones.map((desviacion) => (
                  <option key={desviacion} value={desviacion}>{desviacion}</option>
                ))}
              </select>
            </div>

            {/* Captcha (simulado) */}
            <div className="bluebook-form-field">
              <label className="bluebook-form-label" htmlFor="captchaChecked">
                <input type="checkbox" id="captchaChecked" name="captchaChecked" checked={formValues.captchaChecked} onChange={handleInputChange} className='checkbox-terms'/>
                No soy un robot
              </label>
            </div>

            <button type="submit" className="bluebook-form-submit">Buscar</button>
          </form>

          {/* Mostrar el resultado del precio promedio */}
          {precioPromedio && <p className="bluebook-form-result">{precioPromedio}</p>}
        </div>
      </div>
      <BarraInferior/>
    </div>
  );
};

export default LibroAzul;
