import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Nosotros</h2>
      <p>
        En <strong>MUDANZIX</strong>, somos una empresa de mudanzas líder en Barcelona, comprometida con ofrecer un servicio de mudanza rápido, seguro y accesible. Con años de experiencia en el sector, entendemos que cada mudanza es única y, por ello, proporcionamos soluciones personalizadas que se adaptan a tus necesidades específicas.
      </p>
      <p>
        Nuestro equipo de profesionales altamente capacitados cuida cada detalle de tu mudanza, desde el embalaje de objetos frágiles hasta el transporte y la colocación en tu nuevo hogar. Usamos materiales de embalaje de la más alta calidad para garantizar la protección de tus pertenencias durante todo el proceso.
      </p>
      <img
        src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Equipo de mudanzas en acción"
        className="about-image"
      />
      <p>
        Elegir <strong>MUDANZIX</strong> significa contar con un servicio integral que abarca:
      </p>
      <ul>
        <li>Transporte seguro y eficiente dentro de toda la región de Barcelona.</li>
        <li>Embalaje profesional que protege tus objetos más valiosos.</li>
        <li>Desmontaje y montaje de muebles realizado por expertos.</li>
        <li>Un servicio de atención al cliente disponible 24/7 para resolver tus dudas y coordinar detalles.</li>
      </ul>
      <p>
        Contacta con nosotros hoy mismo para recibir un presupuesto sin compromiso y descubre por qué somos la opción preferida para mudanzas en Barcelona. En <strong>MUDANZIX</strong>, tu satisfacción es nuestra prioridad.
      </p>
    </section>
  );
}

export default About;
