import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Itemscarusal from '../components/itemscarusal';
import Divider from '../components/divider';
import Breadcome from '../components/breadcome';
import { CategoriesContext } from "../services/CategoriesContext";

import { _productService } from "../services/productservice";
import SubCategoryCard from '../components/subCategoryCard';

export default function Categorypage() {
    const { categories } = useContext(CategoriesContext);

    const { categorySlug, subSlug } = useParams();
    const [cdata, setcData] = useState(null);
    const [cname, setCname] = useState("");
    const [pData, setPData] = useState({ pageItems: [], dbItemsCount: 0 });
    const [loading, setLoading] = useState(false);

    function findCategoryBySlug(category, slug) {
        if (category.categorySlug?.toLowerCase() === slug?.toLowerCase()) {
            return category;
        }

        if (!Array.isArray(category.children)) return null;

        for (const child of category.children) {
            const found = findCategoryBySlug(child, slug);
            if (found) return found;
        }

        return null;
    }

    useEffect(() => {
        if (!categories?.length) return;

        // Find the root category
        const rootCategory = categories.find(
            cat => cat.categorySlug?.toLowerCase() === categorySlug?.toLowerCase()
        );

        if (!rootCategory) {
            setcData(null);
            return;
        }

        // If subSlug exists → search recursively
        let activeCategory = rootCategory;

        if (subSlug) {
            const found = findCategoryBySlug(rootCategory, subSlug);
            if (found) activeCategory = found;
        }

        setCname(activeCategory.categoryName);
        setcData(activeCategory);

        // Fetch top products
        setLoading(true);
        _productService.readTopProductsAsync(null, activeCategory.categorySlug, 0, 10)
            .then(result => setPData(result))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));

    }, [categorySlug, subSlug, categories]);


    const products = pData.pageItems || [];
    return (
        <>
            <Breadcome />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                        {cdata ? (
                            <>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                                    {cdata.children?.map((sub, i) => (
                                        <SubCategoryCard activeCategoryId={cdata.categoryId} key={i} sub={sub} />
                                    ))}
                                </div>

                                <Divider height={50} />
                                <Divider height={100} />
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="ads col sticky-top">
                    </div>
                </div>

                <Itemscarusal loading={loading} catName={`Popular ${cname}`} data={products} />

            </div>


        </>
    );
}
