import React from 'react';
import './autoNuevoStyle.css';
import FiltroAutosNuevos from './filtroAutoNuevo';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

// Componente funcional de React para mostrar autos nuevos
const AutosNuevos = () => {


  return (
    <div className='scrollConteiner'>
      <BarraSuperior/>
      <div className='mainContainer'>
        <div className='titleContainer'>
          <h1>Autos Nuevos</h1>
        </div>
        <h2>
          Descubre información detallada, opciones de financiamiento y características de las principales marcas de autos nuevos.
          Explora diferentes modelos y elige el que mejor se adapte a tus expectativas.
        </h2>

        <div className='contentContainer'>
          <FiltroAutosNuevos />

          <div className='marcaLogoContainer'>
            <h3 className='title'>Marcas</h3>
            <div className='logoContainer'>
              {/*AION */}
              <div className='logo'>
                <img src='/logosMarcas/aion.png' alt='Logo de AION' className='logoImagen'/>
                <h3 className='logoTitle'>AION</h3>
              </div>
              {/*Audi */}
              <div className='logo'>
                <img src='/logosMarcas/audi.png' alt='Logo de Audi' className='logoImagen'/>
                <h3 className='logoTitle'>Audi</h3>
              </div>
              {/*BMW */}
              <div className='logo'>
                <img src='/logosMarcas/bmw.png' alt='Logo de BMW' className='logoImagen'/>
                <h3 className='logoTitle'>BMW</h3>
              </div>
              {/*BYD */}
              <div className='logo'>
                <img src='/logosMarcas/btd.png' alt='Logo de BYD' className='logoImagen'/>
                <h3 className='logoTitle'>BYD</h3>
              </div>
              {/*Changan */}
              <div className='logo'>
                <img src='/logosMarcas/changan.png' alt='Logo de Changan' className='logoImagen'/>
                <h3 className='logoTitle'>Changan</h3>
              </div>
              {/*Chery */}
              <div className='logo'>
                <img src='/logosMarcas/chery.png' alt='Logo de Chery' className='logoImagen'/>
                <h3 className='logoTitle'>Chery</h3>
              </div>
              {/*Chevrolet */}
              <div className='logo'>
                <img src='/logosMarcas/chevrolet.png' alt='Logo de Chevrolet' className='logoImagen'/>
                <h3 className='logoTitle'>Chevrolet</h3>
              </div>
              {/*Citroën  */}
              <div className='logo'>
                <img src='/logosMarcas/citroen.png' alt='Logo de Citroën ' className='logoImagen'/>
                <h3 className='logoTitle'>Citroën </h3>
              </div>
              {/*Dodge */}
              <div className='logo'>
                <img src='/logosMarcas/dodge.png' alt='Logo de Dodge' className='logoImagen'/>
                <h3 className='logoTitle'>Dodge</h3>
              </div>
              {/*Fiat */}
              <div className='logo'>
                <img src='/logosMarcas/fiat.png' alt='Logo de Fiat' className='logoImagen'/>
                <h3 className='logoTitle'>Fiat</h3>
              </div>
              {/*Ford */}
              <div className='logo'>
                <img src='/logosMarcas/ford.png' alt='Logo de Ford' className='logoImagen'/>
                <h3 className='logoTitle'>Ford</h3>
              </div>
              {/*Fuso */}
              <div className='logo'>
                <img src='/logosMarcas/fuso.png' alt='Logo de Fuso' className='logoImagen'/>
                <h3 className='logoTitle'>Fuso</h3>
              </div>
              {/*Geely */}
              <div className='logo'>
                <img src='/logosMarcas/geely.png' alt='Logo de Geely' className='logoImagen'/>
                <h3 className='logoTitle'>Geely</h3>
              </div>
              {/*Hino */}
              <div className='logo'>
                <img src='/logosMarcas/hino.png' alt='Logo de Hino' className='logoImagen'/>
                <h3 className='logoTitle'>Hino</h3>
              </div>
              {/*Honda */}
              <div className='logo'>
                <img src='/logosMarcas/honda.png' alt='Logo de Honda' className='logoImagen'/>
                <h3 className='logoTitle'>Honda</h3>
              </div>
              {/*Hyundai */}
              <div className='logo'>
                <img src='/logosMarcas/hyundai.png' alt='Logo de Hyundai' className='logoImagen'/>
                <h3 className='logoTitle'>Hyundai</h3>
              </div>
              {/*JAC */}
              <div className='logo'>
                <img src='/logosMarcas/jac.png' alt='Logo de JAC' className='logoImagen'/>
                <h3 className='logoTitle'>JAC</h3>
              </div>
              {/*Jaguar */}
              <div className='logo'>
                <img src='/logosMarcas/jaguar.png' alt='Logo de Jaguar' className='logoImagen'/>
                <h3 className='logoTitle'>Jaguar</h3>
              </div>
              {/*Jeep */}
              <div className='logo'>
                <img src='/logosMarcas/jeep.png' alt='Logo de Jeep' className='logoImagen'/>
                <h3 className='logoTitle'>Jeep</h3>
              </div>
              {/*JMC */}
              <div className='logo'>
                <img src='/logosMarcas/jmc.png' alt='Logo de JMC' className='logoImagen'/>
                <h3 className='logoTitle'>JMC</h3>
              </div>
              {/*Kia */}
              <div className='logo'>
                <img src='/logosMarcas/kia.png' alt='Logo de Kia' className='logoImagen'/>
                <h3 className='logoTitle'>Kia</h3>
              </div>
              {/*Land Rover */}
              <div className='logo'>
                <img src='/logosMarcas/landRover.png' alt='Logo de Land Rover' className='logoImagen'/>
                <h3 className='logoTitle'>Land Rover</h3>
              </div>
              {/*Mazda */}
              <div className='logo'>
                <img src='/logosMarcas/mazda.png' alt='Logo de Mazda' className='logoImagen'/>
                <h3 className='logoTitle'>Mazda</h3>
              </div>
              {/*Mercedes Benz */}
              <div className='logo'>
                <img src='/logosMarcas/mercedesBenz.png' alt='Logo de Mercedes Benz' className='logoImagen'/>
                <h3 className='logoTitle'>Mercedes Benz</h3>
              </div>
              {/*MG */}
              <div className='logo'>
                <img src='/logosMarcas/mg.png' alt='Logo de MG' className='logoImagen'/>
                <h3 className='logoTitle'>MG</h3>
              </div>
              {/*Mitsubishi */}
              <div className='logo'>
                <img src='/logosMarcas/mitsubishi.png' alt='Logo de Mitsubishi' className='logoImagen'/>
                <h3 className='logoTitle'>Mitsubishi</h3>
              </div>
              {/*Nissan */}
              <div className='logo'>
                <img src='/logosMarcas/nissan.png' alt='Logo de Nissan' className='logoImagen'/>
                <h3 className='logoTitle'>Nissan</h3>
              </div>
              {/*Peugeot */}
              <div className='logo'>
                <img src='/logosMarcas/peugeot.png' alt='Logo de Peugeot' className='logoImagen'/>
                <h3 className='logoTitle'>Peugeot</h3>
              </div>
              {/*Porsche */}
              <div className='logo'>
                <img src='/logosMarcas/porsche.png' alt='Logo de Porsche' className='logoImagen'/>
                <h3 className='logoTitle'>Porsche</h3>
              </div>
              {/*RAM */}
              <div className='logo'>
                <img src='/logosMarcas/ram.png' alt='Logo de RAM' className='logoImagen'/>
                <h3 className='logoTitle'>RAM</h3>
              </div>
              {/*Renault */}
              <div className='logo'>
                <img src='/logosMarcas/renault.png' alt='Logo de Renault' className='logoImagen'/>
                <h3 className='logoTitle'>Renault</h3>
              </div>
              {/*Ssang Yong */}
              <div className='logo'>
                <img src='/logosMarcas/ssangYong.png' alt='Logo de Ssang Yong' className='logoImagen'/>
                <h3 className='logoTitle'>Ssang Yong</h3>
              </div>
              {/*Suzuki */}
              <div className='logo'>
                <img src='/logosMarcas/suzuki.png' alt='Logo de Suzuki' className='logoImagen'/>
                <h3 className='logoTitle'>Suzuki</h3>
              </div>
              {/*VGV */}
              <div className='logo'>
                <img src='/logosMarcas/vgv.png' alt='Logo de VGV' className='logoImagen'/>
                <h3 className='logoTitle'>VGV</h3>
              </div>
              {/*Volkswagen */}
              <div className='logo'>
                <img src='/logosMarcas/volkswagen.png' alt='Logo de VolkswagenV' className='logoImagen'/>
                <h3 className='logoTitle'>Volkswagen</h3>
              </div>
              {/*Volvo */}
              <div className='logo'>
                <img src='/logosMarcas/volvo.png' alt='Logo de Volvo' className='logoImagen'/>
                <h3 className='logoTitle'>VolvoV</h3>
              </div>
              {/*ZNA */}
              <div className='logo'>
                <img src='/logosMarcas/zna.png' alt='Logo de ZNA (DongFeng)' className='logoImagen'/>
                <h3 className='logoTitle'>ZNA (DongFeng)</h3>
              </div>

            </div>
          </div>

        </div>
      </div>
      <BarraInferior/>
    </div>
  );
};

export default AutosNuevos;
