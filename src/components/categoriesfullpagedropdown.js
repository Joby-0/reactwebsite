import React, {  } from 'react'
import '../css/fullpagedropdown.css'

export default function Categoriesfullpagedropdown(props) {
  if (!props.isOpen) return null;
 
  return (
    <div className={`full-page-dropdown`}>
        <div className="dropdown-content">
          <h1>Explore</h1>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/customers">Customers</a></li>
          </ul>
        </div>
      </div>
  )
}
