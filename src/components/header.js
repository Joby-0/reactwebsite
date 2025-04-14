import React, { useState } from 'react'

export default function Header(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [modeText, setModeText] = useState("Dark mode")

  const changeMode = () => {
    const newMode = !darkMode;
    props.switchmode(newMode);
    setDarkMode(newMode);
    if (newMode == true) {
      setModeText("light mode")
    }
    else {
      setModeText("dark mode")
    }

  }
  const handleModal = (value) => {
    props.handleModal(value)
  };
  return (
    <div className="container">
      <nav>
        <ul className="nav">
          <li>
            <button onClick={changeMode} className="btn btn-secondary">
              {modeText}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                  >
                    <mask id="a">
                      <circle cx="256" cy="256" r="256" fill="#fff" />
                    </mask>
                    <g mask="url(#a)">
                      <path
                        fill="#eee"
                        d="M0 0h208l48 32 48-32h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304l32-48-32-48Z"
                      />
                      <path
                        fill="#d80027"
                        d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"
                      />
                    </g>
                  </svg>
                </span>
                <span className="mx-1">ENG</span>
              </button>
              <ul style={{ minWidth: "5rem" }} className="dropdown-menu">
                {/* USA */}
                <li>
                  <button
                    className="btn btn-sm d-flex align-items-center"
                    type="button"
                  >
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <mask id="a">
                          <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#eee"
                            d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"
                          />
                          <path
                            fill="#d80027"
                            d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
                          />
                          <path fill="#0052b4" d="M0 0h256v256H0Z" />
                          <path
                            fill="#eee"
                            d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="mx-1">USA</span>
                  </button>
                </li>
                {/* GER */}
                <li>
                  <button
                    className="btn btn-sm d-flex align-items-center"
                    type="button"
                  >
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <mask id="a">
                          <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#ffda44"
                            d="m0 345 256.7-25.5L512 345v167H0z"
                          />
                          <path
                            fill="#d80027"
                            d="m0 167 255-23 257 23v178H0z"
                          />
                          <path fill="#333" d="M0 0h512v167H0z" />
                        </g>
                      </svg>
                    </span>
                    <span className="mx-1">GER</span>
                  </button>
                </li>
                {/* SWE */}
                <li>
                  <button
                    className="btn btn-sm d-flex align-items-center"
                    type="button"
                  >
                    <span className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <mask id="a">
                          <circle cx="256" cy="256" r="256" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#0052b4"
                            d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"
                          />
                          <path
                            fill="#ffda44"
                            d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="mx-1">SWE</span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <header className="d-flex flex-wrap justify-content-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Joby eller icon</span>
        </a>

        <ul className="nav nav-pills text-body">
          <li className="nav-item">
            <a href="#" className="nav-link ">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link ">
              About
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={() => handleModal(true)}>
              Sign In
            </button>
          </li>
        </ul>
      </header>
    </div>
  )
}
