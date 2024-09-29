import React, { useState } from 'react';
import './Filtro.css';
import { useNavigate } from 'react-router-dom';
import './Filtro.css';
import InfoHandler from './InfoHandler';

const FiltroAutosPremium = () => {
    // Estados para cada opción seleccionada
    const [origen, setOrigen] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [combustible, setCombustible] = useState('');
    const [transmision, setTransmision] = useState('');
    const [puertas, setPuertas] = useState('');
    const [añoDesde, setAñoDesde] = useState('');
    const [añoHasta, setAñoHasta] = useState('');
    const [precioDesde, setPrecioDesde] = useState('');
    const [precioHasta, setPrecioHasta] = useState('');
    const [carroceria, setCarroceria] = useState('');
    const [recibeAuto, setRecibeAuto] = useState(false);
    const [provincia, setProvincia] = useState('');
    const [ordenarPor, setOrdenarPor] = useState('');

    const [warning, setWarning] = useState(false);
    const navigate = useNavigate();

    // Datos de ejemplo para los ComboBox (puedes cargarlos dinámicamente si lo necesitas)
    const origenes = ['Agencia', 'Particular'];
    const marcas = ['Audi', 'Bentley', 'BMW', 'Jaguar', 'Land Rover', 'Lexus', 'Maserati', 'Mercedes Benz', 'Mini Cooper', 'Porsche', 'Volvo'];
    const modelos = ['Corolla', 'Civic', 'Mustang'];
    const combustibles = ['Gasolina', 'Diesel', 'Eléctrico', 'Hibrido'];
    const transmisiones = ['Manual', 'Automática'];
    const puertasOptions = [2, 3, 4];
    const añosDesde = [2020, 2021, 2022, 2023, 2024];
    const añosHasta = [2020, 2021, 2022, 2023, 2024];
    const carrocerias = ['Sedán', 'SUV', 'Hatchback', 'Camioneta'];
    const provincias = ['San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'];
    const opcionesOrdenar = ['Modelo', 'Carroceria', 'Precio ascendente', 'Precio descendente', 'Año acendente', 'Año descendente'];

    // Función para manejar los cambios en los select y input
    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

    // Función para manejar el checkbox de recibir auto
    const handleCheckboxChange = (event) => {
        setRecibeAuto(event.target.checked);
    };

    const irFiltradoAudi = () => {
        navigate('/AutosPremiumMostrar');
      }

    const funFiltro = (event) => {
        event.preventDefault(); 
        if (marca === 'Audi') {
            irFiltradoAudi();
        } else {
          setWarning(true);
        }
    };

    return (
        <div className="filterContainer">
            <h2 className='title'>Filtrar Autos</h2>
            <form onSubmit={funFiltro}>
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

                {/* Carrocería */}
                <label className='labelStyle'>
                    Carrocería:
                    <select className='selectStyle' value={carroceria} onChange={handleChange(setCarroceria)}>
                        <option value="">Selecciona una carrocería</option>
                        {carrocerias.map((carroceria) => (
                            <option key={carroceria} value={carroceria}>
                                {carroceria}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                {/* Combustible */}
                <label className='labelStyle'>
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
                
                {/* Provincia */}
                <label className='labelStyle'>
                    Provincia:
                    <select className='selectStyle' value={provincia} onChange={handleChange(setProvincia)}>
                        <option value="">Selecciona una provincia</option>
                        {provincias.map((provincia) => (
                            <option key={provincia} value={provincia}>
                                {provincia}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                {/* Recibe auto */}
                <label className='labelStyle'>
                  Se recibe auto  
                    <input
                        className='checkBoxStyle'
                        type="checkbox"
                        checked={recibeAuto}
                        onChange={handleCheckboxChange}
                    />
                </label>
                <br />

                {/* Año */}
                <label className='labelStyle' style={{ fontSize: '16px' }}>
                    Año
                </label>
                <label className='labelStyle'>
                    Desde:
                    <select className='selectStyle' value={añoDesde} onChange={handleChange(setAñoDesde)}>
                        <option value="">Año desde</option>
                        {añosDesde.map((añoDesde) => (
                            <option key={añoDesde} value={añoDesde}>
                                {añoDesde}
                            </option>
                        ))}
                    </select>
                </label>
                <label className='labelStyle'>
                    Hasta:
                    <select className='selectStyle' value={añoHasta} onChange={handleChange(setAñoHasta)}>
                        <option value="">Año hasta</option>
                        {añosHasta.map((añoHasta) => (
                            <option key={añoHasta} value={añoHasta}>
                                {añoHasta}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                {/* Precio */}
                <label className='labelStyle' style={{ fontSize: '16px' }}>
                    Precio
                </label>
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

                {/* Ordenar por */}
                <label className='labelStyle'>
                    Ordenar por:
                    <select className='selectStyle' value={ordenarPor} onChange={handleChange(setOrdenarPor)}>
                        <option value="">Selecciona criterio</option>
                        {opcionesOrdenar.map((opcion) => (
                            <option key={opcion} value={opcion}>
                                {opcion}
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

export default FiltroAutosPremium;
