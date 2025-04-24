
import React from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/bootstrap.css'

import Header from './components/header'
import Footer from './components/footer';
import Approuter from './routers/approuter'
import ScrollToTop from './components/scrolltotop';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <Approuter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
