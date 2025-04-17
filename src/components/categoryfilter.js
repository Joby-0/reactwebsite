import React, { useState } from 'react'
import '../css/categoriesfilter.css'

export default function Categoryfilter(props) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('3000-4000');
    const [showAll, setShowAll] = useState(false); // New state to toggle "Show All"
    const [searchTerms, setSearchTerms] = useState({});

    // Toggle "Show All" functionality
    const toggleShowAll = () => setShowAll(!showAll);

    const handleRangeChange = (event) => {
        const value = event.target.value;
        // Update min and max price based on range slider
        setMinPrice(0);
        setMaxPrice(value);
    };

    const handleRadioChange = (event) => {
        setSelectedPriceRange(event.target.value);
    };

    const handleSearchChange = (index, value) => {
        setSearchTerms((prev) => ({
            ...prev,
            [index]: value
        }));
    };
    const onFilterClick = (filterName) => {
        props.onClick(filterName);
        
    }

    return (
        
            <div id="stickyCol" className="col-3  p-3 pt-0">
                <h1>Filter</h1>
                <h6>catogory namn</h6>
                <div className="row mt-4 scrollarea">
                    <div className="accordion" id="filterAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-price"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-price"
                                >
                                    Price
                                </button>
                            </h2>
                            <div id="panelsStayOpen-price" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <div>
                                        <input
                                            type="range"
                                            className="form-range"
                                            id="customRange1"
                                            min="0"
                                            max="5000"
                                            value={maxPrice}
                                            onChange={handleRangeChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div style={{ width: '40%' }}>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="min"
                                                aria-label="min"
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(e.target.value)}
                                            />
                                        </div>

                                        <div style={{ width: '40%' }}>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="max"
                                                aria-label="max"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-check mx-0">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="upTo2000"
                                                checked={selectedPriceRange === 'upTo2000'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                upp till 2000
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                value="3000-4000"
                                                checked={selectedPriceRange === '3000-4000'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                3000 till 4000
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault3"
                                                value="above4000"
                                                checked={selectedPriceRange === 'above4000'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                över 4000
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {props.filters.map((filter, index) => {
                            const searchTerm = searchTerms[index] || '';
                            const filteredOptions = filter.options.filter(option =>
                                option.name.toLowerCase().includes(searchTerm.toLowerCase())
                            );

                            return (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading-${index}`}>
                                        <button
                                            className="accordion-button collapse show"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse-${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse-${index}`}
                                        >
                                            {filter.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse-${index}`}
                                        className="accordion-collapse collapse show"
                                        aria-labelledby={`heading-${index}`}
                                    >
                                        <div className="accordion-body">
                                            <input
                                                className="form-control mb-2"
                                                type="search"
                                                placeholder={`Search ${filter.title.toLowerCase()}...`}
                                                value={searchTerm}
                                                onChange={(e) => handleSearchChange(index, e.target.value)}
                                            />

                                            <ul  className="list-group" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                                {/* Show only the first 5 items */}
                                                {filteredOptions.map((option, optIdx) => (
                                                    <li key={optIdx} style={{ height: '30px' }}>
                                                        <div className="form-check h-100 pt-1">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                id={`${filter.title}-${optIdx}`}
                                                                onClick={() => onFilterClick(option.name)}
                                                            />
                                                            <label
                                                                className="form-check-label w-100"
                                                                htmlFor={`${filter.title}-${optIdx}`}
                                                            >
                                                                <span className="d-flex w-100">
                                                                    <p className="text-start mb-0">{option.name}</p>
                                                                    <p className="text-muted ms-auto mb-0">{option.count}</p>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                ))}
                                                {/* Display the rest of the items when "Show All" is clicked */}
                                                {showAll && filteredOptions.slice(5).map((option, optIdx) => (
                                                    <li key={optIdx} style={{ height: '30px' }}>
                                                        <div className="form-check h-100 pt-1">
                                                            <input
                                                                className="form-check-input p-2"
                                                                type="checkbox"
                                                                id={`${filter.title}-${optIdx}`}
                                                            />
                                                            <label
                                                                className="form-check-label w-100"
                                                                htmlFor={`${filter.title}-${optIdx}`}
                                                            >
                                                                <span className="d-flex w-100">
                                                                    <p className="text-start mb-0">{option.name}</p>
                                                                    <p className="text-muted ms-auto mb-0">{option.count}</p>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                ))}
                                                {/* Show the "Show All" button only if there are more than 5 items */}
                                                {filteredOptions.length > 5 && !showAll && (
                                                    <button
                                                        className="btn btn-link mt-2"
                                                        onClick={toggleShowAll}
                                                    >
                                                        Show All
                                                    </button>
                                                )}

                                                {/* Show the "Show Less" button when all items are displayed */}
                                                {showAll && filteredOptions.length > 5 && (
                                                    <button
                                                        className="btn btn-link mt-2"
                                                        onClick={toggleShowAll}
                                                    >
                                                        Show Less
                                                    </button>
                                                )}

                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
    )
}
