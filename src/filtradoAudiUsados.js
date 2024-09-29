import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VistaAutos.css';
import FiltroAutosUsados from './FiltroAutosUsados';
import AudiUsados from './audiUsados';
import AudiNuevos from './audiNuevo';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const FiltradoAudiUsados = () => {
  const navigate = useNavigate();

  const irAutosUsados = () => {
    navigate('/AutosUsados');
  };
  

  return (
    <div className='scrollConteiner'>
      <BarraSuperior/>
      <div className='mainContainer'>
      <h2 className='flecha' onClick={irAutosUsados}>&lt; Volver</h2>
      
        <div className='titleContainer'>
          <h1 className='h1Style'>Autos en Venta</h1>
        </div>
        <h2 className='h2Style'>
            <strong style={{color: '#f3b93c'}}>¡Cuidado!</strong> Recuerde que el tipo de cambio actual es: ₡571 por cada $1. Por lo tanto, los precios con (*) son estimaciones aproximadas.
        </h2>

        <div className='contentContainer'>
            <FiltroAutosUsados />
            
            <div className='titleAutosContainer'>
                <AudiUsados />
                <AudiNuevos />
            </div>

        </div>
      </div>
      
      <BarraInferior/>
    </div>
  );
};

export default FiltradoAudiUsados;
