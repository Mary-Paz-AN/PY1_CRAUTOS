import React from 'react';
import './VistaAutos.css';

// Componente funcional de React para mostrar autos nuevos
const AudiUsados = () => {

    return (
        <div className='autoContainer'>
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
            {/*Auto 7 */}
          <div className='auto'>
                <div className='titleContainerAuto'>
                    <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/au7.jpg' alt='Audi Q3 2020' className='autoImage'/>
                <div className='autoInfo'>
                    <p><strong>Q3 2020</strong></p>
                    <p>1,400 cc</p>
                    <p>Gasolina</p>
                    <p>Automático</p>
                    <p>
                        <strong style={{color: '#177001'}}>₡ 14, 900, 000</strong>
                        <br/>
                        <strong style={{color: '#aa0000'}}>$ 28, 821*</strong>
                    </p>
                    <button type="button" className="btnVerMas">Ver más</button>
                </div>
            </div>
            {/*Auto 8 */}
          <div className='auto'>
                <div className='titleContainerAuto'>
                    <h1 className='autoTitle'>Audi</h1>
                </div>
                <img src='/autos/au8.jpg' alt='Audi A3 2022' className='autoImage'/>
                <div className='autoInfo'>
                    <p><strong>A3 2022</strong></p>
                    <p>1,400 cc</p>
                    <p>Gasolina</p>
                    <p>Automático</p>
                    <p>
                        <strong style={{color: '#177001'}}>₡ 15, 000, 000</strong>
                        <br/>
                        <strong style={{color: '#aa0000'}}>$ 29, 014</strong>
                    </p>
                    <button type="button" className="btnVerMas">Ver más</button>
                </div>
            </div>

        </div>
      );
      
};

export default AudiUsados;
