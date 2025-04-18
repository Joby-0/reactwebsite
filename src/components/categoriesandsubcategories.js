import React from 'react'
import { Link } from 'react-router'

export default function Categoriesandsubcategories(props) {
  console.log(props.categories);
  const hasSubSub = props.categories.subSubCat && props.categories.subSubCat.length > 0;
  return (
    
    <div className="row g-4">
      {props.categories.subCat.map((category, index) => (
        <div className="col-3 dropdown-center" key={index}>
          <div
            className="btn border p-2 w-100 dropdown-toggle"
            id={`dropdown-toggle-${index}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {category.name}
          </div>

          <ul className="dropdown-menu w-100" aria-labelledby={`dropdown-toggle-${index}`}>
            {category.subSubCat && category.subSubCat.length > 0 ? (
              // If there are sub-subcategories
              category.subSubCat.map((subSub, subIndex) => (
                <li key={subIndex}>
                  <Link
                    className="dropdown-item"
                    to={`/p/${subSub.name}`}
                  >
                    {subSub.name}
                  </Link>
                </li>
              ))
            ) : (
              // No sub-subcategories, just link to subcategory
              <li>
                <Link
                  className="dropdown-item"
                  to={`/p/${category.name}`}
                >
                  {category.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
