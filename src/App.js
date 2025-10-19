
import React from 'react';
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

import { ServiceProvider } from './services/ServiceContext';
import { CategoriesProvider } from './services/CategoriesContext';


function App() {

  return (
    <>
      <CategoriesProvider>
        {/* <ServiceProvider> */}
        <BrowserRouter>
          <ScrollToTop />

          <Header />

          <Approuter />
          <Footer />
        </BrowserRouter>
        {/* </ServiceProvider> */}
      </CategoriesProvider>
    </>
  );
}

export default App;
