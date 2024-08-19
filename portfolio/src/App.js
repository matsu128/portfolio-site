import React from 'react';
import Header from './app/Header';
import HeroSection from './app/HeroSection';
import ProjectList from './app/ProjectList/ProjectList';
import ContactForm from './app/ContactForm';
import Footer from './app/Footer';
import Skills from './app/Skills';

const App = () => {
  return (
    <div className="app bg-white">
      <Header />
      <HeroSection />
      <Skills />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
