import { useNavigate } from 'react-router-dom';
import './Autos.css';
import BarraSuperior from './BarraSuperior';
import BarraInferior from './BarraInferior';

const Bluebook = () => {
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
                    <h1 className='h1Style'>Libro Azul</h1>
                </div> 
                <h2 className='h2Style'>
                    Aqui ponga como es que funciona el bluebook. 
                </h2>

                <div className='contentContainer'>
                    <div> 
                        Este container es usado para dividir en dos columnas la pantalla. Por si lo llegara a ocupar
                         Tambien ya esta para ajustarlo cuando se cambia a pantalla pequeña.
                    </div>
                </div>

            </div>
            <BarraInferior/>
        </div>
    );
};

export default Bluebook;
