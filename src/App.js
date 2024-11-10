import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials'; // Importa el componente de testimonios
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Testimonials /> {/* Añade la sección de testimonios */}
      <Contact />
      <CookieBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
