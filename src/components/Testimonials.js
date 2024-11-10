import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Laura Martínez',
      feedback: 'El servicio de MUDANZIX fue excelente. La mudanza fue rápida y todo llegó en perfectas condiciones.',
      image: 'https://plus.unsplash.com/premium_photo-1726862505718-00c1a17b3c9e?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Puedes reemplazar con una URL de imagen real
    },
    {
      name: 'Pedro López',
      feedback: 'Gran experiencia. El equipo fue muy profesional y se encargaron de todo sin ningún problema.',
      image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Puedes reemplazar con una URL de imagen real
    },
    {
      name: 'Ana Gómez',
      feedback: 'Muy contenta con el servicio. El embalaje y la protección de mis muebles fueron impecables.',
      image: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Puedes reemplazar con una URL de imagen real
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>Testimonios de Clientes Satisfechos</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
