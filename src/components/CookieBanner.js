import React, { useState } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
    // Aquí puedes agregar la lógica para almacenar la aceptación de cookies en localStorage o cookies del navegador.
  };

  return (
    showBanner && (
      <div className="cookie-banner">
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestro uso de cookies.
          <a href="/politica-de-cookies" target="_blank" rel="noopener noreferrer"> Leer más</a>.
        </p>
        <button onClick={handleAccept}>Aceptar</button>
      </div>
    )
  );
}

export default CookieBanner;
