import React, { useState } from 'react'

import {Categoriesdatav2} from "../services/data"

export default function Categorydropdownlinks(props) {
    const [active, setActive] = useState(null)
    const navItems = Categoriesdatav2();
    const onClickCategory = (category) =>{
        props.onClick(category)
        setActive(category.slug)
    }
    
    return (
        <div
            className="d-flex flex-column flex-shrink-0 border-end"
            style={{ width: '330px', height: '100vh', position: 'sticky', top: '0px' }}
        >
            <ul className="nav nav-pills flex-column m-0 p-0">
                {navItems.map((category, index) => (
                    <li className={active === category.slug ? "active" : ""} key={index}>
                        <button
                            onClick={() => onClickCategory(category)}
                            className="d-flex btn align-items-center icon-link icon-link-hover text-body fs-4 fw-medium gap-2  text-decoration-none "
                            
                            style={{ height: '70px', width: '100%' }}
                        >
                            <i style={{height: ''}} className={`bi ${category.icon}`}></i>
                            <span>{category.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
