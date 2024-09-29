import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VistaAutos.css';
import FiltroAutosUsados from './FiltroAutosUsados';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const AutosOferta = () => {
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
          <h1 className='h1Style'>Ofertas del día</h1>
        </div>
        <h2 className='h2Style'>
            <strong>¡No se pierda de nuestras ofertas en autos usados!</strong>
            <br/>
            Encuentra vehículos listos para acompañarlo en su próximo viaje, a precios que son una <strong>GANGA</strong>. 
            <br />
            ¡Conduzca el auto que siempre ha querido sin comprometer su presupuesto!
            <br />
            <strong>¡Ofertas limitadas, aproveche hoy mismo!</strong>
        </h2>

        <div className='contentContainer'>
          <FiltroAutosUsados />

          <div className='titleAutosContainer'>
            <div className='autoContainer'>
                {/*Oferta 1 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Nissan</h1>
                    </div>
                    <img src='/autos/ao1.jpg' alt='Nissan Versa 2021' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Versa 2021</strong></p>
                        <p>1,600 cc</p>
                        <p>Gasolina</p>
                        <p>Automático</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 10, 100, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 19, 536*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div> 
                {/*Oferta 2 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Toyota</h1>
                    </div>
                    <img src='/autos/ao2.jpg' alt='Toyota Corrolla 2014' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Corrolla 2014</strong></p>
                        <p>1,800 cc</p>
                        <p>Gasolina</p>
                        <p>Automático</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 7, 400, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 14, 313*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div>
                {/*Oferta 3 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Toyota</h1>
                    </div>
                    <img src='/autos/ao3.jpg' alt='Toyota Prado 2020' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Prado 2020</strong></p>
                        <p>3,000 cc</p>
                        <p>Diesel</p>
                        <p>Automático</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 32, 700, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 63, 250*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div>
                {/*Oferta 4 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Toyota</h1>
                    </div>
                    <img src='/autos/ao4.jpg' alt='Toyota Yaris 2017' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Yaris 2017</strong></p>
                        <p>1,500 cc</p>
                        <p>Gasolina</p>
                        <p>Manual</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 6, 975, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 13, 491*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div>
                {/*Oferta 5 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Kia</h1>
                    </div>
                    <img src='/autos/ao5.jpg' alt='Kia Sorento 2010' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Sorento 2010</strong></p>
                        <p>2,200 cc</p>
                        <p>Diesel</p>
                        <p>Automático</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 7, 600, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 14, 700*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div>
                {/*Oferta 6 */}
                <div className='auto'>
                    <div className='titleContainerAuto'>
                        <h1 className='autoTitle'>Nissan</h1>
                    </div>
                    <img src='/autos/ao6.jpg' alt='Nissan Xtrail 2019' className='autoImage'/>
                    <div className='autoInfo'>
                        <p><strong>Xtrail 2019</strong></p>
                        <p>2,500 cc</p>
                        <p>Gasolina</p>
                        <p>Automático</p>
                        <p>
                            <strong style={{color: '#177001'}}>₡ 12, 200, 000</strong>
                            <br/>
                            <strong style={{color: '#aa0000'}}>$ 23, 598*</strong>
                        </p>
                        <button type="button" className="btnVerMas">Ver más</button>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      
      <BarraInferior/>
    </div>
  );
};

export default AutosOferta;
