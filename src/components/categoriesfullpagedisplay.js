import React, { useEffect, useState } from 'react'

import { Link } from 'react-router'

export default function Categoriesfullpagedisplay(props) {



  if (!props.category) return null; // or show a loading state
  return (
    <div className="col">
      <div className='row'>
        <Link id='subcatlink' className="fs-1 text-decoration-none text-body pb-2" to={`/c/${props.category.slug}`}>
          {props.category.name}
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
  {props.category.subcategories.map((subSub, subIndex) => (
    <div className="col" key={subIndex}>
      <div className="border rounded shadow-sm h-100 d-flex flex-column bg-dark text-white">
        <Link
          className="btn border-bottom rounded-0 fs-5 py-3 w-100 text-white text-decoration-none fw-semibold"
          to={`/p/${subSub.slug}`}
        >
          {subSub.name}
        </Link>
        <ul className="list-group list-group-flush flex-grow-1 px-3 pt-2 pb-3">
          {subSub.subcategories.map((subsub, subsubIndex) => (
            <li id='subcatlink'
              className="list-group-item border-0 px-0 py-1 bg-transparent"
              key={subsubIndex}
            >
              <Link
                className="text-decoration-none text-light small d-block hover-opacity"
                to={`/p/${subSub.slug}`}
              >
                {subsub.name}
              </Link>
            </li>
          ))}
          {subSub.subcategories?.length > 0 && (
            <li className="list-group-item border-0 text-center bg-transparent pt-2">
              <Link id='subcatlink'
                className="text-decoration-none small fw-medium"
                style={{ cursor: "pointer" }}
              >
                Show all ({subSub.subcategories.length})
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  ))}
</div>



    </div>
  )
}
