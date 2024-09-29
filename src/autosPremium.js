import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Autos.css';
import './Logos.css';
import FiltroAutosPremium from './FiltroAutosPremium';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const AutosPremium = () => {
  const navigate = useNavigate();

  const irInicio = () => {
    navigate('/');
  };

  return (
    <div className='scrollConteiner'>
      <BarraSuperior/>
      <div className='mainContainer'>
      <h2 className='flecha' onClick={irInicio}>&lt; Volver</h2>
      
        <div className='titleContainer'>
          <h1 className='h1Style'>Autos Usados Premium</h1>
        </div>
        <h2 className='h2Style'>
            En esta sección encontrará los vehículos de las marcas mundialmente reconocidas como <strong>PREMIUM</strong>, y que no tengan más de 5 años de antigüedad.
            Explore diferentes modelos y elige el que mejor se adapte a sus expectativas.
        </h2>

        <div className='contentContainer'>
          <FiltroAutosPremium />

          <div className='marcaLogoContainer'>
            <h3 className='title'>Marcas</h3>
            <div className='logoContainer'>
              {/*Audi */}
              <div className='logo'>
                <img src='/logosMarcas/audi.png' alt='Logo de Audi' className='logoImagen'/>
                <h3 className='logoTitle'>Audi</h3>
              </div>
              {/*Bentley */}
              <div className='logo'>
                <img src='/logosMarcas/bentley.png' alt='Logo de Bentley' className='logoImagen'/>
                <h3 className='logoTitle'>Bentley</h3>
              </div>
              {/*BMW */}
              <div className='logo'>
                <img src='/logosMarcas/bmw.png' alt='Logo de BMW' className='logoImagen'/>
                <h3 className='logoTitle'>BMW</h3>
              </div>
              {/*Jaguar */}
              <div className='logo'>
                <img src='/logosMarcas/jaguar.png' alt='Logo de Jaguar' className='logoImagen'/>
                <h3 className='logoTitle'>Jaguar</h3>
              </div>
              {/*Land Rover */}
              <div className='logo'>
                <img src='/logosMarcas/landRover.png' alt='Logo de Land Rover' className='logoImagen'/>
                <h3 className='logoTitle'>Land Rover</h3>
              </div>
              {/*Lexus */}
              <div className='logo'>
                <img src='/logosMarcas/lexus.png' alt='Logo de Lexus' className='logoImagen'/>
                <h3 className='logoTitle'>Lexus</h3>
              </div>
              {/*Maserati */}
              <div className='logo'>
                <img src='/logosMarcas/maserati.png' alt='Logo de Maserati' className='logoImagen'/>
                <h3 className='logoTitle'>Maserati</h3>
              </div>
              {/*Mercedes Benz */}
              <div className='logo'>
                <img src='/logosMarcas/mercedesBenz.png' alt='Logo de Mercedes Benz' className='logoImagen'/>
                <h3 className='logoTitle'>Mercedes Benz</h3>
              </div>
              {/*Mini Cooper */}
              <div className='logo'>
                <img src='/logosMarcas/miniCooper.png' alt='Logo de Mini Cooper' className='logoImagen'/>
                <h3 className='logoTitle'>Mini Cooper</h3>
              </div>
              {/*Porsche */}
              <div className='logo'>
                <img src='/logosMarcas/porsche.png' alt='Logo de Porsche' className='logoImagen'/>
                <h3 className='logoTitle'>Porsche</h3>
              </div>
              {/*Volvo */}
              <div className='logo'>
                <img src='/logosMarcas/volvo.png' alt='Logo de Volvo' className='logoImagen'/>
                <h3 className='logoTitle'>Volvo</h3>
              </div>

            </div>
          </div>

        </div>
      </div>
      <BarraInferior/>
    </div>
  );
};

export default AutosPremium;
