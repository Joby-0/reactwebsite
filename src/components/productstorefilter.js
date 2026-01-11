import React, { } from 'react'
import { Form } from 'react-bootstrap'
import '../css/productstorefilter.css'


export default function Productstorefilter(props) {
    // const [selectedSortWay, setSelectedSortWay] = useState('Recondmended')
    const handleChange = (e) => {
        props.storeOrderChange(e.target.value)
    };
    const CURRENCY_OPTIONS = [
        { key: 'USD', label: '$ USD' },
        { key: 'EUR', label: '€ EUR' },
        { key: 'GBP', label: '£ GBP' },
        { key: 'SEK', label: 'SEK' },
        { key: 'NOK', label: 'NOK' },
    ];
    const removeFilter = (filterKey) => {
        props.removeFilter(filterKey)
    }

    return (
        <>
            <div className="p-2 mb-2 bg-body-tertiary rounded-3">

                <div className='row'>
                    <div className='col-auto'>
                        <button className="btn btn-secondary position-relative" type="button" >
                            <i class="bi bi-sliders2"></i>
                            {props.activeStorefilter.length > 0 && (
                                <span
                                    id="filteractivedot"
                                    className="position-absolute top-0 start-100 translate-middle badge p-1 bg-primary border border-primary rounded-circle"
                                >
                                    {props.activeStorefilter.length}
                                    <span className="visually-hidden">filters active</span>
                                </span>
                            )}


                        </button>
                    </div>
                    <div className='col-auto'> <div className="dropdown">
                        <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                        </button>
                        <ul id='selectedcountrydropdownmenu' className="dropdown-menu border-0 mt-1 z-100">
                            <Form>
                                {/* one checkbox per store */}

                                {props.countryOptions.map(country => (
                                    <Form.Check
                                        key={country}
                                        type="checkbox"
                                        id={`store-${country}`}
                                        label={country}
                                        value={country}
                                        checked={props.activeStorefilter.includes(country)}
                                        onChange={(e) => props.toggleStoreFilter(e.target.value)}
                                        className="dropdown-item pe-0 py-0 d-flex align-items-center"
                                        style={{ paddingLeft: '1.9rem' }}
                                    />
                                ))}


                            </Form>
                        </ul>
                    </div></div>
                    <div className='col-auto'> <div className="dropdown">
                        <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {props.activeCurrency}
                        </button>
                        <ul
                            id="selectedcountrydropdownmenu"
                            className="dropdown-menu border-0 mt-1 z-100"
                        >
                            <li className="p-2">
                                <Form>
                                    {CURRENCY_OPTIONS.map(cur => (
                                        <Form.Check
                                            key={cur.key}
                                            type="radio"
                                            name="currency"
                                            id={`currency-${cur.key}`}
                                            label={cur.label}
                                            value={cur.key}
                                            checked={props.activeCurrency === cur.key}
                                            onChange={() => props.handleCurChange(cur.key)}
                                            className="full-radio"
                                        />
                                    ))}
                                </Form>
                            </li>
                        </ul>

                    </div></div>
                    <div className='col d-flex justify-content-end'>
                        <div className="dropdown">
                            <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {props.storeOrder}
                            </button>
                            <ul id='selectedSortWaydropdownmenu' className="dropdown-menu dropdown-menu-end  border-0 mt-1 z-100">
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="p-2">
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                id={`default-${type}-1`}
                                                label={`Recommended`}
                                                value="Recommended"
                                                onChange={handleChange}
                                                className="full-radio"
                                            />
                                            <Form.Check
                                                type={type}
                                                label="Price"
                                                value="Price"
                                                checked={props.storeOrder === 'Price'}
                                                onChange={handleChange}
                                            />

                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                id={`default-${type}-3`}
                                                label={`country`}
                                                value="country"
                                                onChange={handleChange}
                                                className="full-radio"
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </ul>
                        </div></div>


                </div>




            </div>
            <div className="mb-4 d-flex rounded-3">
                {props.activeStorefilter.map(activeFilter => (
                    <span key={activeFilter} style={{ width: 'fit-content' }} className="badge d-flex align-items-center p-1 pe-2 mx-1 text-light-emphasis bg-light-subtle border border-dark-subtle rounded-pill">

                        {activeFilter}
                        <span className="vr mx-2"></span>
                        <button className='btn btn-sm p-0 border-0 bg-transparent text-light-emphasis' style={{ lineHeight: 0 }} onClick={() => removeFilter(activeFilter)} aria-label={`Remove ${activeFilter}`}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </span>
                ))}

            </div>

        </>
    )
}
