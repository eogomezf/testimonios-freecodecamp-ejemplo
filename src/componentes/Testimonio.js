import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../imagenes/testimonio-emma.png")} alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostianete en Suecia city</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Me encanta la forma en que los desarrollo por eso estoy desarrollando.</p>
      </div>
    </div>
  );
} 