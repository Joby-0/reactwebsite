import React from 'react'

import { Link } from 'react-router'
import SubCategoryCard from './subCategoryCard';

export default function Categoriesfullpagedisplay({ category }) {
  if (!category) return null;

  return (
    <div className="col">

      <div className="row mb-4">
        <Link
          id="subcatlink"
          className="fs-1 text-decoration-none text-body pb-2"
          to={`/c/${category.categoryString}`}
        >
          {category.categoryName} 
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {category.children?.map((sub, i) => (
          <SubCategoryCard activeCategoryId={category.categoryId} key={i} sub={sub} />
        ))}
      </div>

    </div>
  );
}


