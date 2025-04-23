import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router';
import Categoriesandsubcategories from '../components/categoriesandsubcategories';
import { Categoriesdata, PopularProducts } from '../services/data'
import Itemscarusal from '../components/itemscarusal';
import Divider from '../components/divider';

let categories = new Categoriesdata()
let pdata = new PopularProducts()

export default function Categorypage() {
    const { categorySlug, subSlug } = useParams();
    const [cdata, setcData] = useState(null)
    const [cname, setCname] = useState("")
    console.log(categories);
    
    useEffect(() => {

        if (categorySlug && !subSlug) {
            // Load category by slug/id
            const foundCategory = categories.find(
                (cat) => cat.name.toLowerCase() === categorySlug.toLowerCase()
            );
            setCname(foundCategory.name)
            setcData(foundCategory);
            
            
        } else if (categorySlug && subSlug) {
            // Load subcategory within the matched category
            const foundCategory = categories.find(
                (cat) => cat.name.toLowerCase() === categorySlug.toLowerCase()
            );
            const foundSub = foundCategory?.subCat.find(
                (sub) => sub.name.toLowerCase() === subSlug.toLowerCase()
            );
            setCname(foundSub?.name)
            setcData({ ...foundCategory, sub: foundSub });
        } else {
            // Fallback or homepage c
            setcData(null);
        }
    }, [categorySlug, subSlug])
    console.log("data",cdata);
    
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10">
                    {cdata ? (
                        <>
                             <Categoriesandsubcategories categories={cdata} />
                             <Divider height = {50}/>
                             <Divider height = {100}/>


                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                   
                </div>
                <div className="ads col sticky-top">
                </div>
            </div>
            <Itemscarusal catName={`Popular ${cname}`} data={pdata}/>

        </div>
    )
}
