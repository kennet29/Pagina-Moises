import React from "react";
import "./styles.css";

const Energia = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Energía</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Energía cinética:</strong> Energía asociada al movimiento.</li>
      <li><strong>Energía potencial:</strong> Energía almacenada por la posición o configuración.</li>
      <li><strong>Energía mecánica:</strong> Suma de la energía cinética y potencial.</li>
      <li><strong>Conservación de la energía:</strong> La energía no se crea ni se destruye, solo se transforma.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Energía cinética: \( E_k = \frac{1}{2} mv^2 \)</li>
      <li>Energía potencial: \( E_p = mgh \)</li>
      <li>Energía mecánica: \( E_m = E_k + E_p \)</li>
    </ul>
  </div>
);

export default Energia;
