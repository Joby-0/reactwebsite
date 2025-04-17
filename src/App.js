
import React from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/header'
import Footer from './components/footer';
import Approuter from './routers/approuter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Approuter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
