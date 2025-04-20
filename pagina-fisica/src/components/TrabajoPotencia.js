import React from "react";
import "./styles.css";

const TrabajoPotencia = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Trabajo y Potencia</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Trabajo:</strong> Transferencia de energía mediante una fuerza que causa desplazamiento.</li>
      <li><strong>Potencia:</strong> Rapidez con la que se realiza un trabajo.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Trabajo: \( W = F \cdot d \cdot \cos(\theta) \)</li>
      <li>Potencia: \( P = \frac Wt \)</li>
    </ul>
  </div>
);

export default TrabajoPotencia;
