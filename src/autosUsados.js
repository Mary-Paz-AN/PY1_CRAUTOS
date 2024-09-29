import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Autos.css';
import './VistaAutos.css';
import FiltroAutosUsados from './FiltroAutosUsados';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const AutosNuevosModelos = () => {
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

    const irInicio = () => {
        navigate('/');
    };
  

  return (
    <div className='scrollConteiner'>
        <BarraSuperior/>
        
        <div className='mainContainer'>
            <h2 className='flecha' onClick={irInicio}>&lt; Volver</h2>
            
            <div className='titleContainer'>
                <h1 className='h1Style'>Autos Usados</h1>
            </div>
            <h2 className='h2Style'>
                Descubre información detallada, precios, opciones de financiamiento y características de autos usados.
                <br/>
                En este momento contamos con <strong>12 969 vehículos disponibles</strong> para elegir, de los cuales <strong>7 691</strong> ofrecen opciones de <strong>financiamiento</strong>. 
                <br/>
                Además, tenemos <strong>24 vehículos</strong> en nuestra <strong>OFERTA DEL DÍA</strong>.
                <br/> <br/>
                <strong style={{color: '#f3b93c'}}>¡Cuidado!</strong> Recuerde que el tipo de cambio actual es: ₡571 por cada $1. Por lo tanto, los precios con (*) son estimaciones aproximadas.
            </h2>

            <div className='contentContainer'>
                <FiltroAutosUsados />

                <div className='titleAutosContainer'>
                    {/*Sección de ofertas del dia */}
                    <h3 className='sectionTitle'>{isSmallScreen ? 'OFERTAS DEL DÍA' : '⎯⎯⎯⎯⎯ OFERTAS DEL DÍA ⎯⎯⎯⎯⎯'}</h3>
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
                    <div className='centerContainer'>
                        <button type="button" style={{width: '90%', backgroundColor: '#424242'}} className="btnVerMas">Ver más</button>
                    </div>

                    <div style={{padding: '20px'}}></div>

                    {/*Sección de autos en venta */}
                    <h3 className='sectionTitle'>{isSmallScreen ? 'AUTOS EN VENTA' : '⎯⎯⎯⎯⎯⎯ AUTOS EN VENTA ⎯⎯⎯⎯⎯⎯'}</h3>
                    <div className='autoContainer'>
                        {/*Auto 1 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Suzuki</h1>
                            </div>
                            <img src='/autos/au1.jpg' alt='Suzuki Grand Vitara 2015' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Grand Vitara 2015</strong></p>
                                <p>2,400 cc</p>
                                <p>Gasolina</p>
                                <p>Manual</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 6, 750, 000</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 13, 056*</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                        {/*Auto 2 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Hyundai</h1>
                            </div>
                            <img src='/autos/au2.jpg' alt='Hyundai Santa Fe GLS 2016' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Santa Fe GLS 2016</strong></p>
                                <p>2,400 cc</p>
                                <p>Gasolina</p>
                                <p>Manual</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 9, 400, 000</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 18, 182*</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                        {/*Auto 3 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Kia</h1>
                            </div>
                            <img src='/autos/au3.jpg' alt='Kia Bongo III 2017' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Bongo III 2017</strong></p>
                                <p>2,500 cc</p>
                                <p>Gasolina</p>
                                <p>Automático</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 9, 975, 000</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 19, 294*</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                        {/*Auto 4 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Toyota</h1>
                            </div>
                            <img src='/autos/au4.jpg' alt='Toyota Fortuner 2023' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Fortuner 2023</strong></p>
                                <p>2,800 cc</p>
                                <p>Diesel</p>
                                <p>Automático</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 27, 950, 000</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 54, 062*</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                        {/*Auto 5 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Nissan</h1>
                            </div>
                            <img src='/autos/au5.jpg' alt='Nissan Pathfinder LE 2011' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Pathfinder LE 2011</strong></p>
                                <p>4,000 cc</p>
                                <p>Gasolina</p>
                                <p>Automático</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 8, 975, 000</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 17, 360*</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                        {/*Auto 6 */}
                        <div className='auto'>
                            <div className='titleContainerAuto'>
                                <h1 className='autoTitle'>Audi</h1>
                            </div>
                            <img src='/autos/au6.jpg' alt='Audi Etron 55 2020' className='autoImage'/>
                            <div className='autoInfo'>
                                <p><strong>Etron 55 2020</strong></p>
                                <p>Eléctrico</p>
                                <p>Automático</p>
                                <p>
                                    <strong style={{color: '#177001'}}>₡ 25, 830, 000*</strong>
                                    <br/>
                                    <strong style={{color: '#aa0000'}}>$ 49, 961</strong>
                                </p>
                                <button type="button" className="btnVerMas">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className='centerContainer'>
                        <button type="button" style={{width: '90%', backgroundColor: '#424242'}} className="btnVerMas">Ver más</button>
                    </div>
                </div>
            </div>
        </div>
        <BarraInferior/>
    </div>
  );
};

export default AutosNuevosModelos;
