import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">

      <div className="footer-left">
        <h3>Milagros <span style={{ fontStyle: 'italic' }}> Sarai </span></h3>
        <br />
        <p className="footer-company-name">
          © 2024 <strong></strong>
          <br/>Todos los derechos reservados.
        </p>
      </div>

      {/* Sección central con íconos */}
      <div className="footer-center">
        <div>
          <FaMapMarkerAlt className="icon-central" />
          <p><span>Dirección:</span> Diriamba, Carazo</p>
        </div>

        <div>
          <FaPhoneAlt className="icon-central" />
          <p><span>Teléfono:</span> +505 8888 8888</p>
        </div>

        <div>
          <FaEnvelope className="icon-central" />
          <p>
            <span>Correo:</span>{' '}
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </p>
        </div>
      </div>


      <div className="footer-right">
        <p className="footer-company-about">
          <span>Acerca de Nosotros</span>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
