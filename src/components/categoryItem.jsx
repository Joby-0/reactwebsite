import { Link } from "react-router";

export const CategoryItem = ({ category }) => {
    const hasChildren = category.children?.length > 0;

    return (
        <div className="dropdown-center always-open">
            {/* Main category button */}
            <Link
                to={`/p/${category.categoryString}`}
                className="btn border p-2 w-100 dropdown-toggle"
                aria-expanded="true"
            >
                {category.categoryName}
            </Link>

            {/* Always-visible children box */}
            {hasChildren && (
                <ul
                    className="dropdown-menu show w-100 mt-1 border rounded shadow-sm"
                    style={{
                        position: "static",
                        float: "none",
                        transform: "none",
                        display: "block",
                    }}
                >
                    {category.children.map((child) =>
                        child.children?.length ? (
                            <li key={child.categoryId} className="dropdown-item p-0">
                                <CategoryItem category={child} />
                            </li>
                        ) : (
                            <li key={child.categoryId}>
                                <Link
                                    to={`/p/${child.categoryString}`}
                                    className="dropdown-item text-secondary small py-1 px-2"
                                >
                                    {child.categoryName}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
};


