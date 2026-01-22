import React, { } from 'react'
import { Link } from 'react-router-dom'

import { useUI } from "../Context/UiContext";

export default function Navbar(props) {

  const { openSignIn } = useUI();


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
          <button onClick={props.toggleDropdown} className="nav-link btn dropdown-toggle  text-body">
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

        {!props.isLoggedIn ? (
          <li className="nav-item dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.user.userName}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <Link to={'/'} className="dropdown-item">
                    Account
                </Link>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => props.logout()}>
                  Logout
                </button>
              </li>
            </ul>
          </li>
        ) : (
          <li className="nav-item">
            <button className="btn btn-primary" onClick={openSignIn}>
              Sign In
            </button>
          </li>
        )}
      </ul>
    </header>
  )
}
