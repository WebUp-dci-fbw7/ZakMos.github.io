import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

import About from './views/about/About';
import Experience from './views/experience/Experience';
import Services from './views/services/Services';
import Portfolio from './views/portfolio/Portfolio';
import Contact from './views/contact/contact';

const App= () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
