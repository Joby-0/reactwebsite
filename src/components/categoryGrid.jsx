import { CategoryItem } from "./categoryItem";



export const CategoryGrid = ({ categories }) => {
  if (!categories?.children?.length) return null;

  return (
    <div className="row g-4">
      {categories.children.map((category) => (
        <div key={category.categoryId} className="col-6 col-md-4 col-lg-3">
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};
