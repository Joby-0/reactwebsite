import React from 'react'

export default function Categoriesfilterdisplay() {
    return (
        <div className="p-1 d-flex justify-content-between border-bottom">
            <div>
                <p className="m-0">500+ products</p>
            </div>
            <div>
                <div className="dropdown">
                    <button
                        className="btn  dropdown-toggle p-0 px-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Order by
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button className="dropdown-item">Trending</button></li>
                        <li>
                            <button className="dropdown-item">Price ascending</button>
                        </li>
                        <li>
                            <button className="dropdown-item">Price descending</button>
                        </li>
                        <li>
                            <button className="dropdown-item">Name</button>
                        </li>
                        <li>
                            <button className="dropdown-item">Rating</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
