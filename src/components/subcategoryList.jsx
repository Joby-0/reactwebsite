import { Link } from 'react-router'

export const SubcategoryList = ({ subcategories }) => {
  if (!subcategories?.length) return null;

  return (
    <ul className="dropdown-menu w-100">
      {subcategories.map((sub, index) => (
        <li key={index}>
          <Link className="dropdown-item" to={`../p/${sub.name}`}>
            {sub.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
