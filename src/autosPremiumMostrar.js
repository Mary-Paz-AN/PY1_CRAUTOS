import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VistaAutos.css';
import FiltroAutosPremium from './FiltroAutosPremium';
import AudiUsados from './audiUsados';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const AutosPremiumMostrar = () => {
  const navigate = useNavigate();

  const irAutosPremieum = () => {
    navigate('/AutosPremium');
  };
  

  return (
    <div className='scrollConteiner'>
      <BarraSuperior/>
      <div className='mainContainer'>
      <h2 className='flecha' onClick={irAutosPremieum}>&lt; Volver</h2>
      
        <div className='titleContainer'>
          <h1 className='h1Style'>Autos Premium</h1>
        </div>
        <h2 className='h2Style'>
            <strong style={{color: '#f3b93c'}}>¡Cuidado!</strong> Recuerde que el tipo de cambio actual es: ₡571 por cada $1. Por lo tanto, los precios con (*) son estimaciones aproximadas.
        </h2>

        <div className='contentContainer'>
          <FiltroAutosPremium />

          <div className='titleAutosContainer'>
            <AudiUsados />
          </div>

        </div>
      </div>
      
      <BarraInferior/>
    </div>
  );
};

export default AutosPremiumMostrar;
