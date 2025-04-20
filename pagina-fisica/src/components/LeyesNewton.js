import React from "react";
import "./styles.css";

const LeyesNewton = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Leyes de Newton</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Primera Ley:</strong> Un objeto en reposo o en movimiento rectilíneo uniforme permanecerá así a menos que una fuerza externa actúe sobre él.</li>
      <li><strong>Segunda Ley:</strong> La aceleración de un objeto es proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa.</li>
      <li><strong>Tercera Ley:</strong> A toda acción corresponde una reacción de igual magnitud y sentido opuesto.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>( F = m a )</li>
    </ul>
  </div>
);

export default LeyesNewton;
