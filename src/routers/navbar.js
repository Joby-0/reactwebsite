import React, {  } from 'react'
import { Link } from 'react-router'

export default function Navbar(props) {
  const handleModal = (value) => {
    props.handleModal(value)
  };

  
  
  return (
    <header className="d-flex flex-wrap justify-content-center pb-3 mb-4 border-bottom ">
      <Link
        to="../"

        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="fs-4">Joby eller icon</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <button  onClick={props.toggleDropdown} className="nav-link btn dropdown-toggle  text-body">
            Categories
          </button>
        </li>
        <li className="nav-item ">
          <Link href="#" className="nav-link  text-body">
           Promos
          </Link>
        </li>
        <li className="nav-item">
          <Link to={'../info/about'} className="nav-link  text-body" text-body>
            About
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick={() => handleModal(true)}>
            Sign In
          </button>
        </li>
      </ul>
    </header>
  )
}
