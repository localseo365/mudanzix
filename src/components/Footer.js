import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h4>Encuéntranos en:</h4>
        <p>Carrer de Septimània, 42-54, Sarrià-Sant Gervasi, 08006 Barcelona</p>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.163078013512!2d2.137865915419017!3d41.40220337926251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49869a92d39a9%3A0xc32db87e10b36555!2sCarrer%20de%20Septim%C3%A0nia%2C%2042-54%2C%2008006%20Barcelona!5e0!3m2!1ses!2ses!4v1691572807000!5m2!1ses!2ses"
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
