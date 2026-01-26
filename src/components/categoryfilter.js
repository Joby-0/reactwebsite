import React, { useEffect, useState } from 'react'
import '../css/categoriesfilter.css'




export default function Categoryfilter(props) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [showAll, setShowAll] = useState(false); // New state to toggle "Show All"
    const [searchTerms, setSearchTerms] = useState({});





    // Toggle "Show All" functionality
    const toggleShowAll = () => setShowAll(!showAll);

    const handleRangeChange = (event) => {
        console.log(event);
    };

    const handleRadioChange = (pricefilter) => {
        console.log(pricefilter);

    };

    const handleSearchChange = (index, value) => {
        setSearchTerms((prev) => ({
            ...prev,
            [index]: value
        }));
    };

    const priceFilter = props.filtersdata.find(f => f.filterTitle === "Price");
    const otherFilters = props.filtersdata.filter(f => f.filterTitle !== "Price");


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

                    {priceFilter && (
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#filter-price"
                                >
                                    Price
                                </button>
                            </h2>

                            <div id="filter-price" className="accordion-collapse collapse show">
                                <div className="accordion-body">

                                    {/* Range slider */}
                                    <input
                                        type="range"
                                        className="form-range"
                                        min={(priceFilter.minPrice)}
                                        max={(priceFilter.maxPrice)}
                                        onChange={handleRangeChange}
                                    />

                                    {/* Min / Max inputs */}
                                    <div className="d-flex justify-content-between gap-2">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Min"
                                            value={minPrice}
                                            onChange={e => setMinPrice(e.target.value)}
                                        />

                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Max"
                                            value={maxPrice}
                                            onChange={e => setMaxPrice(e.target.value)}
                                        />
                                    </div>

                                    <small className="text-muted">
                                        {priceFilter.minPrice.toFixed(0)} – {priceFilter.maxPrice.toFixed(0)} kr
                                    </small>

                                </div>
                            </div>
                        </div>
                    )}


                    {otherFilters.map((filter, index) => {
                        const searchTerm = searchTerms[index] || "";
                        const filteredOptions = filter.filterOptions.filter(o =>
                            o.name.toLowerCase().includes(searchTerm.toLowerCase())
                        );

                        return (
                            <div className="accordion-item" key={filter.filterTitle}>
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button "
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#filter-${index}`}
                                    >
                                        {filter.filterTitle}
                                    </button>
                                </h2>

                                <div id={`filter-${index}`} className="accordion-collapse collapse show">
                                    <div className="accordion-body">

                                        {/* Search */}
                                        <input
                                            className="form-control mb-2"
                                            placeholder={`Search ${filter.filterTitle}`}
                                            value={searchTerm}
                                            onChange={e => handleSearchChange(index, e.target.value)}
                                        />

                                        {/* Options */}
                                        <ul className="list-group list-group-flush">
                                            {filteredOptions
                                                .slice(0, showAll ? filteredOptions.length : 5)
                                                .map(option => {
                                                    const isStore = filter.filterTitle.toLowerCase() === "stores";
                                                    const isChecked = isStore
                                                        ? props.activeFilter.storeIds.includes(option.value)
                                                        : props.activeFilter.attributeValueIds.includes(option.value);

                                                    return (
                                                        <li key={option.value} className="list-group-item px-0">
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    checked={isChecked}
                                                                    onChange={() => {
                                                                        props.toggleFilter(
                                                                            isStore ? "store" : "attribute",
                                                                            option.value,
                                                                            option.name
                                                                        );
                                                                    }}
                                                                />

                                                                <label className="form-check-label d-flex w-100">
                                                                    <span>{option.name}</span>
                                                                    <span className="text-muted ms-auto">{option.count}</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                        </ul>



                                        {/* Show more / less */}
                                        {filteredOptions.length > 5 && (
                                            <button className="btn btn-link p-0 mt-2" onClick={toggleShowAll}>
                                                {showAll ? "Show Less" : "Show All"}
                                            </button>
                                        )}

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
