import React from "react";
import "./styles.css";

const Dinamica = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Dinámica</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Fuerza:</strong> Interacción que cambia el estado de movimiento de un objeto.</li>
      <li><strong>Masa:</strong> Cantidad de materia de un objeto.</li>
      <li><strong>Inercia:</strong> Resistencia de un objeto a cambiar su estado de movimiento.</li>
      <li><strong>Aceleración:</strong> Resultado de una fuerza aplicada a un objeto con masa.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Segunda Ley de Newton: \( F = ma \)</li>
      <li>Peso: \( W = mg \)</li>
      <li>Fricción: \( F_f = \mu N \)</li>
    </ul>
  </div>
);

export default Dinamica;
