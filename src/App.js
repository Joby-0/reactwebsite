import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/header'
import Footer from './components/footer';
import Signinmodal from './components/signinmodal';
import Approuter from './routers/approuter'

import Index from './pages';
import Itempage from './pages/itempage';
import Categoriespage from './pages/categoriespage';

import Data from './services/data';


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
