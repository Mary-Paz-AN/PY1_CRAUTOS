import "./Handler.css";

function InfoHandler({ message, show, close, type }) {
  if (!show) return null;

  //Shows a box with  information
  return (
    <div className= "hideEstilo">
      <div className= "showEstilo">
        <h2>{type}</h2>
        <p style={{color: 'black'}}>{message}</p>
        <button onClick={close} className="btnHandler">Cerrar</button>
      </div>
    </div>
  );
}

export default InfoHandler;