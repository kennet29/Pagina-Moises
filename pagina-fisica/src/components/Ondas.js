import React from "react";
import "./styles.css";

const Ondas = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Ondas</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Frecuencia:</strong> Número de oscilaciones por segundo.</li>
      <li><strong>Longitud de onda:</strong> Distancia entre dos crestas o valles consecutivos.</li>
      <li><strong>Velocidad de propagación:</strong> Qué tan rápido se mueve la onda.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Velocidad de onda: \( v = \lambda f \)</li>
    </ul>
  </div>
);

export default Ondas;
