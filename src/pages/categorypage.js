import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import  { CategoryGrid } from '../components/categoryGrid';
import { Categoriesdata, Categoriesdatav2, PopularProducts } from '../services/data'
import Itemscarusal from '../components/itemscarusal';
import Divider from '../components/divider';
import Breadcome from '../components/breadcome';

import { CategoriesContext } from "../services/CategoriesContext";


// let categories = new Categoriesdatav2()
let pdata = new PopularProducts()

export default function Categorypage() {
    const { categories, loading } = useContext(CategoriesContext);

    const { categorySlug, subSlug } = useParams();
    const [cdata, setcData] = useState(null)
    const [cname, setCname] = useState("")

    useEffect(() => {
        if (!categorySlug) {
            setcData(null);
            return;
        }

        const foundCategory = categories.find(
            (cat) => cat.categorySlug?.toLowerCase() === categorySlug.toLowerCase()
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
                (sub) => sub.categorySlug?.toLowerCase() === subSlug.toLowerCase()
            );

            setCname(foundSub?.categoryName || foundCategory.categoryName);
            setcData({ ...foundCategory, sub: foundSub });
        }
    }, [categorySlug, subSlug, categories]);

    console.log("data", cdata);


    return (
        <>
            <Breadcome />
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-10">
                        {cdata ? (
                            <>
                                <CategoryGrid categories={cdata} />
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
                <Itemscarusal catName={`Popular ${cname}`} data={pdata} />

            </div>
        </>
    )
}
