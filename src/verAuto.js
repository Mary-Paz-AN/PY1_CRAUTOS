import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Autos.css';
import AudiUsados from './audiUsados';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

const AutosNuevos = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 987);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

  const irAutosUsados = () => {
    navigate('/AutosUsados');
  };

  return (
  <div className='scrollConteiner'>
        <BarraSuperior/>
        <div className='mainContainer'>
            <h2 className='flecha' onClick={irAutosUsados}>&lt; Volver</h2>

            <div className='titleContainer'>
                <h1 className='h1Style'>Nissan Versa 2021</h1>
            </div> 

            <div className='contentContainer'>
                <div></div>
            </div>

            <h3 className='sectionTitle'>{isSmallScreen ? 'AUTOS SIMILARES' : '⎯⎯⎯⎯⎯ AUTOS SIMILARES ⎯⎯⎯⎯⎯'}</h3>
            <AudiUsados />
        </div>
        <BarraInferior/>
    </div>
  );
};

export default AutosNuevos;
