import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34690220944"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;
