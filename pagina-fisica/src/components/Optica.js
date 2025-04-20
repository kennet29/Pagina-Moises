import React from "react";
import "./styles.css";

const Optica = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Óptica</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Reflexión:</strong> Rebote de la luz al incidir sobre una superficie.</li>
      <li><strong>Refracción:</strong> Cambio de dirección de la luz al pasar de un medio a otro.</li>
      <li><strong>Índice de refracción:</strong> Relación entre la velocidad de la luz en el vacío y en un medio.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Ley de Snell: \( n_1 \sin(\theta_1) = n_2 \sin(\theta_2) \)</li>
      <li>Índice de refracción: \( n = \frac cv \)</li>
    </ul>
  </div>
);

export default Optica;
