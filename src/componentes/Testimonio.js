import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../imagenes/testimonio-emma.png")} alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostianete en Suecia city</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Me encanta la forma en que los desarrollo por eso estoy desarrollando. Las clases son muy dinamicas y si he logrado aprender y poner en practica en la empresa. Estudiar los curso de freeTech me ha dado muchas habilidades y la confianza para obtener el trabajo de mis sueños. </p>
      </div>
    </div>
  );
} 

export default Testimonio;