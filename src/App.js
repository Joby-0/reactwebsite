import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/header'
import Footer from './components/footer';
import Signinmodal from './components/signinmodal';

import Index from './pages';
import Itempage from './pages/itempage';
import Categoriespage from './pages/categoriespage';



function App() {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    const stored = localStorage.getItem('darkMode');
    return stored === 'true'; // convert string to boolean
  });
  const switchmode = (e) => {
    setDarkMode(e)
  }
  

  const handleModal = (value) => {
    setShow(value);
  };
  const products = [
    {
      id: 1,
      category: 'Phones',
      name: 'iPhone 16 Pro Max, 256GB',
      image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
      thumbnails: [
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
        'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
      ],
      rating: 542,
      price: '16090 sek',
      url: '/categorys/product.html',
      pricelist: [
        {
          company: 'Elgiganten',
          productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
          price: '16090 kr',
          storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
        },
        {
          company: 'Dustin Home',
          productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
          price: '17490 kr',
          storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
        },
        {
          company: 'Company name/logo',
          productUrl: '#',
          productName: 'Länk till produkt med namn på produkt',
          price: null,
          storeUrl: '#',
        }
      ]
    },
    {
      id: 2,
      category: 'Phones',
      name: 'Samsung Galaxy S23 Ultra',
      image: 'https://example.com/product2.jpg',
      rating: 350,
      price: '12990 sek',
      url: '/categorys/product2.html'
    },
    {
      id: 3,
      category: 'Phones',
      name: 'OnePlus 11 Pro',
      image: 'https://example.com/product3.jpg',
      rating: 300,
      price: '11990 sek',
      url: '/categorys/product3.html'
    },
    {
      id: 4,
      category: 'Phones',
      name: 'Google Pixel 8 Pro',
      image: 'https://example.com/product4.jpg',
      rating: 100,
      price: '14990 sek',
      url: '/categorys/product4.html'
    }
    ,
    {
      id: 5,
      category: 'Phones',
      name: 'Google Pixel 8 Pro',
      image: 'https://example.com/product4.jpg',
      rating: 100,
      price: '14990 sek',
      url: '/categorys/product4.html'
    }
    ,
    {
      id: 6,
      category: 'Phones',
      name: 'Google Pixel 8 Pro',
      image: 'https://example.com/product4.jpg',
      rating: 100,
      price: '14990 sek',
      url: '/categorys/product4.html'
    }
    ,
    {
      id: 8,
      category: 'Phones',
      name: 'Google Pixel 8 Pro',
      image: 'https://example.com/product4.jpg',
      rating: 100,
      price: '14990 sek',
      url: '/categorys/product4.html'
    }
    // Add more products as needed
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
    localStorage.setItem('darkMode', darkMode);

  }, [darkMode], [show]);
  return (
    <>
      <Header switchmode={switchmode} handleModal={handleModal} />
      {/* <Index data = {products}/> */}
      {/* <Itempage data={products} /> */}
      <Categoriespage/>
      <Signinmodal handleModal={handleModal} show={show} />
      <Footer />
    </>
  );
}

export default App;
