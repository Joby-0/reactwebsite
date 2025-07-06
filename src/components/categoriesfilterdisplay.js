import React from 'react'

export default function Categoriesfilterdisplay(props) {
    const removeFilter = (filterKey) => {
        props.removeFilter(filterKey)
    }
    return (
        <>
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
            <div className='row'>
                <div className="mb-4 d-flex rounded-3">
                    {props.activeFilter.map(activeFilter => (
                        <span key={activeFilter} style={{ width: 'fit-content' }} class="badge d-flex align-items-center p-1 pe-2 mx-1 my-3 text-light-emphasis bg-light-subtle border border-dark-subtle rounded-pill">

                            {activeFilter}
                            <span className="vr mx-2"></span>
                            <button className='btn btn-sm p-0 border-0 bg-transparent text-light-emphasis' style={{ lineHeight: 0 }} onClick={() => removeFilter(activeFilter)} aria-label={`Remove ${activeFilter}`}>
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </span>
                    ))}

                </div>
            </div>
        </>
    )
}
