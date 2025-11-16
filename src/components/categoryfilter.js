import React, { useEffect, useState } from 'react'
import '../css/categoriesfilter.css'
import { Form } from 'react-bootstrap';

//change to api sen
const PRICE_OPTIONS = [
    { id: 'upTo3000', label: 'upp till 3000 kr', value: '0-3000', filter: 'Price: 0-3000 kr' },
    { id: '3000to4000', label: '3000 till 4000 kr', value: '3000-4000', filter: 'Price: 3000-4000 kr' },
    { id: 'above4000', label: 'över 4000 kr', value: '4000+', filter: 'Price: 4000+ kr' },
];

export default function Categoryfilter(props) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [showAll, setShowAll] = useState(false); // New state to toggle "Show All"
    const [searchTerms, setSearchTerms] = useState({});





    // Toggle "Show All" functionality
    const toggleShowAll = () => setShowAll(!showAll);

    const handleRangeChange = (event) => {
        props.activeFilter.forEach(filter => {
            if (filter.startsWith('Price')) {
                props.removeFilter(filter)
            }
        });
        const newMax = Number(event.target.value);  // slider returns a string → number
        const newMin = 0;                           // change this if you add a 2nd handle
        // Update min and max price based on range slider
        setMinPrice(() => newMin);
        setMaxPrice(() => newMax);

        const label = `Price: ${newMin}-${newMax} kr`;


        props.toggleFilter(label);
    };

    const handleRadioChange = (pricefilter) => {
        props.activeFilter.forEach(filter => {
            if (filter.startsWith('Price')) {
                props.removeFilter(filter)
            }
        });
        const priceChoise = pricefilter.target.value;
        setSelectedPriceRange(priceChoise)
        const { filter } = PRICE_OPTIONS.find(opt => opt.value === priceChoise);
        props.toggleFilter(filter);


    };

    const handleSearchChange = (index, value) => {
        setSearchTerms((prev) => ({
            ...prev,
            [index]: value
        }));
    };
    const onFilterClick = (filterType, id) => {
        // filterType = "store" | "attribute"
        // id = the ID of the store or attribute
        props.toggleFilter(filterType, id);
    };


    useEffect(() => {

    }, [props.activeFilter]);

    return (

        <div style={{ maxWidth: '300px' }} id="stickyCol" className="col  p-3 pt-0">
            <h1>Filter</h1>
            {props.activeCat ? (
                <h6>{props.activeCat[1]}</h6>
            ) : (
                <p>Loading...</p>
            )
            }

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
                                            value={`${maxPrice}`}
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Form>
                                        {PRICE_OPTIONS.map(({ id, label, value }) => (
                                            <div className="form-check" key={id}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="priceRange"
                                                    id={id}
                                                    value={value}

                                                    checked={selectedPriceRange === value}
                                                    onChange={handleRadioChange}
                                                />
                                                <label className="form-check-label" htmlFor={id}>
                                                    {label}
                                                </label>
                                            </div>
                                        ))}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {props.filtersdata.map((filter, index) => {
                        const searchTerm = searchTerms[index] || '';
                        const filteredOptions = filter.options.filter(option =>
                            option.name.toLowerCase()
                            // .includes(searchTerm.toLowerCase())
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

                                        <ul className="list-group" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                            {/* Show only the first 5 items */}
                                            {filteredOptions.map((option, optIdx) => (
                                                <li key={optIdx} style={{ height: '30px' }}>
                                                    <div className="form-check h-100 pt-1">
                                                        <input
                                                            className="form-check-input p-2"
                                                            type="checkbox"
                                                            checked={
                                                                filter.title.toLowerCase() === 'store'
                                                                    ? props.activeFilter.storeIds.includes(option.id)
                                                                    : props.activeFilter.attributeValueIds.includes(option.id)
                                                            }
                                                            id={`${filter.title}-${optIdx}`}
                                                            onChange={() => {
                                                                if (filter.title.toLowerCase() === 'store') {
                                                                    props.toggleFilter('store', option.id);
                                                                } else {
                                                                    props.toggleFilter('attribute', option.id);
                                                                }
                                                            }}
                                                        />
                                                        <label className="form-check-label w-100" htmlFor={`${filter.title}-${optIdx}`}>
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
        </div >
    )
}
