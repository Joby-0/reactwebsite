import React, { useContext } from 'react'
import { Link } from 'react-router'

import { CategoriesContext } from "../services/CategoriesContext";
import { Placeholder } from 'react-bootstrap';


export default function Categoriylinks() {
    const { categories, loading } = useContext(CategoriesContext);

    return (
        <div className="row g-3 justify-content-center">
            {loading ? (
                [...Array(14)].map((_, i) => (
                    <div className="col-auto" key={i}>
                        <Placeholder animation="glow">
                            <div className="btn rounded-pill py-1 px-3 d-flex flex-column align-items-center"
                                style={{ width: "70px", height: "70px" }}>

                                {/* Icon placeholder circle */}
                                <Placeholder
                                    className="rounded-circle mb-1"
                                    style={{ width: "28px", height: "28px" }}
                                />

                                {/* Text bar */}
                                <Placeholder
                                    className="rounded"
                                    style={{ width: "50px", height: "10px" }}
                                />
                            </div>
                        </Placeholder>
                    </div>
                ))
            ) : (
                categories.map((category, index) => (
                    <div className="col-auto" key={index}>
                        <Link
                            className="icon-link btn rounded-pill py-1 icon-link-hover d-flex flex-column align-items-center"
                            style={{ "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                            to={`../c/${category.categoryString}`}
                        >
                            <i className={`bi ${category.categoryIcon}`}></i>
                            <span>{category.categoryShortName}</span>
                        </Link>
                    </div>
                ))
            )}


        </div>
    )
}
