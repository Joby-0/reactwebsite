import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CategoryGrid } from '../components/categoryGrid';
import Itemscarusal from '../components/itemscarusal';
import Divider from '../components/divider';
import Breadcome from '../components/breadcome';
import { CategoriesContext } from "../services/CategoriesContext";
import ProductService from '../services/productservice';

export default function Categorypage() {
    const { categories } = useContext(CategoriesContext);
    const service = new ProductService('https://localhost:7020/api');

    const { categorySlug, subSlug } = useParams();
    const [cdata, setcData] = useState(null);
    const [cname, setCname] = useState("");
    const [pData, setPData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!categories || categories.length === 0) return;

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const result = await service.readTopProductsAsync(null, categorySlug, 0, 10);
                setPData(result);
                console.log("Fetched products:", result);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (categorySlug) fetchProducts();

        const foundCategory = categories.find(
            cat => cat.categorySlug?.toLowerCase() === categorySlug?.toLowerCase()
        );

        if (!foundCategory) {
            setcData(null);
            return;
        }

        if (!subSlug) {
            setCname(foundCategory.categoryName);
            setcData(foundCategory);
        } else {
            const foundSub = foundCategory.childrenCategories?.find(
                sub => sub.categorySlug?.toLowerCase() === subSlug?.toLowerCase()
            );

            setCname(foundSub?.categoryName || foundCategory.categoryName);
            setcData({ ...foundCategory, sub: foundSub });
        }

    }, [categorySlug, subSlug, categories]);

    
    return (
        <>
            <Breadcome />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                        {cdata ? (
                            <>
                                <CategoryGrid categories={cdata.sub || cdata} />
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

                {/* Render carousel after loading */}
                {loading ? (
                    <div>Loading products...</div>
                ) : pData?.pageItems?.length > 0 ? (
                    <Itemscarusal catName={`Popular ${cname}`} data={pData.pageItems} />
                ) : (
                    <div>No products found.</div>
                )}

            </div>
        </>
    );
}
