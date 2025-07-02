import React, { } from 'react'
import { Form } from 'react-bootstrap'
import '../css/productstorefilter.css'


export default function Productstorefilter(props) {
    // const [selectedSortWay, setSelectedSortWay] = useState('Recondmended')
    const handleChange = (e) => {
        props.storeOrderChange(e.target.value)
    };
    const handleChangeStoreFilter = (e) => {
        props.toggleStoreFilter(e.target.value)
    }
    const removeFilter = (filterKey) => {
        props.removeFilter(filterKey)
    }
    const handleCurChange = (cur) => props.handleCurChange(cur);
    const STORE_OPTIONS = ['USA', 'Germany', 'Sweden', 'UK']; //api later i store
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
                                {STORE_OPTIONS.map(store => (
                                    <Form.Check
                                        key={store}
                                        type="checkbox"
                                        id={`store-${store} countryfiltercheckbox`}
                                        label={store}
                                        value={store}
                                        checked={props.activeStorefilter.includes(store)}   // keep UI in sync
                                        onChange={e => handleChangeStoreFilter(e, store)}
                                        className="dropdown-item pe-0 py-0 d-flex align-items-center"
                                        style={{paddingLeft:'1.9rem'}}
                                    />
                                ))}
                            </Form>
                        </ul>
                    </div></div>
                    <div className='col-auto'> <div className="dropdown">
                        <button className="btn btn-secondary  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {props.activeCurrency}
                        </button>
                        <ul id='selectedcountrydropdownmenu' className="dropdown-menu border-0 mt-1 z-100">
                            {/* <li style={{ cursor: 'pointer' }} className='dropdown-item p-1'><span class="mx-1">$ USD</span></li>
                            <li style={{ cursor: 'pointer' }} className='dropdown-item p-1'><span class="mx-1">€ EUR</span></li>
                            <li style={{ cursor: 'pointer' }} className='dropdown-item p-1'><span class="mx-1">SEK</span></li>
                            <li style={{ cursor: 'pointer' }} className='dropdown-item p-1 '><span class="mx-1">£ GBP</span></li> */}
                            <div className="p-2">
                                <Form.Check
                                    type='radio'
                                    name="currency"
                                    id={`currency-usd`}
                                    label={`$ USD`}
                                    value="usd"
                                    className="full-radio"
                                    onChange={handleCurChange}

                                />
                                <Form.Check
                                    type='radio'
                                    name="currency"
                                    id={`currency-eur`}
                                    label={`€ EUR`}
                                    value="eur"
                                    className="full-radio"
                                    onChange={handleCurChange}
                                />
                                <Form.Check
                                    type='radio'
                                    name="currency"
                                    id={`currency-gbp`}
                                    label={`£ GBP`}
                                    value="gbp"
                                    className="full-radio"
                                    onChange={handleCurChange}
                                />
                                <Form.Check
                                    type='radio'
                                    name="currency"
                                    id={`currency-sek`}
                                    label={`SEK`}
                                    value="sek"
                                    className="full-radio"
                                    onChange={handleCurChange}
                                />
                                <Form.Check
                                    type='radio'
                                    name="currency"
                                    id={`currency-nok`}
                                    label={`NOK`}
                                    value="nok"
                                    className="full-radio"
                                    onChange={handleCurChange}
                                />
                            </div>

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
                                                label={`Recondmended`}
                                                value="Recommended"
                                                onChange={handleChange}
                                                className="full-radio"
                                            />
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                id={`default-${type}-2`}
                                                label={`Price`}
                                                value="Price"
                                                onChange={handleChange}
                                                className="full-radio"
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
                    <span key={activeFilter} style={{ width: 'fit-content' }} class="badge d-flex align-items-center p-1 pe-2 mx-1 text-light-emphasis bg-light-subtle border border-dark-subtle rounded-pill">

                        {activeFilter}
                        <span className="vr mx-2"></span>
                        <button className='btn btn-sm p-0 border-0 bg-transparent text-light-emphasis' style={{ lineHeight: 0 }} onClick={() => removeFilter(activeFilter)} aria-label={`Remove ${activeFilter}`}>
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </span>
                ))}

            </div>

        </>
    )
}
