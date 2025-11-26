import React from 'react'

import { Link } from 'react-router'

export default function Categoriesfullpagedisplay(props) {

  if (!props.category) return null; // or show a loading state
  return (
  <div className="col">
    <div className='row'>
      <Link
        id='subcatlink'
        className="fs-1 text-decoration-none text-body pb-2"
        to={`/c/${props.category.categoryString}`}
      >
        {props.category.name}
      </Link>
    </div>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {props.category.children.map((subSub, subIndex) => {
        const maxChildren = 5;
        const visibleChildren = subSub.children?.slice(0, maxChildren) || [];
        const hasMore = subSub.children?.length > maxChildren;

        return (
          <div className="col" key={subIndex}>
            <div className="border rounded shadow-sm d-flex flex-column bg-dark text-white">
              {/* Main subcategory button */}
              <Link
                className="btn border-bottom rounded-0 fs-5 py-3 w-100 text-white text-decoration-none fw-semibold"
                to={`/p/${subSub.categoryString}`}
              >
                {subSub.categoryName}
              </Link>

              {/* List of children (max 5) */}
              <ul className="list-group list-group-flush flex-grow-1 px-3 pt-2 pb-3">
                {visibleChildren.map((subsub, subsubIndex) => (
                  <li
                    id='subcatlink'
                    className="list-group-item border-0 px-0 py-1 bg-transparent"
                    key={subsubIndex}
                  >
                    <Link
                      className="text-decoration-none text-light small d-block hover-opacity"
                      to={`/p/${subsub.categoryString}`}
                    >
                      {subsub.categoryName}
                    </Link>
                  </li>
                ))}

                {/* Show all link if there are more */}
                {hasMore && (
                  <li className="list-group-item border-0 text-center bg-transparent pt-2">
                    <Link
                      id='subcatlink'
                      className="text-decoration-none small fw-medium"
                      style={{ cursor: "pointer" }}
                    >
                      Show all ({subSub.children.length})
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

}
