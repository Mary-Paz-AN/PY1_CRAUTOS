import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VistaAutos.css';
import FiltroAutosNuevos from './FiltroAutoNuevo';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
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
            <div className='autoContainer'>
              {/*Modelo 1 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a1.jpg' alt='Audi A3 Sportback 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A3 Sportback 2024</strong></p>
                  <p>1,400 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 41, 150</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 2 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a2.jpg' alt='Audi A3 Sedán 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A3 Sedán 2024</strong></p>
                  <p>1,400 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 41, 500</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 3 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a3.jpg' alt='Audi A4 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A4 2024</strong></p>
                  <p>2,000 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 59, 500</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 4 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a4.jpg' alt='Audi A5 Sportback 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A5 Sportback 2024</strong></p>
                  <p>2,000 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 79, 000</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 5 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a5.jpg' alt='Audi A6 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A6 2024</strong></p>
                  <p>2,000 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 88, 750</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 6 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a6.jpg' alt='Audi A8 55 TFSI' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>A8 55 TFSI</strong></p>
                  <p>3,000 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 172, 500</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 7 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a7.jpg' alt='Audi e-tron GT Sport 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>e-tron GT Sport 2024</strong></p>
                  <p>Eléctrico</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 130, 000</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 8 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a8.jpg' alt='Audi e-tron GT Sport Plus 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>e-tron GT Sport Plus 2024</strong></p>
                  <p>Eléctrico</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 198, 500</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 9 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a9.jpg' alt='Audi Q2 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>Q2 2024</strong></p>
                  <p>1,400 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 40, 700</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 10 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a10.jpg' alt='Audi Q3 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>Q3 2024</strong></p>
                  <p>1,400 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 44, 350</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 11 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a11.jpg' alt='Audi Q3 Sportback 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>Q3 Sportback 2024</strong></p>
                  <p>1,400 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 47, 350</strong></p>
                  <button type="button" className="btnVerMas">Ver más</button>
                </div>
              </div>

              {/*Modelo 12 */}
              <div className='auto'>
                <div className='titleContainerAuto'>
                  <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/a12.jpg' alt='Audi Q3 40 TFSI 2024' className='autoImage'/>
                <div className='autoInfo'>
                  <p><strong>Q3 40 TFSI 2024</strong></p>
                  <p>1,984 cc</p>
                  <p>Gasolina</p>
                  <p>Automático</p>
                  <p style={{color: '#aa0000'}}><strong>$ 64, 500</strong></p>
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

export default AutosNuevosModelos;
