import React from 'react'


export default function Productnavmenu(props) {
  const Onclick = (e) => {
    console.log(e);

    props.onNavigate(e);
  }
  return (
    <div className="p-2 mb-4 bg-body-tertiary rounded-3 sticky-top">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <button onClick={() => Onclick('stores')} className={`nav-link  ${props.active === 'stores' ? 'active' : ''}`} >
            All prices
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => Onclick('reviews')} className={`nav-link  ${props.active === 'reviews' ? 'active' : ''}`}>
            Reviews
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => Onclick('description')} className={`nav-link  ${props.active === 'description' ? 'active' : ''}`}>
            Produkt description
          </button>
        </li>
      </ul>
    </div>
  )
}
