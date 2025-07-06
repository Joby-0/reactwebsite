import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../routers/navbar';
import Signinmodal from './signinmodal';
import Categoriesfullpagedropdown from './categoriesfullpagedropdown';
import { useLocation } from 'react-router';





export default function Header() {
  //sign in modal
  const [show, setShow] = useState(false);
  const handleModal = (value) => {
    setShow(value);
    setIsDropdownOpen(false)
  };


  //full page modal
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);


  // change mode dark and ljust
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    const stored = localStorage.getItem('darkMode');
    return stored === 'true'; // convert string to boolean
  });
  const changeMode = () => {
    const newMode = !darkMode;
    switchmode(newMode);
    setDarkMode(newMode);
  }
  const switchmode = (e) => {
    setDarkMode(e)
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
    localStorage.setItem('darkMode', darkMode);

  }, [darkMode]);

  //change språk
  const languages = [
    { code: 'en', label: 'ENG', flag: '🇬🇧',currency: 'Gbp' },
    { code: 'us', label: 'USA', flag: 'us',currency: 'Usd' },
    { code: 'sv', label: 'SWE', flag: '🇸🇪',currency: 'Sek' },
    {code: 'es', label: 'ESP', flag: '🇪🇸',currency: 'Eur'},
    { code: 'fr', label: 'FRE', flag: '🇫🇷',currency: 'Eur' },
    { code: 'de', label: 'GER', flag: '🇩🇪',currency: 'Eur' },
    { code: 'pt', label: 'POR', flag: '🇵🇹', currency: 'Eur' },
    
  ];
  const [activeLang, setActiveLang] = useState(languages[0])
  const handleChangeLang = (lang) => {
    setActiveLang(lang);
    //change the lang
  };


  // copy chatgpt auto close router on page change
  const location = useLocation();
  const isFirstRender = useRef(true); // tracks first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // skip first run
      return;
    }

    // On actual route change (not initial mount), close the dropdown
    if (isDropdownOpen) {
      closeDropdown();
    }
  }, [location]); // only runs when route changes


  return (
    <>
      <div className="container">
        <nav>
          <ul className="nav">
            <li>
              <button onClick={changeMode} className="btn btn-sm btn-secondary">
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </li>
            <li>
              <div className="btn-group">
                <button
                  className="btn btn-sm dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    {activeLang.flag}

                  </span>
                  <span className="mx-1">{activeLang.label}</span>
                </button>
                <ul style={{ minWidth: "5rem" }} className="dropdown-menu">
                  {languages.map(lang => (
                    <li key={lang.code}>
                    <button
                      className="btn btn-sm d-flex align-items-center"
                      type="button"
                      key={lang.code}
                      onClick={() =>{
                        handleChangeLang(lang)
                      }}
                    >
                      <span className="d-flex align-items-center">
                        {lang.flag}
                      </span>
                      <span className="mx-1">{lang.label}</span>
                      
                    </button>
                  </li>
                  ))}
                  
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <Navbar handleModal={handleModal} toggleDropdown={toggleDropdown} />
        <Categoriesfullpagedropdown isOpen={isDropdownOpen} closeDropdown={closeDropdown} />
        <Signinmodal handleModal={handleModal} show={show} />

      </div>
    </>
  )
}
