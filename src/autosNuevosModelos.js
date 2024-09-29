import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VistaAutos.css';
import FiltroAutosNuevos from './FiltroAutosNuevos';
import AudiNuevos from './audiNuevo';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevosA
const AutosNuevosModelos = () => {
  const navigate = useNavigate();

  const irAutosNuevos = () => {
    navigate('/AutosNuevos');
  };
  

  return (
    <div className='scrollConteiner'>
      <BarraSuperior/>
      <div className='mainContainer'>
      <h2 className='flecha' onClick={irAutosNuevos}>&lt; Volver</h2>
      
        <div className='titleContainer'>
          <h1 className='h1Style'>Autos Nuevos</h1>
        </div>

        <div className='contentContainer'>
          <FiltroAutosNuevos />

          <div className='titleAutosContainer'>
            <h3 className='title'>Modelos</h3>
            <AudiNuevos />
          </div>

        </div>
      </div>
      
      <BarraInferior/>
    </div>
  );
};

export default AutosNuevosModelos;
