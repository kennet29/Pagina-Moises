import React from "react";
import "./styles.css";

const Cinematica = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Cinemática</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Desplazamiento:</strong> Cambio de posición de un objeto en el espacio.</li>
      <li><strong>Velocidad:</strong> Tasa de cambio del desplazamiento con respecto al tiempo.</li>
      <li><strong>Aceleración:</strong> Tasa de cambio de la velocidad con respecto al tiempo.</li>
      <li><strong>MRU:</strong> Movimiento con velocidad constante.</li>
      <li><strong>MRUA:</strong> Movimiento con aceleración constante.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Velocidad media: \( v = \frac dt \)</li>
      <li>Velocidad final (MRUA): \( v = v_0 + at \)</li>
      <li>Posición (MRUA): \( d = v_0 t + \frac{1}{2} a t^2 \)</li>
      <li>Velocidad-cuadrado: \( v^2 = v_0^2 + 2ad \)</li>
    </ul>
  </div>
);

export default Cinematica;
