import { useState, useEffect } from "react";
import { Link } from "react-router";


export default function SubCategoryCard({ sub, activeCategoryId }) {
  const maxChildren = 5;
  const children = sub.children ?? [];
  const [showAll, setShowAll] = useState(false);

  // Reset showAll when the main category changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategoryId]);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  const visibleChildren = showAll ? children : children.slice(0, maxChildren);
  const hasMore = children.length > maxChildren;

  return (
    <div className="col mb-3">
      <div className="border rounded shadow-sm d-flex flex-column bg-dark text-white">

        {/* Main subcategory button */}
        <Link
          className="btn border-bottom rounded-0 fs-5 py-3 w-100 text-white text-decoration-none fw-semibold text-start"
          to={sub.children && sub.children.length > 0
            ? `/c/${sub.categoryString}`
            : `/p/${sub.categoryString}`}
        >
          {sub.categoryName}
        </Link>

        {/* List of children */}
        {children.length > 0 && (
          <ul className="list-group list-group-flush flex-grow-1 px-3 pt-2 pb-3">
            {visibleChildren.map((child, index) => (
              <li
                key={index}
                className="list-group-item border-0 px-0 py-1 bg-transparent"
              >
                <Link
                  className="text-decoration-none text-light small d-block hover-opacity"
                  to={child.children?.length > 0 ? `/c/${child.categoryString}` : `/p/${child.categoryString}`}
                >
                  {child.categoryName}
                </Link>
              </li>
            ))}

            {hasMore && (
              <li className="list-group-item border-0 text-center bg-transparent pt-2">
                <button
                  type="button"
                  className="text-decoration-none small fw-medium btn btn-link p-0"
                  style={{ cursor: "pointer" }}
                  onClick={toggleShowAll}
                >
                  {showAll ? `Show less` : `Show all (${children.length})`}
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
