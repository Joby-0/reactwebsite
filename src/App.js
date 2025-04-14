import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Index from './pages';
import Header from './components/header'
import Footer from './components/footer';
import Signinmodal from './components/signinmodal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const switchmode = (e) => {
    setDarkMode(e)
  }
  const [show, setShow] = useState(false);

  const handleModal = (value) => {
    setShow(value);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
  }, [darkMode], [show]);
  return (
    <>
      <Header switchmode={switchmode} handleModal={handleModal} />
      <Index />
      <Signinmodal handleModal={handleModal} show={show} />
      <Footer />
    </>
  );
}

export default App;
