import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Categoriesdatav2 } from "../services/data"

import { useServices } from "../services/ServiceContext";
import ProductService from '../services/productservice';
import { CategoriesContext } from "../services/CategoriesContext";


export default function Categoriylinks() {
    // const [categories, setCategories] = useState([]); //har [] för att map inte kan null 
    // const { productService } = useServices();
    const { categories, loading } = useContext(CategoriesContext);
    // const service = new ProductService('https://localhost:7020/api');

    
    return (
        <div className="row g-3 justify-content-center">
            {categories.map((category, index) => (

                <div className="col-auto" key={index}>
                    <Link className="icon-link btn rounded-pill py-1 icon-link-hover d-flex flex-column" style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }} to={`../c/${category.categoryString}`}>
                        <i style={{ height: '' }} className={`bi ${category.categoryIcon}`}></i>
                        <span>{category.categoryShortName}</span>
                    </Link>
                </div>
            ))}


        </div>
    )
}
