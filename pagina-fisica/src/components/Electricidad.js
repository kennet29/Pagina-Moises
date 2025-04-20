import React from "react";
import "./styles.css";

const Electricidad = () => (
  <div className="vista-contenedor">
    <h1 className="vista-titulo">Electricidad</h1>
    <h2 className="vista-subtitulo">Conceptos Básicos</h2>
    <ul className="vista-lista">
      <li><strong>Carga eléctrica:</strong> Propiedad de la materia responsable de los fenómenos eléctricos.</li>
      <li><strong>Corriente eléctrica:</strong> Flujo de carga por unidad de tiempo.</li>
      <li><strong>Voltaje:</strong> Diferencia de potencial eléctrico entre dos puntos.</li>
      <li><strong>Resistencia:</strong> Oposición al flujo de corriente.</li>
    </ul>
    <h2 className="vista-subtitulo">Fórmulas</h2>
    <ul className="vista-lista">
      <li>Ley de Ohm: \( V = IR \)</li>
      <li>Potencia eléctrica: \( P = IV \)</li>
    </ul>
  </div>
);

export default Electricidad;
