import React from 'react';
import '../css/header.css'; 
import ImagenF from './ImagenF.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <div className="banner">
        <img src={ImagenF} alt='Banner Física' className="banner-image" />
        
        {/* Contenido encima del banner */}
        <div className="banner-overlay">
          <div className="titulo">
            <h1>Ejercicios de Física</h1>
            <p>Explora y resuelve problemas de física para mejorar tus habilidades.</p>
          </div>
          
          <nav className="tema-menu">
          <Link to="/cinematica">Cinemática</Link>
            <Link to="/dinamica">Dinámica</Link> {/* Esto necesita un componente más adelante */}
            <Link to="/leyes-newton">Leyes de Newton</Link> {/* Aún no definido, pero enlace listo */}
            <Link to="/energia">Energía</Link>
            <Link to="/trabajopotencia">Trabajo y Potencia</Link>
            <Link to="/ondas">Ondas</Link>
            <Link to="/optica">Óptica</Link>
            <Link to="/electricidad">Electricidad</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
