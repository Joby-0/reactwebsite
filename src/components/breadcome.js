import React, { useEffect, useState } from 'react';
import { _productService } from "../services/productservice";
import { Link, useLocation } from 'react-router';

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
        const pathnames = location.pathname.split("/").filter(x => x);

        const buildBreadcrumbs = async () => {
            let items = [];

            // Home
            items.push({ name: "Home", path: "/" });

            // Product page: fetch category string
            if (id) {
                try {
                    const categoryString = await _productService.readCategoryTreeAsync(id); // e.g., "Audio & TV > Headphones > Noise Cancelling Headphones"
                    const categories = categoryString.split(" > ");

                    let path = "/c"; // Assuming all categories pages start with /c
                    categories.forEach((cat, idx) => {
                        path += "/" + cat.replace(/ /g, "-"); // optional: format URL
                        items.push({ name: cat, path: path });
                    });

                    // Last breadcrumb: product name from URL
                    const lastSegment = pathnames[pathnames.length - 1];
                    items.push({ name: formatNametoUpperCase(formatName(lastSegment)), path: null });
                } catch (err) {
                    console.error("Failed to fetch categories:", err);
                }
            } else {
                // Category page: build from URL
                pathnames.forEach((segment, idx) => {
                    if (!isNaN(segment)) return; // skip numbers
                    if (segment.length === 1) return; // skip single char segments

                    const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
                    const isLast = idx === pathnames.length - 1;

                    items.push({
                        name: formatNametoUpperCase(formatName(segment)),
                        path: isLast ? null : routeTo
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
