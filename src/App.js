import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
