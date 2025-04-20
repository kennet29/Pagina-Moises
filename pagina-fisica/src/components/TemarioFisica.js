import React from 'react';
import './TemarioFisica.css';

const TemarioFisica = () => {
  return (
    <div className="temario-container">
      <h1>Temario de Física Secundaria</h1>

     
      <section id="cinematica" className="tema">
        <h2>1. Cinemática</h2>
        <p><strong>Concepto:</strong> La cinemática estudia el movimiento de los cuerpos sin considerar las causas que lo producen. Se enfoca en variables como posición, velocidad y aceleración.</p>
        <p><strong>Fórmulas:</strong></p>
        <ul>
          <li>Velocidad media: <code>v = d / t</code></li>
          <li>MRU: <code>x = x₀ + vt</code></li>
          <li>MUA: <code>v = v₀ + at</code>, <code>x = x₀ + v₀t + ½at²</code>, <code>v² = v₀² + 2a(x - x₀)</code></li>
        </ul>
        <p><strong>Ejercicio:</strong> Un coche parte del reposo y acelera a 3 m/s². ¿Qué distancia recorre en 4 segundos?</p>
        <p><strong>Solución:</strong> x = ½at² = ½·3·(4²) = 24 m</p>
      </section>

      {/* 2. Dinámica */}
      <section id="dinamica" className="tema">
        <h2>2. Dinámica</h2>
        <p><strong>Concepto:</strong> La dinámica estudia el movimiento considerando las fuerzas que lo causan. Se basa en las leyes de Newton.</p>
        <p><strong>Fórmulas:</strong></p>
        <ul>
          <li>Fuerza: <code>F = ma</code></li>
          <li>Peso: <code>W = mg</code></li>
        </ul>
        <p><strong>Ejercicio:</strong> ¿Qué fuerza neta se necesita para acelerar una caja de 12 kg a 2.5 m/s²?</p>
        <p><strong>Solución:</strong> F = ma = 12 × 2.5 = 30 N</p>
      </section>

      {/* 3. Leyes de Newton */}
      <section id="leyes-newton" className="tema">
        <h2>3. Leyes de Newton</h2>
        <p><strong>Concepto:</strong> Son tres principios fundamentales que explican el movimiento de los objetos.</p>
        <ul>
          <li>1ª Ley – Inercia</li>
          <li>2ª Ley – F = ma</li>
          <li>3ª Ley – Acción y reacción</li>
        </ul>
        <p><strong>Ejercicio:</strong> Un patinador empuja a otro de igual masa. ¿Qué ocurre?</p>
        <p><strong>Solución:</strong> Ambos se separan con igual aceleración en sentidos contrarios (3ª ley: acción-reacción).</p>
      </section>

      {/* 4. Energía */}
      <section id="energia" className="tema">
        <h2>4. Energía</h2>
        <p><strong>Concepto:</strong> La energía es la capacidad de realizar trabajo. Se clasifica en cinética, potencial y mecánica.</p>
        <p><strong>Fórmulas:</strong></p>
        <ul>
          <li>Energía cinética: <code>Ec = ½mv²</code></li>
          <li>Energía potencial: <code>Ep = mgh</code></li>
          <li>Energía mecánica: <code>Em = Ec + Ep</code></li>
        </ul>
        <p><strong>Ejercicio:</strong> Un objeto de 3 kg cae desde 6 m. ¿Cuál es su energía potencial inicial?</p>
        <p><strong>Solución:</strong> Ep = 3 × 9.8 × 6 = 176.4 J</p>
      </section>
    </div>
  );
};

export default TemarioFisica;
