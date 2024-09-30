import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Autos.css';
import './verAuto.css';
import './VistaAutos.css';
import InfoHandler from './InfoHandler';
import AskForm from './AskForm';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

const VerAuto = () => {
    const [imagenGrande, setImagenGrande] = useState('/autos/ao1.jpg'); 
    const [altImagenGrande, setAltImagenGrande] = useState('Nisan Versa 2021 de frente'); 
    const [favoriteImage, setFavoriteImage] = useState('/iconos/favoritos.png');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [warning, setWarning] = useState(false);
    const [ask, setAsk] = useState(false);
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

    useEffect(() => {
        window.scrollTo(0, 0); // Llevar el scroll a la parte superior
    }, []);

    const irAutosUsados = () => {
        navigate('/AutosUsados');
    };

    const cambiarImagenGrande = (nuevaImagen, nuevoAlt) => {
        setImagenGrande(nuevaImagen);
        setAltImagenGrande(nuevoAlt)
    };

    const cambiarImagenFavoritos = () => {
        const nuevaImagen = favoriteImage === '/iconos/favoritos.png' 
            ? '/iconos/favoritos2.png' 
            : '/iconos/favoritos.png'; 
        setFavoriteImage(nuevaImagen);
    };

    const descargarClick = () => {
        setWarning(true);
    }

    const reportarClick = () => {
        setAsk(true);
    }

  return (
  <div className='scrollConteiner'>
        <BarraSuperior/>
        <div className='mainContainer'>
            <h2 className='flecha' onClick={irAutosUsados}>&lt; Volver</h2>

            <div className='titleContainer'>
                <h1 className='h1Style'>Nissan Versa 2021</h1>
            </div> 

            <div style={{margin: '20px'}}></div>

            <div className='contentContainer'>
                <div className='leftSide'>
                    <div className='row largeImage'>
                        <img src={imagenGrande} alt={altImagenGrande} />
                    </div>

                   <div className='row smallImages'>
                        <img src='/autos/ao1.jpg' alt='Nisan Versa 2021 de frente' onClick={() => cambiarImagenGrande('/autos/ao1.jpg', 'Nisan Versa 2021 de frente')} />
                        <img src='/autos/ao1-2.jpg' alt='Nisan Versa 2021 lado derecho' onClick={() => cambiarImagenGrande('/autos/ao1-2.jpg', 'Nisan Versa 2021 lado derecho')} />
                        <img src='/autos/ao1-3.jpg' alt='Nisan Versa 2021 parte trasera' onClick={() => cambiarImagenGrande('/autos/ao1-3.jpg', 'Nisan Versa 2021 parte trasera')} />
                        <img src='/autos/ao1-4.jpg' alt='Nisan Versa 2021 lado izquierdo' onClick={() => cambiarImagenGrande('/autos/ao1-4.jpg', 'Nisan Versa 2021 lado izquierdo')} />
                        <img src='/autos/ao1-5.jpg' alt='Nisan Versa 2021 interior parte delantera' onClick={() => cambiarImagenGrande('/autos/ao1-5.jpg', 'Nisan Versa 2021 interior parte delantera')} />
                   </div>

                   <div className="priceContainer">
                        <div className="priceLabel">
                            Precio:
                        </div>
                        <div className="priceValue">
                            ¢10,100,000 - $19,536
                        </div>
                    </div>

                   <div className='row iconsRow'>
                        <div className="iconWithText" onClick={cambiarImagenFavoritos}>
                            <img src={favoriteImage} alt="Botón añadir a favoritos" />
                            <p>Favoritos</p>
                        </div>
                        <div className="iconWithText" onClick={reportarClick}>
                            <img src="/iconos/reportar.png" alt="Botón para reportar el auto" />
                            <p>Reportar</p>
                        </div>
                        <AskForm
                            message="Por favor describa brevemente el motivo y oprima el botón de ENVIAR."
                            show={ask}
                            close={() => setAsk(false)}
                            type="REPORTE EL AUTO"
                        />
                        <div className="iconWithText" onClick={descargarClick}>
                            <img src="/iconos/descargar.png" alt="Botón para descargar la información del auto" />
                            <p>Descargar</p>
                        </div>
                        <InfoHandler
                            message="¡Descarga exiosa!."
                            show={warning}
                            close={() => setWarning(false)}
                            type="FELICIDADES"
                        />
                   </div>
                </div>
                
                <div className='rigthSide'>
                    <div className='row infoRow'>
                        <div className='titles'>
                            <h3>Información del vendedor</h3>
                        </div>
                        <div className='infoText'>
                            <p>
                                <strong>Nombre: </strong>Alejandro Mora
                                <br/>
                                <strong>Teléfonos: </strong>5896-69412, 1598-3654
                            </p>
                        </div>
                        <div className='socialIcons'>
                            <strong style={{fontSize: '18px' }}>Redes Sociales: </strong>
                            <Link href="https://www.facebook.com" target="_blank" color="inherit" style={{ margin: '0 10px' }} >
                                <FacebookIcon style={{ color: '#1877F2', fontSize: '35px' }} /> 
                            </Link>
                            <Link href="https://wa.me/85460107" target="_blank" color="inherit" style={{ margin: '0 10px' }} >
                                <WhatsAppIcon style={{ color: '#25D366', fontSize: '35px' }} />
                            </Link>
                        </div>
                   </div>

                   <div style={{padding: '20px'}}></div>

                    <div className='row infoRow'>
                        <div className='titles'>
                            <h3>Información general</h3>
                        </div>
                        <div className='infoText'>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <tbody>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Cilindrada</th>
                                        <td className='infoValue'>1, 600 cc</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Estilo</th>
                                        <td className='infoValue'>Sedán</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Pasajeros</th>
                                        <td className='infoValue'>5</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Combustible</th>
                                        <td className='infoValue'>Gasolina</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Transmisión</th>
                                        <td className='infoValue'>Automática/ Dual</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Estado</th>
                                        <td className='infoValue'>Excelente</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Kilometraje</th>
                                        <td className='infoValue'>28,300 kms</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Placa</th>
                                        <td className='infoValue'>Termina en 3</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Color exterior</th>
                                        <td className='infoValue'>Rojo</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Color interior</th>
                                        <td className='infoValue'>Negro</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Puertas</th>
                                        <td className='infoValue'>5</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Precio Negociable</th>
                                        <td className='infoValue'>Si</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Recibe vehiculo</th>
                                        <td className='infoValue'>No</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Provincia</th>
                                        <td className='infoValue'>San José</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>
                                            Costo de Traspaso (aprox.)
                                            <br/> 
                                            <th style={{fontSize: '14px', color: 'gray'}}>
                                                *Monto puede variar. 
                                                <br />
                                                *No incluye honorarios del abogado.
                                            </th>
                                        </th>
                                        <td className='infoValue'>¢ 340, 445</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Fecha de ingreso</th>
                                        <td className='infoValue'>28/09/24</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style={{padding: '25px'}}></div>

                    <div className='row infoRow'>
                        <div className='titles'>
                            <h3>Equipamiento</h3>
                        </div>
                        <div className='equipamientoContainer'>
                            <td className='infoLabel-v2'>Cierre central</td>
                            <td className='infoLabel-v2'>Vidrios tintados</td>
                            <td className='infoLabel-v2'>Vidrios eléctricos</td>
                            <td className='infoLabel-v2'>Bolsa de aire</td>
                            <td className='infoLabel-v2'>Alarma</td>
                            <td className='infoLabel-v2'>Espejos eléctricos</td>
                            <td className='infoLabel-v2'>Frenos</td>
                            <td className='infoLabel-v2'>ABS</td>
                            <td className='infoLabel-v2'>Aire acondicionado</td>
                            <td className='infoLabel-v2'>Desempañador Trasero</td>
                            <td className='infoLabel-v2'>Aros de lujo</td>
                            <td className='infoLabel-v2'>Halógenos</td>
                            <td className='infoLabel-v2'>Control crucero</td>
                            <td className='infoLabel-v2'>Radio con USB/ AUX</td>
                            <td className='infoLabel-v2'>Caja de cambios dual</td>
                            <td className='infoLabel-v2'>Cámara de retroceso</td>
                            <td className='infoLabel-v2'>Sensores de retroceso</td>
                            <td className='infoLabel-v2'>Control de radio al volante</td>
                            <td className='infoLabel-v2'>Volante multifuncional</td>
                            <td className='infoLabel-v2'>Llave inteligente /Botón de arranque</td>
                            <td className='infoLabel-v2'>Computadora de viaje</td>
                            <td className='infoLabel-v2'>Volante ajustable</td>
                            <td className='infoLabel-v2'>Bluetooth</td> 
                        </div>
                    </div>

                    <div style={{padding: '25px'}}></div>

                    <div className='row infoRow'>
                        <div className='titles'>
                            <h3>Financiamiento</h3>
                        </div>
                        <div className='infoText'>
                            <p>
                                Para solicitar la pre-aprobación presione los iconos.
                                <br />
                                Sus opciones de financiamiento son las siguientes:
                            </p>
                        </div>

                        <div className='iconWithText'>
                            <img src='/iconos/bac.png' alt='Icono del BAC Credomatic' />
                            <p>BAC Credomatic</p>
                        </div>
                        <div className='infoText'>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <tbody>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Precio del vehículo:</th>
                                        <td className='infoValue'>$ 19, 536</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Prima mínima:</th>
                                        <td className='infoValue'>$ 4, 884</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>
                                            <th style={{fontSize: '14px', color: 'gray'}}>
                                                Financiamiento:
                                            </th>
                                            Base de financiamiento: 
                                        </th>
                                        <td className='infoValue'>
                                            <br />
                                            $ 15, 128
                                            <td style={{fontSize: '14px', color: 'gray', textAlign: 'right'}}>
                                                Más comisión de formalización del 3.25%
                                            </td>
                                        </td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>
                                        <th style={{fontSize: '14px', color: 'gray'}}>
                                            Plazo Disponible:
                                        </th>
                                            96 meses
                                        </th>
                                        <td className='infoValue'>$ 207</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{padding: '25px'}}></div>

                        <div className='iconWithText'>
                            <img src='/iconos/credi.png' alt='Icono de CrediQ' />
                            <p>CrediQ</p>
                        </div>
                        <div className='infoText'>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <tbody>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Precio del vehículo:</th>
                                        <td className='infoValue'>$ 19, 536</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>Prima mínima:</th>
                                        <td className='infoValue'>$ 2, 931</td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>
                                            <th style={{fontSize: '14px', color: 'gray'}}>
                                                Financiamiento:
                                            </th>
                                            Base de financiamiento: 
                                        </th>
                                        <td className='infoValue'>
                                            <br />
                                            $ 17, 402
                                            <td style={{fontSize: '14px', color: 'gray', textAlign: 'right'}}>
                                                Más comisión de formalización del 4.80%
                                            </td>
                                        </td>
                                    </tr>
                                    <tr className='infoSpace'>
                                        <th className='infoLabel'>
                                        <th style={{fontSize: '14px', color: 'gray'}}>
                                            Plazo Disponible:
                                        </th>
                                            96 meses
                                        </th>
                                        <td className='infoValue'>$ 273</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{padding: '25px'}}></div>

                        

                    </div>
                
                </div>
            </div>

            <div style={{padding: '20px'}}></div>

            <h3 className='text'>{isSmallScreen ? 'AUTOS SIMILARES' : '⎯⎯⎯⎯⎯ AUTOS SIMILARES ⎯⎯⎯⎯⎯'}</h3>
            <div className='sContainer'>
                <div className='similaresContainer'>
                    {/*Auto 1 */}
                    <div className='auto'>
                        <div className='titleContainerAuto'>
                            <h1 className='autoTitle'>Suzuki</h1>
                        </div>
                        <img src='/autos/au1.jpg' alt='Suzuki Grand Vitara 2015' className='autoImage'/>
                        <div className='autoInfo'>
                            <p><strong>Grand Vitara 2015</strong></p>
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
                            <p>
                                <strong style={{color: '#177001'}}>₡ 9, 975, 000</strong>
                                <br/>
                                <strong style={{color: '#aa0000'}}>$ 19, 294*</strong>
                            </p>
                            <button type="button" className="btnVerMas">Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttonContainer'>
                <button type="button" className="verMasbtn">Ver más</button>
            </div>
        </div>
        <BarraInferior/>
    </div>
  );
};

export default VerAuto;
