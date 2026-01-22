import React, { useEffect, useState } from 'react';
import { _productService } from "../services/productservice";
import { Link, useLocation } from 'react-router-dom';

export default function Breadcome({ id }) {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const formatName = (name) =>
        name.replace(/%20/g, " ").replace(/-/g, " ");
    const formatNametoUpperCase = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {
        const buildBreadcrumbs = async () => {
            let items = [];

            // Home
            items.push({ name: "Home", path: "/" });

            // PRODUCT PAGE
            if (id) {
                try {
                    const categoryString = await _productService.readCategoryTreeAsync(id);
                    // "Audio & TV > Headphones > Over Ear Headphones"

                    const categories = categoryString.split(" > ");

                    const slugs = categories.map(cat =>
                        cat.toLowerCase().replace(/ /g, "-")
                    );

                    // build category crumbs
                    categories.forEach((cat, idx) => {
                        const isLastCategory = idx === categories.length - 1;

                        const base = isLastCategory ? "/p" : "/c";
                        const path = base + "/" + slugs.slice(0, idx + 1).join("/");

                        items.push({
                            name: cat,
                            path
                        });
                    });

                    // Product name (no link)
                    const productSlug = location.pathname.split("/").pop();
                    items.push({
                        name: formatNametoUpperCase(formatName(productSlug)),
                        path: null
                    });

                } catch (err) {
                    console.error("Failed to fetch categories:", err);
                }
            }

            // CATEGORY PAGE
            else {
                const segments = location.pathname
                    .split("/")
                    .filter(Boolean);

                // Remove "c" prefix
                const categorySegments = segments[0] === "c" || segments[0] === "p"
                    ? segments.slice(1)
                    : segments;

                categorySegments.forEach((segment, idx) => {
                    const path = "/c/" + categorySegments.slice(0, idx + 1).join("/");

                    items.push({
                        name: formatNametoUpperCase(formatName(segment)),
                        path: idx === categorySegments.length - 1 ? null : path
                    });
                });
            }


            setBreadcrumbs(items);
        };

        buildBreadcrumbs();
    }, [location.pathname, id]);


    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumbs.map((item, idx) => (
                        <li
                            key={idx}
                            className={`breadcrumb-item ${item.path ? "" : "active"}`}
                            aria-current={item.path ? undefined : "page"}
                        >
                            {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}
