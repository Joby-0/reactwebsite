import React from 'react'

export default function Productnavmenu() {
  return (
    <div className="p-2 mb-4 bg-body-tertiary rounded-3 sticky-top">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            All prices
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Reviews
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Produkt description
          </a>
        </li>
      </ul>
    </div>
  )
}
