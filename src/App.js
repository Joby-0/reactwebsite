
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/bootstrap.css'

import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/header'
import Footer from './components/footer';
import Approuter from './routers/approuter'
import ScrollToTop from './components/scrolltotop';


import { useUI } from "./Context/UiContext";
import Signinmodal from './components/signinmodal';
import Signupmodal from './components/signupmodeal';

function App() {
  const { showSignIn, showSignUp, closeAll } = useUI();
  return (
    <>

      {/* <ServiceProvider> */}
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Signinmodal show={showSignIn} handleModal={closeAll} />
        <Signupmodal show={showSignUp} handleModal={closeAll} />

        <Approuter />
        <Footer />
      </BrowserRouter>
      {/* </ServiceProvider> */}

    </>
  );
}

export default App;
