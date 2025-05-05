import React from 'react'
import { Link } from 'react-router'
import '../css/categoriesandsub.css'

export default function Categoriesandsubcategories(props) {

  


  return (

    <div className="row g-4">
      {props.categories.subcategories.map((category, index) => {
        const hasSubSub = category.subcategories && category.subcategories.length > 0;

        return (
          <div className="col-3" key={index}>
            {hasSubSub ? (
              // With dropdown
              <div className="dropdown-center hover-dropdown">
                <Link to={`../c/${props.categories.name}/${category.name}`}
                  className="btn border p-2 w-100 dropdown-toggle "
                  // id={`dropdown-toggle-${index}`}
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  {category.name}
                </Link>
                <ul
                  className="dropdown-menu w-100"
                  aria-labelledby={`dropdown-toggle-${index}`}
                >
                  {category.subcategories.map((subSub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        className="dropdown-item"
                        to={`../p/${subSub.name}`}
                      >
                        {subSub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // No dropdown, just a button that links directly
              <Link
                className="btn border p-2 w-100 d-block text-center"
                to={`/p/${category.name}`}
              >
                {category.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  )
}
