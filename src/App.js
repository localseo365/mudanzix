import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
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
      <Contact />
      <CookieBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
