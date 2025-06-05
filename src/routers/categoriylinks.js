import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Categoriesdatav2 } from "../services/data"

export default function Categoriylinks() {
    const [categories, setCategories] = useState([]); //har [] för att map inte kan null 
    useEffect(() => {

        (async () => {
            const data = await Categoriesdatav2();
            setCategories(data);

        })();
    }, []);
    return (
        <div className="row g-3 justify-content-center">
            {categories.map((category, index) => (

                <div className="col-auto" key={index}>
                    <Link className="icon-link btn rounded-pill py-1 icon-link-hover d-flex flex-column" style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }} to={`../c/${category.slug}`}>
                        <i style={{ height: '' }} className={`bi ${category.icon}`}></i>
                        <span>{category.shortname}</span>
                    </Link>
                </div>
            ))}


        </div>
    )
}
