import React from 'react'
import { Link } from 'react-router';
import {Categoriesdatav2} from "../services/data"

export default function Categorydropdownlinks() {
    const navItems = Categoriesdatav2();
    console.log(navItems);
    
    return (
        <div
            className="d-flex flex-column flex-shrink-0"
            style={{ width: '280px', height: '100vh', position: 'sticky', top: '0px' }}
        >
            <ul className="nav nav-pills flex-column m-0 p-0">
                {navItems.map((category, index) => (
                    <li key={index}>
                        <button
                            
                            className="d-flex btn align-items-center icon-link icon-link-hover fs-5 fw-medium gap-2  text-decoration-none"
                            style={{ height: '60px', width: '100%' }}
                        >
                            <i className={`bi ${category.icon}`}></i>
                            <span>{category.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
