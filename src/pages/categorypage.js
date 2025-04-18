import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Categoriesandsubcategories from '../components/categoriesandsubcategories';
import { Categoriesdata } from '../services/data'

let categories = new Categoriesdata()

export default function Categorypage() {
    const { categorySlug, subSlug } = useParams();
    const [data, setData] = useState(null)
    console.log(categories);
    
    useEffect(() => {
        console.log(categorySlug);

        if (categorySlug && !subSlug) {
            // Load category by slug/id
            const foundCategory = categories.find(
                (cat) => cat.name.toLowerCase() === categorySlug.toLowerCase()
            );
            console.log(foundCategory);
            
            setData(foundCategory);
            
            
        } else if (categorySlug && subSlug) {
            // Load subcategory within the matched category
            const foundCategory = categories.find(
                (cat) => cat.name.toLowerCase() === categorySlug.toLowerCase()
            );
            const foundSub = foundCategory?.subCat.find(
                (sub) => sub.name.toLowerCase() === subSlug.toLowerCase()
            );
            setData({ ...foundCategory, sub: foundSub });
        } else {
            // Fallback or homepage data
            setData(null);
        }
    }, [categorySlug, subSlug])
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10">
                    {data ? (
                        <>
                             <Categoriesandsubcategories categories={data} />
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                   
                </div>
                <div className="ads col sticky-top">
                    ads
                </div>
            </div>
        </div>
    )
}
