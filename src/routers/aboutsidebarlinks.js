import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Aboutsidebarlinks() {
    return (
        <>
            <Link to="../" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
                    <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-4">Joby</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="../info/about" className="nav-link" aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#home" />
                        </svg>
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="../info/faq" className="nav-link">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#speedometer2" />
                        </svg>
                        FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="../info/how-it-works" className="nav-link">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#table" />
                        </svg>
                        How it works
                    </NavLink>
                </li>
                <li>
                    <NavLink to="../info/contact" className="nav-link">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#grid" />
                        </svg>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="../info/customers" className="nav-link">
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                            <use xlinkHref="#people-circle" />
                        </svg>
                        Customers
                    </NavLink>
                </li>
            </ul>
            <hr />
        </>
    )
}
